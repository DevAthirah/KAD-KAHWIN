from flask import Flask

def create_app():
	app = Flask(__name__)

	#register routes
	from app.routes.health import health_bp
	from app.routes.hello import hello_bp
	from app.routes.rsvp import rsvp_bp

	app.register_blueprint(health_bp)
	app.register_blueprint(hello_bp)
	app.register_blueprint(rsvp_bp)

	return app
