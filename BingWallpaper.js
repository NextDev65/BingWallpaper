document.getElementsByClassName("shaders")[0].remove();
document.getElementsByClassName("hp_cont")[0].remove();
document.getElementById("scroll_cont").className="scroll_cont show_none";
document.getElementsByClassName("vs")[0].remove();

document.getElementsByClassName("musCard")[0].style.opacity=.56;
if (document.getElementsByClassName("title")[1].innerHTML) {
  name = document.getElementsByClassName("title")[1].innerHTML;
}
else {
  name = document.getElementById("iotd_title").innerHTML;
}
alert(name+".jpg");


if (name == "") {name = document.getElementById("iotd_title").innerHTML;}
alert(document.getElementById("iotd_title").innerHTML);
