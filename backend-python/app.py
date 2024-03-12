# combined_script.py

from flask import Flask, jsonify, request
import tensorflow as tf
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler

app = Flask(__name__)

@app.route('/predict', methods=['GET'])
def predict_sales():
    try:
# =============================================================================
    
        shoeModel = request.args.get('shoeModel')
        days = int(request.args.get('days'))
        print("++++++++++++++")
        print(shoeModel, days)

        # Load your sales data and perform predictions
        if(shoeModel == 'E') :
            df = pd.read_csv('./DataFiles/model E [MConverter.eu].csv')
        elif(shoeModel == 'D') :
            df = pd.read_csv('./DataFiles/model D [MConverter.eu].csv')
        elif(shoeModel == 'C') :
            df = pd.read_csv('./DataFiles/model C [MConverter.eu].csv')
        elif(shoeModel == 'B') :
            df = pd.read_csv('./DataFiles/model B [MConverter.eu].csv')
        elif(shoeModel == 'A') :
            df = pd.read_csv('./DataFiles/model A [MConverter.eu].csv')

        df['Date'] = pd.to_datetime(df['Date'])
        df.sort_values('Date', inplace=True)

        scaler = MinMaxScaler(feature_range=(0, 1))
        df['SalesCount_Scaled'] = scaler.fit_transform(df[['SalesCount']])

        seq_length = 20

        def create_sequences(data, seq_length):
            xs = []
            ys = []
            for i in range(len(data)-seq_length-1):
                x = data[i:(i+seq_length)]
                y = data[i+seq_length]
                xs.append(x)
                ys.append(y)
            return np.array(xs), np.array(ys)

        X, y = create_sequences(df['SalesCount_Scaled'].values, seq_length)
        train_size = int(len(X) * 0.8)
        X_train, X_test = X[:train_size], X[train_size:]
        y_train, y_test = y[:train_size], y[train_size:]

        X_train = np.reshape(X_train, (X_train.shape[0], X_train.shape[1], 1))
        X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))

        if(shoeModel == 'E') :
            saved_model_path = "./lstm_model_e.h5"
        elif(shoeModel == 'D') :
            saved_model_path = "./lstm_model_d.h5"
        elif(shoeModel == 'C') :
            saved_model_path = "./lstm_model_c.h5"
        elif(shoeModel == 'B') :
            saved_model_path = "./lstm_model_b.h5"
        elif(shoeModel == 'A') :
            saved_model_path = "./lstm_model_a.h5"


        model = tf.keras.models.load_model(saved_model_path)
# ============================================================================= #

        # Initialize the last known sequence
        last_known_sequence = X_test[-1].reshape(1, seq_length, 1)

        # List to store predicted sales in scaled format
        predicted_sales_scaled = []

        # Generate predictions for the next 'days' days
        for _ in range(days):  # Number of days to predict
            next_value_scaled = model.predict(last_known_sequence)
            predicted_sales_scaled.append(next_value_scaled[0, 0])

            # Update the sequence with the predicted value
            last_known_sequence = np.roll(last_known_sequence, -1, axis=1)
            last_known_sequence[0, -1, 0] = next_value_scaled[0, 0]

        # Reverse the scaling to get actual predicted sales count values
        predicted_sales = scaler.inverse_transform(np.array(predicted_sales_scaled).reshape(-1, 1))

        return jsonify({'predictedSales': predicted_sales.tolist()})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
