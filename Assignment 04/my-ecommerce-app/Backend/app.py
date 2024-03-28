from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os
# import datetime

app = Flask(__name__)
CORS(app)