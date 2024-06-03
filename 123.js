// arrayUtils.js

/**
 * Функция для суммирования всех элементов массива чисел
 * @param {number[]} arr - массив чисел
 * @returns {number} - сумма всех элементов массива
 */
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

/**
 * Функция для нахождения максимального значения в массиве чисел
 * @param {number[]} arr - массив чисел
 * @returns {number} - максимальное значение в массиве
 */
function maxArray(arr) {
    return Math.max(...arr);
}

/**
 * Функция для сортировки массива строк в алфавитном порядке
 * @param {string[]} arr - массив строк
 * @returns {string[]} - отсортированный массив строк
 */
function sortArrayAlphabetically(arr) {
    return arr.sort();
}

/**
 * Функция для фильтрации массива чисел, возвращает только четные числа
 * @param {number[]} arr - массив чисел
 * @returns {number[]} - массив только из четных чисел
 */
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

/**
 * Функция для переворачивания массива
 * @param {any[]} arr - массив любых элементов
 * @returns {any[]} - перевернутый массив
 */
function reverseArray(arr) {
    return arr.reverse();
}

// Экспортируем функции для использования в других модулях
module.exports = {
    sumArray,
    maxArray,
    sortArrayAlphabetically,
    filterEvenNumbers,
    reverseArray
};