import os
import sys
from google import genai

# Enable Google Cloud authentication for the GenAI client
os.environ["GOOGLE_GENAI_USE_GCA"] = "true"

plan_path = "/Users/arajiv/.gemini/antigravity/brain/e9c7155d-ff0a-422b-9563-700f3817bdb4/implementation_plan.md"

if not os.path.exists(plan_path):
    print(f"Error: Implementation plan not found at {plan_path}")
    sys.exit(1)

with open(plan_path, "r", encoding="utf-8") as f:
    plan_content = f.read()

prompt = f"""
You are an expert software engineer and critical reviewer.
Please review the following implementation plan for the SIEM Construction website.
Provide a critical second opinion, checking for:
1. Risks of mismatches (e.g. project names, physical vs printed pages, image files).
2. Omissions or errors.
3. Verification completeness.
4. Compliance with verification checks (no references to Orion City, EU Office, Rosemead Place).

Implementation Plan:
{plan_content}
"""

print("Initializing GenAI Client and calling gemini-2.5-pro...")
try:
    client = genai.Client()
    response = client.models.generate_content(
        model='gemini-2.5-pro',
        contents=prompt
    )
    print("\n================ GEMINI SECOND OPINION ================")
    print(response.text)
    print("======================================================")
except Exception as e:
    print("Error calling Gemini API:", e)
