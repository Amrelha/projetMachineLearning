from flask import Flask, jsonify
import dataExtraction as dataEx
from flask_cors import CORS,cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
# Visualisation service part
@app.route('/visualisation/confirmed/<string:country>')
@cross_origin()
def confirmedCases(country):
    array = dataEx.getData("Confirmed",country).tolist()
    return jsonify({"confirmed" : array})

@app.route('/visualisation/recovered/<string:country>')
@cross_origin()
def recoveredCases(country):
    array = dataEx.getData("Recovered", country).tolist()
    return jsonify({"recovered": array})

@app.route('/visualisation/death/<string:country>')
@cross_origin()
def deathCases(country):
    array = dataEx.getData("Deaths", country).tolist()
    return jsonify({"deaths": array})
@app.route('/visualisation/maxofall/<string:country>')
@cross_origin()
def maxofall(country):
    array = dataEx.getMaxOfAll(country).tolist()
    return jsonify({"confirmed" : array[0], "recovered" : array[1], "death" : array[2]})
@app.route('/visualisation/newdata/<string:country>')
@cross_origin()
def NewData(country):
    array = dataEx.getNewData(country)
    return jsonify({"totalCases" :float(array[0]), "death" :float(array[1]), "recovered" :float(array[2])})


if __name__ == "__main__":
    app.run(debug=True)