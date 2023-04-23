from PIL import Image
import io
from google.cloud import vision_v1
from google.oauth2.service_account import Credentials
import base64
from io import BytesIO
from PIL import Image
from PIL import Image
import io
import ingredient_classifier


credentials = Credentials.from_service_account_file('..//hack-eco-a2b68f2e4484.json')
client = vision_v1.ImageAnnotatorClient(credentials=credentials)

def return_statement(s):
    base64_data = s.split(',')[1]
    binary_data = base64.b64decode(base64_data)
    image = Image.open(BytesIO(binary_data))
    img_byte_arr = io.BytesIO()
    image.save(img_byte_arr, format='PNG')
    img_bytes = img_byte_arr.getvalue()
    response = client.text_detection(image=vision_v1.types.Image(content=img_bytes))
    text = response.full_text_annotation.text
    input =  text
    prompt = input + "\n isolate all words after the word INGREDIENTS until empty line, and add commas between words"
    response = ingredient_classifier.co.generate(  
    model='command-xlarge-nightly',  
    prompt = prompt,  
    max_tokens=200,  
    temperature=0.750)
    intro_paragraph = response.generations[0].text
    return intro_paragraph
    