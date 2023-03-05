try {
    // top shader
    document.getElementsByClassName("shaders")[0].remove();
    // top bar
    document.getElementsByClassName("hp_cont")[0].remove();
    // floating quiz
    document.getElementsByClassName('hp_trivia_outer show')[0].remove();
    // bottom carousel
    document.getElementById("scroll_cont").className = "scroll_cont show_none";
    document.getElementsByClassName("vs")[0].remove();
    // description card
    document.getElementsByClassName("musCard")[0].style.opacity = .50;
}
finally {
    var name = document.getElementsByClassName("title")[1].innerHTML;
    if (!name) {name = document.getElementById("iotd_title").innerHTML;}
  
    var dlButton = document.getElementsByClassName("downloadLink")[0];
    dlButton.download = name + ".jpg";
    dlButton.click();
}
