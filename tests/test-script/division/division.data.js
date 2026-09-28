const divisionCases = [
  { id: 'TC-DIV-001', name: 'Chia hai số nguyên dương có kết quả nguyên', first: '12', second: '3', expected: '4' },
  { id: 'TC-DIV-002', name: 'Chia hai số nguyên có kết quả thập phân', first: '7', second: '2', expected: '3.5' },
  { id: 'TC-DIV-003', name: 'Chia 0 cho số khác 0', first: '0', second: '5', expected: '0' },
  { id: 'TC-DIV-004', name: 'Chia số nguyên dương cho 1', first: '9', second: '1', expected: '9' },
  { id: 'TC-DIV-005', name: 'Số âm chia cho số dương', first: '-8', second: '2', expected: '-4' },
  { id: 'TC-DIV-006', name: 'Số dương chia cho số âm', first: '8', second: '-2', expected: '-4' },
  { id: 'TC-DIV-007', name: 'Số âm chia cho số âm', first: '-8', second: '-2', expected: '4' },
  { id: 'TC-DIV-008', name: 'Chia hai số thập phân', first: '5.5', second: '2.2', expected: '2.5' },
  { id: 'TC-DIV-009', name: 'Chia cho 0 hiển thị lỗi và khôi phục thao tác', first: '8', second: '0', expectedError: 'Divide by zero error!' },
];

module.exports = { divisionCases };
