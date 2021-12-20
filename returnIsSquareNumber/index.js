var isSquare = function (n) {
  let check = Math.sqrt(n);
  if (check == NaN || Number.isInteger(check) == false) {
    return false;
  } else {
    return true;
  }
};
