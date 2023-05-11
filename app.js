
async function start() {
   try {
       console.log("start");
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=USD%2CSGD");
        const data = await response.json();

        createCoinList(data);    
   } catch (e) {
        console.log("error");
   }
}

start();
startTime();    
setInterval(start, 10000);

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    m = checkTime(m);
    s = checkTime(s);
    // document.getElementById("child0").innerHTML = "<h5>BTC</h5>";
    document.getElementById('child0').innerHTML =  "<h1>" + h + ":" + m + ":" + s + "</h1>";
    document.getElementById("child0").innerHTML += "<h3>" + currentDay + "/" + currentMonth + "</h3>";

    // document.getElementById("child0").innerHTML = "<h5>BTC</h5>";
    // document.getElementById("child0").innerHTML += "<h2>" + n + "</h2>";
    // document.getElementById("child0").innerHTML += "<h3>S$" + Math.trunc(coinData.bitcoin.sgd) + "</h3>";
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

function convertDate(msec) {
    var date = new Date(msec);
    return date.toString();
}

function createCoinList(coinData) {
    
    /*
    Object.keys(coinData).map(function(coin) {
        console.log(coin);
    }
    );
    */

    //console.log(coinData.bitcoin); 
    //console.log(coinData.ethereum);

    //console.log(coinData.bitcoin.sgd)

    document.getElementById("child1").innerHTML = "<h5>BTC</h5>";
    document.getElementById("child1").innerHTML += "<h1>$" + Math.trunc(coinData.bitcoin.usd) + "</h1>";
    document.getElementById("child1").innerHTML += "<h3>S$" + Math.trunc(coinData.bitcoin.sgd) + "</h3>";
    
    document.getElementById("child2").innerHTML = "<h5>ETH</h5>";
    document.getElementById("child2").innerHTML += "<h1>$" + Math.trunc(coinData.ethereum.usd) + "</h1>";
    document.getElementById("child2").innerHTML += "<h3>S$" + Math.trunc(coinData.ethereum.sgd) + "</h3>";    

    //document.getElementById("container").innerHTML += "<p>Last updated: " + convertDate(coinData.ethereum.last_updated_at) + "</p>";    

}



