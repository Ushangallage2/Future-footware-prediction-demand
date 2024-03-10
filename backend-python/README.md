# Sales Prediction API

This project demonstrates a simple Flask API for sales prediction using a pre-trained LSTM model.

## Setup

1. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
Run the Flask server:

python app.py
The server will start at http://127.0.0.1:5000/.

Usage
Predict Sales
Endpoint: /predict

Request
Method: GET
URL: http://127.0.0.1:5000/predict

Query Parameters:
id: User ID (integer)
date: Date (integer)

Example Request:

curl "http://127.0.0.1:5000/predict?id=1&date=20"
Response:
json
Copy code
{
  "predictedSales": [7.16, 8.08, 7.99, ...]
}
