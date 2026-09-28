# Title: [BUG][Multiplication] Nút Clear bị vô hiệu hóa khi chọn build 5

## Found by Test Case

TC-MUL-021

## Requirement liên quan

FR-MUL-05

## Severity / Priority

Minor / P2

## Environment

- Browser: Chromium 153.0.8010.12
- OS: Windows
- URL: https://testsheepnz.github.io/BasicCalculator.html
- Build: 5
- Operation: Multiply
- Automation tool: Playwright 1.63.0

## Steps to reproduce

1. Mở trang Basic Calculator
2. Chọn build `5`
3. Chọn operation `Multiply`
4. Quan sát trạng thái nút Clear trước khi thực hiện phép tính

## Expected result

Nút Clear hiển thị và cho phép user bấm.

## Actual result

Nút Clear hiển thị nhưng bị vô hiệu hóa (`disabled`), user không thể bấm.

## Evidence

- Screenshot: [BUG-MUL-001.png](evidence/BUG-MUL-001.png)
- Playwright assertion: `Expected: enabled; Received: disabled`
- Locator: `getByTestId('clearButton')`
