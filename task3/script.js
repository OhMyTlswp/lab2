var myIframe = document.getElementsByTagName('iframe'),
comment = document.querySelectorAll('div.comment-block'),
noComment = document.querySelectorAll('h4.comment-block');
let link = ['https://www.youtube.com/embed/7wB2GVWodiA', 'https://www.youtube.com/embed/Fssfi8ziVdw', 'https://www.youtube.com/embed/fhXQzPDO8d0', 'https://www.youtube.com/embed/vhaqnndhGRw', 'https://www.youtube.com/embed/Fssfi8ziVdw'];
for (let a = 0; a < link.length; a++) {
  var btn = document.createElement('button');
  document.getElementById('video-block').appendChild(btn);
  btn.setAttribute('onclick', 'video(' + a + ')');
  btn.innerHTML='Видео ' + (a + 1);
};
function video(e) {
  myIframe[0].src = link[e];
  if (comment.length >= e+1) {
    for (let i = 0; i < comment.length; i++) {
      comment[i].classList.add('none');
    }
    noComment[0].classList.add('none');
    comment[e].classList.remove('none');
  }
  else {
    for ( i = 0; i < comment.length; i++) {
      comment[i].classList.add('none');
    }
    noComment[0].classList.remove('none');
  }
};
//Массив для вставки в link
//['https://www.youtube.com/embed/7wB2GVWodiA', 'https://www.youtube.com/embed/Fssfi8ziVdw', 'https://www.youtube.com/embed/fhXQzPDO8d0', 'https://www.youtube.com/embed/vhaqnndhGRw','https://www.youtube.com/embed/bwMGZtZLRO4','https://www.youtube.com/embed/DkxwgIu1ETA','https://www.youtube.com/embed/8tn2r218r4s'];