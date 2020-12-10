import numpy as np
import pandas as pd
import xlrd
import os

class Data():
    def sheetData(self, path):
        sheets = xlrd.open_workbook(path + "\\classes" + "\\DATA ANALYTICS TALWAR CLASS HPAC.xlsx", on_demand=True )
        sheetnames = sheets._sheet_names
        all_platform_data = dict()
        for platform in sheetnames:
            platform_data = self.get_data_sheetwise(path, platform, sheetnames)
            all_platform_data[platform] = platform_data
        return {'main_data': all_platform_data, 'platforms': sheetnames}



    def get_data_sheetwise(self, path, sheetname, sheetnames):
        excel_data = pd.read_excel(path + "\\classes" + "\\DATA ANALYTICS TALWAR CLASS HPAC.xlsx", sheetname=sheetname)
        excel_data1 = excel_data.groupby("DESCRIPTION")
        dictData = dict()
        metric_names = []
        equipment_name_with_platfrom = []
        insane = pd.melt(frame=excel_data, id_vars=['DATE', 'DESCRIPTION', 'UNIT', 'OPERATING RANGE', 'METRICS', 'MIN', 'MAX'],
                         value_vars=list(excel_data.columns[-2:]),
                         value_name='Recorded Values')
        excel_data_insane = insane.groupby('variable')
        for name, group in excel_data_insane:
            equipment_name_with_platfrom.append(name)
            dictData[name] = dict()
            metric_groups = group.groupby('METRICS')
            for metric_name, metric_group in metric_groups:
                metric_names.append(metric_name)
                dictData[name][metric_name] = dict()
                desc_group = metric_group.groupby(['DESCRIPTION', 'UNIT'])
                for d_name, d_group in desc_group:
                    joined_name = '-'.join(d_name)
                    dictData[name][metric_name][joined_name] = d_group.to_json(orient='records')

        return {'dictData': dictData, 'metric_names': list(set(metric_names)),
                'equipment_names': equipment_name_with_platfrom}



