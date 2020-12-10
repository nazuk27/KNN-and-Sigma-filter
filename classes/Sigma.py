from PIL import Image
import numpy as np
# import matplotlib.image as Image
import pandas as pd
import os
class Sigma():
    def __init__(self, image_name, APP_ROOT, c_val, std_val):
        self.APP_ROOT = APP_ROOT
        self.image_name = image_name
        self.target = os.path.join(APP_ROOT, 'static/input/')
        self.path = os.path.join(self.target, image_name)
        self.image_array = np.array(Image.open(self.path))
        self.c = c_val
        self.std_val = std_val
        self.std = 0
        self.new_image_name = 'sigma_' + self.image_name

    def extract_channels(self, image_array, num_of_channels):
        channel_list = []
        for i in range(num_of_channels):
            arr = image_array[:,:,i]
            channel_list.append(arr)

        return channel_list

    def padding(self, single_image_arr):
        return np.pad(single_image_arr, ((1,1), (1,1)), mode='constant', constant_values=0)

    def get_sigma_kernal_matrix(self, c, global_std, neighbours, middle_element):
        filter_shape = np.zeros(neighbours.shape)
        filter_shape[np.abs(neighbours - middle_element) > c * global_std] = 0
        filter_shape[np.abs(neighbours - middle_element) <= c * global_std] = 1
        filter_shape = filter_shape / filter_shape.sum()
        return filter_shape

    def unpad(self, final_arr):
        final_rownum = final_arr.shape[0]
        final_colnum = final_arr.shape[1]
        return final_arr[1:final_rownum-1, 1:final_colnum-1]

    def main_function(self, kernel_size):
        num_of_channel = self.image_array.shape[2]
        arr_channel_list = self.extract_channels(self.image_array, num_of_channel)
        final_output = []
        mid_row = int(np.floor(kernel_size[0] / 2))
        mid_col = int(np.floor(kernel_size[1] / 2))
        for arr in arr_channel_list:
            padded_arr = self.padding(arr)
            empty_pad = np.zeros(padded_arr.shape)
            rows = padded_arr.shape[0]
            columns = padded_arr.shape[1]
            for row in range(1, rows - 1):
                for col in range(1, columns - 1):
                    filter_matrix = padded_arr[row - 1:row + 2, col - 1:col + 2]
                    try:
                        if self.std_val == '0':
                            self.std = filter_matrix.std()
                        elif self.std_val == '1':
                            self.std = arr.std()
                        middle_element = filter_matrix[mid_row, mid_col]
                        kernel_matrix = self.get_sigma_kernal_matrix(self.c, self.std, filter_matrix, middle_element)
                        empty_pad[row, col] = int(np.floor(np.sum(filter_matrix * kernel_matrix)))
                        if row == 1 and col == 1:
                            print(np.floor(np.sum(filter_matrix * kernel_matrix)), mid_row, mid_col)
                            print(filter_matrix.std())
                    except:
                       print('processing!!')
            empty_pad = self.unpad(empty_pad)
            final_output.append(empty_pad)

        concat_array = np.dstack(final_output)
        concat_array = concat_array.astype(np.uint8)
        image_from_array = Image.fromarray(concat_array)
        output_path = os.path.join(self.APP_ROOT, 'static/output/')
        if not os.path.isdir(output_path):
            os.mkdir(output_path)
        try:
            image_from_array.save(os.path.join(output_path, self.new_image_name))
            return (output_path, self.new_image_name)
        except Exception as e:
            return "Error."