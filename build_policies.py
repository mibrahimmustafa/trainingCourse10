import json

with open("assets/policies.json", "r", encoding="utf-8") as f:
    policies = json.load(f)

with open("assets/extra_info.json", "r", encoding="utf-8") as f:
    extra = json.load(f)

js_content = "/** Policies and Institutional Guidelines Data Store **/\n"
js_content += "const POLICIES_DATA = " + json.dumps(policies, ensure_ascii=False, indent=2) + ";\n\n"
js_content += "const EXTRA_INFO_DATA = " + json.dumps(extra, ensure_ascii=False, indent=2) + ";\n\n"
js_content += "if (typeof window !== 'undefined') {\n  window.POLICIES_DATA = POLICIES_DATA;\n  window.EXTRA_INFO_DATA = EXTRA_INFO_DATA;\n}\n"

with open("policies-data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Generated policies-data.js successfully")
