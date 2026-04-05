import json
import re
import os
import time
import requests
import urllib.request
from bs4 import BeautifulSoup

def slugify_simple(s):
    s = s.lower()
    s = re.sub(r'[^a-z0-9]+', '-', s)
    return s.strip('-')

with open('app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

match = re.search(r'const PRODUCTOS_BD = (\[.*?\]);', app_js, re.DOTALL)
productos_str = match.group(1)
productos = json.loads(productos_str)

if not os.path.exists('img'):
    os.makedirs('img')

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.5'
}

print("Starting Bing scraper for 50 items...")

for i, p in enumerate(productos):
    slug = slugify_simple(p['nombre'])
    filename = f"img/prod_{slug}.jpg"
    
    query = f"{p['nombre']} {p['categoria']} fondo blanco".replace(' ', '+')
    url = f"https://www.bing.com/images/search?q={query}&form=HDRSC3"
    
    print(f"[{i+1}/50] Searching Bing: {p['nombre']}")
    
    try:
        res = requests.get(url, headers=headers, timeout=5)
        soup = BeautifulSoup(res.text, 'html.parser')
        
        # Bing image results often in a tag with class 'mimg' or 'sg_t' or inside a tag with m
        images = soup.find_all('a', class_='iusc')
        
        success = False
        for img_tag in images[:3]:
            try:
                m_data = json.loads(img_tag.get('m', '{}'))
                img_url = m_data.get('murl')
                if not img_url: continue
                
                print(f"   Downloading: {img_url}")
                req = urllib.request.Request(img_url, headers=headers)
                with urllib.request.urlopen(req, timeout=5) as response, open(filename, 'wb') as out_file:
                    out_file.write(response.read())
                
                p['imagen'] = filename
                success = True
                break
            except Exception as e:
                print(f"   Failed img {img_url}: {e}")
                
        if not success:
            p['imagen'] = 'img/generico.png'
    except Exception as e:
        print(f"Error searching {p['nombre']}: {e}")
        p['imagen'] = 'img/generico.png'
        
    time.sleep(1)

new_productos_str = json.dumps(productos, indent=2, ensure_ascii=False)
app_js = app_js.replace(productos_str, new_productos_str)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(app_js)

print("Done updating app.js")
