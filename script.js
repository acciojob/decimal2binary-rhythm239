function decimalToBinary(num) {
    // Edge case: If the input number is 0, return "0"
    if (num === 0) return "0";
    
    let binary = "";
    
    // Continue dividing by 2 and storing remainders until num becomes 0
    while (num > 0) {
        binary = (num % 2) + binary;  // Append remainder at the beginning of the binary string
        num = Math.floor(num / 2);    // Update num to be half of its previous value
    }
    
    return binary;
}

window.decimalToBinary = decimalToBinary;
