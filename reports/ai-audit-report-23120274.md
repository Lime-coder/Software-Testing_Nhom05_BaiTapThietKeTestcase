# Báo cáo kiểm toán việc sử dụng AI

> "Tôi sử dụng các công cụ AI cho những tác vụ sau,"

## Lịch sử tương tác

### 1. Tạo testcase cho Division

- **Tên công cụ AI:** GitHub Copilot.
- **Ngày và giờ:** 2026-09-28; 2:53 PM.
- **Câu lệnh (prompt):** “bạn hãy giúp tôi tạo testcase cho chức năng division, mỗi testcase tạo 1 file .md theo template trong ảnh + thêm test owner trong thư mục division, tên file .md được đặt theo form TC-divison-001.md tăng dần theo thứ tự, bạn hãy bắt đầu giúp tôi tạo testcase đi”
- **Kết quả do AI tạo ra:** Tạo 9 testcase Markdown trong `tests/test-cases/division/`, đặt tên `TC-divison-001.md` đến `TC-divison-009.md`, theo các mục trong template ảnh. Bao phủ chia số nguyên, kết quả thập phân, số 0, số âm và chia cho 0. Do chưa có tên owner hoặc mã requirement trong tài liệu, điền tạm `TBD` và `FR-DIV-001`.

### 2. Yêu cầu cập nhật Test Owner

- **Tên công cụ AI:** GitHub Copilot.
- **Ngày và giờ:** 2026-09-28; 2:56 PM.
- **Câu lệnh (prompt):** “chỉnh sửa test owner trong các testcase vừa rồi thành Quốc Huy đi bạn”
- **Kết quả do AI tạo ra:** AI tìm thấy `TBD` ở 9 testcase. Trước khi cập nhật file, người dùng chuyển sang yêu cầu khác; sau đó các testcase được đọc lại với owner `Quốc Huy`. Lịch sử hiện có không xác định được ai thực hiện thay đổi owner.

### 3. Thực hiện bước 2 trong ảnh

- **Tên công cụ AI:** GitHub Copilot; sử dụng Playwright để thao tác trang Basic Calculator.
- **Ngày và giờ:** 2026-09-28; 3:03 PM.
- **Câu lệnh (prompt):** “Tiếp tục giúp tôi làm bước 2 trong ảnh”
- **Kết quả do AI tạo ra:** Xác định bước 2 là thực thi testcase và ghi Test Run. Mở trang Basic Calculator, chạy 9 testcase trên Build 1 và Build 2. Mỗi build có 8 testcase đạt và TC-DIV-009 thất bại: ứng dụng báo `Divide by zero error!` nhưng bị kẹt ở `Calculating ...`, các nút Calculate/Clear bị vô hiệu hóa. Ghi nhận lỗi `BUG-DIV-001` và tạo Test Run ban đầu.

### 4. Lấy cập nhật từ main

- **Tên công cụ AI:** GitHub Copilot; sử dụng Git.
- **Ngày và giờ:** 2026-09-28; 3:10 PM.
- **Câu lệnh (prompt):** “bạn tôi đã đẩy code lên main rồi bạn hãy giúp tôi lấy code xuống”
- **Kết quả do AI tạo ra:** Kiểm tra remote và trạng thái working tree, fetch từ `origin`, rồi fast-forward branch `test/Divide` tới `origin/main` qua 13 commit (tới `fdf4908`). Giữ nguyên các file testcase và Test Run chưa được Git theo dõi.

### 5. Tạo test script theo mẫu bạn

- **Tên công cụ AI:** GitHub Copilot; sử dụng Playwright Test, npm và Chromium.
- **Ngày và giờ:** 2026-09-28; 3:13 PM.
- **Câu lệnh (prompt):** “giúp tôi làm file test-cript cho phần của tôi với template như bạn của tôi”
- **Kết quả do AI tạo ra:** Đối chiếu cấu trúc Playwright của multiplication; tạo `division.data.js`, `division.page.js`, `division.spec.js` và README; thêm lệnh `npm run test:division`. Cài dependencies và browser cần thiết. Suite được chạy đầy đủ trong bước Test Run kế tiếp, với kết quả 8 PASS và 1 FAIL trên mỗi build.

### 6. Tạo Test Run theo mẫu bạn

- **Tên công cụ AI:** GitHub Copilot; sử dụng Playwright Test và Chromium để chạy suite.
- **Ngày và giờ:** 2026-09-28; 3:22 PM.
- **Câu lệnh (prompt):** “tiếp tục làm phần test run với form y mẫu bạn của tôi”
- **Kết quả do AI tạo ra:** Định dạng lại Test Run theo mẫu multiplication, chạy 9 testcase trên từng Build 1 và Build 2. Kết quả mỗi build: 8 PASS, 1 FAIL; tổng 16 PASS/18 lượt, pass rate 88.89%. Tạo bug report cho lỗi chia cho 0 và lưu liên kết evidence Playwright.

### 7. Tách Test Run theo build

- **Tên công cụ AI:** GitHub Copilot.
- **Ngày và giờ:** 2026-09-28; 3:34 PM.
- **Câu lệnh (prompt):** “tách file này thành 2 file riêng mỗi built 1 file riêng”
- **Kết quả do AI tạo ra:** Tách báo cáo gộp thành `division-build-1-test-run.md` và `division-build-2-test-run.md`. Mỗi file ghi 9 testcase, 8 PASS, 1 FAIL; xóa file báo cáo gộp cũ.

### 8. Tách bug report theo build

- **Tên công cụ AI:** GitHub Copilot.
- **Ngày và giờ:** 2026-09-28; 3:36 PM.
- **Câu lệnh (prompt):** “tách file này thành 2 file mỗi built 1 file”
- **Kết quả do AI tạo ra:** Giữ `BUG-DIV-001.md` cho Build 1, tạo `BUG-DIV-002.md` cho Build 2 và cập nhật mỗi Test Run trỏ tới bug report tương ứng. Chỉ gắn screenshot hiện có với báo cáo Build 2.

### 9. Tạo báo cáo kiểm toán AI

- **Tên công cụ AI:** GitHub Copilot.
- **Ngày và giờ:** 2026-09-28; 5:57 PM.
- **Câu lệnh (prompt):** “**+ ai-audit-report-mssv.md** tuyên bố: "Tôi sử dụng các công cụ AI cho những tác vụ sau," và cung cấp các thông tin sau cho mỗi lần tương tác: Tên công cụ AI; Ngày và giờ; Câu lệnh (prompt) của bạn; Kết quả do AI tạo ra; hãy tạo cho tôi file ai-audit-report-mssv.md với lịch sử trò chuyện từ đầu tới giờ”
- **Kết quả do AI tạo ra:** Tạo file kiểm toán này, tổng hợp 9 yêu cầu theo thứ tự. Do timestamp từng lượt không có trong lịch sử cung cấp, báo cáo đánh dấu giờ là không được ghi nhận.
