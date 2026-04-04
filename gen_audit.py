import json, re

try:
    with open('app.js', 'r', encoding='utf-8') as f:
        app = f.read()

    match = re.search(r'const PRODUCTOS_BD = (\[.*?\]);', app, re.DOTALL)
    if not match:
        print("Could not find PRODUCTOS_BD in app.js")
        exit(1)

    prods = json.loads(match.group(1))
    
    html = '<html><head><meta charset="utf-8"></head><body style="font-family:sans-serif; display:flex; flex-wrap:wrap; gap:20px;">'
    for p in prods:
        img_src = p.get('imagen', '')
        # Handle pathing for browser subagent, file:///C:/Users/...
        img_src = img_src.replace('img/', 'img/') # relative is fine if served or opened locally
        html += f'''
        <div class="product-card" id="{p['nombre']}" style="border:1px solid #ccc; padding:10px; width:200px; text-align:center;">
            <img src="{img_src}" style="width:150px; height:150px; object-fit:contain; border:1px solid #eee; background:#fff;"/>
            <h3 style="font-size:14px; margin:5px 0;">{p['nombre']}</h3>
            <p style="font-size:12px; color:gray; margin:0;">{p['categoria']}</p>
        </div>
        '''
    html += '''
    <script>
    // helper to let subagent collect data
    </script>
    </body></html>'''
    
    with open('audit.html', 'w', encoding='utf-8') as f:
        f.write(html)
        
    print("Created audit.html")
except Exception as e:
    print(f"Error: {e}")
