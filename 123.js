// arrayUtils.js

/**
 * ������� ��� ������������ ���� ��������� ������� �����
 * @param {number[]} arr - ������ �����
 * @returns {number} - ����� ���� ��������� �������
 */
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

/**
 * ������� ��� ���������� ������������� �������� � ������� �����
 * @param {number[]} arr - ������ �����
 * @returns {number} - ������������ �������� � �������
 */
function maxArray(arr) {
    return Math.max(...arr);
}

/**
 * ������� ��� ���������� ������� ����� � ���������� �������
 * @param {string[]} arr - ������ �����
 * @returns {string[]} - ��������������� ������ �����
 */
function sortArrayAlphabetically(arr) {
    return arr.sort();
}

/**
 * ������� ��� ���������� ������� �����, ���������� ������ ������ �����
 * @param {number[]} arr - ������ �����
 * @returns {number[]} - ������ ������ �� ������ �����
 */
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

/**
 * ������� ��� ��������������� �������
 * @param {any[]} arr - ������ ����� ���������
 * @returns {any[]} - ������������ ������
 */
function reverseArray(arr) {
    return arr.reverse();
}

// ������������ ������� ��� ������������� � ������ �������
module.exports = {
    sumArray,
    maxArray,
    sortArrayAlphabetically,
    filterEvenNumbers,
    reverseArray
};