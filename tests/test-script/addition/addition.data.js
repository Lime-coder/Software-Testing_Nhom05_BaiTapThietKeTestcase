const additionCases = [
  { id: 'TC-ADDITION-001', name: 'Addition with positive integer numbers', first: '15', second: '25', integerOnly: false, expected: '40' },
  { id: 'TC-ADDITION-002', name: 'Addition with negative numbers', first: '-10', second: '-5', integerOnly: false, expected: '-15' },
  { id: 'TC-ADDITION-003', name: 'Addition with a positive and a negative number', first: '20', second: '-8', integerOnly: false, expected: '12' },
  { id: 'TC-ADDITION-004', name: 'Addition with zero', first: '0', second: '50', integerOnly: false, expected: '50' },
  { id: 'TC-ADDITION-005', name: 'Addition with decimal numbers', first: '10.5', second: '4.2', integerOnly: false, expected: '14.7' },
  { id: 'TC-ADDITION-006', name: 'Addition with decimal numbers and Integers only option', first: '10.5', second: '4.2', integerOnly: true, expected: '14' },
  { id: 'TC-ADDITION-007', name: 'Validation error for non-numeric input in Number 1', first: 'abc', second: '5', integerOnly: false, expected: 'Number 1 is not a number' },
  { id: 'TC-ADDITION-008', name: 'Validation error for non-numeric input in Number 2', first: '5', second: 'xyz', integerOnly: false, expected: 'Number 2 is not a number' },
  { id: 'TC-ADDITION-009', name: 'Validation error for empty input in Number 1', first: '', second: '10', integerOnly: false, expected: 'Number 1 is not a number' },
  { id: 'TC-ADDITION-010', name: 'Validation error for empty input in Number 2', first: '15', second: '', integerOnly: false, expected: 'Number 2 is not a number' },
  { id: 'TC-ADDITION-011', name: 'Addition with maximum length valid numbers (10 digits)', first: '9999999999', second: '1', integerOnly: false, expected: '10000000000' },
  { id: 'TC-ADDITION-012', name: 'Addition with maximum length negative numbers (10 characters)', first: '-999999999', second: '-1', integerOnly: false, expected: '-1000000000' },
  { id: 'TC-ADDITION-013', name: 'Addition with decimals missing leading zero', first: '.5', second: '.25', integerOnly: false, expected: '0.75' },
  { id: 'TC-ADDITION-014', name: 'Addition with inputs containing leading whitespace', first: '  15', second: '   25', integerOnly: false, expected: '40' },
  { id: 'TC-ADDITION-015', name: 'Addition with inputs containing trailing whitespace', first: '15  ', second: '25   ', integerOnly: false, expected: '40' },
  { id: 'TC-ADDITION-016', name: 'Validation error for whitespace-only input', first: '   ', second: '10', integerOnly: false, expected: 'Number 1 is not a number' },
  { id: 'TC-ADDITION-017', name: 'Validation error for multiple decimal points', first: '5.5.5', second: '10', integerOnly: false, expected: 'Number 1 is not a number' },
  { id: 'TC-ADDITION-018', name: 'Addition with very small decimal numbers', first: '0.00000001', second: '0.00000002', integerOnly: false, expected: '0.00000003' },
  { id: 'TC-ADDITION-019', name: 'Addition with combination of negative and decimal numbers', first: '-5.5', second: '2.3', integerOnly: false, expected: '-3.2' },
  { id: 'TC-ADDITION-020', name: 'Addition with zero and negative numbers', first: '0', second: '-10', integerOnly: false, expected: '-10' },
  { id: 'TC-ADDITION-021', name: 'Validation error for special characters in Number 1', first: '@#$', second: '10', integerOnly: false, expected: 'Number 1 is not a number' },
  { id: 'TC-ADDITION-022', name: 'Validation error for special characters in Number 2', first: '10', second: '*&^', integerOnly: false, expected: 'Number 2 is not a number' },
  { id: 'TC-ADDITION-023', name: 'Validation error when both fields are empty', first: '', second: '', integerOnly: false, expected: 'Number 1 is not a number' },
  { id: 'TC-ADDITION-024', name: 'Addition with scientific notation format', first: '1e3', second: '500', integerOnly: false, expected: '1500' }
];

module.exports = { additionCases };
