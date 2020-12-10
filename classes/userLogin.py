from databaseRelated.dB_connection import conn1,cursor
from flask import session,jsonify
import traceback
from classes.upload_system_file import Upload_Excel
import pandas as pd

class Login():
    def user_save(self,user_data):
        name = user_data["name"]
        password = user_data["password"]
        platform = user_data["platform"]
        permission_level = user_data['permission_level']
        rank = user_data['rank']
        sql_check = """select OBJECT_ID('users')"""
        cursor.execute(sql_check)
        existes = cursor.fetchall()
        if(existes[0][0] == None):
            sql = """CREATE TABLE users (
                      name VARCHAR(45)  NULL,
                      password VARCHAR(45) NULL,
                      permission VARCHAR(45) NOT NULL,
                      status INT NOT NULL ,
                      forgotPassword INT NOT NULL,
                      platfrom_associated VARCHAR(45) NULL,
                      platform_rank VARCHAR(45) NULL)
                      """
            cursor.execute(sql)
            conn1.commit()

        try:
            sql_insert = """INSERT INTO users VALUES(?,?,?,?,?,?,?)"""
            cursor.execute(sql_insert,name,password,permission_level,0,0,platform, rank)
            conn1.commit()
            return "Data Saved Successfully!!"
        except Exception as e:
            result = ""
            if(int(e.args[0]) == 23000):
                result = "Duplicate Email Address!! Please Enter Another Email"
            else:
                result = "Data Not Saved! Please Try Again"
            return result

    #Login Method
    def login(self,login_data):
        email = login_data["email"]
        password = login_data["password"]
        #to check wether user exixts
        try:
            sql = """select * from users where name = ?"""
            cursor.execute(sql,email)
            user_info = cursor.fetchall()
            user_info = user_info[0]
            if(user_info[1] == password and user_info[3] == 1):
                session["permission"] = user_info[2]
                session["user"] = user_info[0]
                session['associated_platfrom'] = user_info[5]
                session['platfrom_rank'] = user_info[6]
                return {'res':1,"permission":user_info[2],"username":email,
                        'associated_platform': user_info[5], 'platform_rank': user_info[6]}
            elif(user_info[1] == password and user_info[4] == 0):
                return "Account not Activated. Contact Admin to activate!"
            else:
                return {"res": 0,"permission": None}
        except Exception as e:
            return "User Not Found"


    #to send user data on dashboard
    def get_user_request(self):
        res_acc = []
        res_fp = []
        try:
            upload_excel = Upload_Excel()
            upload_excel.create_system_table()
            sql = """select name, permission, platfrom_associated, platform_rank from users where status = ? AND name != ?"""
            cursor.execute(sql,0,session['user'])
            results = cursor.fetchall()
            for row in results:
                res_acc.append(tuple(row))
            sql_fp = """select name from users where forgotPassword = ? and name != ?"""
            cursor.execute(sql_fp,1,session['user'])
            results = cursor.fetchall()
            for row in results:
                res_fp.append(tuple(row))
            uniq_platform = '''select DISTINCT(platform) from sys_config'''
            cursor.execute(uniq_platform)
            platfrom_results = cursor.fetchall()
            platfrom_res = []
            for row in platfrom_results:
                platfrom_res.append(row[0])
            #select all users.
            user_sql = '''select name, permission, platform_rank, platfrom_associated from users'''
            user_df = pd.read_sql_query(user_sql, conn1)
            user_df = user_df.to_json(orient='records')
            # select mandatory
            mand_sql = '''select mandatory from check_mandatory_fields_allowed'''
            is_mand = cursor.execute(mand_sql)
            is_mand = cursor.fetchone()[0]
            return {"Account_Request":res_acc,"Forgot_Request":res_fp, 'platforms':platfrom_res,
                    'all_user': user_df, 'isMand': is_mand}
        except Exception as e:
            return  traceback.print_exc()

    #to save user after dashboard change
    def save_modified_user(self,mod_data):
        try:
            for x in mod_data:
                sql = """update users set permission = ?, status = ?,platfrom_associated = ?, platform_rank = ? where name = ?"""
                cursor.execute(sql,x["permission"],1, x['platform'], x['platform_rank'] ,x["name"])
                conn1.commit()
        except Exception as e:
            return e

    #To delete User from Dashboard
    def del_user(self,data):
        for x in data:
            sql = """delete from users where email = ?"""
            cursor.execute(sql,x)
            conn1.commit()

    #To update forgot Password Method
    def forgot_password(self,data):
        #function to check wether the account is active or not, if active update forgot
        #password entry and if not return Account Not Active
        email = data['email']
        answer = data['answer']
        sql = """select status,securityQuestion from users where email = ? """
        cursor.execute(sql,email)
        user = cursor.fetchall()
        status = user[0][0]
        seq_que = user[0][1]
        if(status == 1):
            if(seq_que == answer):
                try:
                    sql_update = """update users set forgotPassword = 1 where email = ?"""
                    cursor.execute(sql_update,email)
                    conn1.commit()
                    return "Request send to admin. Contact Admin for Password Change!"
                except Exception as e:
                    return str(e)
            else:
                return "Security Answer Not Correct!!"
        elif(status == 0):
            return "Your Account is not Active. Please Contact admin."
        else:
            return "User not found. Please SignUp!"

    #To modify new Password with new
    def password_modify(self,modified_password):
        if 'user' in session:
            for x in modified_password:
                try:
                    sql = """update users set password = ? , forgotPassword = ? where email = ?"""
                    cursor.execute(sql,x['password'],0,x['email'])
                    conn1.commit()
                except Exception as e:
                    return str(e)
            return "Password Change Successfully!"












