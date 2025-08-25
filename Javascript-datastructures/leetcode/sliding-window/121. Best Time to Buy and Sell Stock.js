/**
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 */

var maxProfit = function(prices) {
    let buy = 0
    let sell = 1
    let maxProfit = 0

    while(sell<prices.length){
        if(prices[buy]<prices[sell]){
            let profit = prices[sell]-prices[buy]
            maxProfit = Math.max(profit,maxProfit)
        }else{
            buy=sell
        }
        sell++
    }
    return maxProfit
};

prices = [2,1,2,1,0,1,2]
console.log(maxProfit(prices))