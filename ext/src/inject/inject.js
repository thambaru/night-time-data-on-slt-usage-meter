var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

        // ----------------------------------------------------------
        // This part of the script triggers when page is done loading
        //
        // ----------------------------------------------------------
        var containerEl = $("#root > div > div > div:nth-child(3) > div > div > div > div:nth-child(3) > div.col-md-8 > div > div:nth-child(1) > div");
        var standardEl = $("#root > div > div > div:nth-child(3) > div > div > div > div:nth-child(3) > div.col-md-8 > div > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div > div:nth-child(4) > h6");


        var standardText = standardEl.text();
        var totalText = $("#root > div > div > div:nth-child(3) > div > div > div > div:nth-child(3) > div.col-md-8 > div > div:nth-child(1) > div > div > div > div:nth-child(2) > div > div > div:nth-child(4) > h6").text();

        var standardUsed = parseFloat(standardText.length == 21 ? standardText.substr(0, 4) : standardText.substr(0, 3));
        var standardAll = parseFloat(standardText.length == 21 ? standardText.substr(15, 4) : standardText.substr(14, 4));

        var totalUsed = parseFloat(totalText.length == 21 ? totalText.substr(0, 4) : totalText.substr(0, 3));
        var totalAll = parseFloat(totalText.length == 21 ? totalText.substr(15, 4) : totalText.substr(14, 4));

        //while(containerEl.length)
        containerEl.append("<h6 id='tnwsltntd' class='sc-dnqmqq jZsdgY'>Night Time: Please refresh the page</h6>");

        if (!(isNaN(totalUsed) || isNaN(totalAll) || isNaN(standardUsed) || isNaN(standardAll))) {
            var nightUsed = totalUsed - standardUsed;
            var nightAll = totalAll - standardAll;
            var nightText = nightUsed.toFixed(1) + "GB Used of " + nightAll.toFixed(1) + "GB";

            $("#tnwsltntd").text("Night Time: " + nightText);
        }
    }
}, 500);