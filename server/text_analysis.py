import openai

openai.api_key = "your_api_key"

def generate_summary(text):
    prompt = (f"Please summarize the following text:\n{text}\n\nSummary:")
    response = openai.Completion.create(
        engine="davinci",
        prompt=prompt,
        max_tokens=100,
        n=1,
        stop=None,
        temperature=0.7,
    )
    summary = response.choices[0].text.strip()
    return summary

# Example usage
text = "Maltodextrin"
summary = generate_summary(text)
print(summary)