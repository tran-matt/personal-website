from flask import Flask, request, jsonify, make_response, render_template
from flask_mail import Mail, Message
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

app.config['MAIL_SERVER'] = 'sandbox.smtp.mailtrap.io'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = '70303b9086f27a'
app.config['MAIL_PASSWORD'] = '7724075d3bf42e'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_DEFAULT_SENDER'] = 'tran.h.matt@gmail.com'

mail = Mail(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/send-email', methods=['POST', 'OPTIONS'])
def send_email():
    if request.method == 'OPTIONS':
        response = make_response()
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
        response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
        return response

    data = request.json
    name = data.get('name')
    email = data.get('email')
    subject = data.get('subject')
    message = data.get('message')
    html_message = data.get('html_message')  

    msg = Message(subject=f"{subject} - {name}",
                  sender=app.config['MAIL_DEFAULT_SENDER'],  
                  recipients=["tran.h.matt@gmail.com"],
                  body=f"From: {name} <{email}>\n\n{message}",
                  html=html_message)  

    try:
        mail.send(msg)
        return jsonify({"message": "Email sent successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response


if __name__ == '__main__':
    app.run(debug=True)