from flask import Flask, request, jsonify
from prediction import predict_image  

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image']
    result = predict_image(file)

    return jsonify(result)  

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)