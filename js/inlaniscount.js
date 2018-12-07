// 这次要重新渲染


rander();
function rander(){
$.ajax({
  url:'http://127.0.0.1:9090/api/getinlanddiscount',
  dataType:'json',
  success:function(info){
var newarr=info.result.splice(16);
 
 $('.nav-pro ul').html(template('tmp',info));
// console.log( $('.img').scrollTop); $('.img').scrollTop
$(window).on('scroll',function(e){
  console.log(window.scrollTop,window.screen.height,e.offsetY)

})

// window.screenTop;
// $('.img').scrollTop();
//  var top=document.body.scrollTop;
// console.log(top)
// $(window).on('scroll',function(e){
//   var top = e.scrollTop
//  console.log(top)
// })

  }
})


}