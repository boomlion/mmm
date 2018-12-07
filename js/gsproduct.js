function randershop() {
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getgsshop',
    dataType: 'json',
    success: function (info) {
      $('#jd').html(template('tmp', info))
      $('.jd span').text($('#jd li:first-child ').text())
      // console.log($('#jd li:first-child'));
      // offsetS();

      
    }
  })
}

function randerarea() {
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getgsshoparea',
    dataType: 'json',
    success: function (info) {
      // console.log(info)
      $('#from').html(template('area', info))
      $('.from span').text($('#from li:first-child ').text());

// offsetA();


    }
  })
}




randerarea();
randershop();
$('.jd').on('click', function (e) {
  // fa-caret-up.
  $('.jd i').toggleClass('fa-caret-up');
  $('#jd').toggle();
  var lis = $('#jd').find('li')
  console.log(lis);
})
$('.nav .from').on('click', function (e) {

  $('#from').toggle();
})
$('.allprice').on('click', function (e) {

  $('#allprice').toggle();
})


function offsetS() {
  var shopid = $('#jd');
  var lis = shopid.children(0);
shopid=lis.data('id')
}
function offsetA() {
  var shopid = $('#from');
  var lis = shopid.children(0);
areaid=lis.data('id')
}
// var areaid =0;


$('#jd').on('click', 'li', function (e) {
  $('#jd li').removeClass('check');
  $(this).addClass('check')
  $('#jd').hide();
  $('.jd span').text($(this).find('a').text());
  shopid=$(this).data('id')

  randerpage();

})
$('#from').on('click', 'li', function (e) {

  $('#from li').removeClass('check');
  $(this).addClass('check')
  $('#from').hide();
  $('.from span').text($(this).find('a').text());
areaid=$(this).data('id');
randerpage();
})
var shopid =0;
var areaid=0;
randerpage();
function randerpage() {
  $.ajax({
    url:'http://127.0.0.1:9090/api/getgsproduct',
    dataType:'json',
    data:{
      shopid:shopid,
      areaid:areaid
    },
    success:function(info){
$('.gsproduct ul').html(template('page',info))
    }
  })
}
