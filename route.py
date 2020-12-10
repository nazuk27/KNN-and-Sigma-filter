from flask import Flask,request,redirect,jsonify,session
from flask.templating import render_template
from classes.handle_upload_file import  UploadFile
import os
import json
from flask import send_file
from classes.handle_output_image import Handle_output_image
APP_ROOT = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__)

@app.route('/')
def home_return():
    return render_template('index.html')

#Upload file
@app.route('/upload', methods=['POST'])
def file_upload():
    files = request.files.getlist("file")
    file_type = request.form['file_type']
    algo_value = request.form['algo']
    parameter_details = json.loads(request.form['obj'])
    upload_inst = UploadFile()
    res = upload_inst.save_to_files(files, APP_ROOT, algo_value, parameter_details)
    if res[0] == 0:
        #output_image = os.path.join(res[1].output_path, res[1].output_image_name)
        final_res = {'output_image': res[1].output_image_name, 'output_path': res[1].output_path,
                     'algo_value': algo_value, 'input_image_name': res[1].image_name};
        return jsonify(final_res)
    else:
        res = 'Error occurred!!'

if __name__ == '__main__':
    app.secret_key = os.urandom(32)
    app.run()
