var myIframe = document.getElementsByTagName('iframe');
var comment = document.querySelectorAll('div.comment-block');
let link = ['https://www.youtube.com/embed/7wB2GVWodiA', 'https://www.youtube.com/embed/Fssfi8ziVdw', 'https://www.youtube.com/embed/fhXQzPDO8d0', 'https://www.youtube.com/embed/vhaqnndhGRw'];
for (let a = 0; a < link.length; a++) {
  var btn = document.createElement('button');
  document.getElementById('men').appendChild(btn);
  btn.setAttribute('onclick', 'video('+ a +')');
  var b = a + 1;
  btn.innerHTML='Видео ' + b;
};
function video(e) {
  myIframe[0].src = link[e];
  if (comment[e].className !== 'comment-block') {
    for (let i = 0; i < comment.length; i++) {
      comment[i].className = 'comment-block none';
    }
    comment[e].className = 'comment-block';
  }

};
