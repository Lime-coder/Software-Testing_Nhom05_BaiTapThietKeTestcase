# AI Audit Report — 23120252

## Tuyên bố sử dụng AI

Tôi sử dụng các công cụ AI cho những tác vụ sau.

> Công cụ sử dụng trong toàn bộ các tương tác: **OpenAI Codex trong ChatGPT**.
> Các mốc giờ dưới đây là thời điểm gần đúng theo múi giờ ICT (UTC+7), được đối
> chiếu với phiên làm việc và lịch sử commit Git.

## Nhật ký tương tác

### 1. Tạo cấu trúc kiểm thử ban đầu

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 14:13 ICT
- **Prompt:** “Tạo thư mục tests tại thư mục gốc theo cây được cung cấp; các file không chứa nội dung.”
- **Kết quả do AI tạo ra:** Tạo các thư mục test-cases, test-runs, test-summary và các file Markdown rỗng tương ứng.

### 2. Giải thích lỗi Git push

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 14:20 ICT
- **Prompt:** “Lỗi gì vậy: git push origin main ... non-fast-forward?”
- **Kết quả do AI tạo ra:** Giải thích remote có commit mới hơn local và hướng dẫn pull/rebase, xử lý conflict trước khi push lại.

### 3. Chuẩn hóa tên use case

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 14:29 ICT
- **Prompt:** “Chỉnh lại tên các folder use case cho đúng danh từ và tạo file tạm để giữ cấu trúc.”
- **Kết quả do AI tạo ra:** Chuẩn hóa thành addition, concatenation, division, multiplication, subtraction và thêm file .gitkeep.

### 4. Sinh 20 test case Multiplication

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 14:37 ICT
- **Prompt:** “Tạo 20 file Markdown test case trong folder multiplication theo template và bảng dữ liệu đã cung cấp; owner Nguyễn Phúc Hậu.”
- **Kết quả do AI tạo ra:** Tạo TC-MUL-001 đến TC-MUL-020, gồm requirement, preconditions, test data, steps, expected result, owner và status.

### 5. Tạo cấu trúc test script

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 14:39 ICT
- **Prompt:** “Tạo folder test-script với 5 folder và file gitkeep tương tự testcase.”
- **Kết quả do AI tạo ra:** Tạo năm thư mục script tương ứng các chức năng và file .gitkeep rỗng.

### 6. Sinh automation script Playwright

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 14:45 ICT
- **Prompt:** “Trong thư mục multiplication của test-script sinh các script để test chức năng bằng Playwright.”
- **Kết quả do AI tạo ra:** Tạo data file, Page Object, spec file, Playwright config, README, package.json và cấu hình chạy Chromium.

### 7. Kết nối script với trang cần test

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 14:50 ICT
- **Prompt:** “Đây là link trang cần test: https://testsheepnz.github.io/BasicCalculator.html.”
- **Kết quả do AI tạo ra:** Kiểm tra DOM thực tế, cập nhật URL và selector data-testid, chọn operation Multiply và build cần kiểm thử.

### 8. Chạy test trên build 5 và lập báo cáo

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 14:55 ICT
- **Prompt:** “Thực hiện 20 testcase vào báo cáo theo template; chạy với build 5 thay vì Prototype.”
- **Kết quả do AI tạo ra:** Chạy 20 test, ghi nhận 20 Passed và tạo test-run report cùng evidence Playwright.

### 9. Bổ sung test cho lỗi Clear của build 5

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 14:56 ICT
- **Prompt:** “Thêm 3 testcase mà build 5 có thể sai.”
- **Kết quả do AI tạo ra:** Tạo TC-MUL-021 đến TC-MUL-023, chạy 23 test, phát hiện TC-MUL-021 Failed và tạo BUG-MUL-001 kèm screenshot.

### 10. Chạy regression trên build 4

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 15:01 ICT
- **Prompt:** “Thực hiện test script với build 4; nếu có sai thì dùng template tương tự build 5.”
- **Kết quả do AI tạo ra:** Chạy 20 test cốt lõi, ghi nhận 2 Passed và 18 Failed do Integers only bị khóa; tạo BUG-MUL-002, report và evidence.

### 11. Đổi tên báo cáo test run

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 15:06 ICT
- **Prompt:** “Đổi tên 2 lần run theo chức năng và bản build.”
- **Kết quả do AI tạo ra:** Đổi tên thành multiplication-build-4-test-run.md và multiplication-build-5-test-run.md.

### 12. Hướng dẫn tự chạy Playwright

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 15:12 ICT
- **Prompt:** “Hướng dẫn tôi tự chạy script để thấy quá trình test.”
- **Kết quả do AI tạo ra:** Cung cấp lệnh chạy headed, debug, chọn build, chạy một test case và mở HTML report.

### 13. Tạo bộ báo cáo sử dụng AI

- **Tên công cụ AI:** OpenAI Codex trong ChatGPT
- **Ngày và giờ:** 2026-09-28 15:20 ICT
- **Prompt:** “Tạo thư mục reports và các file ai-audit-report, ai-critique, git-commit-log cho MSSV 23120252.”
- **Kết quả do AI tạo ra:** Tạo ba báo cáo theo yêu cầu, bao gồm nhật ký tương tác, bài critique 200–300 từ và kết quả lệnh git log --graph --all --stat.

