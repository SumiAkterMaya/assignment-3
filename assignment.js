//1.no problem
function kilometerToMeter(num) {
    if (num <= 0) {
        return "Distance can not be negative";
    } else {
        var result = num * 1000;
    }
    return result;
}
//var answer = kilometerToMeter();
//console.log(answer);

//2.no problem

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0) {
        return "only positive number is allowed";
    } else {
        var watchPrice = 50 * watch;
    }
    if (phone < 0) {
        return "only positive number is allowed";
    } else {
        var phonePrice = 100 * phone;
    }
    if (laptop < 0) {
        return "only positive number is allowed";
    } else {
        var laptopPrice = 500 * laptop;
    }

    var result = watchPrice + phonePrice + laptopPrice;
    return result;
}
//var total = budgetCalculator(0, 3, 2);
//console.log(total);

//3.no problem
function hotelCost(accomodationDay) {
    //accomodationDay=how many days you want to stay
    var cost = 0;
    if (accomodationDay <= 0) {
        return "error!! you should put positive number";
    } else if (accomodationDay <= 10) {
        cost = accomodationDay * 100;
    } else if (accomodationDay <= 20) {
        var firstCost = 10 * 100; //firstCost=first 10 days staying cost
        var remaining = accomodationDay - 10;
        var secondCost = remaining * 80;
        cost = firstCost + secondCost;
    } else {
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var remaining = accomodationDay - 20;
        var thirdCost = remaining * 50;
        cost = firstCost + secondCost + thirdCost;
    }
    return cost;
}
//var total = hotelCost(25);
//console.log(total);

//4.no problem
function megaFriend(name) {
    var max = name[0].length;
    var largestName = name[0];
    for (var i = 0; i < name.length; i++) {
        var element = name[i].length;
        if (element > max) {
            largestName = name[i];
            max = element;
        }
    }
    return largestName;
}
//console.log(megaFriend(["maya", "mahir", "samarah", "shahjahan", "shudhangshu"]));