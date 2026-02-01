from flask import Blueprint, jsonify

health_bp = Blueprint("health", __name__)

@health_bp.route("/api/flask/health")
def health():
	return jsonify(status="ok", service="kadkahwin-flask")

