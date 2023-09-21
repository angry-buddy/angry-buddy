import os
import openai
import time

# openai.api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = "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"

messages = []
sentiments = []

def generate_response(messages, user_content):

    messages.append(
        {
            "role": "user",
            "content": "다음 질문에 대한 답변과 감정을 '답변 내용(감정)'의 형식으로 알려줘, 감정은 긍정 또는 부정 또는 중립으로만 표현해줘:"
            f"{user_content}",
        }
    )
    
    completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=messages)
    # while completion.choices[0].message["content"].strip() == "":
    #     time.sleep(1)  # 응답이 올 때까지 1초씩 대기
    #     completion = openai.ChatCompletion.create(
    #         model="gpt-3.5-turbo", messages=messages
    #     )

    assistant_content = completion.choices[0].message["content"].strip()
    
    messages.append({"role": "assistant", "content": f"{assistant_content}"})

    return assistant_content
