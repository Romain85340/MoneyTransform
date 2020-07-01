var url = "http://data.fixer.io/api/latest?access_key=c77a840597a7934b06ef954af80a337c&base=EUR&symbols=GBP,JPY,EUR,USD"
    

function recupererValeur(){
    $.ajax({
        url: url,
        type : "GET",
        success: function(res, status, req){
            var rates = res.rates 
              , fromAmount = document.getElementById("fromAmount").value;
            var from = document.getElementById("from").value;
            var to = document.getElementById("to").value;
            

        } // Callback
        
            })
}