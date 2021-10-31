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



  let dt = new Date()
  let dd, mm, yyyy
  dd = dt.getUTCDate() < 10 ? '0' + dt.getUTCDate() : dt.getUTCDate()
  mm = dt.getUTCMonth() < 10 ? '0' + dt.getUTCMonth() : dt.getUTCMonth()
  yyyy = dt.getUTCFullYear()
  let octaDt = dd + mm + yyyy

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





  function getCookie(cName) {
    let cookie = [];
    document.cookie.split(';').forEach(function(el) {
      let [key, value] = el.split('=');
      cookie[key.trim()] = value;
    })
    return cookie[cName];
  }






  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }




  get(child(dbref, "/Keep/" + octaDt)).then((snapshot) => {
    var data = snapshot.val()
  })