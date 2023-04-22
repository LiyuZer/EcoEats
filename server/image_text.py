from PIL import Image
from pytesseract import pytesseract
import matplotlib.pyplot as plt
import cv2

# # Defining paths to tesseract.exe
# # and the image we would be using
# image_path = r"/Users/liyuzerihun/Desktop/i2.jpg"
  
# # Opening the image & storing it in an image object
# img = Image.open(image_path)
# threshold_value = 150
# img = img.convert("L").point(lambda x: 255 * (x > threshold_value))plt.imshow(img)
# sharpened_img = img.filter(ImageFilter.SHARPEN)
# contrast_factor = 1.5
# enhancer = ImageEnhance.Contrast(sharpened_img)
# img = enhancer.enhance(contrast_factor)
# plt.show()

# # Passing the image object to image_to_string() function
# # This function will extract the text from the image
# text = pytesseract.image_to_string(img)
  
# # Displaying the extracted text
# print(text[:-1])

# read the image file
img = Image.open("/Users/liyuzerihun/Desktop/img.jpg")

# # convert the image to grayscale
# gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# blurred = cv2.GaussianBlur(gray_img, (5, 5), 0)
# unsharp_mask = cv2.subtract(gray_img, blurred)
# sharpened = cv2.addWeighted(gray_img, 1.5, unsharp_mask, -0.5, 0)


# draw contours
text = pytesseract.image_to_string(img)
print(text[:-1])
# save the processed image
