
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://api.perplexity.ai/chat/completions",
    api_key=os.environ.get("SONAR_API_KEY"),
)


def get_perplexity_response(query):
    try:
        response = client.chat.completions.create(
            model="sonar-pro",
            messages=[
                {"role": "system", "content": "You are an expert in pet health and allergies."},
                {"role": "user", "content": query},
            ],
        )
        return response.choices[0].message.content
    except Exception as e:
        print(f"Error calling Perplexity API: {e}")
        print(f"API Key: {os.environ.get('SONAR_API_KEY')}")
        raise


if __name__ == "__main__":
    query = "pollen and allergy research for dogs, including common allergens, symptoms, and management strategies"
    research_data = get_perplexity_response(query)
    with open("dog_allergy_research.md", "w") as f:
        f.write(research_data)
    print("Research data saved to dog_allergy_research.md")

