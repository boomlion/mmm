var num = gitUrl();
console.log(num.productid);
rander();
function rander() {


  $.ajax({
    url: 'http://127.0.0.1:9090/api/getdiscountproduct',
    data: {
      productid: num.productid
    },
    dataType: 'json',
    success: function (info) {
      console.log(info)
      $('.mask').html(template('tmp', info))
    }

  })
}