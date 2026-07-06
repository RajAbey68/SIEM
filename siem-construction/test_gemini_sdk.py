try:
    import google.genai
    print("google-genai is installed")
except ImportError:
    print("google-genai is not installed")

try:
    import google.generativeai
    print("google-generativeai is installed")
except ImportError:
    print("google-generativeai is not installed")
