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

  var dt = new Date()
  var dd,mm,yyyy
  dd = dt.getUTCDate()<10 ? '0'+dt.getUTCDate():dt.getUTCDate()
  mm = dt.getUTCMonth()<10 ? '0'+dt.getUTCMonth():dt.getUTCMonth()
  yyyy = dt.getUTCFullYear()
  var octaDt = 'keep'+dd+mm+yyyy
  

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  let dbref = ref(db)
  var i = '6'
  set(ref(db, "Keep/" + octaDt), {
    "title": "Manoranjan2",
    "content": "52",
    "comments": "dev2",
    "created": dt.getHours()+':'+dt.getMinutes()
  })

  // var btn = document.getElementById('btn')
  // var inp = document.getElementById('inp')
  // var root = document.getElementById('root')

  /*btn.addEventListener('click', () => {
    get(child(dbref, "/Keep/"+octaDt)).then((snapshot) => {
      var data = snapshot.val()
      console.log(data.content)
    })
  })*/