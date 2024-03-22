import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.metrics import MeanSquaredError


# Load your sales data (replace this with your data loading logic)
df = pd.read_csv('./DataFiles/model E [MConverter.eu].csv')

# Assuming 'Date' and 'SalesCount' are the columns in df
df['Date'] = pd.to_datetime(df['Date'])
df.sort_values('Date', inplace=True)

# Normalize the sales count values
scaler = MinMaxScaler(feature_range=(0, 1))
df['SalesCount_Scaled'] = scaler.fit_transform(df[['SalesCount']])

# Define sequence length
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

# Create sequences for training and testing
X, y = create_sequences(df['SalesCount_Scaled'].values, seq_length)
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
y_train, y_test = y[:train_size], y[train_size:]

# Reshape input to be [samples, time steps, features]
X_train = np.reshape(X_train, (X_train.shape[0], X_train.shape[1], 1))
X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))

# Define the LSTM model
model = Sequential([
    LSTM(50, input_shape=(seq_length, 1)),
    Dense(1)
])
model.compile(optimizer='adam', loss='mse')
# model.compile(optimizer='adam', loss='mse', metrics=[MeanSquaredError()])



# Train the model
model.fit(X_train, y_train, epochs=100, batch_size=32, verbose=2)
model.save("./lstm_model_e.h5")
