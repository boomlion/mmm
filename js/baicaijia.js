var url = 'http://127.0.0.1:9090/api/getbaicaijiatitle'
var to = $('.nav ul')
var id = 'tmp';
rander();
function rander() {
  $.ajax({
    url: url,
    dataType: 'json',
    success: function (info) {
      // console.log(info)
      to.html(template(id, info));

      render();
      var titleid = $('.nav ul').children()[0].getAttribute('data-id');
      console.log()
      page(titleid);

      new IScroll('.nav', {
        scrollX: true,
        scrollY: false
      })

    }


  })
}

function render() {
  var $box = $('.nav ul');
  var $lis = $box.children();
  var boxwidth = $box.width();
  var liswidth = $lis.width();
  var width = 0;
  for (var i = 0; i < $lis.length; i++) {
    width += $lis[i].offsetWidth;
  }
  $box.width(width + 2);
}
$('#ul').on('click', 'li', function () {
  $('#ul li').removeClass('active');
  $(this).addClass('active')
})




function page(id) {
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
    data: {
      titleid: id
    },
    success: function (info) {
      // console.log(info)
      var aiyou = info.result.splice(0, 16);
      console.log(info)
      $('.product .buttom').html(template('tmp1', { result: aiyou }))
      var flag = true;
      
      $(window).scroll(function () {
        var lastTop = $('.product .buttom .idmore:last-child').offset().top;
        var clientHeight = $(window).height();
        var scrollHeight = $(window).scrollTop();
        if (flag) {
          if (lastTop <= clientHeight + scrollHeight) {
            $('.product .buttom').append(template('tmp1', info));
            flag = false;
            console.log(flag)
          }
        }
      })
    }
  })
}

$('.nav ul').on('click', 'li', function (e) {
  // e.stopPropagation();
  titleid = $(this).data('id');
  page(titleid);
})