var num = gitUrl();
console.log(num.couponid)
rander();
function rander() {
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcouponproduct',
    data: {
      couponid: num.couponid
    },
    dataType: 'json',
    success: function (info) {
      // console.log(info)
      $('.product .buttom').html(template('tmp', info))
    }
  })

}


// 点击事件
var flag=true;
$('.product').on('click', '.idmore', function () {
  // 进行切换
  $('.mask').toggle();
  flag=false;
  // alert(2)
  // 获取图片地质
  $('.mask img').attr('src', $(this).find('img').attr('src'))
  var num = $(this).data('id');
  // 点击进行切换图片，图片为了获取简单用的动态id
  $('.fa-chevron-left').click(function () {
    num--;

    if (num === -1) {
      num = 0;
    }
    $('.mask img').attr('src', $('#l' + num).find('img').attr('src'));
    console.log($('#l' + num))
  })


  $('.fa-chevron-right').click(function () {
    num++;
    if (num > $('.idmore').length) {
      num == $('.idmore').length;
    }
    $('.mask img').attr('src', $('#l' + num).find('img').attr('src'))
    console.log($('#l' + num))

  })
  // console.log($(this).find('img').attr('src'))
})



$('.mask').click(function () {
 

    var e = window.event;
    // e.clientX,
    var top = $('.mask img')[0].getBoundingClientRect().y;
console.log(top, e.clientY)

    if (e.clientY < top) {
      if (!flag) {
      $('.mask').toggle();

      flag=true;

    }


  }
})