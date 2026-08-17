export const totalByType = (transactions, type) => {
    return transactions
        .filter(transaction => transaction.type === type)
        .reduce((sum, { amount }) => {
            return sum + amount;
        }, 0);
};

export const formatReceipts = transactions => {
    return transactions.map(({ customer, amount }) => {
        return `${customer} | ${amount.toFixed(2)} ETB`;
    });
};

export const updateTransaction = (transaction, newAmount) => {
    return {
        ...transaction,
        amount: newAmount
    };
};