from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os
import datetime

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

users = [
    {
        'username': 'user9999',
        'password': 'user9999Password',
        'email': 'user9999@gmail.com'
    },
]

@app.route('/', methods=['GET'])
def get_users():
    return jsonify(users)

# Register a new user
@app.route('/login/register', methods=['POST'])
def register_user():
    if request.method == "POST":
        new_user = request.get_json()
        username = new_user.get('username')
        password = new_user.get('password')
        email = new_user.get('email')
        
        for user in users:
            if user['username'] == username:
                return jsonify({'message': 'User already exists!'}), 400
        
        users.append({
            'username': username,
            'password': password,
            'email': email,
            'created_at': datetime.datetime.now()
        })
        return jsonify(new_user), 201
    else:
        return jsonify({'error': 'Method not allowed'}), 405

# @app.route('/login/login', methods=['GET'])
if __name__ == '__main__':
    app.run(host="localhost", port=5100, debug=True)