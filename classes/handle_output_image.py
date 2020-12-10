from classes.Sigma import Sigma
from classes.KNN_Class import KNN
from flask import send_file
import os
class Handle_output_image():
    def __init__(self, algo_value, APP_ROOT, image_name, parameters):
        self.algo_value = algo_value
        self.APP_ROOT = APP_ROOT
        self.image_name = image_name
        self.k = int(parameters['k_value'])
        self.std_val = parameters['std_val']
        self.c_value = int(parameters['c_value'])
        self.kernel = int(parameters['kernel_size'])
        self.output_path = []
        self.output_image_name = []
        self.processing()
        # self.send_image()
    def processing(self):
        print("Only this time!!")
        if self.algo_value == 'sigma':
            print('Sigma')
            sigma = Sigma(image_name=self.image_name, APP_ROOT=self.APP_ROOT,
                          c_val=self.c_value, std_val=self.std_val)
            response = sigma.main_function((self.kernel, self.kernel))
            self.output_image_name.append(response[1])
            self.output_path.append(response[0])
        elif self.algo_value == 'knn':
            print('KNN')
            knn = KNN(image_name=self.image_name, APP_ROOT=self.APP_ROOT)
            response = knn.main_function(self.k, self.kernel)
            self.output_image_name.append(response[1])
            self.output_path.append(response[0])
        else:
            print('Both')
            print('Sigma')
            sigma = Sigma(image_name=self.image_name, APP_ROOT=self.APP_ROOT,
                          c_val=self.c_value, std_val=self.std_val)
            response = sigma.main_function((self.kernel, self.kernel))
            self.output_image_name.append(response[1])
            self.output_path.append(response[0])
            print('KNN')
            knn = KNN(image_name=self.image_name, APP_ROOT=self.APP_ROOT)
            response = knn.main_function(self.k, self.kernel)
            self.output_image_name.append(response[1])
            self.output_path.append(response[0])

    # def send_image(self):
    #     output_ = os.path.join(self.output_path, self.output_image_name)
    #     return send_file(output_)
