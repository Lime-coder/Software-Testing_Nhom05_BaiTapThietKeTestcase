# TC-MUL-020: Kiểm tra giới hạn 10 ký tự

## Requirement ID

FR-MUL-04

## Module / Test type / Technique

Multiplication / Functional / Boundary Value Analysis

## Preconditions

- User đang ở màn hình Multiplication
- Hai trường First number và Second number đang hiển thị
- Tùy chọn Integers only có thể được bật hoặc tắt

## Test data

| Field | Value |
| --- | --- |
| First number | `9999999999` |
| Second number | `1` |
| Integers only | Off |

## Test steps

1. Mở màn hình Multiplication
2. Nhập `9999999999` vào trường First number
3. Nhập `1` vào trường Second number
4. Đặt tùy chọn Integers only ở trạng thái Off
5. Bấm nút Calculate

## Expected result

Hệ thống hiển thị `9999999999`.

## Test owner

Nguyễn Phúc Hậu

## Status / Related bugs

Not Run / None

