from flask import Flask, redirect, url_for, request
from flask_cors import CORS, cross_origin
import cohere
import numpy as np
import pandas as pd
import ingredient_classifier
import image_text

app = Flask(__name__)
output="hello"
my_dict={}
@app.route('/image',methods = ['POST'])
@cross_origin()
def handle_image():
    global output, my_dict
    s=request.json['data']
    uid = request.json['uniqueID']
    my_dict[uid]=""
    print("Posting right now to this uid")
    print(uid)
    my_dict[uid]=image_text.return_statement(s)
    return "Submitted"


@app.route('/text', methods=['GET'])
@cross_origin()
def sendText():
    global my_dict
    uuid=request.args.get('param1')
    print("Geting right now from this UID")
    print(uuid)
    if uuid in my_dict.keys():
        return str(my_dict[request.args.get('param1')])
    else:
        return "UUID not found", 404


@app.route('/icons', methods=['GET'])
@cross_origin()
def sendIconList():
    global my_dict
    uuid=request.args.get('param1')
    print("Getting for the icon list")
    if uuid in my_dict.keys():
        word_list = my_dict[uuid].split(', ')
        return ingredient_classifier.return_string(word_list)
    else:
        return "0000000"




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
