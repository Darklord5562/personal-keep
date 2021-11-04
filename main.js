  // accessing the DOM
  var modal = document.getElementById('memo')
  var overlay = document.getElementById('overlay')
  var fab = document.getElementById('fab');
  var closeModal = document.getElementById('close-modal')
  var cards = document.getElementById('cards')
  var btn = document.getElementById('keep-btn')
  var content = document.getElementById('text-area')
  var title = document.getElementById('title')
  var comment = document.getElementById('comment')

  var keep = getCookie('keep') ? JSON.parse(getCookie('keep')) : []

  // Creating a suitable date format
  let dt = new Date()
  let dd, mm, yyyy, hh, min
  dd = dt.getUTCDate() < 10 ? '0' + dt.getUTCDate() : dt.getUTCDate()
  mm = parseInt(dt.getUTCMonth() < 10 ? '0' + dt.getUTCMonth() : dt.getUTCMonth()) + 1
  yyyy = dt.getUTCFullYear()
  hh = dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()

  min = dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()
  let octaDt = dd + mm + yyyy + hh + min

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

  function closeMemo() {
    modal.style.transform = 'translate(-50%, -50%) scale(0)'
    overlay.classList.toggle('overlay')
    document.body.classList.remove('no-scroll')
  }

  function createPost(header, content) {
    var memoText = `
  <div class="card-header">
  <h1>${header}</h1>
  </div>
  ${content}`
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = memoText
    cards.innerHTML = ''
    cards.append(card)
  }

  function printPost(exArr) {
    if (exArr.length) {
      exArr.forEach((i) => {
        createPost(i.title, i.content)
      })
    }
    else {
      cards.innerText = 'You have no Keep'
    }
  }

  fab.addEventListener('click', function() {
    modal.style.transform = 'translate(-50%, -50%) scale(1)'
    overlay.classList.toggle('overlay')
    document.body.classList.add('no-scroll')
  })

  overlay.addEventListener('click', function() {
    closeMemo()
  })
  closeModal.addEventListener('click', function() {
    closeMemo()
  })

  btn.addEventListener('click', () => {
    if (title.value.trim() !== '' && content.value.trim() !== '') {
      var jsonData = {
        "title": title.value.trim(),
        "content": content.value.trim(),
        "comment": comment.value,
        "createdAt": octaDt
      }
      keep.push(jsonData)
      console.log(keep)
      setCookie('keep', JSON.stringify(keep), '1825')
    } else {
      alert('You have not entered anything')
    }
    printPost(keep)
    content.value = ''
    title.value = ''
    comment.value = ''
    closeMemo()
  })

  //.  fuction amd other calls
  printPost(keep)