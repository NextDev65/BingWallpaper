for (i = 1; i < 21; i++) {
    setTimeout(function () {
        try {
            document.getElementsByClassName("shaders")[0].remove();
            document.getElementsByClassName("hp_cont")[0].remove();
            document.getElementById("scroll_cont").className = "scroll_cont show_none";
            document.getElementsByClassName("vs")[0].remove();
            document.getElementsByClassName("musCard")[0].style.opacity = .56;
        } catch (e) {}
        var title = document.getElementsByClassName("title")[1].innerHTML;
        if (!title) {
            title = document.getElementById("iotd_title").innerHTML;
        }
		
		// document.getElementsByClassName("downloadLink")[0].href.split("&rf")[0]
		var dlButton = document.getElementsByClassName("downloadLink")[0];
        dlButton.download = title + ".jpg";
		
        // by passing an object you can define default values e.g.: []
        chrome.storage.sync.get({
            sevenNames: []
        }, function (result) {
            // the input argument is ALWAYS an object containing the queried keys
            // so we select the key we need
            sevenDays = result.sevenNames;
            //console.log(sevenNames);
            console.log(sevenDays);
            if (!sevenDays.includes(title)) {
                sevenDays.unshift(title);
                setTimeout(function () {
                    dlButton.click();
                }, 1000);
            }
            if (sevenDays.length > 0) {
                sevenDays.pop();
            }
            // set the new array value to the same key
            chrome.storage.sync.set({
                sevenNames: sevenDays
            });
        });

        setTimeout(function () {
            document.getElementById('leftNav').click();
        }, 3000);
    }, 4000 * i);
};
