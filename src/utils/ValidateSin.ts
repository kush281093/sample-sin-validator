 // Main validation function
 export const ValidateSIN = (sin: string): { isValid: boolean | null, error: string | null } => {
    // Allow only digits and spaces
    const invalidCharacters = /[^0-9\s]/;
    if (invalidCharacters.test(sin)) {
      return {
        isValid: null,
        error: 'SIN can only contain numbers and spaces'
      };
    }
  
    // Remove spaces
    const cleanSIN = sin.replace(/\s+/g, '');
  
    // Step 1: Check if SIN is exactly 9 digits
    if (cleanSIN.length === 0) {
      return {
        isValid: null,
        error: 'SIN cannot be empty'
      };
    }
  
    if (cleanSIN.length !== 9) {
      return {
        isValid: null,
        error: 'SIN must contain exactly 9 digits'
      };
    }
  
    // Check if SIN consists of all the same digit
    if (/^(\d)\1+$/.test(cleanSIN)) {
      return {
        isValid: null,
        error: 'SIN cannot consist of all the same digit'
      };
    }
  
    // Step 2: Compute the checksum
    const checksum = computeChecksum(cleanSIN);
  
    // Step 3: Check if the checksum is divisible by 10
    const isValid = checksum % 10 === 0;
  
    return {
      isValid,
      error: isValid ? null : 'Invalid SIN'
    };
  };

  // Function to compute the checksum of the SIN
const computeChecksum = (sin: string): number => {
    let sum = 0;
    for (let i = 0; i < sin.length; i++) {
      let digit = parseInt(sin[i]);
  
      // Double every second digit (starting from index 1, 0-based)
      if (i % 2 === 1) {
        digit *= 2;
        if (digit > 9) {
          digit = Math.floor(digit / 10) + (digit % 10);
        }
      }
  
      sum += digit;
    }
  
    return sum;
  };
  