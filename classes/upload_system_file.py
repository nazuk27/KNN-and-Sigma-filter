import numpy as np
import pandas as pd
import xlrd
from databaseRelated.dB_connection import conn1, cursor
import os
APP_ROOT = os.path.dirname(os.path.abspath(__file__))

class Upload_Excel():
    def upload_file(self, path, filename):
        # path = APP_ROOT
        sheets = pd.read_excel(path  + filename)
        sheets['srn'] = list(range(0, len(sheets)))
        ## System fill
        new_system_index = sheets[pd.notnull(sheets['SYSTEM'])]['srn']
        for i, value in enumerate(new_system_index):
            try:
                platform_name = sheets[new_system_index.iloc[i]: new_system_index.iloc[i+1]]['SYSTEM'][new_system_index.iloc[i]]
                sheets[new_system_index.iloc[i]: new_system_index.iloc[i+1]]['SYSTEM'] = platform_name
            except Exception as e:
                platform_name = sheets[new_system_index.iloc[i]:]['SYSTEM'][new_system_index.iloc[i]]
                sheets[new_system_index.iloc[i]:]['SYSTEM'] = platform_name

        ## Sub_system_fill
        new_system_index = sheets[pd.notnull(sheets['SUB-SYSTEM'])]['srn']
        for i, value in enumerate(new_system_index):
            try:
                sub_sys = sheets[new_system_index.iloc[i]: new_system_index.iloc[i + 1]]['SUB-SYSTEM'][
                    new_system_index.iloc[i]]
                sheets[new_system_index.iloc[i]: new_system_index.iloc[i + 1]]['SUB-SYSTEM'] = sub_sys
            except Exception as e:
                sub_sys = sheets[new_system_index.iloc[i]:]['SUB-SYSTEM'][new_system_index.iloc[i]]
                sheets[new_system_index.iloc[i]:]['SUB-SYSTEM'] = sub_sys
        self.save_data(sheets)
        return "Data Saved Successfully!!"

    def save_data(self, data):
        self.create_system_table()
        data.fillna(0, inplace=True)
        platform = list(data['PLATFORM'].unique())
        for p in platform:
            self.remove_saved_platform(p)
            for index,row in data.iterrows():
                sql = '''insert into sys_config values(?,?,?,?,?,?,?)'''
                cursor.execute(sql, row['LRU'], row['SUB-SYSTEM'], row['SYSTEM'], p, row['LRU QTY'],
                               row['PATT. NO. 1'], row['PATT. NO. 2'])
        conn1.commit()

    def create_system_table(self):
        sql_main_data_checkup = """select OBJECT_ID('sys_config')"""
        cursor.execute(sql_main_data_checkup)
        main_data_exists = cursor.fetchone()
        if (main_data_exists[0] == None):
            create_main_sql = '''CREATE TABLE [dbo].[sys_config](
                                    [lru] [varchar](max) NULL,
                                    [sub_system] [varchar](max) NULL,
                                    [system] [varchar](max) NULL,
                                    [platform] [varchar](max) NULL,
                                    [num] INTEGER NOT NULL,
                                    [old_patt_no] [varchar](max) NULL,
                                    [new_patt_no] [varchar](max) NULL
                                ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]'''
            cursor.execute(create_main_sql)
            conn1.commit()

    #### Save the files into folders
    def file_upload_shared(self, files, APP_ROOT):
        target = os.path.join(APP_ROOT, 'files/')
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
                try:
                    res = self.upload_file(target, filename)
                    return res
                except Exception as e:
                    raise TypeError("File not compatible")
            else:
                try:
                    raise ValueError("Files already Present!")
                except Exception as e:
                    return e

    ## remove all the data regarding the system if already saved.
    def remove_saved_platform(self, platform):
        delete_sql = '''delete from sys_config where platform = ?'''
        cursor.execute(delete_sql, platform)