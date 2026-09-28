# Git Commit Log — 23120252

Lệnh được sử dụng:

```bash
git log --graph --all --stat
```

Kết quả trích xuất ngày 2026-09-28:

```text
* commit a506a56bf329388a14ecfdf0c0547cc50be5b4d1
| Author: Phuc Hau <phuchau.fit@gmail.com>
| Date:   Mon Sep 28 15:01:08 2026 +0700
| 
|     feat: report after running script
| 
|  tests/test-cases/multiplication/TC-MUL-021.md     |   2 +-
|  tests/test-cases/multiplication/TC-MUL-022.md     |   2 +-
|  tests/test-cases/multiplication/TC-MUL-023.md     |   2 +-
|  .../test-runs/multiplication-build-4-test-run.md  |  61 ++++++++++++++++++++
|  ...-run.md => multiplication-build-5-test-run.md} |  15 +++--
|  tests/test-runs/sprint-2-regression.md            |   1 -
|  tests/test-script/multiplication/README.md        |  10 +++-
|  .../multiplication/multiplication.page.js         |  17 +++++-
|  tests/test-summary/BUG-MUL-001.md                 |  43 ++++++++++++++
|  tests/test-summary/BUG-MUL-002.md                 |  47 +++++++++++++++
|  tests/test-summary/evidence/BUG-MUL-002.png       | Bin 0 -> 95828 bytes
|  11 files changed, 188 insertions(+), 12 deletions(-)
| 
* commit c231de6e77122293585511982b91deed3b06b508
| Author: Phuc Hau <phuchau.fit@gmail.com>
| Date:   Mon Sep 28 14:55:55 2026 +0700
| 
|     feat: script for multiplication feature
| 
|  .gitignore                                        |   3 +
|  package-lock.json                                 |  58 ++++++++++++++++++
|  package.json                                      |  10 ++++
|  tests/test-runs/sprint-1-test-run.md              |  61 ++++++++++++++++++-
|  tests/test-script/multiplication/.gitkeep         |   0
|  tests/test-script/multiplication/README.md        |  34 +++++++++++
|  .../multiplication/multiplication.data.js         |  24 ++++++++
|  .../multiplication/multiplication.page.js         |  55 +++++++++++++++++
|  .../multiplication/multiplication.spec.js         |  63 ++++++++++++++++++++
|  tests/test-script/playwright.config.js            |  26 ++++++++
|  tests/test-summary/evidence/BUG-MUL-001.png       | Bin 0 -> 743047 bytes
|  11 files changed, 333 insertions(+), 1 deletion(-)
| 
* commit 3013b81fff0f004131dc1eedbcbc93040289b9db
| Author: Phuc Hau <phuchau.fit@gmail.com>
| Date:   Mon Sep 28 14:55:34 2026 +0700
| 
|     feat: add 3 fail testcase for build 5
| 
|  tests/test-cases/multiplication/TC-MUL-001.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-002.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-003.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-004.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-005.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-006.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-007.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-008.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-009.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-010.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-011.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-012.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-013.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-014.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-015.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-016.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-017.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-018.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-019.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-020.md |  3 +-
|  tests/test-cases/multiplication/TC-MUL-021.md | 40 ++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-022.md | 45 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-023.md | 44 ++++++++++++++++++++++++
|  23 files changed, 149 insertions(+), 40 deletions(-)
| 
* commit f97355f9ff078d8bb83b15bca6a4cb0b787fd601
| Author: Phuc Hau <phuchau.fit@gmail.com>
| Date:   Mon Sep 28 14:39:57 2026 +0700
| 
|     strucure: add test script folder
| 
|  tests/test-script/addition/.gitkeep       | 0
|  tests/test-script/concatenation/.gitkeep  | 0
|  tests/test-script/division/.gitkeep       | 0
|  tests/test-script/multiplication/.gitkeep | 0
|  tests/test-script/subtraction/.gitkeep    | 0
|  5 files changed, 0 insertions(+), 0 deletions(-)
| 
* commit 24857ef3d02dcd1be4d4e9f92f14090086829bb2
| Author: Phuc Hau <phuchau.fit@gmail.com>
| Date:   Mon Sep 28 14:37:14 2026 +0700
| 
|     feat: testcase for multiplication feature
| 
|  tests/test-cases/multiplication/.gitkeep      |  0
|  tests/test-cases/multiplication/TC-MUL-001.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-002.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-003.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-004.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-005.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-006.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-007.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-008.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-009.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-010.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-011.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-012.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-013.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-014.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-015.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-016.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-017.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-018.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-019.md | 44 +++++++++++++++++++++++++
|  tests/test-cases/multiplication/TC-MUL-020.md | 44 +++++++++++++++++++++++++
|  21 files changed, 880 insertions(+)
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

