const rec = new webkitSpeechRecognition()

rec.lang = 'uz-UZ'

rec.onend = function () {

  console.log('Aloqa tugadi.')
}

rec.onresult = function (event) {

  const buyruq = event.results[0][0].transcript.toUpperCase();

  const newLi = document.createElement('LI');

  const newImg = document.createElement('IMG');

  newLi.textContent = buyruq;

  newImg.src = './img/remove.svg';

  users.appendChild(newLi).appendChild(newImg);

  newImg.onclick = function () {

    newLi.remove();
  }
}

rec.onerror = function () {

  alert('Xatolik yuz berdi, iltimos qaytadan urinib ko\'ring!')
}

const newSpeech = document.getElementById('userAddSpeech')

newSpeech.onclick = function () {

  rec.start()
}
