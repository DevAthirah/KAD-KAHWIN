from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/flask/health')
def health():
    return jsonify({
            "status": "ok",
            "service": "kadkahwin-backend"
        })

#if __name__ == "__main__":
#    app.run()
