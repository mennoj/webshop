from flask import Flask, render_template, jsonify
import mysql.connector


app = Flask(__name__)

mydb = mysql.connector.connect(
    host="206.189.7.177",
    user="root",
    password="example",
    database="webshop"
)


@ app.route('/')
def index():
    cur = mydb.cursor()
    cur.execute('''SELECT * FROM product''')
    row_headers = [x[0]
                   for x in cur.description]  # this will extract row headers
    json_data = []
    myresult = cur.fetchall()
    for result in myresult:
        json_data.append(dict(zip(row_headers, result)))
    return jsonify(json_data)


if __name__ == '__main__':
    app.run(debug=True)
