from flask import Flask, request, jsonify
from prediction import predict_image  # Import the prediction function

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image']
    result = predict_image(file)  # Use the loaded model for prediction

    return jsonify(result)  # Return prediction as JSON

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
