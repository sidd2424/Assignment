var msg;

msg="<p><code>The Script is located in external scrpit fle called math.js</code></p>"

function addNumbers(headParam,bodyParam)
{
    document.write(msg);
    var sum=headParam+bodyParam;
    return "Addition of "+headParam+" and "+bodyParam+" is:"+sum;
    
}