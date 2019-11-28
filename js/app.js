function on(img){
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (width > 960){
    var o_img=document.getElementById("overlay_img");
    document.getElementById("overlay").style.display="flex";
    o_img.src = img.src;
  }else{
    var o_img_m=document.getElementById("overlay_img_mobile");
    document.getElementById("overlay_mobile").style.display="flex";
    o_img_m.src = img.src;
  }
}
function off(){
  document.getElementById("overlay").style.display="none";
  document.getElementById("overlay_mobile").style.display="none";
}
