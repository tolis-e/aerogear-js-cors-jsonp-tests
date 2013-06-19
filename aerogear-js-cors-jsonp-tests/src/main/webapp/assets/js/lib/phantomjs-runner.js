function waitFor(testFx, onReady, timeOutMillis) 
{
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 30001,
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function () 
        {
            if ((new Date().getTime() - start < maxtimeOutMillis) && !condition) 
            {
                condition = (typeof (testFx) === "string" ? eval(testFx) : testFx());
            } 
            else 
            {
                if (!condition) 
                {
                    phantom.exit(1);
                } 
                else 
                {
                    typeof (onReady) === "string" ? eval(onReady) : onReady();
                    clearInterval(interval);
                }
            }
        }, 100);
};

var page = require('webpage').create();

page.onConsoleMessage = function (msg)
{
    console.log(msg);
};

page.open(phantom.args[0], function (status) 
{
    if (status !== "success") 
    {
        phantom.exit(1);
    } 
    else 
    {
        waitFor(
            function () 
            {
                return page.evaluate(
                    function () 
                    {
                        var results = document.getElementById('qunit-testresult');
                        return results && results.innerText.match('completed');
                    }
                );
            }, //testFx end
            function () 
            {
                var failures = page.evaluate(
                    function () 
                    {
                        var results = document.getElementById('qunit-testresult');
                        console.log(results.innerText);
                        try {
                            return results.getElementsByClassName('failed')[0].innerHTML;
                        } catch (e) {
                        }
                        return 15000;
                    }
                ); // onReady end
                phantom.exit((parseInt(failures, 10) > 0) ? 1 : 0);
            }
        ); //waitFor end
    }
});
