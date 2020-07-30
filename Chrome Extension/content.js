for (i = 1; i < 8; i++) {
    setTimeout(function () {
        document.getElementsByClassName("shaders")[0].remove();
        document.getElementsByClassName("hp_cont")[0].remove();
        document.getElementById("scroll_cont").className = "scroll_cont show_none";
        document.getElementsByClassName("vs")[0].remove();
        document.getElementsByClassName("musCard")[0].style.opacity = .56;
        var title = document.getElementsByClassName("title")[1].innerHTML;
        if (!title) {
            title = document.getElementById("iotd_title").innerHTML;
        }

        // by passing an object you can define default values e.g.: []
        chrome.storage.sync.get({
            sevenNames: []
        }, function (result) {
            // the input argument is ALWAYS an object containing the queried keys
            // so we select the key we need
            sevenDays = result.sevenNames;
            if (!sevenDays.includes(title)) {
                sevenDays.unshift(title);
                var dlButton = document.getElementsByClassName("downloadLink")[0];
                dlButton.download = title + ".jpg";
                setTimeout(function () {
                    dlButton.click();
                }, 1000);
            }
            if (sevenDays.length > 7) {
                sevenDays.pop();
            }
            // set the new array value to the same key
            chrome.storage.sync.set({
                sevenNames: sevenDays,
                HasBeenUploadedYet: false
            });
        });

        setTimeout(function () {
            document.getElementById('leftNav').click();
        }, 3000);
    }, 4000 * i);
};
