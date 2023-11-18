const admin = require('firebase-admin')
const serviceAccount = require('serviceAccount.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.handler = (event, context, callback) => {

  firebaseStorage = admin.storage();

  firebaseFirestore = admin.firestore();

  firebaseFirestore = admin.auth();
}
