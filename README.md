# QR-Based Attendance Management System Using Microsoft Azure

## 💻 Frontend
1. Languages:
  -HTML
  -CSS
  -JavaScript
2. Framework (Optional):
  -React.js – for building a Single Page Application (SPA) and modular components
3. QR Code Generation (UI):
  -qrcodejs – Lightweight QR generator in vanilla JavaScript
  -react-qr-code – React component for rendering QR codes

## 🧠 Backend
1. Language:
  -Python
2. Framework:
  -Flask or FastAPI – Lightweight API framework for backend logic and endpoints (optional)
3. Azure Function Apps (Serverless backend):
  -Written In: Python or JavaScript
  -Responsibilities:
  -Processing QR scan input
  -Writing entries into Azure SQL Database
  -Uploading QR images to Azure Blob Storage
  -Triggering validations and attendance logic

## ☁️ Cloud Services (Azure)
1. Azure Blob Storage
  -Used to store generated QR code images
  -Free-tier provides up to 5 GB storage
2. Azure SQL Database
  -Stores student records and attendance logs
  -Easily integrates with Python using pymssql or pyodbc
3. Azure Function Apps
  -Serverless functions for backend logic:
    -Uploading QR codes
    -Validating student QR scans
    -Writing attendance entries to the database
4. Azure Web App Service (Free Tier)
  -Hosts the web-based frontend or admin dashboard

## 📦 Libraries & Packages
### 🔹 Python Libraries
Library	Purpose
qrcode	- Generate QR codes
pyzbar / opencv-python - Scan and decode QR codes from images
pymssql / pyodbc	- Connect Python backend to Azure SQL
azure-storage-blob	- Upload QR images to Azure Blob Storage
requests	- Make HTTP calls to APIs / Azure Functions
Flask or FastAPI	- Micro-framework for building RESTful APIs (if used)

### 🔹 JavaScript Libraries
Library	Purpose
qrcodejs or react-qr-code -	Frontend QR code generation
axios	- Handle API requests from frontend to backend
html5-qrcode	- Scan QR codes using browser camera (optional feature)

### 🔧 Developer Tools
Tool	Usage
VS Code	- Code editor with Python & JS integrations
Git + GitHub	- Version control and collaborative development
Postman -	API endpoint testing
Azure CLI / Azure Portal -	Resource provisioning, deployment, and monitoring

