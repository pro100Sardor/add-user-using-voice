const rec = new webkitSpeechRecognition()

rec.lang = 'uz-UZ'

rec.onend = function () {
  
  console.log('Aloqa tugadi.')
}

rec.onresult = function (event) {

  const buyruq = event.results[0][0].transcript.toUpperCase()
  // console.log(event.results[0][0].transcript)

  if (buyruq === 'qizil') {
    document.body.style.backgroundColor = 'red'
  }
  else if (buyruq === 'yashil') {
    document.body.style.backgroundColor = 'green'
  }
  else {
    document.write('Tushunmadim)')
  }
}

rec.onerror = function () {

  document.write('Xatolik yuz berdi.')
}

const newSpeech = document.getElementById('ovoz')

newSpeech.onclick = function () {
  rec.start()
}

// window.onkeyup = function (event) {

//   if(newSpeech == onclick) {
//     rec.start()
//   }
// }

// window.onkeyup = function (event) {

//   if(event.keyCode === 32) {
//     rec.start()
//   }
// }
