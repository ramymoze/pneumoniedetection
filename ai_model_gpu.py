import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import os
from PIL import Image
from sklearn.metrics import classification_report, confusion_matrix
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader
from torchvision import transforms
from torch.optim.lr_scheduler import ReduceLROnPlateau

# Check for GPU availability
device = torch.device("cuda")
print(f"Using device: {device}")

# Define labels and image size
labels = ['PNEUMONIA', 'NORMAL']
img_size = 150

# Custom Dataset class
class ChestXrayDataset(Dataset):
    def __init__(self, data, transform=None):
        self.data = data
        self.transform = transform
        
    def __len__(self):
        return len(self.data)
    
    def __getitem__(self, idx):
        image, label = self.data[idx]
        image = Image.fromarray(image).convert('L')  # Convert numpy array to PIL Image
        
        if self.transform:
            image = self.transform(image)
            
        return image, label

def get_training_data(data_dir):
    data = []
    for label in labels:
        path = os.path.join(data_dir, label)
        class_num = labels.index(label)
        for img in os.listdir(path):
            try:
                img_arr = Image.open(os.path.join(path, img)).convert("L")
                img_arr = img_arr.resize((img_size, img_size))
                img_arr = np.array(img_arr)
                data.append([img_arr, class_num])
            except Exception as e:
                print(f"Error loading image {img}: {e}")
    return np.array(data, dtype=object)

# Paths for dataset
train_path = 'c:/Users/PC-CLICK-PLUS/Desktop/memoire/dataset/chest_xray/train'
test_path = 'c:/Users/PC-CLICK-PLUS/Desktop/memoire/dataset/chest_xray/test'
val_path = 'c:/Users/PC-CLICK-PLUS/Desktop/memoire/dataset/chest_xray/val'

# Load data
train_data = get_training_data(train_path)
test_data = get_training_data(test_path)
val_data = get_training_data(val_path)

# Combine all data for splitting
all_data = np.concatenate([train_data, test_data, val_data])
np.random.shuffle(all_data)

# Split data for input and output (50% each)
total_data = len(all_data)
train_limit = total_data // 2

input_data = all_data[:train_limit]
output_data = all_data[train_limit:]

# Define transforms with data augmentation
train_transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5], std=[0.5]),
    transforms.RandomRotation(30),
    transforms.RandomResizedCrop(img_size, scale=(0.8, 1.0)),
    transforms.RandomHorizontalFlip(),
])

test_transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5], std=[0.5]),
])

# Create datasets and dataloaders
train_dataset = ChestXrayDataset(input_data, transform=train_transform)
test_dataset = ChestXrayDataset(output_data, transform=test_transform)

train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True, num_workers=4)
test_loader = DataLoader(test_dataset, batch_size=32, shuffle=False, num_workers=4)

# Define CNN model
class PneumoniaCNN(nn.Module):
    def __init__(self):
        super(PneumoniaCNN, self).__init__()
        self.conv_layers = nn.Sequential(
            nn.Conv2d(1, 32, 3, padding='same'),
            nn.BatchNorm2d(32),
            nn.ReLU(),
            nn.MaxPool2d(2),
            
            nn.Conv2d(32, 64, 3, padding='same'),
            nn.Dropout(0.1),
            nn.BatchNorm2d(64),
            nn.ReLU(),
            nn.MaxPool2d(2),
            
            nn.Conv2d(64, 64, 3, padding='same'),
            nn.BatchNorm2d(64),
            nn.ReLU(),
            nn.MaxPool2d(2),
            
            nn.Conv2d(64, 128, 3, padding='same'),
            nn.Dropout(0.2),
            nn.BatchNorm2d(128),
            nn.ReLU(),
            nn.MaxPool2d(2),
            
            nn.Conv2d(128, 256, 3, padding='same'),
            nn.Dropout(0.2),
            nn.BatchNorm2d(256),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )
        
        self.fc_layers = nn.Sequential(
            nn.Flatten(),
            nn.Linear(256 * (img_size//32) * (img_size//32), 128),
            nn.Dropout(0.2),
            nn.ReLU(),
            nn.Linear(128, 1),
            nn.Sigmoid()
        )
        
    def forward(self, x):
        x = self.conv_layers(x)
        x = self.fc_layers(x)
        return x

# Initialize model, loss function, and optimizer
model = PneumoniaCNN().to(device)
criterion = nn.BCELoss()
optimizer = optim.RMSprop(model.parameters(), lr=0.001)
scheduler = ReduceLROnPlateau(optimizer, mode='max', patience=2, factor=0.3, min_lr=1e-6)

# Training function
def train_model(model, train_loader, criterion, optimizer, epochs=12):
    model.train()
    train_losses = []
    train_accs = []
    val_accs = []
    
    for epoch in range(epochs):
        running_loss = 0.0
        correct = 0
        total = 0
        
        for images, labels in train_loader:
            images = images.to(device)
            labels = labels.float().unsqueeze(1).to(device)
            
            optimizer.zero_grad()
            
            outputs = model(images)
            loss = criterion(outputs, labels)
            
            loss.backward()
            optimizer.step()
            
            running_loss += loss.item()
            predicted = (outputs > 0.5).float()
            total += labels.size(0)
            correct += (predicted == labels).sum().item()
        
        epoch_loss = running_loss / len(train_loader)
        epoch_acc = correct / total
        
        # Validation
        val_acc = evaluate_model(model, test_loader)
        scheduler.step(val_acc)
        
        train_losses.append(epoch_loss)
        train_accs.append(epoch_acc)
        val_accs.append(val_acc)
        
        print(f'Epoch {epoch+1}/{epochs} - Loss: {epoch_loss:.4f} - Acc: {epoch_acc:.4f} - Val Acc: {val_acc:.4f}')
    
    return train_losses, train_accs, val_accs

# Evaluation function
def evaluate_model(model, test_loader):
    model.eval()
    correct = 0
    total = 0
    
    with torch.no_grad():
        for images, labels in test_loader:
            images = images.to(device)
            labels = labels.float().unsqueeze(1).to(device)
            
            outputs = model(images)
            predicted = (outputs > 0.5).float()
            total += labels.size(0)
            correct += (predicted == labels).sum().item()
    
    accuracy = correct / total
    return accuracy

# Train the model
train_losses, train_accs, val_accs = train_model(model, train_loader, criterion, optimizer)

# Plot training results
plt.plot(train_accs, label='accuracy')
plt.plot(val_accs, label='val_accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.ylim([0, 1])
plt.legend(loc='lower right')
plt.show()

# Evaluate on test set
test_accuracy = evaluate_model(model, test_loader)
print(f"Test Accuracy: {test_accuracy * 100:.2f}%")

# Generate classification report and confusion matrix
def generate_classification_report(model, test_loader):
    model.eval()
    y_true = []
    y_pred = []
    
    with torch.no_grad():
        for images, labels in test_loader:
            images = images.to(device)
            labels = labels.to(device)
            
            outputs = model(images)
            predicted = (outputs > 0.5).float()
            
            y_true.extend(labels.cpu().numpy())
            y_pred.extend(predicted.cpu().numpy())
    
    print(classification_report(y_true, y_pred, target_names=labels))
    
    cm = confusion_matrix(y_true, y_pred)
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=labels, yticklabels=labels)
    plt.title("Confusion Matrix")
    plt.xlabel("Predicted")
    plt.ylabel("Actual")
    plt.show()

generate_classification_report(model, test_loader)

# Function to display sample X-ray images
def plot_sample_images(dataset, num_samples=5):
    plt.figure(figsize=(15, 7))
    indices = np.random.randint(0, len(dataset), num_samples)
    
    for i, idx in enumerate(indices):
        image, label = dataset[idx]
        image = image.numpy().squeeze()
        
        plt.subplot(1, num_samples, i + 1)
        plt.imshow(image, cmap='gray')
        plt.title(f"Label: {labels[label]}")
        plt.axis('off')
    plt.show()

# Display sample images
plot_sample_images(train_dataset)