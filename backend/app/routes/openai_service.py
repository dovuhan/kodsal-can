import openai

# OpenAI API anahtarınızı buraya ekleyin
openai.api_key = "YOUR_OPENAI_API_KEY"

def get_gpt_response(question: str) -> str:
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": question}]
    )
    return response["choices"][0]["message"]["content"]
