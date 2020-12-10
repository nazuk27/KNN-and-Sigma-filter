import os
from classes.handle_output_image import Handle_output_image
class UploadFile():
    def save_to_files(self, files, APP_ROOT, algo_value, parameters):
        target = os.path.join(APP_ROOT, 'static/input/')
        if not os.path.isdir(target):
            os.mkdir(target)
        for file in files:
            print(file)
            filename = file.filename
            destination = "/".join([target, filename])
            if os.path.isfile(destination):
                os.remove(destination)
            if not os.path.isfile(destination):
                file.save(destination)
                res_output = Handle_output_image(algo_value=algo_value, APP_ROOT=APP_ROOT,
                                                 image_name=filename, parameters=parameters)
                return (0, res_output)
            else:
                try:
                    raise ValueError("Files already Present!")
                except Exception as e:
                    return e