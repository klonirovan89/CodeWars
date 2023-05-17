function findDifference(a, b) {
  let result = (a[0]*a[1]*a[2])-(b[0]*b[1]*b[2]);
  return result > 0 ? result : result*(-1);
  }
