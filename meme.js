
var check= false;
$("#input").change(function (event){
  var target= event.target || window.event.srcElement;
  var files= target.files;
  if(FileReader && files && files.length){
    var fr= new FileReader();
    fr.onload= function (){
      $('#img').attr('src',fr.result);
    }
    fr.readAsDataURL(files[0]);
    check=true;
  }
  else{

  }
});

var element = $("#main");
var getCanvas;

  $("#btn-preview").on('click', function () {
    if(check==true){

      html2canvas(element, {
      onrendered: function (canvas) {
              getCanvas = canvas;
              $("#btn-preview").css("display","none");
              $("#downloads").css("display","inline-block");
          }
      });
    }
    else{
      alert("Please upload your meme image")
    }
  });


$("#downloads").on('click', function () {
    var imgageData = getCanvas.toDataURL("image/png");
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
    $("#downloads").attr("download", "your_pic_name.png").attr("href", newData);
    $("#btn-preview").css("display","inline-block");
    $("#downloads").css("display","none");
    });
  

$("refresh").on('click',function (){
  location.reload();
})
