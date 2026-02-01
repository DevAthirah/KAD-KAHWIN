from flask import Blueprint, request, jsonify

rsvp_bp = Blueprint("rsvp", __name__)

@rsvp_bp.route("/api/flask/rsvp", methods=["POST"])
def rsvp():
	data = request.get_json()

	name = data.get("name")
	email = data.get("email")

	if not name or not email:
	  return jsonify(error="Missing name or email"), 400

	#Later:save to DB
	print(f"RSVP Received: {name} - {email}")

	return jsonify(message="RSVP Received Successfully", name=name)
