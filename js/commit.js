function mrRander(url,to,id) {

  $.ajax({
    url: url,
    dataType: 'json',
    success: function (info) {
      console.log(info)
     to.html(template(id,info))
    }
  })
}

$('.mmm-logo i').click(function(){
  location.href="index.html";
  // alert(5)
})

function gitUrl(){
  var load = decodeURI(location.search);
  // 接受一下
  load = load.slice(1)

  var arr = load.split('&');


  var obj = {};
  // 遍历数组, 取得键和值
  arr.forEach(function( v, i ) {  // v 每一项  "age=18"
    var key = v.split("=")[0];  // age
    var value = v.split("=")[1];  // 18
    obj[ key ] = value;
  })
  return obj;
}





// 分页



function page(url,to){
    
  var pageid = 1;
  var flag = true;
  rander();
  function rander() {
    $.ajax({
      url: url,
      data: {
        // categoryid: num.categoryId,
        pageid: pageid
      },
      dataType: 'json',
      success: function (info) {
        console.log(info)
        to.html(template('tmp', info));
        if (flag) {
          var num = Math.ceil(info.totalCount / info.pagesize)
          console.log(num);
          flag = false;
          fenpage(num);
        }
      }
    })
  }




  $('select').on('change', function () {
    pageid = $(this).val();
    rander();
  })
  $('#page .last').click(function () {
    var page = $('select').val();
    if (page <= 1) {
      return;
    }
    page--;
    $('select').val(page);
    pageid = page;
    rander();
  })

  $('#page .next').click(function () {
    var page = $('select').val();
    if (page >= 3) {
      return;
    }
    page--;
    $('select').val(page);
    pageid = page;
    rander();
  })





  function fenpage(num) {
    for (var i = 0; i < num; i++) {
      var options = document.createElement('option');
      options.text = i + 1;
      $('select').append(options);
    }


  }
  }