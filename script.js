function carregar() {
 var msg = document.getElementById('msg')
 var msg2 = document.getElementById('msg2')
 var data = new Date()
 var hora = data.getHours()
 minutos = data.getMinutes()
 msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`
 if (hora >= 0 && hora < 12) {
  document.getElementById('foto').src = 'imagens/manha.jpg'
  document.body.style.background = '#9a9a48'
  msg2.innerHTML = 'Boa Dia!'
 } else if (hora >= 12 && hora <= 18) {
  document.getElementById('foto').src = 'imagens/tarde.jpg'
  document.body.style.background = '#0000ff'
  msg2.innerHTML ='Boa Tarde!'
 } else {
  document.getElementById('foto').src = 'imagens/noite.jpg'
  document.body.style.background = '#222121'
  msg2.innerHTML = 'Boa Noite!'
 }
}
