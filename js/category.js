id='tmp';
to=$('.nav .more');
url='http://127.0.0.1:9090/api/getcategorytitle';
mrRander(url,to,id);

$('.nav .more').on('click','.big',function(){
var id=$(this).parent().data('id');
var num=$(this).data('num');
if(!$(this).hasClass('hide')){
// 如果没有hide类 就进行ajax发送请求，请求完成后再添加类
$.ajax({
  url:'http://127.0.0.1:9090/api/getcategory',
  data:{
    titleid:id
  },
  dataType:'json',
  success:function(info){
// $('.nav .more li:nth-child('+num+') .small ul').html(template('tmp1',info))
// $('.nav .more .big').addClass('hide');
// console.log(info)
var ul=$("#red"+id);
console.log(ul,info)
ul.html(template('tmp1',info))
ul.toggleClass('hide');

  }
})


}

})
