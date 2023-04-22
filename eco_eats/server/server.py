from flask import Flask, redirect, url_for, request
import base64
import io
from flask_cors import CORS, cross_origin
import base64
from io import BytesIO
from PIL import Image
app = Flask(__name__)
##cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/image',methods = ['POST'])
@cross_origin()
def handle_image():
    s=request.json['data']
    base64_data = s.split(',')[1]
    binary_data = base64.b64decode(base64_data)
    image = Image.open(BytesIO(binary_data))

    image.show()
    # image = Image.open(BytesIO(binary_data))
    # image.show()
    # response.headers.add("Access-Control-Allow-Origin", "*")
    return "Submitted"

if __name__ == '__main__':
    app.run(debug=True)