function onesDigit(n) {
  // your code here
	// Check if the input is a positive integer
  if (typeof n !== 'number' || n <= 0 || !Number.isInteger(n)) {
    throw new Error("Input is not a positive integer");
  }

  // Extract the ones digit by taking the remainder when divided by 10
  const ones = n % 10;

  return ones;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
