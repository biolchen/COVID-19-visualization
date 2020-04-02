from flask import Flask, request, jsonify
from covid import main
from flask_cors import CORS
from selenium import webdriver

app = Flask(__name__)
CORS(app)

options = webdriver.ChromeOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--incognito')
options.add_argument('--headless')
options.add_argument('--lang=en-us')
options.add_argument('--log-level=3')

driver = webdriver.Chrome("./chromedriver", chrome_options=options)

@app.route('/')
def basic():
    return 'Server is running ....'

@app.route('/getInitialData', methods=['GET'])
def covid():
    url = "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6"
    data = main(url, driver)
    return data

if __name__ == '__main__':
    app.run()
