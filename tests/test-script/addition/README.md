# Addition Test Scripts

Thư mục này chứa các kịch bản kiểm thử tự động (Automated Test Scripts) cho module Addition của Basic Calculator. 
Hệ thống test được triển khai theo mô hình Page Object Model (POM) và Data-Driven Testing (DDT).

## Cấu trúc files:
- `addition.page.js`: Định nghĩa Page Object đại diện cho module Addition, bao gồm các locators và hàm thao tác giao diện.
- `addition.data.js`: Lưu trữ mảng dữ liệu đầu vào và kết quả mong muốn, tương ứng 1-1 với các Manual Test Cases từ `TC-ADDITION-001` đến `TC-ADDITION-024`.
- `addition.spec.js`: Kịch bản test chạy tự động, bao gồm vòng lặp chạy Data-Driven test và kịch bản riêng cho nút Clear (`TC-ADDITION-025`).

## Cách chạy test
Để chạy kịch bản này từ thư mục gốc của repository, bạn dùng lệnh:
```bash
npx playwright test tests/test-script/addition/addition.spec.js
```
