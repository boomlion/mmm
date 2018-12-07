function rander (){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getcoupon',
    dataType:'json',
    success:function(info){
$('#ul').html(template('tmp',info))
    }
  })
}

rander();