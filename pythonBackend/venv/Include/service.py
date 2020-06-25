from flask import Flask, jsonify
import dataExtraction as dataEx
from flask_cors import CORS,cross_origin
from preprocessing import clustering

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
    array = dataEx.getNewData(country)[0]
    lastUpdate = dataEx.getNewData(country)[1]
    return jsonify({"totalCases" :array[0], "death" :array[1], "recovered" :array[2], "lastUpdate" :lastUpdate})
@app.route('/visualisation/regionsData')
@cross_origin()
def dataByregion():
    array = dataEx.getRegionsData()
    return jsonify({"regions":array[0], "affectedNum": array[1], "update": array[2], "somme":array[3]})

@app.route('/visualisation/StatistiqueMonde')
@cross_origin()
def getStatistiqueMonde():
    array = dataEx.getStatistiqueMonde()
    return jsonify({"totalCases": array[0], "death": array[1], "recovered": array[2]})

@app.route('/visualisation/clusterAge')
@cross_origin()
def getClusterAge():
    array = dataEx.getDataClusterAge()
    return jsonify({"countries": array[0].tolist(), "x": array[1].tolist(),"y":array[2].tolist(), "cluster": array[3].tolist()})

@app.route('/visualisation/clusterTest')
@cross_origin()
def getClusterTest():
    array = dataEx.getDataClusterTest()
    return jsonify({"countries": array[0].tolist(), "x": array[1].tolist(),"y":array[2].tolist(), "cluster": array[3].tolist()})

@app.route('/visualisation/ageClusterMean')
@cross_origin()
def getMeanClusterAge():
    array = dataEx.getDataClusterAge()[4]
    return jsonify({"meanClusters": array.tolist()})
@app.route('/visualisation/testClusterMean')
@cross_origin()
def getMeanClusterTest():
    array = dataEx.getDataClusterTest()[4]
    return jsonify({"meanClusters": array.tolist()})




if __name__ == "__main__":
    app.run(debug=True)