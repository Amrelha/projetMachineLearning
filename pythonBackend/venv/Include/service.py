from flask import Flask, jsonify
import dataExtraction as dataEx

app = Flask(__name__)

# Visualisation service part
@app.route('/visualisation/confirmed/<string:country>')
def confirmedCases(country):
    array = dataEx.getData("Confirmed",country).tolist()
    return jsonify({"confirmed" : array})

@app.route('/visualisation/recovered/<string:country>')
def recoveredCases(country):
    array = dataEx.getData("Recovered", country).tolist()
    return jsonify({"recovered": array})

@app.route('/visualisation/death/<string:country>')
def deathCases(country):
    array = dataEx.getData("Deaths", country).tolist()
    return jsonify({"deaths": array})
@app.route('/visualisation/maxofall/<string:country>')
def maxofall(country):
    array = dataEx.getMaxOfAll(country).tolist()
    return jsonify({"confirmed" : array[0], "recovered" : array[1], "death" : array[2]})
@app.route('/visualisation/newdata/<string:country>')
def NewData(country):
    array = dataEx.getNewData(country)
    return jsonify({"totalCases" : array[0], "death" : array[1], "recovered" : array[2]})


if __name__ == "__main__":
    app.run(debug=True)