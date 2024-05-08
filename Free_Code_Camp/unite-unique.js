function uniteUnique(...arr) {
  let result = new Set([]);

  for (const subArr of arr) {
    for (const element of subArr) {
      if (!result.has(element)) {
        result.add(element);
      }
    }
  }

  return [...result];
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
