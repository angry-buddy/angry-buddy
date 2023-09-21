from flask import Flask, request,jsonify
from openai_api import generate_response
from flask_cors import CORS
import json


app = Flask(__name__)
CORS(app)
CORS(app,resource={r'*':{'origins':'*'}})
messages = []

@app.route('/')
def hello():
    return "정상 작동 중!"

# 클라이언트로 요청을 받음
@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_message = data['message']

    bot_reply = generate_response(messages, user_message)

    return jsonify({"message": bot_reply})


        


if __name__ == '__main__':
    app.run(host= '0.0.0.0',port=5000)  # 포트 번호를 8080으로 변경


# GPT에게 내용 보냄
