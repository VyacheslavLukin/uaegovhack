# This is a _very simple_ example of a web service that recognizes faces in uploaded images.
# Upload an image file and it will check if the image contains a picture of Barack Obama.
# The result is returned as json. For example:
#
# $ curl -F "file=@obama2.jpg" http://127.0.0.1:5001
#
# Returns:
#
# {
#  "face_found_in_image": true,
#  "is_picture_of_obama": true
# }
#
# This example is based on the Flask file upload example: http://flask.pocoo.org/docs/0.12/patterns/fileuploads/

# NOTE: This example requires flask to be installed! You can install it with pip:
# $ pip3 install flask

import os
import json
from sklearn.svm import SVC
from sklearn.neural_network import MLPClassifier
from flask import Flask, jsonify, request, redirect
from cv.face_recognition import face_recognition

# You can change this to any folder on your system
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)
clf = MLPClassifier()


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def get_vector(image_path):
    # Load the jpg file into a numpy array
    image = face_recognition.load_image_file(image_path)

    face_locations = face_recognition.face_locations(image)
    face_encodings = face_recognition.face_encodings(image, face_locations)
    return face_encodings


def train_classifier():
    image_paths = os.listdir(os.path.join(os.path.dirname(__file__), 'images'))
    x = []
    y = []
    for img_p in image_paths:
        vectors = get_vector('images/{}'.format(img_p))
        if len(vectors) > 0 and img_p != 'download.jpeg':
            x.append(vectors[0])
            y.append(".".join(img_p.split('.')[:-1]))

    print(y)
    print('Training')
    clf.fit(x, y)
    print('Score: {}'.format(clf.score(x, y)))


def recognize_face(file_stream):
    with app.app_context():
        result = {
            "face_id": None,
            "error": ""
        }
        vector = get_vector(file_stream)

        if len(vector) > 1:
            result["error"] = 'This image has several faces'
        if len(vector) == 0:
            result["error"] = 'This image has not faces'
        if result['error'].__len__() > 0:
            return result

        vector = vector[0]
        print(clf.predict_proba(vector))
        print(clf.classes_)
        face_id = clf.predict(vector)
        if len(face_id) > 0:
            face_id = face_id[0]
        result["face_id"] = face_id
        return json.dumps(result)


@app.route('/get_face_id', methods=['POST'])
def upload_image():
    # Check if a valid image file was uploaded
    if 'file' not in request.files:
        return redirect(request.url)

    file = request.files['file']

    if file.filename == '':
        return redirect(request.url)

    if file and allowed_file(file.filename):
        return recognize_face(file)


if __name__ == "__main__":
    train_classifier()
    print(recognize_face('images/download.jpeg'))
    # app.run(host='0.0.0.0', port=5001, debug=True)
