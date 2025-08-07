QR-Based Attendance Management system using Microsoft Azure

💻 Frontend
Language: HTML, CSS, JavaScript

Framework: React.js (optional, if used for SPA)

QR Code Generator UI: JavaScript-based QR code library like qrcodejs or react-qr-code

🧠 Backend
Language: Python

Framework: Flask or FastAPI (for API endpoints if any)

Azure Function Apps:

Written in Python or JavaScript

Handles QR scan processing, DB entry, blob upload logic, etc.

☁️ Cloud Services (Azure)
Azure Blob Storage

For storing generated QR code images

Free tier provides 5 GB

Azure SQL Database

For storing student records and attendance logs

Azure Functions

Serverless backend logic for:

Uploading QR codes

Validating student entries

Storing attendance logs

Azure Web App Service (App Service Plan – Free Tier)

Hosts the frontend or dashboard to interact with the system

📦 Libraries & Packages
🔹 Python Libraries
qrcode: To generate QR codes

pyzbar / opencv-python: For scanning/decoding QR codes

pymssql or pyodbc: For connecting Python to Azure SQL DB

azure-storage-blob: For Azure Blob Storage integration

requests: If calling APIs (e.g., Azure Function endpoints)

Flask: If using a micro backend

🔹 JavaScript Libraries
qrcodejs or react-qr-code: For QR code generation (web UI)

axios: For API calls (to Azure Function or backend)

html5-qrcode: To scan QR codes via browser (if needed)

🔧 Dev Tools
VS Code – code editor (obviously)

Git + GitHub – version control

Postman – for API testing (if APIs used)

Azure CLI / Azure Portal – for deploying services and managing resources

