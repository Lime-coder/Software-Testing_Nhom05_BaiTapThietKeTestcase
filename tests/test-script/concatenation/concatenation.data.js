const concatenationCases = [
  { id: 'TC-CONCAT-001', name: 'Nối hai chuỗi số nguyên dương hợp lệ', first: '12', second: '34', expected: '1234' },
  { id: 'TC-CONCAT-002', name: 'Nối hai chuỗi ký tự chữ cái (Alphabetic strings)', first: 'Hello', second: 'World', expected: 'HelloWorld' },
  { id: 'TC-CONCAT-003', name: 'Nối chuỗi số âm và số thập phân', first: '-12.5', second: '3.4', expected: '-12.53.4' },
  { id: 'TC-CONCAT-004', name: 'Nối chuỗi kết hợp chữ, số và ký tự đặc biệt', first: 'User_01@', second: '#2026!', expected: 'User_01@#2026!' },
  { id: 'TC-CONCAT-005', name: 'Nối khi để trống ô First number và nhập chuỗi vào ô Second number', first: '', second: 'Test123', expected: 'Test123' },
  { id: 'TC-CONCAT-006', name: 'Nối khi để trống cả hai ô dữ liệu đầu vào (Độ dài biên 0 ký tự)', first: '', second: '', expected: '' },
  { id: 'TC-CONCAT-007', name: 'Nối hai chuỗi đạt độ dài biên tối đa (10 ký tự mỗi ô)', first: '1234567890', second: 'abcdefghij', expected: '1234567890abcdefghij' },
  { id: 'TC-CONCAT-010', name: 'Nối hai chuỗi có chứa ký tự khoảng trắng (Whitespace)', first: 'Hello ', second: ' World', expected: 'Hello  World' },
];

module.exports = { concatenationCases };
