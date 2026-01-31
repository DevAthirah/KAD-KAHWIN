from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "KadKahwin Flask backend is running 🚀"

@app.route('/health')
def health():
    return jsonify(
            status="ok",
            service="kadkahwin-flask"
        )

@app.route('/hello')
def hello():
   return jsonify(message="Hello from Flask")

if __name__ == "__main__":
    app.run()
