const numbers = [3, 7, 10, 15, 20];

const result = numbers.find((num) => {
  return num > 10;
});

console.log(result); // Output: 15 (first number greater than 10)

// 🔹 Definition (Easy Words):
// .find() is used to search an array and return the first element that matches a condition.

// If no element matches, it returns undefined.
// 🔹 Important:
// .find() returns the element, not its index.

// It returns only one item — the first one that matches.

// 🆚 Difference from .filter():
// .filter() → returns all matching elements in a new array.

// .find() → returns only the first matching element.