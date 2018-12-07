var num=gitUrl();
console.log(num.couponid)
rander();
function rander(){
$.ajax({
  url:'http://127.0.0.1:9090/api/getcouponproduct',
  data:{
    couponid:num.couponid
  },
  dataType:'json',
  success:function(info){
    console.log(info)
$('.product .buttom').html(template('tmp',info))
  }
})

}