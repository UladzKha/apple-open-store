const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.getApplications = functions.https.onRequest((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const applications = [
    {
      id: "0",
      title: "Pasha Fencer",
      developer: "4399en game",
      rating: "4.5",
      icon:
        "https://play-lh.googleusercontent.com/yDAQrLRLegORreE65uCdASl9_TK2G0i9rKtrAIStMnoEWXFE-89U9a635-lysYhLe9k=s180-rw",
    },
    {
      id: "1",
      title: "FIFA Football",
      developer: "ELECTRONIC ARTS",
      rating: "3.6",
      icon:
        "https://play-lh.googleusercontent.com/j879CQTTNOJ3Jzg7--T0gInHizfXKf0sMRYisM_wqcJnkbNSaubO7zZU1qvSGPQh990=s180-rw",
    },
    {
      id: "2",
      title: "MOBile Legends: Battle",
      developer: "Moontone",
      rating: "2.6",
      icon:
        "https://play-lh.googleusercontent.com/28ZrB-IdK-gKKTmBMgiOspBod0gWmO8L7UDZdtKxSOW90TQNIHcmEdMz4Eza6lKG9JM=s180-rw",
    },
    {
      id: "3",
      title: "Big Farm",
      developer: "Goodgame Studios",
      rating: "5.0",
      icon:
        "https://play-lh.googleusercontent.com/xgdUxsseYLeEt0XQKfCi26l5GV-L0PhldSwTDh7EtaFTHT0xsvfmciPz6Nsk8g0kIJLS=s180-rw",
    },
    {
      id: "4",
      title: "21 Days Challenges",
      developer: "Kati & Lima",
      rating: "4.5",
      icon:
        "https://play-lh.googleusercontent.com/etH2VEWmWIh4jct1ybBklmiab7WJdIg2wXK5lLtrJZt4Ef6A5WAzUUSAlCjiXJx4xw=s180-rw",
    },
    {
      id: "5",
      title: "My Dictionary",
      developer: "Katakyn: apps for education",
      rating: "4.2",
      icon:
        "https://play-lh.googleusercontent.com/StdrNa6AuTZnaXXZkQQrEZlagVK9QwKBn1r3j8JcSMMOQk4bKCHUwY7wfPWwclifhA=s180-rw",
    },
    {
      id: "6",
      title: "Crash Bandicoot: Traveling",
      developer: "4399en game",
      rating: "4.5",
      icon:
        "https://play-lh.googleusercontent.com/09NATea4_-YIEh_HRPTqX2AKynVdI7P93vuN5JjXkQmTuxcHNriqX1KdggvZ2xqt1Q=s180-rw",
    },
  ];

  res.send(applications);
});
