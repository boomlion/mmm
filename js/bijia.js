
$(function () {
  var num = gitUrl();
  rander();
  $('.navbar .road ul li:last-child a').append(num.brandname);
  $('.navbar .road ul li:last-child').click(function(){
    history.back;
  })
  function rander() {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getproduct',
      data: {
        productid: num.productId
      },
      dataType: 'json',
      success: function (info) {
        $('.table').html(template('tmp',info));
        console.log(info)
      }

    })
  }

rander1();
function rander1(){
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getproductcom',
    data: {
      productid: num.productId
    },
    dataType: 'json',
    success: function (info) {
      $('.askmore').html(template('tmp1',info));
      console.log(info)

    }

  })
}


})
