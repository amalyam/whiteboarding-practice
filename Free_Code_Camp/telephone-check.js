function telephoneCheck(str) {
  const validNumRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

  return validNumRegex.test(str);
}
