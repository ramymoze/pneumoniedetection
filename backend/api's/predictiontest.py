import sys
import os
import json
import numpy as np
from PIL import Image
from tensorflow.keras.models import load_model
import warnings
import logging

# Suppress TensorFlow and PIL warnings
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'
logging.getLogger('tensorflow').setLevel(logging.ERROR)
warnings.filterwarnings("ignore")

# Constants
labels = ['PNEUMONIA', 'NORMAL']
IMG_SIZE = 150

# Load the model once
try:
    model = load_model("mysavedmodel/jarvis.h5")
except Exception as e:
    print(json.dumps({"error": f"Model loading failed: {str(e)}"}))
    sys.exit(1)

# Preprocess image
def preprocess_image(image):
    image = image.convert("L")  # Convert to grayscale
    image = image.resize((IMG_SIZE, IMG_SIZE))
    image_array = np.array(image) / 255.0
    image_array = image_array.reshape(1, IMG_SIZE, IMG_SIZE, 1)
    return image_array

# Predict image
def predict_image(file):
    image = Image.open(file)
    processed_image = preprocess_image(image)
    prediction = model.predict(processed_image)
    probability = float(prediction[0][0])
    
    # Determine prediction and confidence
    if probability > 0.5:
        predicted_label = 'NORMAL'
        confidence = probability  # Keep as is for NORMAL
    else:
        predicted_label = 'PNEUMONIA'
        confidence = 1 - probability  # Invert for PNEUMONIA
        
    return {"prediction": predicted_label, "confidence": round(confidence, 3)}

# Main
if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No image path provided"}))
        sys.exit(1)

    file_path = sys.argv[1]
    try:
        with open(file_path, "rb") as f:
            result = predict_image(f)
        print(json.dumps(result))
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)
