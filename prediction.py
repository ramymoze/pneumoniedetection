from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import io

# Define class labels (update if necessary)
labels = ['PNEUMONIA', 'NORMAL']
IMG_SIZE = 150  # Ensure this matches your training size

# Load the saved model
model = load_model("C:/Users/PC-CLICK-PLUS/Desktop/memoire/mysavedmodel/jarvis.h5")  # Load the trained model
print("✅ Model loaded successfully!")

def preprocess_image(image):
    """ Preprocess the image before passing it to the AI model """
    image = image.convert("L")  # Convert to grayscale
    image = image.resize((IMG_SIZE, IMG_SIZE))  # Resize
    image_array = np.array(image) / 255.0  # Normalize pixel values (0 to 1)
    image_array = image_array.reshape(1, IMG_SIZE, IMG_SIZE, 1)  # Reshape for CNN
    return image_array

def predict_image(file):
    """ Process an uploaded image file and return a prediction """
    image = Image.open(io.BytesIO(file.read()))  # Read image
    processed_image = preprocess_image(image)  # Preprocess image

    prediction = model.predict(processed_image)  # Get prediction
    predicted_label = labels[int(prediction[0][0] > 0.5)]  # Convert output to label
    confidence = float(prediction[0][0])  # Confidence score

    return {"prediction": predicted_label, "confidence": confidence}
