# Title: [BUG][Multiplication] Integers only bị khóa ở trạng thái On trên build 4

## Found by Test Case

TC-MUL-001–TC-MUL-012, TC-MUL-015–TC-MUL-020

## Requirement liên quan

FR-MUL-02

## Severity / Priority

Major / P1

## Environment

- Browser: Chromium 153.0.8010.12
- OS: Windows
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: 4
- Operation: Multiply
- Automation tool: Playwright 1.63.0

## Steps to reproduce

1. Mở trang Basic Calculator
2. Chọn build `4`
3. Chọn operation `Multiply`
4. Quan sát tùy chọn Integers only
5. Thử tắt Integers only

## Expected result

Integers only được bật hoặc tắt theo lựa chọn của user.

## Actual result

Integers only luôn ở trạng thái On và checkbox bị vô hiệu hóa. User không thể
chuyển sang Off; 18 test case yêu cầu Off không thể tiếp tục đúng theo test data.

## Evidence

- Screenshot: [BUG-MUL-002.png](evidence/BUG-MUL-002.png)
- Playwright error:
  `Không thể đặt Integers only thành Off: checkbox đang bị vô hiệu hóa ở trạng thái On.`
- Locator: `getByTestId('integerSelect')`
- Kết quả suite: `2 passed, 18 failed (1.2m)`
