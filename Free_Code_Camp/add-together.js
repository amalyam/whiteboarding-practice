function addTogether(...args) {
  if (args.length === 1 && Number.isFinite(args[0])) {
    return function (b) {
      if (Number.isFinite(b)) {
        return args[0] + b;
      }
    };
  }
  if (Number.isFinite(args[0]) && Number.isFinite(args[1])) {
    return args[0] + args[1];
  }

  return undefined;
}

// console.log(addTogether(2, 3)); // should return 5
console.log(addTogether(5)(7)); // should return 12.
console.log(addTogether(2)([3])); // should return undefined.
