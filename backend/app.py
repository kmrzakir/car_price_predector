from flask import Flask, render_template,request,jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

@app.route('/data_options')
def home_page():
    # Read csv file
    df = pd.read_csv("./Data/clean_data.csv")
    # select three columns name , company and fuel_type
    data_options = {
        "name": sorted(df['name'].dropna().unique().tolist()),
        "company": sorted(df['company'].dropna().unique().tolist()),
        "fuel_type": sorted(df['fuel_type'].dropna().unique().tolist())
    }
    return jsonify(data_options)

@app.route('/predict',methods=['POST'])
def predict():
    data = request.get_json()
    print("Data send by user : ",data)
    predection = getPredection(data)
    predection = round(predection, 3)
    return jsonify({"predection" : predection})

def getPredection(data):

    name = data.get('name')
    company = data.get('company')
    year = int(data.get('year'))
    kms_driven = int(data.get('kms_driven'))
    fuel_type = data.get('fuel_type')

    # load  the model
    with open('./Data/carPricePredectionModel.pkl','rb') as file:
        model = pickle.load(file)

    user_input = pd.DataFrame([[name,company,year,kms_driven,fuel_type]],columns=['name','company','year','kms_driven','fuel_type'])

    # make predection
    prediction = model.predict(user_input)[0]
    return prediction

if __name__ == '__main__':
    app.run(debug=True)