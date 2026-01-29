from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "KadKahwin Flask backend is running 🚀"

@app.route('/health')
def health():
    return {
            "status": "ok",
            "service": "kadkahwin-flask"
        }

#if __name__ == "__main__":
#    app.run()
