from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins='http://localhost:3000/login')

users = []

@app.route('/', methods=['POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        email = request.form.get('email')

        if not (username and password and email):
            return jsonify({'error': 'Incomplete data provided'}), 400

        for user in users:
            if user["username"] == username:
                return jsonify({'error': 'Username already exists'}), 409

        users.append({
            "username": username,
            "password": password,
            "email": email
        })
        return jsonify({'message': 'User registered successfully'}), 201
    else:
        return jsonify({'error': 'Method not allowed'}), 405

@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

if __name__ == '__main__':
    app.run()
