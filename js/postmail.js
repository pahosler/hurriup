$(document).ready(function(){
  var $el = $("#postmail");
  var $sendBtn = $el.find('#sendbutton')
  var $name = $el.find('#donar');
  var $email = $el.find('#email');
  var $message = $el.find('#message');
  var data = {
        access_token: "zxcpky49wbdyg8kudmhj9070"
    };

  function onSuccess() {
    return false;
    }

  function onError() {
        return false;
  }
  
  $sendBtn.click(function(){
    $sendBtn.prop('disabled',true)
    data['subject'] = "Message from hurrip.org landing page"
    data['text'] = `${$email.val()} ${$name.val()} ${$message.val()}`;

    $.post('https://postmail.invotes.com/send', data, onSuccess).fail(onError);
    return false;
  })
})
