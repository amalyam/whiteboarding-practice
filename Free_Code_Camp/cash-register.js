function checkCashRegister(price, cash, cid) {
  const amountDue = cash - price;

  let totalCid = calculateTotal(cid);

  if (totalCid - amountDue < 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalCid - amountDue === 0) {
    return { status: "CLOSED", change: cid };
  }

  const change = calculateChange(amountDue, cid);

  return { status: "OPEN", change };
}

function calculateTotal(cid) {
  let total = 0;

  for (let i = 0; i < cid.length; i++) {
    total += cid[i][1];
  }

  return total;
}

function calculateChange(amountDue, cid) {
  let newCid = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    if (cid[i][0] === "ONE HUNDRED" && cid[i][1] > 0) {
      let totalBills = cid[i][1] / 100;
      let count = 0;
      while (amountDue >= 100 && totalBills > 0) {
        if (amountDue - 100 >= 0) {
          amountDue -= 100;
          count++;
          totalBills--;
        }
      }
      newCid.unshift(["ONE HUNDRED", cid[i][1] - 100 * count]);
    }
    if (cid[i][0] === "TWENTY" && cid[i][1] > 0) {
      let totalBills = cid[i][1] / 20;
      let count = 0;
      while (amountDue >= 20 && totalBills > 0) {
        if (amountDue - 20 >= 0) {
          amountDue -= 20;
          count++;
        }
        totalBills--;
      }
      newCid.unshift(["TWENTY", cid[i][1] - 20 * count]);
    }
    if (cid[i][0] === "TEN" && cid[i][1] > 0) {
      let totalBills = cid[i][1] / 10;
      let count = 0;
      while (amountDue >= 10 && totalBills > 0) {
        if (amountDue - 10 >= 0) {
          amountDue -= 10;
          count++;
        }
        totalBills--;
      }
      newCid.unshift(["TEN", cid[i][1] - 10 * count]);
    }
    if (cid[i][0] === "FIVE" && cid[i][1] > 0) {
      let totalBills = cid[i][1] / 5;
      let count = 0;
      while (amountDue >= 5 && totalBills > 0) {
        if (amountDue - 5 >= 0) {
          amountDue -= 5;
          count++;
        }
        totalBills--;
      }
      newCid.unshift(["FIVE", cid[i][1] - 5 * count]);
    }
    if (cid[i][0] === "ONE" && cid[i][1] > 0) {
      let totalBills = cid[i][1];
      let count = 0;
      while (amountDue >= 1 && totalBills > 0) {
        if (amountDue - 1 >= 0) {
          amountDue -= 1;
          count++;
        }
        totalBills--;
      }
      newCid.unshift(["ONE", cid[i][1] - count]);
    }
    if (cid[i][0] === "QUARTER" && cid[i][1] > 0) {
      let totalCoins = cid[i][1] / 0.25;
      let count = 0;
      while (amountDue >= 0.25 && totalCoins > 0) {
        if (amountDue - 0.25 >= 0) {
          amountDue -= 0.25;
          count++;
        }
        totalCoins--;
      }
      newCid.unshift(["QUARTER", cid[i][1] - 0.25 * count]);
    }
    if (cid[i][0] === "DIME" && cid[i][1] > 0) {
      let totalCoins = cid[i][1] / 0.1;
      let count = 0;
      while (amountDue >= 0.1 && totalCoins > 0) {
        if (amountDue - 0.1 >= 0) {
          amountDue -= 0.1;
          count++;
        }
        totalCoins--;
      }
      newCid.unshift(["DIME", cid[i][1] - 0.1 * count]);
    }
    if (cid[i][0] === "NICKEL" && cid[i][1] > 0) {
      let totalCoins = cid[i][1] / 0.05;
      let count = 0;
      while (amountDue >= 0.05 && totalCoins > 0) {
        if (amountDue - 0.05 >= 0) {
          amountDue -= 0.05;
          count++;
        }
        totalCoins--;
      }
      newCid.unshift(["NICKEL", cid[i][1] - 0.05 * count]);
    }
    if (cid[i][0] === "PENNY" && cid[i][1] > 0) {
      let totalCoins = cid[i][1] / 0.01;
      let count = 0;
      while (amountDue >= 0.01 && totalCoins > 0) {
        if (amountDue - 0.01 >= 0) {
          amountDue -= 0.01;
          count++;
        }
        totalCoins--;
      }
      newCid.unshift(["PENNY", cid[i][1] - 0.01 * count]);
    }
  }
  return newCid;
}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// ); // should return an object.
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
); // should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
); // should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
); // should return {status: "INSUFFICIENT_FUNDS", change: []}.
// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// ); // should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
