try {
  document.getElementsByClassName("shaders")[0].remove();
  document.getElementsByClassName("hp_cont")[0].remove();
  document.getElementById("scroll_cont").className="scroll_cont show_none";
  document.getElementsByClassName("vs")[0].remove();
  
  document.getElementsByClassName("musCard")[0].style.opacity=.56;
  name = document.getElementById("iotd_title").innerHTML;
  if (!name) {name = document.getElementsByClassName("title")[1].innerHTML;}
}
finally {
  alert(name + ".jpg");
}
