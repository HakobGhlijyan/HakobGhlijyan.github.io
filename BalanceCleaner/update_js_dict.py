import re

with open('assets/main.js', 'r') as f:
    js = f.read()

def insert_keys(lang_code, keys_str):
    # Find where the lang block ends (e.g. `}`) and inject before it
    pattern = rf"({lang_code}: \{{\s*.*?)(\n\s*\}},)"
    # We will just do a simple replacement for each language
    pass

# Actually it's easier to manually replace the first few lines of each dictionary or just append.
# Let's see the structure of `assets/main.js` dictionaries.
