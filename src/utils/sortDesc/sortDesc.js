/**
 * Sorts items in descending order.
 *
 * @param {Object[]} items
 * @param {string} [key="popularity"] - Key to sort on.
 * @returns {Object[]} - Sorted items.
 */
const sortDesc = (items, key = 'popularity') => items.sort((a, b) => b[key] - a[key]);

export default sortDesc;
