$(function () {
  var num = gitUrl();
  // num是个对象可以直接调用
  // console.log(num.categoryId)
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcategorybyid',
    data: {
      categoryid: num.categoryId
    },
    dataType: 'json',
    success: function (info) {
      $('.navbar .road .fl').html(template('tmp', info))
    }
  })



  // 分页请求  数据
  var pageid = 1;
  var flag = true;
  rander();
  function rander() {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getproductlist',
      data: {
        categoryid: num.categoryId,
        pageid: pageid
      },
      dataType: 'json',
      success: function (info) {
        console.log(info)
        $('.buttom').html(template('tmp1', info));
        if (flag) {
          var num = Math.ceil(info.totalCount / info.pagesize)
          console.log(num);
          flag = false;
          fenpage(num);
        }
      }
    })
  }



  // 分页请求数据
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
  // 1:拿到select对象： var  myselect=document.getElementById("test");
  // var  myselect=document.querySelector("select");
  // var index=myselect.selectedIndex 
  // 2：拿到选中项的索引：var index=myselect.selectedIndex ;    
  // selectedIndex代表的是你所选中项的index
  //  var val= myselect.options[index].value;
  // 3:拿到选中项options的value：  myselect.options[index].value;
  // var vl=myselect.options[index].text
  // 4:拿到选中项options的text：  myselect.options[index].text;
  // $('select').on('click', function () {
  //   alert(5)
  //   console.log($(this).val())
  // console.log(index);
  // }
  // )

  function fenpage(num) {
    for (var i = 0; i < num; i++) {


      var options = document.createElement('option');
      options.text = i + 1;
      $('select').append(options);
    }


  }

})