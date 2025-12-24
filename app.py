from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate-plan', methods=['POST'])
def generate_plan():
    data = request.get_json()
    # For now, just echo the data back
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
