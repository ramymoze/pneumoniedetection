from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
import io

labels = ['PNEUMONIA', 'NORMAL']
IMG_SIZE = 150 

model = load_model("/home/ramylem9aleche/Documents/pneumoniedetection/backend/mysavedmodel/jarvis.h5")  # Load the trained model
print("Model loaded ")

def preprocess_image(image):
    """ Preprocess the image before passing it to the AI model """
    image = image.convert("L")  
    image = image.resize((IMG_SIZE, IMG_SIZE))  
    image_array = np.array(image) / 255.0  
    image_array = image_array.reshape(1, IMG_SIZE, IMG_SIZE, 1) 
    return image_array

def predict_image(file):
    image = Image.open(io.BytesIO(file.read()))  
    processed_image = preprocess_image(image)  
    prediction = model.predict(processed_image)  # G    et prediction
    predicted_label = labels[int(prediction[0][0] > 0.5)]  

    return {"prediction": predicted_label}
