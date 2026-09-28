const multiplicationCases = [
  { id: 'TC-MUL-001', name: 'Nhân 2 số nguyên dương', first: '5', second: '4', integerOnly: false, expected: '20' },
  { id: 'TC-MUL-002', name: 'Nhân số nguyên dương lớn hơn', first: '123', second: '45', integerOnly: false, expected: '5535' },
  { id: 'TC-MUL-003', name: 'Số âm × số dương', first: '-5', second: '4', integerOnly: false, expected: '-20' },
  { id: 'TC-MUL-004', name: 'Số dương × số âm', first: '5', second: '-4', integerOnly: false, expected: '-20' },
  { id: 'TC-MUL-005', name: 'Số âm × số âm', first: '-5', second: '-4', integerOnly: false, expected: '20' },
  { id: 'TC-MUL-006', name: '0 × số dương', first: '0', second: '100', integerOnly: false, expected: '0' },
  { id: 'TC-MUL-007', name: 'Số dương × 0', first: '100', second: '0', integerOnly: false, expected: '0' },
  { id: 'TC-MUL-008', name: '0 × 0', first: '0', second: '0', integerOnly: false, expected: '0' },
  { id: 'TC-MUL-009', name: 'Số thập phân × số nguyên', first: '2.5', second: '4', integerOnly: false, expected: '10' },
  { id: 'TC-MUL-010', name: 'Số thập phân × số thập phân', first: '1.5', second: '2.5', integerOnly: false, expected: '3.75' },
  { id: 'TC-MUL-011', name: 'Số thập phân âm × số nguyên', first: '-2.5', second: '4', integerOnly: false, expected: '-10' },
  { id: 'TC-MUL-012', name: 'Kết quả thập phân khi Integer Only OFF', first: '2.5', second: '3', integerOnly: false, expected: '7.5' },
  { id: 'TC-MUL-013', name: 'Kết quả thập phân khi Integer Only ON', first: '2.5', second: '3', integerOnly: true, expected: '7' },
  { id: 'TC-MUL-014', name: 'Kết quả âm thập phân với Integer Only ON', first: '-2.5', second: '3', integerOnly: true, expected: '-7' },
  { id: 'TC-MUL-015', name: 'First number là chữ', first: 'abc', second: '5', integerOnly: false, expected: 'Number 1 is not a number' },
  { id: 'TC-MUL-016', name: 'Second number là chữ', first: '5', second: 'abc', integerOnly: false, expected: 'Number 2 is not a number' },
  { id: 'TC-MUL-017', name: 'Cả hai input đều không phải số', first: 'abc', second: 'xyz', integerOnly: false, expected: 'Number 1 is not a number' },
  { id: 'TC-MUL-018', name: 'First number chứa chữ và số', first: '12abc', second: '5', integerOnly: false, expected: 'Number 1 is not a number' },
  { id: 'TC-MUL-019', name: 'Second number chứa ký tự đặc biệt', first: '5', second: '@#$', integerOnly: false, expected: 'Number 2 is not a number' },
  { id: 'TC-MUL-020', name: 'Kiểm tra giới hạn 10 ký tự', first: '9999999999', second: '1', integerOnly: false, expected: '9999999999' },
];

module.exports = { multiplicationCases };
