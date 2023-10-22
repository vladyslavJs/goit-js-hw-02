// Задача 2. Форматування повідомлення

// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

function formatMessage(message, maxLength) {
    const modifiiedMessage = message.slice(0, maxLength) + '...';
    const result = message.length <= maxLength ? `${message}` : `${modifiiedMessage}`;
    return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"














 