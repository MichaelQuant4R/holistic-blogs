from flask import (request, jsonify, Flask, send_from_directory)
from flask_cors import CORS
import os


app = Flask(__name__,static_folder=os.path.abspath("../build") , static_url_path="/" )

cors = CORS(app, support_credentials=True, origin = {'r{/api/*}'})


@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')


@app.route("/api/comments", methods = ["GET"])
def comment_data():
    
    
    comment_list = [{"id": 1, "text": "I'm the coolest",
                     "username": "Levi"},
                    {"id": 2, "text": "Pure white sand over the wall",
                     "username": "Eren"},
                    {"id": 3, "text": "We have to use our brain here to win",
                     "username": "Armin"},
                    {"id": 4, "text": "I'm stronger than all of you",
                     "username": "Mikasa"},
                    {"id": 5, "text": "Oh, my lovely, I shall do terrible things to you",
                     "username": "Hanji"}]
                    
    return jsonify({"comments": comment_list})




if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))


