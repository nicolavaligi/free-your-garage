#!/usr/bin/env python3
"""
Free Your Garage (FYG) - Local Prototype Server
Nicola Valigi (Houdinick) · Ottobre 2026
"""

import http.server
import socketserver
import os
import sys

PORT = 8505
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Keep logs clean and readable
        sys.stderr.write(f"[{self.log_date_time_string()}] {args[0]} -> {args[1]}\n")

def main():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 65)
        print("⚡ FREE YOUR GARAGE (FYG) — PROTOTIPO UFFICIALE")
        print("   Ideato & Sviluppato da Nicola Valigi (Houdinick)")
        print("=" * 65)
        print(f"🌐 Server attivo su: http://localhost:{PORT}")
        print(f"📁 Directory root:   {DIRECTORY}")
        print("📱 5 Schermate, Garage Virtuale, Motore Compatibilità & AI Listing")
        print("=" * 65)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Arresto server prototipo...")
            httpd.server_close()

if __name__ == "__main__":
    main()
