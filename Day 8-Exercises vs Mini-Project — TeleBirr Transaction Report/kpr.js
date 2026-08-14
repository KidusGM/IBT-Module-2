export const VAT = 0.15;

export const addVat = amount => {
    return amount * (1 + VAT);
};

export const pr = amount => {
    return `${amount.toFixed(2)} ETB`;
};