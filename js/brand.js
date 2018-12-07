var num=gitUrl();

// console.log(num.brandTitleid)
rander(); 
function rander(){
  $.ajax({
    url:'http://127.0.0.1:9090/api/getbrand',
    data:{
      brandtitleid:num.brandTitleid 
    },
    dataType:'json',
    success:function(info){
      $('#ul').html(template('tmp',info))
      }
  })
}

$('.paihang h3').html(num.brandtitle);


var pageSize=4;
rander1();
function rander1(){
$.ajax({
url:'http://127.0.0.1:9090/api/getbrandproductlist',
data:{
  brandtitleid:num.brandTitleid,
  pagesize:pageSize
},  
dataType:'json',
success:function(info){
  console.log(info)
 $('.product1 .buttom').html(template('tmp1',info));
 var firstId = $(".product1 .buttom .idmore").eq(0).data("id");
 var img = $(".product1 .buttom .idmore:first-of-type img").attr("src");
 var text = $(".product1 .buttom .idmore:first-child .info .kfc").text();
console.log(firstId,img,text );
 $.ajax({
  url: "http://127.0.0.1:9090/api/getproductcom",
  data: {
    productid: firstId
  },
  dataType: "json",
  success: function (info) {
    if (info) {
      var result = info.result;
      result.forEach(function (v, i) {
        v.text = text;
        v.img = img;
      })
      $(".product .buttom").html(template("ljl", info));
    }

  }
})
}
})
}



// rander2();

// function rander2(){
//   $.ajax({
//     url:'http://127.0.0.1:9090/api/getproductcom',

//   })
// }