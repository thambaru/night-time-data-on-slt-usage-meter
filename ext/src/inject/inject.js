chrome.extension.sendMessage({}, function (response) {
    var tnwx = 0;
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            if (tnwx == 10)
                clearInterval(readyStateCheckInterval);

            var containerEl = $("#root > div > div > div:nth-child(3) > div > div > div > div:nth-child(3) > div.col-md-8 > div > div:nth-child(1) > div > div");
            var standardEl = $("#root > div > div > div:nth-child(3) > div > div > div > div:nth-child(3) > div.col-md-8 > div > div:nth-child(1) > div > div > div > div:nth-child(1) > div > div > div:nth-child(4) > h6");
            var validTill = $("#root > div > div > div:nth-child(3) > div > div > div > div:nth-child(3) > div.col-md-8 > div > div:nth-child(1) > div > div > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(4) > p > em").text();

            var regext = /(\d+\.\d+GB)/g;

            var standardText = standardEl.text().match(regext);
            var totalText = $("#root > div > div > div:nth-child(3) > div > div > div > div:nth-child(3) > div.col-md-8 > div > div:nth-child(1) > div > div > div > div:nth-child(2) > div > div > div:nth-child(4) > h6").text().match(regext);

            var standardUsed = parseFloat(standardText[0]);
            var standardAll = parseFloat(standardText[1]);

            var totalUsed = parseFloat(totalText[0]);
            var totalAll = parseFloat(totalText[1]);

            $('#tnwsltntd-container').remove();
            containerEl.append("<div class='row' id='tnwsltntd-container'>");

            if (!(isNaN(totalUsed) || isNaN(totalAll) || isNaN(standardUsed) || isNaN(standardAll))) {
                var nightUsed = totalUsed - standardUsed;
                var nightAll = totalAll - standardAll;
                var nightText = nightUsed.toFixed(1) + "GB Used of " + nightAll.toFixed(1) + "GB";
                var nightRemaining = (nightAll - nightUsed).toFixed(1);
                var nightRemainingPercentage = ((nightRemaining / nightAll) * 100).toFixed(0);

                $('#tnwsltntd-container').html("<div class='col-lg-12 col-md-12'><div class='sc-kgAjT kziELt'><div class='inner-node'><h6 class='sc-dnqmqq hZAKPK'>Night Data</h6><div style='margin-top: 10px;'></div><div style='position: relative;'><svg width='180' height='180' viewBox='-25 -25 400 400'><circle stroke='rgba(20,128,225,0.2)' cx='175' cy='175' r='175' stroke-width='40' fill='none'></circle><circle stroke='#2597D8' transform='rotate(-90 175 175)' cx='175' cy='175' r='175' stroke-dasharray='1100' stroke-width='40' stroke-dashoffset='1100' stroke-linecap='butt' fill='none' style='stroke-dashoffset:" + (1100 - (nightRemainingPercentage * 11)) + "; transition: stroke-dashoffset 1s ease-out 0s;'></circle><text fill='#2597D8' x='50%' y='46%' dx='-25' text-anchor='middle' class='remaining-int'>" + nightRemainingPercentage + "<tspan dx='10'>%</tspan></text></svg><p class='remaining-text'>Remaining</p></div><div style='margin-top: -40px;'><h6 id='tnwsltntd-text' class='sc-dnqmqq jZsdgY'>Night Time: Please refresh the page</h6><p style='font-size: 12px; margin: 0px; font-weight: 600; color: rgba(255, 95, 88, 0.9);'><em>" + validTill + "</em></p></div></div></div></div>");
                $("#tnwsltntd-text").text(nightText);
            }
            tnwx++;
        }
    }, 1000);
});