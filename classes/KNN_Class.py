
from PIL import  Image
import  numpy as np
import os

class KNN():
    def __init__(self, image_name, APP_ROOT):
        self.image_name = image_name
        self.target = os.path.join(APP_ROOT, 'static/input/')
        self.path = os.path.join(self.target, image_name)
        self.image_array = np.array(Image.open(self.path))
        self.new_image_name = 'KNN_' + self.image_name
        self.APP_ROOT = APP_ROOT
        
    def extract_channels(self, image_array, num_of_channels):
        channel_list = []
        for i in range(num_of_channels):
            arr = image_array[:,:,i]
            channel_list.append(arr)
        return channel_list
    
    def padding(self, single_image_arr):
        return np.pad(single_image_arr, ((1,1), (1,1)), mode='constant', constant_values=0)
    
    def Find_Neighbors(self, filt, elem, n, k):
        mn = 0
        m = filt.index(elem)
        l = m-1
        r = m+1
        neighbor_mat = []
        while mn < k:
            if l < 0:
                for item in filt[r:(r+(k-mn))]:
                    neighbor_mat.append(item)
                break
            elif r >= n:
                for item in filt[(l-(k-mn)):l]:
                    neighbor_mat.append(item)
                break
            else:
                if np.absolute(filt[l]-elem) <= np.absolute(filt[r]-elem):
                    neighbor_mat.append(filt[l])
                    mn += 1
                    l -= 1
                else:
                    neighbor_mat.append(filt[r])
                    mn += 1
                    r += 1
        return neighbor_mat
    
    def main_function(self, k, kernel):
        num_of_channel = self.image_array.shape[2]
        arr_channel_list = self.extract_channels(self.image_array, num_of_channel)
        output_array = []
        x = kernel
        for arr in arr_channel_list:
            padded_arr = self.padding(arr)
            empty_pad = np.zeros(padded_arr.shape, dtype=int)
            rows = padded_arr.shape[0]
            columns = padded_arr.shape[1]
            for i in range(1, rows-1):
                for j in range(1, columns-1):
                    t = padded_arr[i-1:i+2, j-1:j+2]
                    new_arr = [t[g][h] for g in range(x) for h in range(x)]
                    new_arr = sorted(new_arr)
                    neig_mat = self.Find_Neighbors(new_arr, padded_arr[i][j], x*x, k)
                    average = (sum(neig_mat)+padded_arr[i][j])/(k+1)
                    empty_pad[i][j] = round(average)
            output_array.append(empty_pad)
        concat_array = np.dstack(output_array)
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