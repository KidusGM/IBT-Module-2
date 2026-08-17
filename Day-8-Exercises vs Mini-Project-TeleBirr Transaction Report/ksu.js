import { pr } from "./kpr.js";
import {
    totalByType,
    formatReceipts,
    updateTransaction
} from "./report.js";
import { transactions } from "./transactions.js";


const credits = transactions.filter(transaction => transaction.type === "credit");

const debits = transactions.filter(transaction => transaction.type === "debit");

const totalCredits = totalByType(transactions, "credit");

const totalDebits = totalByType(transactions, "debit");

const grandTotal = transactions.reduce((sum, transaction) => {
    return sum + transaction.amount;
}, 0);


const receipts = formatReceipts(transactions);


const correctedTransaction = updateTransaction(
    transactions[0],
    transactions[0].amount + 1500
    
);

const correctedTransaction1 = updateTransaction(
    transactions[1],
    transactions[1].amount + 2500
    
);


receipts.forEach(receipt => {
    console.log(receipt);
});


console.log("\nCredit Transactions:");

credits.forEach(transaction => {
    console.log(
        `#${transaction.id} | ${transaction.customer} | ${pr(transaction.amount)}`
    );
});


console.log("\nDebit Transactions:");

debits.forEach(transaction => {
    console.log(
        `#${transaction.id} | ${transaction.customer} | ${pr(transaction.amount)}`
    );
});


console.log(`\nTotal Credits: ${pr(totalCredits)}`);

console.log(`Total Debits: ${pr(totalDebits)}`);

console.log(`\nGrand Total: ${pr(grandTotal)}`);


console.log("\nCorrected Transaction:");

console.log(
    `#${correctedTransaction.id} | ${correctedTransaction.customer} | ${pr(correctedTransaction.amount)}`
);


console.log("\nCorrected Transaction 1:");

console.log(
    `#${correctedTransaction1.id} | ${correctedTransaction1.customer} | ${pr(correctedTransaction1.amount)}`
);


console.log("\nOriginal Transaction:");

console.log(
    `#${transactions[0].id} | ${transactions[0].customer} | ${pr(transactions[0].amount)}`
);



console.log(
    `#${transactions[1].id} | ${transactions[1].customer} | ${pr(transactions[1].amount)}`
);