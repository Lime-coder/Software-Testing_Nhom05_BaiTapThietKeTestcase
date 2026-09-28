# Git Commit Logs

## 1. My Commits (Hidebray)

```text
* commit b1e8aad82ff0d4a4e1005e2733f22ed511fcd089
| Merge: ac78f3f c9a0015
| Author: Hidebray <daihiep10092005@gmail.com>
| Date:   Mon Sep 28 17:13:19 2026 +0700
| 
|     Merge branch 'test/addition'
|     
|     # Conflicts:
|     #       package.json
| 
* commit c9a00159cc07a86641aae3570815d2c34a4c12ad
| Author: Hidebray <daihiep10092005@gmail.com>
| Date:   Mon Sep 28 17:12:09 2026 +0700
| 
|     docs(matrix): update traceability matrix with latest test execution status
| 
|  tests/test-summary/traceability-matrix.md | 27 ++++++++++++++++++++++++++-
|  1 file changed, 26 insertions(+), 1 deletion(-)
| 
* commit d9457e41b3adc792eba4658af3f642fa45088a13
| Author: Hidebray <daihiep10092005@gmail.com>
| Date:   Mon Sep 28 17:12:09 2026 +0700
| 
|     docs(bug): log bug reports for addition feature failures
| 
|  tests/test-summary/BUG-ADD-001.md | 51 ++++++++++++++++++++++++++++++++
|  tests/test-summary/BUG-ADD-002.md | 48 ++++++++++++++++++++++++++++++
|  tests/test-summary/BUG-ADD-003.md | 58 +++++++++++++++++++++++++++++++++++++
|  tests/test-summary/BUG-ADD-004.md | 51 ++++++++++++++++++++++++++++++++
|  4 files changed, 208 insertions(+)
| 
* commit 904e890baaad32dcdfc5261976d26d460c088d81
| Author: Hidebray <daihiep10092005@gmail.com>
| Date:   Mon Sep 28 17:12:09 2026 +0700
| 
|     docs(test-run): add execution reports and evidences for build 1 and 2
| 
|  tests/test-runs/addition-build-1-test-run.md      |  81 +++++++++++++++++++
|  tests/test-runs/addition-build-2-test-run.md      |  82 ++++++++++++++++++++
|  .../evidence/TC-ADDITION-001-build-2-failed.png   | Bin 0 -> 797741 bytes
|  .../evidence/TC-ADDITION-002-build-2-failed.png   | Bin 0 -> 797588 bytes
|  .../evidence/TC-ADDITION-003-build-2-failed.png   | Bin 0 -> 797879 bytes
|  .../evidence/TC-ADDITION-004-build-2-failed.png   | Bin 0 -> 797691 bytes
|  .../evidence/TC-ADDITION-005-build-2-failed.png   | Bin 0 -> 797812 bytes
|  .../evidence/TC-ADDITION-006-build-2-failed.png   | Bin 0 -> 796180 bytes
|  .../evidence/TC-ADDITION-007-build-1-failed.png   | Bin 0 -> 797612 bytes
|  .../evidence/TC-ADDITION-007-build-2-failed.png   | Bin 0 -> 797765 bytes
|  .../evidence/TC-ADDITION-008-build-1-failed.png   | Bin 0 -> 797651 bytes
|  .../evidence/TC-ADDITION-008-build-2-failed.png   | Bin 0 -> 797859 bytes
|  .../evidence/TC-ADDITION-009-build-1-failed.png   | Bin 0 -> 797353 bytes
|  .../evidence/TC-ADDITION-009-build-2-failed.png   | Bin 0 -> 797427 bytes
|  .../evidence/TC-ADDITION-010-build-1-failed.png   | Bin 0 -> 797271 bytes
|  .../evidence/TC-ADDITION-010-build-2-failed.png   | Bin 0 -> 797196 bytes
|  .../evidence/TC-ADDITION-011-build-2-failed.png   | Bin 0 -> 797979 bytes
|  .../evidence/TC-ADDITION-012-build-2-failed.png   | Bin 0 -> 797960 bytes
|  .../evidence/TC-ADDITION-013-build-2-failed.png   | Bin 0 -> 797657 bytes
|  .../evidence/TC-ADDITION-014-build-2-failed.png   | Bin 0 -> 797669 bytes
|  .../evidence/TC-ADDITION-015-build-2-failed.png   | Bin 0 -> 797666 bytes
|  .../evidence/TC-ADDITION-016-build-1-failed.png   | Bin 0 -> 797353 bytes
|  .../evidence/TC-ADDITION-016-build-2-failed.png   | Bin 0 -> 797425 bytes
|  .../evidence/TC-ADDITION-017-build-1-failed.png   | Bin 0 -> 797579 bytes
|  .../evidence/TC-ADDITION-017-build-2-failed.png   | Bin 0 -> 797721 bytes
|  .../evidence/TC-ADDITION-018-build-1-failed.png   | Bin 0 -> 798429 bytes
|  .../evidence/TC-ADDITION-018-build-2-failed.png   | Bin 0 -> 798341 bytes
|  .../evidence/TC-ADDITION-019-build-2-failed.png   | Bin 0 -> 797766 bytes
|  .../evidence/TC-ADDITION-020-build-2-failed.png   | Bin 0 -> 797733 bytes
|  .../evidence/TC-ADDITION-021-build-1-failed.png   | Bin 0 -> 797917 bytes
|  .../evidence/TC-ADDITION-021-build-2-failed.png   | Bin 0 -> 798241 bytes
|  .../evidence/TC-ADDITION-022-build-1-failed.png   | Bin 0 -> 797774 bytes
|  .../evidence/TC-ADDITION-022-build-2-failed.png   | Bin 0 -> 798127 bytes
|  .../evidence/TC-ADDITION-023-build-1-failed.png   | Bin 0 -> 797098 bytes
|  .../evidence/TC-ADDITION-023-build-2-failed.png   | Bin 0 -> 796997 bytes
|  .../evidence/TC-ADDITION-024-build-2-failed.png   | Bin 0 -> 798049 bytes
|  36 files changed, 163 insertions(+)
| 
* commit 6d6f73f6dff059fc3271f049ea49acfcca7da065
| Author: Hidebray <daihiep10092005@gmail.com>
| Date:   Mon Sep 28 17:10:44 2026 +0700
| 
|     test(addition): update automated test script and configuration
| 
|  package.json                                |  3 ++-
|  tests/test-script/addition/addition.spec.js | 11 +++++++++++
|  2 files changed, 13 insertions(+), 1 deletion(-)
| 
* commit 85f9ef146a67e02c62dd407ebfdc31e9f1510fec
| Author: Hidebray <daihiep10092005@gmail.com>
| Date:   Mon Sep 28 15:26:18 2026 +0700
| 
|     test(addition): create POM automated tests
| 
|  tests/test-script/addition/README.md        | 15 ++++++
|  tests/test-script/addition/addition.data.js | 28 +++++++++++
|  tests/test-script/addition/addition.page.js | 68 +++++++++++++++++++++++++++
|  tests/test-script/addition/addition.spec.js | 50 ++++++++++++++++++++
|  4 files changed, 161 insertions(+)
| 
* commit d1adafc2af37bfc3c824d845d87b47deebf9cc41
| Author: Hidebray <daihiep10092005@gmail.com>
| Date:   Mon Sep 28 15:13:49 2026 +0700
| 
|     chore: remove automated test script as requested
| 
|  tests/automated-tests/addition.spec.ts | 215 -------------------------------
|  1 file changed, 215 deletions(-)
|   
*   commit ef84ea32d95752f1f9bd65e01df46158a02c3901
|\  Merge: fdf4908 72f8ade
| | Author: Hidebray <daihiep10092005@gmail.com>
| | Date:   Mon Sep 28 15:13:12 2026 +0700
| | 
| |     Merge branch 'test/addition'
| | 
| * commit 72f8ade487239e5405b07cf059509e21004b2020
| | Author: Hidebray <daihiep10092005@gmail.com>
| | Date:   Mon Sep 28 15:12:54 2026 +0700
| | 
| |     test(addition): add remaining 15 test cases and automated scripts
| | 
| |  tests/automated-tests/addition.spec.ts       | 215 +++++++++++++++++++++++
| |  tests/test-cases/addition/TC-ADDITION-011.md |  34 ++++
| |  tests/test-cases/addition/TC-ADDITION-012.md |  34 ++++
| |  tests/test-cases/addition/TC-ADDITION-013.md |  34 ++++
| |  tests/test-cases/addition/TC-ADDITION-014.md |  34 ++++
| |  tests/test-cases/addition/TC-ADDITION-015.md |  34 ++++
| |  tests/test-cases/addition/TC-ADDITION-016.md |  33 ++++
| |  tests/test-cases/addition/TC-ADDITION-017.md |  33 ++++
| |  tests/test-cases/addition/TC-ADDITION-018.md |  34 ++++
| |  tests/test-cases/addition/TC-ADDITION-019.md |  34 ++++
| |  tests/test-cases/addition/TC-ADDITION-020.md |  34 ++++
| |  tests/test-cases/addition/TC-ADDITION-021.md |  33 ++++
| |  tests/test-cases/addition/TC-ADDITION-022.md |  33 ++++
| |  tests/test-cases/addition/TC-ADDITION-023.md |  33 ++++
| |  tests/test-cases/addition/TC-ADDITION-024.md |  34 ++++
| |  tests/test-cases/addition/TC-ADDITION-025.md |  32 ++++
| |  16 files changed, 718 insertions(+)
| | 
* | commit fdf4908588b60698ed2982b9cd91840fa9488831
|/  Merge: d612554 5dbbbc4
|   Author: Hidebray <daihiep10092005@gmail.com>
|   Date:   Mon Sep 28 15:03:36 2026 +0700
|   
|       Merge branch 'test/addition'
| 
* commit 5dbbbc4cc30acd734203c6ccd232bf948ed70819
  Author: Hidebray <daihiep10092005@gmail.com>
  Date:   Mon Sep 28 14:56:21 2026 +0700
  
      test(addition): add 10 test cases for addition module
  
   tests/test-cases/addition/TC-ADDITION-001.md | 34 +++++++++++++++++++++++++
   tests/test-cases/addition/TC-ADDITION-002.md | 34 +++++++++++++++++++++++++
   tests/test-cases/addition/TC-ADDITION-003.md | 34 +++++++++++++++++++++++++
   tests/test-cases/addition/TC-ADDITION-004.md | 34 +++++++++++++++++++++++++
   tests/test-cases/addition/TC-ADDITION-005.md | 34 +++++++++++++++++++++++++
   tests/test-cases/addition/TC-ADDITION-006.md | 35 ++++++++++++++++++++++++++
   tests/test-cases/addition/TC-ADDITION-007.md | 33 ++++++++++++++++++++++++
   tests/test-cases/addition/TC-ADDITION-008.md | 33 ++++++++++++++++++++++++
   tests/test-cases/addition/TC-ADDITION-009.md | 33 ++++++++++++++++++++++++
   tests/test-cases/addition/TC-ADDITION-010.md | 33 ++++++++++++++++++++++++
   10 files changed, 337 insertions(+)

```

## 2. All Project Commits

```text
*   commit b1e8aad82ff0d4a4e1005e2733f22ed511fcd089
|\  Merge: ac78f3f c9a0015
| | Author: Hidebray <daihiep10092005@gmail.com>
| | Date:   Mon Sep 28 17:13:19 2026 +0700
| | 
| |     Merge branch 'test/addition'
| |     
| |     # Conflicts:
| |     #       package.json
| | 
| * commit c9a00159cc07a86641aae3570815d2c34a4c12ad
| | Author: Hidebray <daihiep10092005@gmail.com>
| | Date:   Mon Sep 28 17:12:09 2026 +0700
| | 
| |     docs(matrix): update traceability matrix with latest test execution status
| | 
| |  tests/test-summary/traceability-matrix.md | 27 ++++++++++++++++++++++++++-
| |  1 file changed, 26 insertions(+), 1 deletion(-)
| | 
| * commit d9457e41b3adc792eba4658af3f642fa45088a13
| | Author: Hidebray <daihiep10092005@gmail.com>
| | Date:   Mon Sep 28 17:12:09 2026 +0700
| | 
| |     docs(bug): log bug reports for addition feature failures
| | 
| |  tests/test-summary/BUG-ADD-001.md | 51 ++++++++++++++++++++++++++++++
| |  tests/test-summary/BUG-ADD-002.md | 48 +++++++++++++++++++++++++++++
| |  tests/test-summary/BUG-ADD-003.md | 58 +++++++++++++++++++++++++++++++++++
| |  tests/test-summary/BUG-ADD-004.md | 51 ++++++++++++++++++++++++++++++
| |  4 files changed, 208 insertions(+)
| | 
| * commit 904e890baaad32dcdfc5261976d26d460c088d81
| | Author: Hidebray <daihiep10092005@gmail.com>
| | Date:   Mon Sep 28 17:12:09 2026 +0700
| | 
| |     docs(test-run): add execution reports and evidences for build 1 and 2
| | 
| |  tests/test-runs/addition-build-1-test-run.md     |  81 ++++++++++++++++++
| |  tests/test-runs/addition-build-2-test-run.md     |  82 +++++++++++++++++++
| |  .../evidence/TC-ADDITION-001-build-2-failed.png  | Bin 0 -> 797741 bytes
| |  .../evidence/TC-ADDITION-002-build-2-failed.png  | Bin 0 -> 797588 bytes
| |  .../evidence/TC-ADDITION-003-build-2-failed.png  | Bin 0 -> 797879 bytes
| |  .../evidence/TC-ADDITION-004-build-2-failed.png  | Bin 0 -> 797691 bytes
| |  .../evidence/TC-ADDITION-005-build-2-failed.png  | Bin 0 -> 797812 bytes
| |  .../evidence/TC-ADDITION-006-build-2-failed.png  | Bin 0 -> 796180 bytes
| |  .../evidence/TC-ADDITION-007-build-1-failed.png  | Bin 0 -> 797612 bytes
| |  .../evidence/TC-ADDITION-007-build-2-failed.png  | Bin 0 -> 797765 bytes
| |  .../evidence/TC-ADDITION-008-build-1-failed.png  | Bin 0 -> 797651 bytes
| |  .../evidence/TC-ADDITION-008-build-2-failed.png  | Bin 0 -> 797859 bytes
| |  .../evidence/TC-ADDITION-009-build-1-failed.png  | Bin 0 -> 797353 bytes
| |  .../evidence/TC-ADDITION-009-build-2-failed.png  | Bin 0 -> 797427 bytes
| |  .../evidence/TC-ADDITION-010-build-1-failed.png  | Bin 0 -> 797271 bytes
| |  .../evidence/TC-ADDITION-010-build-2-failed.png  | Bin 0 -> 797196 bytes
| |  .../evidence/TC-ADDITION-011-build-2-failed.png  | Bin 0 -> 797979 bytes
| |  .../evidence/TC-ADDITION-012-build-2-failed.png  | Bin 0 -> 797960 bytes
| |  .../evidence/TC-ADDITION-013-build-2-failed.png  | Bin 0 -> 797657 bytes
| |  .../evidence/TC-ADDITION-014-build-2-failed.png  | Bin 0 -> 797669 bytes
| |  .../evidence/TC-ADDITION-015-build-2-failed.png  | Bin 0 -> 797666 bytes
| |  .../evidence/TC-ADDITION-016-build-1-failed.png  | Bin 0 -> 797353 bytes
| |  .../evidence/TC-ADDITION-016-build-2-failed.png  | Bin 0 -> 797425 bytes
| |  .../evidence/TC-ADDITION-017-build-1-failed.png  | Bin 0 -> 797579 bytes
| |  .../evidence/TC-ADDITION-017-build-2-failed.png  | Bin 0 -> 797721 bytes
| |  .../evidence/TC-ADDITION-018-build-1-failed.png  | Bin 0 -> 798429 bytes
| |  .../evidence/TC-ADDITION-018-build-2-failed.png  | Bin 0 -> 798341 bytes
| |  .../evidence/TC-ADDITION-019-build-2-failed.png  | Bin 0 -> 797766 bytes
| |  .../evidence/TC-ADDITION-020-build-2-failed.png  | Bin 0 -> 797733 bytes
| |  .../evidence/TC-ADDITION-021-build-1-failed.png  | Bin 0 -> 797917 bytes
| |  .../evidence/TC-ADDITION-021-build-2-failed.png  | Bin 0 -> 798241 bytes
| |  .../evidence/TC-ADDITION-022-build-1-failed.png  | Bin 0 -> 797774 bytes
| |  .../evidence/TC-ADDITION-022-build-2-failed.png  | Bin 0 -> 798127 bytes
| |  .../evidence/TC-ADDITION-023-build-1-failed.png  | Bin 0 -> 797098 bytes
| |  .../evidence/TC-ADDITION-023-build-2-failed.png  | Bin 0 -> 796997 bytes
| |  .../evidence/TC-ADDITION-024-build-2-failed.png  | Bin 0 -> 798049 bytes
| |  36 files changed, 163 insertions(+)
| | 
| * commit 6d6f73f6dff059fc3271f049ea49acfcca7da065
| | Author: Hidebray <daihiep10092005@gmail.com>
| | Date:   Mon Sep 28 17:10:44 2026 +0700
| | 
| |     test(addition): update automated test script and configuration
| | 
| |  package.json                                |  3 ++-
| |  tests/test-script/addition/addition.spec.js | 11 +++++++++++
| |  2 files changed, 13 insertions(+), 1 deletion(-)
| |   
* |   commit ac78f3f176e86482cd8fd6206e6c75eb4365fc52
|\ \  Merge: d8bc0a2 3afa958
| | | Author: HCMUS-HauProMax <151616856+phuchau26@users.noreply.github.com>
| | | Date:   Mon Sep 28 15:57:16 2026 +0700
| | | 
| | |     Merge pull request #10 from Lime-coder/test/multiplication
| | |     
| | |     feat: ai audit of Phuc Hau
| | | 
| * | commit 3afa9587e918b5c9cf4669fccfa4c5cb4a4bf301
| | | Author: Phuc Hau <phuchau.fit@gmail.com>
| | | Date:   Mon Sep 28 15:56:25 2026 +0700
| | | 
| | |     feat: ai audit of Phuc Hau
| | | 
| | |  reports/ai-audit-report-23120252.md | 103 +++++++++++++++++
| | |  reports/ai-critique-23120252.md     |   3 +
| | |  reports/git-commit-log-23120252.md  | 178 ++++++++++++++++++++++++++++++
| | |  3 files changed, 284 insertions(+)
| | |   
* | |   commit d8bc0a22ecaae5da53c2c282589b3486ec179924
|\ \ \  Merge: e2c3ea9 eb8d343
| | | | Author: Nguyễn Hoàng Liêm <145841734+Lime-coder@users.noreply.github.com>
| | | | Date:   Mon Sep 28 15:55:23 2026 +0700
| | | | 
| | | |     Merge pull request #9 from Lime-coder/test/concatenate
| | | |     
| | | |     Test/concatenate
| | | |   
| * | |   commit eb8d343baa55860a33096c88a3a942b081303f00
| |\ \ \  Merge: a7ae8f1 e2c3ea9
| |/ / /  Author: Nguyễn Hoàng Liêm <145841734+Lime-coder@users.noreply.github.com>
|/| | |   Date:   Mon Sep 28 15:53:05 2026 +0700
| | | |   
| | | |       Merge branch 'main' into test/concatenate
| | | |   
* | | |   commit e2c3ea9de87f2907eaabbba0fe0d5c0262ec8043
|\ \ \ \  Merge: fe22464 804b607
| | | | | Author: HUY <vinhuytran0810@gmail.com>
| | | | | Date:   Mon Sep 28 15:47:39 2026 +0700
| | | | | 
| | | | |     Merge branch 'test/Divide'
| | | | | 
| * | | | commit 804b6071393a7ea60f39e1cfb2967d91f6454052
| | | | | Author: HUY <vinhuytran0810@gmail.com>
| | | | | Date:   Mon Sep 28 15:43:22 2026 +0700
| | | | | 
| | | | |     Add division test cases and Playwright tests
| | | | | 
| | | | |  package.json                                 |  3 +-
| | | | |  tests/test-cases/division/TC-divison-001.md  | 30 +++++++++++
| | | | |  tests/test-cases/division/TC-divison-002.md  | 30 +++++++++++
| | | | |  tests/test-cases/division/TC-divison-003.md  | 30 +++++++++++
| | | | |  tests/test-cases/division/TC-divison-004.md  | 30 +++++++++++
| | | | |  tests/test-cases/division/TC-divison-005.md  | 30 +++++++++++
| | | | |  tests/test-cases/division/TC-divison-006.md  | 30 +++++++++++
| | | | |  tests/test-cases/division/TC-divison-007.md  | 30 +++++++++++
| | | | |  tests/test-cases/division/TC-divison-008.md  | 31 +++++++++++
| | | | |  tests/test-cases/division/TC-divison-009.md  | 30 +++++++++++
| | | | |  tests/test-runs/division-build-1-test-run.md | 47 +++++++++++++++++
| | | | |  tests/test-runs/division-build-2-test-run.md | 48 ++++++++++++++++++
| | | | |  tests/test-script/division/README.md         | 34 +++++++++++++
| | | | |  tests/test-script/division/division.data.js  | 13 +++++
| | | | |  tests/test-script/division/division.page.js  | 47 +++++++++++++++++
| | | | |  tests/test-script/division/division.spec.js  | 30 +++++++++++
| | | | |  tests/test-summary/BUG-DIV-001.md            | 44 ++++++++++++++++
| | | | |  tests/test-summary/BUG-DIV-002.md            | 45 ++++++++++++++++
| | | | |  18 files changed, 581 insertions(+), 1 deletion(-)
| | | | |   
* | | | |   commit fe22464387c1c24ae8d1664da709db43d89bbb9c
|\ \ \ \ \  Merge: 85f9ef1 857eee1
| |_|_|_|/  Author: 23120049 <153164742+23120049@users.noreply.github.com>
|/| | | |   Date:   Mon Sep 28 15:28:39 2026 +0700
| | | | |   
| | | | |       Merge pull request #5 from Lime-coder/huyen
| | | | |       
| | | | |       add test scripts
| | | | | 
| * | | | commit 857eee1a11293256bc6503f0df731b42896514e9
| | | | | Author: cgb <huyen211105@gmail.com>
| | | | | Date:   Mon Sep 28 15:23:42 2026 +0700
| | | | | 
| | | | |     add test scripts
| | | | | 
| | | | |  .../subtraction/TC-SUB-001.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-002.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-003.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-004.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-005.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-006.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-007.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-008.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-009.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-010.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-011.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-012.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-013.spec.js           | 14 +++
| | | | |  .../subtraction/TC-SUB-014.spec.js           | 12 +++
| | | | |  .../subtraction/TC-SUB-015.spec.js           | 11 +++
| | | | |  .../subtraction/TC-SUB-016.spec.js           | 11 +++
| | | | |  .../subtraction/TC-SUB-017.spec.js           | 11 +++
| | | | |  .../subtraction/TC-SUB-018.spec.js           | 11 +++
| | | | |  .../subtraction/TC-SUB-019.spec.js           | 11 +++
| | | | |  .../subtraction/TC-SUB-020.spec.js           | 11 +++
| | | | |  .../subtraction/TC-SUB-021.spec.js           | 11 +++
| | | | |  .../subtraction/TC-SUB-022.spec.js           | 11 +++
| | | | |  .../subtraction/TC-SUB-023.spec.js           | 16 ++++
| | | | |  .../subtraction/TC-SUB-024.spec.js           | 38 ++++++++
| | | | |  .../subtraction/subtraction.helpers.js       | 85 ++++++++++++++++++
| | | | |  25 files changed, 397 insertions(+)
| | | | | 
* | | | | commit 85f9ef146a67e02c62dd407ebfdc31e9f1510fec
| | | | | Author: Hidebray <daihiep10092005@gmail.com>
| | | | | Date:   Mon Sep 28 15:26:18 2026 +0700
| | | | | 
| | | | |     test(addition): create POM automated tests
| | | | | 
| | | | |  tests/test-script/addition/README.md        | 15 ++++
| | | | |  tests/test-script/addition/addition.data.js | 28 ++++++++
| | | | |  tests/test-script/addition/addition.page.js | 68 +++++++++++++++++++
| | | | |  tests/test-script/addition/addition.spec.js | 50 ++++++++++++++
| | | | |  4 files changed, 161 insertions(+)
| | | | | 
* | | | | commit d1adafc2af37bfc3c824d845d87b47deebf9cc41
| | | | | Author: Hidebray <daihiep10092005@gmail.com>
| | | | | Date:   Mon Sep 28 15:13:49 2026 +0700
| | | | | 
| | | | |     chore: remove automated test script as requested
| | | | | 
| | | | |  tests/automated-tests/addition.spec.ts | 215 -----------------------
| | | | |  1 file changed, 215 deletions(-)
| | | | |   
* | | | |   commit ef84ea32d95752f1f9bd65e01df46158a02c3901
|\ \ \ \ \  Merge: fdf4908 72f8ade
| |_|/ / /  Author: Hidebray <daihiep10092005@gmail.com>
|/| | | |   Date:   Mon Sep 28 15:13:12 2026 +0700
| | | | |   
| | | | |       Merge branch 'test/addition'
| | | | | 
| * | | | commit 72f8ade487239e5405b07cf059509e21004b2020
| | | | | Author: Hidebray <daihiep10092005@gmail.com>
| | | | | Date:   Mon Sep 28 15:12:54 2026 +0700
| | | | | 
| | | | |     test(addition): add remaining 15 test cases and automated scripts
| | | | | 
| | | | |  tests/automated-tests/addition.spec.ts       | 215 +++++++++++++++++
| | | | |  tests/test-cases/addition/TC-ADDITION-011.md |  34 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-012.md |  34 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-013.md |  34 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-014.md |  34 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-015.md |  34 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-016.md |  33 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-017.md |  33 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-018.md |  34 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-019.md |  34 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-020.md |  34 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-021.md |  33 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-022.md |  33 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-023.md |  33 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-024.md |  34 +++
| | | | |  tests/test-cases/addition/TC-ADDITION-025.md |  32 +++
| | | | |  16 files changed, 718 insertions(+)
| | | | | 
| | | * | commit a7ae8f1c7a72ceb33145dae3b0c84a0d99c36acf
| | | | | Author: Liam_laptop <throwaway24259@gmail.com>
| | | | | Date:   Mon Sep 28 15:47:48 2026 +0700
| | | | | 
| | | | |     Modify test script for concatenate, and execute test run for build 1, 2
| | | | | 
| | | | |  package.json                                 |   3 +-
| | | | |  .../concatenation-build-1-test-run.md        |  49 ++++++
| | | | |  .../concatenation-build-2-test-run.md        |  59 +++++++
| | | | |  tests/test-script/concatenation/README.md    |  39 +++++
| | | | |  .../concatenation/TC-CONCAT-001.spec.js      |  31 ----
| | | | |  .../concatenation/TC-CONCAT-002.spec.js      |  31 ----
| | | | |  .../concatenation/TC-CONCAT-003.spec.js      |  31 ----
| | | | |  .../concatenation/TC-CONCAT-004.spec.js      |  31 ----
| | | | |  .../concatenation/TC-CONCAT-005.spec.js      |  31 ----
| | | | |  .../concatenation/TC-CONCAT-006.spec.js      |  29 ----
| | | | |  .../concatenation/TC-CONCAT-007.spec.js      |  35 ----
| | | | |  .../concatenation/TC-CONCAT-008.spec.js      |  37 ----
| | | | |  .../concatenation/TC-CONCAT-009.spec.js      |  37 ----
| | | | |  .../concatenation/TC-CONCAT-010.spec.js      |  31 ----
| | | | |  .../concatenation/TC-CONCAT-011.spec.js      |  39 -----
| | | | |  .../concatenation/TC-CONCAT-012.spec.js      |  44 -----
| | | | |  .../concatenation/concatenation.data.js      |  12 ++
| | | | |  .../concatenation/concatenation.page.js      |  55 ++++++
| | | | |  .../concatenation/concatenation.spec.js      | 152 +++++++++++++++++
| | | | |  tests/test-summary/BUG-CONCAT-001.md         |  50 ++++++
| | | | |  .../test-summary/evidence/BUG-CONCAT-001.png | Bin 0 -> 51604 bytes
| | | | |  21 files changed, 418 insertions(+), 408 deletions(-)
| | | | |   
| | | * |   commit 6d8b887f1f021e37c9d1f84cddcc7a03f5909e74
| | | |\ \  Merge: 79d65e7 fdf4908
| |_|_|/ /  Author: Liam_laptop <throwaway24259@gmail.com>
|/| | | |   Date:   Mon Sep 28 15:10:22 2026 +0700
| | | | |   
| | | | |       Merge branch 'main' of https://github.com/Lime-coder/Software-Testing_Nhom05_BaiTapThietKeTestcase into test/concatenate
| | | | | 
* | | | | commit fdf4908588b60698ed2982b9cd91840fa9488831
|\| | | | Merge: d612554 5dbbbc4
| | | | | Author: Hidebray <daihiep10092005@gmail.com>
| | | | | Date:   Mon Sep 28 15:03:36 2026 +0700
| | | | | 
| | | | |     Merge branch 'test/addition'
| | | | | 
| * | | | commit 5dbbbc4cc30acd734203c6ccd232bf948ed70819
| | | | | Author: Hidebray <daihiep10092005@gmail.com>
| | | | | Date:   Mon Sep 28 14:56:21 2026 +0700
| | | | | 
| | | | |     test(addition): add 10 test cases for addition module
| | | | | 
| | | | |  tests/test-cases/addition/TC-ADDITION-001.md | 34 +++++++++++++++++
| | | | |  tests/test-cases/addition/TC-ADDITION-002.md | 34 +++++++++++++++++
| | | | |  tests/test-cases/addition/TC-ADDITION-003.md | 34 +++++++++++++++++
| | | | |  tests/test-cases/addition/TC-ADDITION-004.md | 34 +++++++++++++++++
| | | | |  tests/test-cases/addition/TC-ADDITION-005.md | 34 +++++++++++++++++
| | | | |  tests/test-cases/addition/TC-ADDITION-006.md | 35 ++++++++++++++++++
| | | | |  tests/test-cases/addition/TC-ADDITION-007.md | 33 +++++++++++++++++
| | | | |  tests/test-cases/addition/TC-ADDITION-008.md | 33 +++++++++++++++++
| | | | |  tests/test-cases/addition/TC-ADDITION-009.md | 33 +++++++++++++++++
| | | | |  tests/test-cases/addition/TC-ADDITION-010.md | 33 +++++++++++++++++
| | | | |  10 files changed, 337 insertions(+)
| | | | |   
* | | | |   commit d61255400d55bb043b50aaf3a586e768fe26472d
|\ \ \ \ \  Merge: 183ea37 a506a56
| |_|/ / /  Author: HCMUS-HauProMax <151616856+phuchau26@users.noreply.github.com>
|/| | | /   Date:   Mon Sep 28 15:02:43 2026 +0700
| | |_|/    
| |/| |         Merge pull request #4 from Lime-coder/test/multiplication
| | | |         
| | | |         Test/multiplication
| | | | 
| * | | commit a506a56bf329388a14ecfdf0c0547cc50be5b4d1
| | | | Author: Phuc Hau <phuchau.fit@gmail.com>
| | | | Date:   Mon Sep 28 15:01:08 2026 +0700
| | | | 
| | | |     feat: report after running script
| | | | 
| | | |  tests/test-cases/multiplication/TC-MUL-021.md |   2 +-
| | | |  tests/test-cases/multiplication/TC-MUL-022.md |   2 +-
| | | |  tests/test-cases/multiplication/TC-MUL-023.md |   2 +-
| | | |  .../multiplication-build-4-test-run.md        |  61 ++++++++++++++++++
| | | |  ....md => multiplication-build-5-test-run.md} |  15 +++--
| | | |  tests/test-runs/sprint-2-regression.md        |   1 -
| | | |  tests/test-script/multiplication/README.md    |  10 ++-
| | | |  .../multiplication/multiplication.page.js     |  17 ++++-
| | | |  tests/test-summary/BUG-MUL-001.md             |  43 ++++++++++++
| | | |  tests/test-summary/BUG-MUL-002.md             |  47 ++++++++++++++
| | | |  tests/test-summary/evidence/BUG-MUL-002.png   | Bin 0 -> 95828 bytes
| | | |  11 files changed, 188 insertions(+), 12 deletions(-)
| | | | 
| * | | commit c231de6e77122293585511982b91deed3b06b508
| | | | Author: Phuc Hau <phuchau.fit@gmail.com>
| | | | Date:   Mon Sep 28 14:55:55 2026 +0700
| | | | 
| | | |     feat: script for multiplication feature
| | | | 
| | | |  .gitignore                                    |   3 +
| | | |  package-lock.json                             |  58 ++++++++++++++++
| | | |  package.json                                  |  10 +++
| | | |  tests/test-runs/sprint-1-test-run.md          |  61 ++++++++++++++++-
| | | |  tests/test-script/multiplication/.gitkeep     |   0
| | | |  tests/test-script/multiplication/README.md    |  34 ++++++++++
| | | |  .../multiplication/multiplication.data.js     |  24 +++++++
| | | |  .../multiplication/multiplication.page.js     |  55 +++++++++++++++
| | | |  .../multiplication/multiplication.spec.js     |  63 ++++++++++++++++++
| | | |  tests/test-script/playwright.config.js        |  26 ++++++++
| | | |  tests/test-summary/evidence/BUG-MUL-001.png   | Bin 0 -> 743047 bytes
| | | |  11 files changed, 333 insertions(+), 1 deletion(-)
| | | | 
| * | | commit 3013b81fff0f004131dc1eedbcbc93040289b9db
| | | | Author: Phuc Hau <phuchau.fit@gmail.com>
| | | | Date:   Mon Sep 28 14:55:34 2026 +0700
| | | | 
| | | |     feat: add 3 fail testcase for build 5
| | | | 
| | | |  tests/test-cases/multiplication/TC-MUL-001.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-002.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-003.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-004.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-005.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-006.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-007.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-008.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-009.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-010.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-011.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-012.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-013.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-014.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-015.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-016.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-017.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-018.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-019.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-020.md |  3 +-
| | | |  tests/test-cases/multiplication/TC-MUL-021.md | 40 +++++++++++++++++
| | | |  tests/test-cases/multiplication/TC-MUL-022.md | 45 +++++++++++++++++++
| | | |  tests/test-cases/multiplication/TC-MUL-023.md | 44 ++++++++++++++++++
| | | |  23 files changed, 149 insertions(+), 40 deletions(-)
| | | |   
* | | |   commit 183ea377079c94c4ecb660f90ea9e3806ac9934b
|\ \ \ \  Merge: b43fcad 72d9dfe
| | | | | Author: 23120049 <153164742+23120049@users.noreply.github.com>
| | | | | Date:   Mon Sep 28 14:58:35 2026 +0700
| | | | | 
| | | | |     Merge pull request #3 from Lime-coder/huyen
| | | | |     
| | | | |     edit md
| | | | | 
| * | | | commit 72d9dfe5bbfb7116a64a6265248621551b34405f
| | | | | Author: cgb <huyen211105@gmail.com>
| | | | | Date:   Mon Sep 28 14:55:39 2026 +0700
| | | | | 
| | | | |     edit md
| | | | | 
| | | | |  tests/test-cases/subtraction/TC-SUB-001.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-002.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-003.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-004.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-005.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-006.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-007.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-008.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-009.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-010.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-011.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-012.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-013.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-014.md |  35 +
| | | | |  tests/test-cases/subtraction/TC-SUB-015.md |  34 +
| | | | |  tests/test-cases/subtraction/TC-SUB-016.md |  34 +
| | | | |  tests/test-cases/subtraction/TC-SUB-017.md |  33 +
| | | | |  tests/test-cases/subtraction/TC-SUB-018.md |  34 +
| | | | |  tests/test-cases/subtraction/TC-SUB-019.md |  34 +
| | | | |  tests/test-cases/subtraction/TC-SUB-020.md |  34 +
| | | | |  tests/test-cases/subtraction/TC-SUB-021.md |  34 +
| | | | |  tests/test-cases/subtraction/TC-SUB-022.md |  34 +
| | | | |  tests/test-cases/subtraction/TC-SUB-023.md |  32 +
| | | | |  tests/test-cases/subtraction/TC-SUB-024.md |  35 +
| | | | |  tests/test-cases/subtraction/testcases.md  | 853 +------------------
| | | | |  25 files changed, 856 insertions(+), 825 deletions(-)
| | | | | 
* | | | | commit b43fcad69ecc230f5eec3a2d4534c6ebdfc3806f
|\| | | | Merge: c38d0a2 ef6fcbb
| | | | | Author: 23120049 <153164742+23120049@users.noreply.github.com>
| | | | | Date:   Mon Sep 28 14:42:59 2026 +0700
| | | | | 
| | | | |     Merge pull request #2 from Lime-coder/huyen
| | | | |     
| | | | |     add test cases
| | | | | 
| * | | | commit ef6fcbbcbea2eda5f7e47e0588bf238d42590bd4
| | |/ /  Author: cgb <huyen211105@gmail.com>
| |/| |   Date:   Mon Sep 28 14:42:04 2026 +0700
| | | |   
| | | |       add test cases
| | | |   
| | | |    tests/test-cases/subtraction/testcases.md | 825 ++++++++++++++++++++
| | | |    1 file changed, 825 insertions(+)
| | | |   
* | | |   commit c38d0a246be48b956216d142515667da2b59783f
|\ \ \ \  Merge: 79b551f f97355f
| |/ / /  Author: HCMUS-HauProMax <151616856+phuchau26@users.noreply.github.com>
|/| / /   Date:   Mon Sep 28 14:41:57 2026 +0700
| |/ /    
| | |         Merge pull request #1 from Lime-coder/test/multiplication
| | |         
| | |         Test/multiplication
| | | 
| | * commit 79d65e7cd46ac26d6ed553d3af72182cd2d96f63
| | | Author: Liam_laptop <throwaway24259@gmail.com>
| | | Date:   Mon Sep 28 15:09:34 2026 +0700
| | | 
| | |     Generate test script of concatenation for playwright
| | | 
| | |  .../concatenation/TC-CONCAT-001.spec.js         | 31 +++++++++++++
| | |  .../concatenation/TC-CONCAT-002.spec.js         | 31 +++++++++++++
| | |  .../concatenation/TC-CONCAT-003.spec.js         | 31 +++++++++++++
| | |  .../concatenation/TC-CONCAT-004.spec.js         | 31 +++++++++++++
| | |  .../concatenation/TC-CONCAT-005.spec.js         | 31 +++++++++++++
| | |  .../concatenation/TC-CONCAT-006.spec.js         | 29 ++++++++++++
| | |  .../concatenation/TC-CONCAT-007.spec.js         | 35 +++++++++++++++
| | |  .../concatenation/TC-CONCAT-008.spec.js         | 37 ++++++++++++++++
| | |  .../concatenation/TC-CONCAT-009.spec.js         | 37 ++++++++++++++++
| | |  .../concatenation/TC-CONCAT-010.spec.js         | 31 +++++++++++++
| | |  .../concatenation/TC-CONCAT-011.spec.js         | 39 ++++++++++++++++
| | |  .../concatenation/TC-CONCAT-012.spec.js         | 44 +++++++++++++++++++
| | |  12 files changed, 407 insertions(+)
| | |   
| | *   commit ca947786e9c3f3864138b811f4b47258a6981222
| | |\  Merge: 91d2c9a f97355f
| | |/  Author: Liam_laptop <throwaway24259@gmail.com>
| |/|   Date:   Mon Sep 28 14:56:19 2026 +0700
| | |   
| | |       Merge branch 'test/multiplication' of https://github.com/Lime-coder/Software-Testing_Nhom05_BaiTapThietKeTestcase into test/concatenate
| | | 
| * | commit f97355f9ff078d8bb83b15bca6a4cb0b787fd601
| | | Author: Phuc Hau <phuchau.fit@gmail.com>
| | | Date:   Mon Sep 28 14:39:57 2026 +0700
| | | 
| | |     strucure: add test script folder
| | | 
| | |  tests/test-script/addition/.gitkeep       | 0
| | |  tests/test-script/concatenation/.gitkeep  | 0
| | |  tests/test-script/division/.gitkeep       | 0
| | |  tests/test-script/multiplication/.gitkeep | 0
| | |  tests/test-script/subtraction/.gitkeep    | 0
| | |  5 files changed, 0 insertions(+), 0 deletions(-)
| | | 
| * | commit 24857ef3d02dcd1be4d4e9f92f14090086829bb2
|/ /  Author: Phuc Hau <phuchau.fit@gmail.com>
| |   Date:   Mon Sep 28 14:37:14 2026 +0700
| |   
| |       feat: testcase for multiplication feature
| |   
| |    tests/test-cases/multiplication/.gitkeep      |  0
| |    tests/test-cases/multiplication/TC-MUL-001.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-002.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-003.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-004.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-005.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-006.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-007.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-008.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-009.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-010.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-011.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-012.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-013.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-014.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-015.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-016.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-017.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-018.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-019.md | 44 +++++++++++++++++++++
| |    tests/test-cases/multiplication/TC-MUL-020.md | 44 +++++++++++++++++++++
| |    21 files changed, 880 insertions(+)
| | 
| * commit 91d2c9ac68b1ab1f60e08142a7181041151ca352
|/  Author: Liam_laptop <throwaway24259@gmail.com>
|   Date:   Mon Sep 28 14:54:44 2026 +0700
|   
|       Add test case for concatenation feature
|   
|    tests/test-cases/concatenation/TC-CONCAT-001.md | 36 +++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-002.md | 36 +++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-003.md | 36 +++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-004.md | 36 +++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-005.md | 36 +++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-006.md | 35 +++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-007.md | 36 +++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-008.md | 36 +++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-009.md | 38 +++++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-010.md | 36 +++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-011.md | 35 +++++++++++++++++++
|    tests/test-cases/concatenation/TC-CONCAT-012.md | 37 ++++++++++++++++++++
|    12 files changed, 433 insertions(+)
| 
* commit 79b551f099be5377b3714b521e1c7a46f2faba49
| Author: Phuc Hau <phuchau.fit@gmail.com>
| Date:   Mon Sep 28 14:29:21 2026 +0700
| 
|     feat: add new testcase empty folder
| 
|  tests/test-cases/addition/.gitkeep       | 0
|  tests/test-cases/concatenation/.gitkeep  | 0
|  tests/test-cases/division/.gitkeep       | 0
|  tests/test-cases/multiplication/.gitkeep | 0
|  tests/test-cases/subtraction/.gitkeep    | 0
|  5 files changed, 0 insertions(+), 0 deletions(-)
| 
* commit fb2ef3980de1ddf40ad94d198a52ad0aebdb6358
| Author: Phuc Hau <phuchau.fit@gmail.com>
| Date:   Mon Sep 28 14:22:15 2026 +0700
| 
|     chore: initial structure files
| 
|  tests/test-runs/sprint-1-test-run.md      | 1 +
|  tests/test-runs/sprint-2-regression.md    | 1 +
|  tests/test-summary/traceability-matrix.md | 1 +
|  3 files changed, 3 insertions(+)
| 
* commit 0866312ad37d7ef30f202f7d225f8293cc6082c7
| Author: Phuc Hau <phuchau.fit@gmail.com>
| Date:   Mon Sep 28 14:13:31 2026 +0700
| 
|     chore: initial structure files
| 
|  tests/test-runs/sprint-1-test-run.md      | 0
|  tests/test-runs/sprint-2-regression.md    | 0
|  tests/test-summary/traceability-matrix.md | 0
|  3 files changed, 0 insertions(+), 0 deletions(-)
| 
* commit f74be99ab1f61dcad986ffa69aaff478da27693a
  Author: Liam_laptop <throwaway24259@gmail.com>
  Date:   Mon Sep 28 14:04:41 2026 +0700
  
      first commit
  
   README.md | Bin 0 -> 100 bytes
   1 file changed, 0 insertions(+), 0 deletions(-)
  
* commit 12789260af3e936b17a5228efd4f650da256bf21
  Author: Phuc Hau <phuchau.fit@gmail.com>
  Date:   Mon Sep 28 14:13:31 2026 +0700
  
      chore: initial structure files
  
   tests/test-runs/sprint-1-test-run.md      | 0
   tests/test-runs/sprint-2-regression.md    | 0
   tests/test-summary/traceability-matrix.md | 0
   3 files changed, 0 insertions(+), 0 deletions(-)

```
