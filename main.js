  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  import { getDatabase, get, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";
  import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js';







  const firebaseConfig = {
    apiKey: "AIzaSyATfHbubZF5ljyd4HjursyjdIfIRXDxQnk",
    authDomain: "personal-keep.firebaseapp.com",
    databaseURL: "https://personal-keep-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "personal-keep",
    storageBucket: "personal-keep.appspot.com",
    messagingSenderId: "650814608036",
    appId: "1:650814608036:web:ae41a8daeaf2f875f88c31",
    measurementId: "G-JCZEJYCNKX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  let dbref = ref(db)
  var i = '20::20'
  /*set(ref(db, "Keep/"+i), {
    "name": "Manoranjan2",
    "class" : "52",
    "hobby" : "dev2",
    "age" : "192"
  })
  */
  var btn = document.getElementById('btn')
  var inp = document.getElementById('inp')
  var root = document.getElementById('root')

  btn.addEventListener('click', () => {
    var x = inp.value
    get(child(dbref, "/" + x)).then((snapshot) => {
      var data = snapshot.val()
      var view = `Id: ${data.id}
Name: ${data.name}
Age: ${data.age}`
      root.innerText = view
    })
  })