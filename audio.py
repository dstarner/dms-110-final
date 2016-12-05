from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template("index.html", value=30)


if __name__ == '__main__':
    app.run()
