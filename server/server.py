from flask import Flask, redirect, url_for, request
import base64
import io
from flask_cors import CORS, cross_origin
import base64
from io import BytesIO
from PIL import Image
from PIL import Image
from pytesseract import pytesseract
from google.cloud import vision
from google.oauth2.service_account import Credentials
from google.cloud import vision_v1

credentials = Credentials.from_service_account_file('/Users/liyuzerihun/EcoEats/hack-eco-a2b68f2e4484.json')
client = vision.ImageAnnotatorClient(credentials=credentials)

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
    # ret, binary_img = cv2.threshold(np.array(gray_img), 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    # pil_img = Image.fromarray(binary_img)
    # pil_img.show()
    #text = pytesseract.image_to_string(gray_img)
    # Open the image file

    # Convert PIL.Image object to bytes
    img_byte_arr = io.BytesIO()
    image.save(img_byte_arr, format='PNG')
    img_bytes = img_byte_arr.getvalue()
    response = client.text_detection(image=vision_v1.types.Image(content=img_bytes))
    text = response.full_text_annotation.text
    global output
    output=text
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


if __name__ == '__main__':
    app.run(debug=True)