  // Creating a suitable date format
  let dt = new Date()
  let dd, mm, yyyy
  dd = dt.getUTCDate() < 10 ? '0' + dt.getUTCDate() : dt.getUTCDate()
  mm = dt.getUTCMonth() < 10 ? '0' + dt.getUTCMonth() : dt.getUTCMonth()
  yyyy = dt.getUTCFullYear()
  let octaDt = dd + mm + yyyy

  // basic utility settings
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


  // js settings for app
  var modal = document.getElementById('memo')
  var overlay = document.getElementById('overlay')
  var fab = document.getElementById('fab');
  var closeModal = document.getElementById('close-modal')



  fab.addEventListener('click', function() {
    modal.style.transform = 'translate(-50%, -50%) scale(1)'
    overlay.classList.toggle('overlay')
    document.body.classList.add('no-scroll')
  })
  overlay.addEventListener('click', function() {
    modal.style.transform = 'translate(-50%, -50%) scale(0)'
    overlay.classList.toggle('overlay')
    document.body.classList.remove('no-scroll')
  })
closeModal.addEventListener('click', function() {
    modal.style.transform = 'translate(-50%, -50%) scale(0)'
    overlay.classList.toggle('overlay')
    document.body.classList.remove('no-scroll')
  })