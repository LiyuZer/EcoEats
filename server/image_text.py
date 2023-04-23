from PIL import Image
import io
from google.cloud import vision_v1
from google.oauth2.service_account import Credentials

# Open the image file
img = Image.open("/Users/liyuzerihun/Desktop/I.jpg")

# Convert PIL.Image object to bytes
img_byte_arr = io.BytesIO()
img.save(img_byte_arr, format='PNG')
img_bytes = img_byte_arr.getvalue()

# Set up Google Cloud Vision API credentials
credentials = Credentials.from_service_account_file('/Users/liyuzerihun/EcoEats/hack-eco-a2b68f2e4484.json')
client = vision_v1.ImageAnnotatorClient(credentials=credentials)

# Perform text detection
response = client.text_detection(image=vision_v1.types.Image(content=img_bytes))
text = response.full_text_annotation.text

# Print detected text
print(text)
