#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os

PORT = 3030
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        pass  # suppress request noise

print(f"\n  Ummah Unboxed — running at http://localhost:{PORT}\n")
print(f"  Pages:")
print(f"    http://localhost:{PORT}/index.html        → Homepage")
print(f"    http://localhost:{PORT}/april-box.html    → April Box ($65)")
print(f"    http://localhost:{PORT}/marketplace.html  → Marketplace")
print(f"    http://localhost:{PORT}/profile.html      → Profile Creator")
print(f"\n  Ctrl+C to stop.\n")

webbrowser.open(f"http://localhost:{PORT}/index.html")

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
