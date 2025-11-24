let  monthlyexpenses = [2000, 1500, 3500, 4000];

function calculateTotal(expensesArray) {
    let total = 0;

    for (let i = 0; i < expensesArray.length; i++) {
        total += expensesArray[i];
    }
    console.log("Total Money Spent: ₹" + total);
}

calculateTotal(monthlyexpenses);
