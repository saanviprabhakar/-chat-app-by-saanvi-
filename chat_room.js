var firebaseConfig = {
    apiKey: "AIzaSyCnOiy_33_7uZQ6uh0lJeW7_gpqwJSNro4",
    authDomain: "let-s-chat-app-by-saanvi.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-by-saanvi-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-by-saanvi",
    storageBucket: "let-s-chat-app-by-saanvi.appspot.com",
    messagingSenderId: "248686667016",
    appId: "1:248686667016:web:66e9560455aa5c88b138bd"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();