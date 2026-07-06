import os
import json
import subprocess
import urllib.request

# Get DeepSeek API key from Keychain
try:
    key = subprocess.check_output(
        'security find-generic-password -a "$USER" -s deepseek-api-key -w',
        shell=True
    ).decode().strip()
except Exception as e:
    print("Error retrieving DeepSeek API key:", e)
    sys.exit(1)

# Read codebase files for context
files_to_read = [
    "src/app/layout.tsx",
    "src/app/page.tsx",
    "src/app/about-us/page.tsx",
    "src/app/past-projects/page.tsx",
    "src/app/gallery/page.tsx",
    "src/app/contact-us/page.tsx"
]

codebase_context = ""
for f_path in files_to_read:
    if os.path.exists(f_path):
        with open(f_path, "r", encoding="utf-8") as f:
            codebase_context += f"\n\n=== FILE: {f_path} ===\n"
            # Read first 300 lines to keep context manageable
            lines = f.readlines()
            codebase_context += "".join(lines[:300])

# Construct prompt
prompt = f"""
You are DeepSeek-Reasoner, an expert software engineer and critical reviewer.
You are performing a critical review of the SIEM Construction Next.js website.

We received a previous 'Google 3.5 Rebuild Review' which highlighted several priority items (P0/P1/P2):
1. P0: Fix logo lockup rendering bug (stacking/overlap of title and subtitle).
2. P0: Remove 'Re-born 2026' from copy (implies bankruptcy/merger).
3. P0: Verify or remove BIM and Design-Build claims (unless verified).
4. P0: Verify or rewrite '100% client retention' (comes out or reframe to repeat business stats).
5. P0: Populate 17 real projects from PDF pages 13-31 (Done).
6. P1: Add director presence on About page (Fawzia William, Shanaka Mathew with photos and bios).
7. P1: Display certifications (CIDA C2 or registration C-10851, ISO 9001:2015, PV 1558).
8. P1: Verify contact address and phone (113/16, Nawala Road, Nugegoda, Tel: +94 11 4513 327/8).

Review the codebase context below and provide:
1. An audit of what is currently resolved and what remains UNRESOLVED.
2. A critical review of the About Us page, Contact page, Homepage, and Layout.
3. Concrete code modifications to act on the remaining feedback immediately (especially About Us director bios, certifications, and logo lockup styling).

Codebase Context:
{codebase_context}
"""

body = json.dumps({
    'model': 'deepseek-chat', # use chat model for faster response and larger token limits
    'messages': [{'role': 'user', 'content': prompt}],
    'max_tokens': 2000,
    'temperature': 0.2,
}).encode()

req = urllib.request.Request(
    'https://api.deepseek.com/chat/completions',
    data=body,
    headers={'Authorization': 'Bearer ' + key, 'Content-Type': 'application/json'},
)

print("Calling DeepSeek API...")
try:
    with urllib.request.urlopen(req, timeout=180) as response:
        res_data = json.load(response)
        print("\n================ DEEPSEEK CRITICAL REVIEW ================")
        print(res_data['choices'][0]['message']['content'])
        print("==========================================================")
except Exception as e:
    print('DS_ERROR:', repr(e))
