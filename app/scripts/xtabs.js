// Based on Fishbone.js
var XTabs = new Model({
  LS: window.localStorage,
  init: function(log){
    this.log = log;
    this.id = ~( ( new Date() * 1 ) * Math.random() );

    window.addEventListener('storage', this.handleMsg);
  },
  handleMsg: function(event){
    var msg = event.newValue;
    this.trigger('msg', JSON.parse(msg));
  },
  addMsg: function(msg){
    var $msg = document.createElement("li");
    $msg.innerHTML = msg;
    if(this.log){
      this.log.appendChild($msg);
    }
  },
  storeMsg: function(msg){
    msg = {
      msg: msg,
      time: new Date() * 1,
      id: this.id
    };
    this.LS.setItem('msg', JSON.stringify(msg));
    this.trigger('send', msg);
  }


});
