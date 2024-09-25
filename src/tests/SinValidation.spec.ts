import { describe, it, expect } from 'vitest';
import { ValidateSIN } from '../utils/ValidateSin';

describe('SIN Validator Tests', () => {
  describe('validateSIN', () => {
    it('should return valid for a correct SIN', () => {
      const { isValid, error } = ValidateSIN('046454286');
      expect(isValid).toBe(true);
      expect(error).toBeNull();
    });

    it('should compute the checksum correctly for a SIN with spaces', () => {
        const { isValid, error } = ValidateSIN('046 454 286'); // Valid SIN with spaces
        expect(isValid).toBe(true);
        expect(error).toBeNull();
      });

    it('should return invalid for an incorrect SIN', () => {
      const { isValid, error } = ValidateSIN('046454287');
      expect(isValid).toBe(false);
      expect(error).toBe('Invalid SIN');
    });

    it('should return error for SIN containing invalid characters', () => {
      const { isValid, error } = ValidateSIN('04645428A');
      expect(isValid).toBeNull();
      expect(error).toBe('SIN can only contain numbers and spaces');
    });

    it('should return error for empty SIN', () => {
      const { isValid, error } = ValidateSIN('');
      expect(isValid).toBeNull();
      expect(error).toBe('SIN cannot be empty');
    });

    it('should return error for SIN with incorrect length', () => {
      const { isValid, error } = ValidateSIN('12345678'); //  8 digits
      expect(isValid).toBeNull();
      expect(error).toBe('SIN must contain exactly 9 digits');
    });

    it('should return error for SIN with incorrect length', () => {
      const { isValid, error } = ValidateSIN('1234567889'); // 10 digits
      expect(isValid).toBeNull();
      expect(error).toBe('SIN must contain exactly 9 digits');
    });

    it('should return error for SIN with all the same digit', () => {
      const { isValid, error } = ValidateSIN('111111111');
      expect(isValid).toBeNull();
      expect(error).toBe('SIN cannot consist of all the same digit');
    });
  });
});
