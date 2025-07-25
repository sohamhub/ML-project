from flask import Flask, request, jsonify
from flask_cors import CORS  # 👈 import CORS

app = Flask(__name__)
CORS(app)  # 👈 enable CORS

@app.route('/check', methods=['POST'])
def check_grammar():
    data = request.get_json()
    text = data.get('text', '')
    # return dummy corrected result
    return jsonify({'corrected_text': f'Corrected: {text}'})

if __name__ == '__main__':
    app.run(debug=True)
