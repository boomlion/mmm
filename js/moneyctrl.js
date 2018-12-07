// url to id 
$(function () {
  var url = 'http://127.0.0.1:9090/api/getmoneyctrl';
  var to = $('.product .buttom');
  var id = 'tmp';
  // mrRander(url,to,id);

  // 下面是分液器

  // var pageid=1;
  // rander();
  // function rander(){
  //   $.ajax({
  //     url: url,
  //     data: {
  //      pageid:pageid
  //     },
  //     dataType: 'json',
  //     success: function (info) {
  //      to.html(template(id, info))
  //     }
  //   })
  // }



  // 分页请求  数据

page(url,to);



})
