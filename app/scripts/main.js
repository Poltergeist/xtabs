var log = document.querySelector('.log'),
  btn = document.querySelector('#send'),
  xTabs = new XTabs(log),
  post = function(msg){
    var $msg = document.createElement('li');
    $msg.innerHTML = msg.time + ': ' + msg.msg;
    log.appendChild($msg);
  },
  send = function(){
    var msg = document.querySelector('#msg').value;
    xTabs.storeMsg(msg);
  };
xTabs.on('msg', post);
xTabs.on('send', post);
btn.addEventListener('click', send);
