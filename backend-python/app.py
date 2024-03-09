# combined_script.py

from flask import Flask, jsonify, request
import tensorflow as tf
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler

app = Flask(__name__)

