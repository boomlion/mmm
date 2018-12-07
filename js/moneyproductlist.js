var num=gitUrl();
console.log(num.productid);
rander();
function rander(){

  http://127.0.0.1:9090/api/getdiscountproduct
  $.ajax({
url:'http://127.0.0.1:9090/api/getmoneyctrlproduct',
data:{
  productid:num.productid
},
dataType:'json',
success:function(info){
$('.mask').html(template('tmp',info))
}

  })
}