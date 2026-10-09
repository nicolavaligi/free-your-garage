#!/usr/bin/env python3
"""
Generate high-resolution OpenGraph preview image (1200x630) and Favicon for Free Your Garage
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_og_image():
    W, H = 1200, 630
    img = Image.new('RGB', (W, H), color='#F5EFE6')
    draw = ImageDraw.Draw(img)

    # Vintage frame borders
    draw.rectangle([16, 16, W - 16, H - 16], outline='#2A2C2E', width=4)
    draw.rectangle([24, 24, W - 24, H - 24], outline='#D35400', width=2)
    draw.rectangle([30, 30, W - 30, H - 30], outline='#C5B59E', width=1)

    # Vintage corner rivets
    rivet_radius = 6
    corners = [(42, 42), (W - 42, 42), (42, H - 42), (W - 42, H - 42)]
    for cx, cy in corners:
        draw.ellipse([cx - rivet_radius, cy - rivet_radius, cx + rivet_radius, cy + rivet_radius], fill='#2A2C2E')
        draw.ellipse([cx - 2, cy - 2, cx + 2, cy + 2], fill='#D35400')

    # Top badge pill
    pill_w, pill_h = 320, 38
    pill_x0 = (W - pill_w) // 2
    pill_y0 = 60
    draw.rounded_rectangle([pill_x0, pill_y0, pill_x0 + pill_w, pill_y0 + pill_h], radius=19, fill='#2A2C2E')
    
    # Try default fonts or system fonts
    font_bold = None
    font_main = None
    font_sub = None
    font_small = None

    try:
        font_main = ImageFont.truetype('/System/Library/Fonts/Supplemental/Impact.ttf', 72)
        font_sub = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 28)
        font_body = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial.ttf', 24)
        font_pill = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 16)
        font_badge = ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf', 18)
    except:
        font_main = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_body = ImageFont.load_default()
        font_pill = ImageFont.load_default()
        font_badge = ImageFont.load_default()

    # Draw pill text
    draw.text((pill_x0 + 35, pill_y0 + 9), "⚡ SWAP AMERICAN BIKE PARTS", fill='#F5B041', font=font_pill)

    # Main Title: FREE YOUR GARAGE
    title_text = "FREE YOUR GARAGE"
    bbox_title = draw.textbbox((0, 0), title_text, font=font_main)
    tw = bbox_title[2] - bbox_title[0]
    draw.text(((W - tw) // 2 + 3, 130 + 3), title_text, fill='#DDE3E8', font=font_main)
    draw.text(((W - tw) // 2, 130), title_text, fill='#1B1C1D', font=font_main)

    # Subtitle with accent line
    sub_text = "NON LA GRATUITÀ, MA L'ORDINE"
    bbox_sub = draw.textbbox((0, 0), sub_text, font=font_sub)
    sw = bbox_sub[2] - bbox_sub[0]
    draw.text(((W - sw) // 2, 225), sub_text, fill='#D35400', font=font_sub)

    # Decorative line
    line_y = 275
    draw.line([W // 2 - 250, line_y, W // 2 + 250, line_y], fill='#2D4739', width=3)

    # Description text
    desc1 = "Il primo marketplace dedicato esclusivamente a ricambi originali per moto Harley-Davidson."
    desc2 = "Trova il pezzo esatto per il tuo modello in 3 tocchi. Codici OEM verificati e ispezione a 4 foto."
    
    b1 = draw.textbbox((0, 0), desc1, font=font_body)
    b2 = draw.textbbox((0, 0), desc2, font=font_body)
    draw.text(((W - (b1[2] - b1[0])) // 2, 305), desc1, fill='#333333', font=font_body)
    draw.text(((W - (b2[2] - b2[0])) // 2, 345), desc2, fill='#555555', font=font_body)

    # 4 Feature Badges in Boxes
    box_y = 410
    box_w, box_h = 240, 95
    boxes = [
      ("🏍️ Garage Virtuale", "Filtro 100% Compatibile", '#2D4739'),
      ("🔍 Codici OEM", "Ricambi originali marcati", '#D35400'),
      ("📸 Ispezione 4 Foto", "Nessuna truffa o fake", '#2C3E50'),
      ("🏛️ Old School", "Flat, Knuck, Pan, Shovel", '#795548')
    ]

    total_w = len(boxes) * box_w + (len(boxes) - 1) * 20
    start_x = (W - total_w) // 2

    for i, (b_title, b_sub, b_color) in enumerate(boxes):
        bx = start_x + i * (box_w + 20)
        draw.rounded_rectangle([bx, box_y, bx + box_w, box_y + box_h], radius=10, fill='#FFFFFF', outline='#ded4c3', width=2)
        draw.line([bx, box_y, bx + box_w, box_y], fill=b_color, width=4)
        draw.text((bx + 14, box_y + 20), b_title, fill='#1B1C1D', font=font_badge)
        draw.text((bx + 14, box_y + 55), b_sub, fill='#666666', font=font_pill)

    # Footer note
    footer_text = "Sviluppato da Nicola Valigi (Houdinick) · https://nicolavaligi.github.io/free-your-garage/"
    bf = draw.textbbox((0, 0), footer_text, font=font_pill)
    draw.text(((W - (bf[2] - bf[0])) // 2, 560), footer_text, fill='#888888', font=font_pill)

    img.save('/Users/houdinick/free-your-garage/og-image.png', 'PNG')
    print("Created /Users/houdinick/free-your-garage/og-image.png (1200x630)")

    # Favicon (192x192 and 32x32)
    fav = Image.new('RGB', (192, 192), color='#1B1C1D')
    fav_draw = ImageDraw.Draw(fav)
    fav_draw.ellipse([8, 8, 184, 184], outline='#D35400', width=8)
    fav_draw.ellipse([20, 20, 172, 172], outline='#F5B041', width=3)
    fav_font = None
    try:
        fav_font = ImageFont.truetype('/System/Library/Fonts/Supplemental/Impact.ttf', 58)
    except:
        fav_font = ImageFont.load_default()
    
    fav_draw.text((38, 62), "#FYG", fill='#FFFFFF', font=fav_font)
    fav.save('/Users/houdinick/free-your-garage/favicon.png', 'PNG')
    fav_small = fav.resize((32, 32))
    fav_small.save('/Users/houdinick/free-your-garage/favicon.ico', 'ICO')
    print("Created favicon.png and favicon.ico")

if __name__ == '__main__':
    create_og_image()
