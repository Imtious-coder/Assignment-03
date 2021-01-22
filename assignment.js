//github repo link here



// Problem-01(Kilometer to Meter Converter)

function kilometerToMeter(kiloMeter) {
    if (kiloMeter >= 0) {
        let result = kiloMeter * 1000;
        return result;
    }
    else {
        return "Please input a valid number."
    }
    return result;
}
// console.log(kilometerToMeter(11.4));




// Problem-02(Budget Calculator)

function budgetCalculator(ghori, phone, laptop) {

    var ghoriPrice = ghori * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;

    if (ghoriPrice < 0 || phonePrice < 0 || laptopPrice < 0) {
        return "Please input a positive number.It's can not be a nagative number...";
    }
    else {
        var totalBudget = ghoriPrice + phonePrice + laptopPrice;
    }
    return totalBudget;
}
// console.log(budgetCalculator(9, 2, 5,));




// Problem-03(Hotel Cost)

function hotelCost(day) {
    let result;
    if (day < 0) {
        return "It can't be negetive dude, you know!"
    } else if (day <= 10) {
        result = day * 100;
        return result;
    } else if (day > 10 && day <= 20) {
        result = 1000 + ((day - 10) * 80);
        return result;
    } else if (day > 20) {
        result = 1800 + ((day - 20) * 50)
    }
    return result;
}
//  console.log(hotelCost(21));