from flask import Flask, render_template,request,jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

@app.route('/home')
def home_page():
    data = {
        'name': "zakir",
        'age': "999",
        'date': "this is date",
        'programming': "python and java"
    }
    return jsonify(data)

# @app.route('/predict',methods=['POST'])
# def predict():
#     # get all form data send by user
#     name = request.form.get('name')
#     company = request.form.get('comapny')
#     year = int(request.form.get('year'))
#     kms_driven = int(request.form.get('kms_driven'))
#     fuel_type = request.form.get('fuel_type')

#     # load  the model
#     with open('../Data/carPricePredectionModel.pkl', 'rb') as file:
#         model = pickle.load(file)

#     user_input = pd.DataFrame([[name,company,year,kms_driven,fuel_type]],columns=['name','company','year','kms_driven','fuel_type'])

#     # make prediction
#     prediction = model.predict(user_input)[0]

#     print("Your card price is : ",prediction)

#     return "<h1>Predicted Price is : {} </h1>".format(prediction)

if __name__ == '__main__':
    app.run(debug=True)