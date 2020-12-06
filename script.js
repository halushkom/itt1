cash.onclick = function () {
    let action, output
    let sum = document.getElementById("sum").value;
    let price = document.getElementById('price').value
    let coins = {
        1: 'dollar',
        0.5: 'cents',
        0.25: 'cents',
        0.10: 'cents',
        0.05: 'cents',
        0.01: 'cents'
    }

    let result = (sum >= price) ? action = (sum - price).toFixed(2) : 'Not anough'
    console.log(result)

    output = 'Your rest is ' + Math.trunc(action) + ' dollars, ' + ((action - Math.trunc(action)).toFixed(2)) * 100 + ' cents'

    for (let coin in coins) {
        if (action >= coin) {
            let coin1 = (coin != 1) ? coin * 100 : coin
            output = output + "\n " + Math.trunc(action / coin) + " x " + coin1 + " " + coins[coin]
            action = (action - Math.trunc(action / coin) * coin).toFixed(2)
        }
    }

    alert(output)
}