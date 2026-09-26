import os
import urllib.request
import re
import yt_dlp

os.makedirs('assets/videos', exist_ok=True)
os.makedirs('assets/fonts', exist_ok=True)
os.makedirs('assets/fontawesome/css', exist_ok=True)
os.makedirs('assets/fontawesome/webfonts', exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

# 1. DOWNLOAD FONTAWESOME
print('--- Downloading FontAwesome ---')
fa_css_url = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'
req = urllib.request.Request(fa_css_url, headers=headers)
try:
    with urllib.request.urlopen(req) as resp:
        fa_css = resp.read().decode('utf-8')
    
    # Find all webfont references in FA css (e.g. ../webfonts/fa-solid-900.woff2)
    font_files = re.findall(r'(\.\./webfonts/[a-zA-Z0-9_-]+\.(?:woff2|woff|ttf))', fa_css)
    unique_fonts = set(font_files)
    print(f'Found {len(unique_fonts)} FontAwesome font files.')
    
    for ff in unique_fonts:
        fname = os.path.basename(ff)
        furl = f'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/webfonts/{fname}'
        dest = os.path.join('assets/fontawesome/webfonts', fname)
        try:
            r = urllib.request.Request(furl, headers=headers)
            with urllib.request.urlopen(r) as res, open(dest, 'wb') as out_f:
                out_f.write(res.read())
            print(f'Downloaded {fname}')
        except Exception as e:
            print(f'Failed {fname}: {e}')
            
    with open('assets/fontawesome/css/all.min.css', 'w', encoding='utf-8') as f:
        f.write(fa_css)
    print('FontAwesome CSS saved.')
except Exception as e:
    print('FontAwesome error:', e)

# 2. DOWNLOAD GOOGLE FONTS (Inter & Cairo)
print('\n--- Downloading Google Fonts ---')
fonts_urls = [
    'https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap'
]
try:
    req = urllib.request.Request(fonts_urls[0], headers=headers)
    with urllib.request.urlopen(req) as resp:
        gfonts_css = resp.read().decode('utf-8')
    
    # Extract url(...)
    font_urls = re.findall(r'url\((https://fonts\.gstatic\.com/[^)]+)\)', gfonts_css)
    print(f'Found {len(font_urls)} Google font weights/slices.')
    
    font_map = {}
    for idx, f_url in enumerate(set(font_urls)):
        ext = 'woff2' if 'woff2' in f_url else 'ttf'
        fname = f'font_{idx}.{ext}'
        dest = os.path.join('assets/fonts', fname)
        try:
            r = urllib.request.Request(f_url, headers=headers)
            with urllib.request.urlopen(r) as res, open(dest, 'wb') as out_f:
                out_f.write(res.read())
            font_map[f_url] = f'assets/fonts/{fname}'
            print(f'Downloaded {fname}')
        except Exception as e:
            print(f'Failed font {f_url}: {e}')
            
    # Replace URLs in CSS
    local_fonts_css = gfonts_css
    for remote, local in font_map.items():
        local_fonts_css = local_fonts_css.replace(remote, local)
        
    with open('assets/fonts/fonts.css', 'w', encoding='utf-8') as f:
        f.write(local_fonts_css)
    print('Google Fonts CSS saved to assets/fonts/fonts.css')
except Exception as e:
    print('Google Fonts error:', e)

# 3. DOWNLOAD ALL 14 YOUTUBE VIDEOS
print('\n--- Downloading Course Lecture Videos via yt-dlp ---')
videos = [
    (168, 'C8-ZQx0wmUk', 'Introduction: Research Gap and Cycle'),
    (170, 'fGnLc_M8c9s', 'The Art Of Asking Clinical Research Question'),
    (172, 'RSDVmYhRKZc', 'The Importance Of Knowing Your Readers'),
    (174, 'jEhbIrZlgTE', 'Willing To Learn The First Step In Clinical Research'),
    (176, 'yTx7HRJwLhk', 'Understanding of title section part 1'),
    (178, '1-9GqdOZUoM', 'Understanding of title section part 2'),
    (179, '_wzE8SLiRyo', 'Bibliometrics and Altmetrics: Measuring the Impact of Knowledge'),
    (181, 'p1nzOgzxIS4', 'How To Develop a Good Research Question'),
    (183, 'Is1J61QVjZQ', 'Deciding On Area of Research Approval'),
    (185, 'aNkGVREJLJQ', 'Who should be an author?'),
    (187, 'vqP4Smq7oEw', 'Key concepts in authorship'),
    (189, '6TiCPu4NjhU', 'Becoming a publisher serial writer part 1'),
    (190, 'ZtbWP2p47Mc', 'Becoming a publisher serial writer part 2'),
    (191, 'RuWsI3C61xI', 'Becoming a publisher serial writer part 3'),
]

ydl_opts = {
    'format': 'bestvideo[height<=720][ext=mp4]+bestaudio[ext=m4a]/best[height<=720][ext=mp4]/best[ext=mp4]/best',
    'outtmpl': 'assets/videos/video_%(id)s.%(ext)s',
    'quiet': False,
    'no_warnings': True,
}

for act_id, yt_id, title in videos:
    target_mp4 = f'assets/videos/video_{act_id}.mp4'
    if os.path.exists(target_mp4) and os.path.getsize(target_mp4) > 100000:
        print(f'Already downloaded {target_mp4} ({os.path.getsize(target_mp4)} bytes)')
        continue
        
    print(f'Downloading Video {act_id} ({yt_id}): {title}...')
    opts = ydl_opts.copy()
    opts['outtmpl'] = f'assets/videos/video_{act_id}.%(ext)s'
    
    try:
        with yt_dlp.YoutubeDL(opts) as ydl:
            ydl.download([f'https://www.youtube.com/watch?v={yt_id}'])
        print(f'Successfully downloaded video_{act_id}')
    except Exception as e:
        print(f'Error downloading {act_id}: {e}')

print('\nAll local assets download script finished!')
