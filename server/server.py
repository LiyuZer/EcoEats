from flask import Flask, redirect, url_for, request
import base64
import io
from flask_cors import CORS, cross_origin
import base64
from io import BytesIO
from PIL import Image
from PIL import Image
from pytesseract import pytesseract
import numpy as np 


app = Flask(__name__)
##cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

    # img = cv2.imread("/Users/liyuzerihun/Desktop/ing.png")
    # # convert the image to grayscale
    # gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # blurred = cv2.GaussianBlur(gray_img, (5, 5), 0)
    # unsharp_mask = cv2.subtract(gray_img, blurred)
    # sharpened = cv2.addWeighted(gray_img, 1.5, unsharp_mask, -0.5, 0)
    
output="hello"
@app.route('/image',methods = ['POST'])
@cross_origin()
def handle_image():
    s=request.json['data']
    base64_data = s.split(',')[1]
    binary_data = base64.b64decode(base64_data)
    image = Image.open(BytesIO(binary_data))
    gray_img = image.convert('L')
    # ret, binary_img = cv2.threshold(np.array(gray_img), 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    # pil_img = Image.fromarray(binary_img)
    # pil_img.show()
    text = pytesseract.image_to_string(gray_img)
    global output
    output=text[:-1]
    print(text[:-1])
    # save the processed image
    # cv2.imshow("Processed Image", sharpened)
    # cv2.waitKey(0)
    # cv2.destroyAllWindows()
    return "Submitted"


@app.route('/text',methods = ['Get'])
@cross_origin()
def send_text():
    print("Hey What's up")
    global output
    return str(output)


IS_PRODUCTION_BUILD = False

if __name__ == '__main__':
    if IS_PRODUCTION_BUILD:
        app.run(
            debug=True,
            host='0.0.0.0',
            port=443,
            ssl_context=("/etc/letsencrypt/live/ecoeats.xyz/fullchain.pem", "/etc/letsencrypt/live/ecoeats.xyz/privkey.pem")
        )
    else:
        app.run(debug=True)
