from flask import Flask, jsonify

app = Flask(__name__)

# Visualisation service part
@app.route('/visualisation/confirmed/<string:country>')
def confirmedCases(country):
    tab = []
    tab.append(5)
    tab.append(6)
    return jsonify({"tab" : tab})

@app.route('/visualisation/recovered/<string:country>')
def recoveredCases(country):
    return jsonify({"test":"recovered "+country})

@app.route('/visualisation/death/<string:country>')
def deathCases(country):
    return jsonify({"test":"death "+country})

if __name__ == "__main__":
    app.run(debug=True)