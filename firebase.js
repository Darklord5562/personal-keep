  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
  import { getDatabase, get, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

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
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  let dbref = ref(db)

  let jsonData = {
    "title": "Manoranjan2",
    "content": "52",
    "comments": "dev2",
    "created": dt.getHours() + ':' + dt.getMinutes()
  }

  set(ref(db, "Keep/" + octaDt), jsonData)


  setCookie(octaDt, JSON.stringify(jsonData), 30)
  let r = JSON.parse(getCookie(octaDt))
  console.log(r)


  get(child(dbref, "/Keep/" + octaDt)).then((snapshot) => {
    var data = snapshot.val()
  })