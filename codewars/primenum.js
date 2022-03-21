function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num < 4) return true;
  if (num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5, N = Math.sqrt(num); i <= N; i += 2)
    if (num % i == 0) return false;
  return true;
}

console.log(isPrime(7));