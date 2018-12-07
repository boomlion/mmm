$(function () {
  $('.more').click(function () {


  })

$('.mmm-nav').on('click','.more',function(){
  $('.mmm-nav ul li.have').toggleClass('nohave');

})


var url = 'http://127.0.0.1:9090/api/getmoneyctrl';
var to=$('.product .buttom');
var id='tmp';
  mrRander(url,to,id)




var url1='http://127.0.0.1:9090/api/getindexmenu';
var to1=$('.mmm-nav ul');
var id1='tmp1';
mrRander(url1,to1,id1);


})