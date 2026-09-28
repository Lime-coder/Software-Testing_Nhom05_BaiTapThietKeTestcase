*   commit ac78f3f176e86482cd8fd6206e6c75eb4365fc52 (HEAD -> test/concatenate, origin/main)
|\  Merge: d8bc0a2 3afa958
| | Author: HCMUS-HauProMax <151616856+phuchau26@users.noreply.github.com>
| | Date:   Mon Sep 28 15:57:16 2026 +0700
| |
| |     Merge pull request #10 from Lime-coder/test/multiplication
| |
| |     feat: ai audit of Phuc Hau
| |
| * commit 3afa9587e918b5c9cf4669fccfa4c5cb4a4bf301
| | Author: Phuc Hau <phuchau.fit@gmail.com>
| | Date:   Mon Sep 28 15:56:25 2026 +0700
| |
| |     feat: ai audit of Phuc Hau
| |
| |  reports/ai-audit-report-23120252.md | 103 +++++++++
| |  reports/ai-critique-23120252.md     |   3 +
| |  reports/git-commit-log-23120252.md  | 178 ++++++++++++++++
| |  3 files changed, 284 insertions(+)
| |
* |   commit d8bc0a22ecaae5da53c2c282589b3486ec179924
|\ \  Merge: e2c3ea9 eb8d343
| | | Author: Nguyễn Hoàng Liêm <145841734+Lime-coder@users.noreply.github.com>
| | | Date:   Mon Sep 28 15:55:23 2026 +0700
| | |
| | |     Merge pull request #9 from Lime-coder/test/concatenate
| | |
| | |     Test/concatenate
| | |
| * |   commit eb8d343baa55860a33096c88a3a942b081303f00
| |\ \  Merge: a7ae8f1 e2c3ea9
| |/ /  Author: Nguyễn Hoàng Liêm <145841734+Lime-coder@users.noreply.github.com>
|/| |   Date:   Mon Sep 28 15:53:05 2026 +0700
| | |
| | |       Merge branch 'main' into test/concatenate
| | |
* | |   commit e2c3ea9de87f2907eaabbba0fe0d5c0262ec8043
|\ \ \  Merge: fe22464 804b607
| | | | Author: HUY <vinhuytran0810@gmail.com>
| | | | Date:   Mon Sep 28 15:47:39 2026 +0700
| | | |
| | | |     Merge branch 'test/Divide'
| | | |
| * | | commit 804b6071393a7ea60f39e1cfb2967d91f6454052
| | | | Author: HUY <vinhuytran0810@gmail.com>
| | | | Date:   Mon Sep 28 15:43:22 2026 +0700
| | | |
| | | |     Add division test cases and Playwright tests
| | | |
| | | |  package.json           |  3 +-
| | | |  .../TC-divison-001.md  | 30 ++++
| | | |  .../TC-divison-002.md  | 30 ++++
| | | |  .../TC-divison-003.md  | 30 ++++
| | | |  .../TC-divison-004.md  | 30 ++++
| | | |  .../TC-divison-005.md  | 30 ++++
| | | |  .../TC-divison-006.md  | 30 ++++
| | | |  .../TC-divison-007.md  | 30 ++++
| | | |  .../TC-divison-008.md  | 31 ++++
| | | |  .../TC-divison-009.md  | 30 ++++
| | | |  ...build-1-test-run.md | 47 +++++
| | | |  ...build-2-test-run.md | 48 ++++++
| | | |  .../division/README.md | 34 ++++
| | | |  .../division.data.js   | 13 ++
| | | |  .../division.page.js   | 47 +++++
| | | |  .../division.spec.js   | 30 ++++
| | | |  .../BUG-DIV-001.md     | 44 +++++
| | | |  .../BUG-DIV-002.md     | 45 +++++
| | | |  18 files changed, 581 insertions(+), 1 deletion(-)
| | | |
* | | |   commit fe22464387c1c24ae8d1664da709db43d89bbb9c
|\ \ \ \  Merge: 85f9ef1 857eee1
| | | | | Author: 23120049 <153164742+23120049@users.noreply.github.com>
| | | | | Date:   Mon Sep 28 15:28:39 2026 +0700
| | | | |
| | | | |     Merge pull request #5 from Lime-coder/huyen
| | | | |
| | | | |     add test scripts
| | | | |
| * | | | commit 857eee1a11293256bc6503f0df731b42896514e9 (origin/huyen)
| | | | | Author: cgb <huyen211105@gmail.com>
| | | | | Date:   Mon Sep 28 15:23:42 2026 +0700
| | | | |
| | | | |     add test scripts
| | | | |
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 14 +
| | | | |  ...spec.js | 12 +
| | | | |  ...spec.js | 11 +
| | | | |  ...spec.js | 11 +
| | | | |  ...spec.js | 11 +
| | | | |  ...spec.js | 11 +
| | | | |  ...spec.js | 11 +
| | | | |  ...spec.js | 11 +
| | | | |  ...spec.js | 11 +
| | | | |  ...spec.js | 11 +
| | | | |  ...spec.js | 16 +
| | | | |  ...spec.js | 38 +++
| | | | |  ...pers.js | 85 ++++++
| | | | |  25 files changed, 397 insertions(+)
| | | | |
* | | | | commit 85f9ef146a67e02c62dd407ebfdc31e9f1510fec (origin/test/addition)
| | | | | Author: Hidebray <daihiep10092005@gmail.com>
| | | | | Date:   Mon Sep 28 15:26:18 2026 +0700
| | | | |
| | | | |     test(addition): create POM automated tests
| | | | |
| | | | |  ...ADME.md | 15 ++
| | | | |  ...data.js | 28 +++
| | | | |  ...page.js | 68 ++++++
| | | | |  ...spec.js | 50 ++++
| | | | |  4 files changed, 161 insertions(+)
| | | | |
* | | | | commit d1adafc2af37bfc3c824d845d87b47deebf9cc41
| | | | | Author: Hidebray <daihiep10092005@gmail.com>
| | | | | Date:   Mon Sep 28 15:13:49 2026 +0700
| | | | |
| | | | |     chore: remove automated test script as requested
| | | | |
| | | | |  ...spec.ts | 215 ------
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
| | | | |  ...spec.ts | 215 ++++++
| | | | |  ...-011.md |  34 +
| | | | |  ...-012.md |  34 +
| | | | |  ...-013.md |  34 +
| | | | |  ...-014.md |  34 +
| | | | |  ...-015.md |  34 +
| | | | |  ...-016.md |  33 +
| | | | |  ...-017.md |  33 +
| | | | |  ...-018.md |  34 +
| | | | |  ...-019.md |  34 +
| | | | |  ...-020.md |  34 +
| | | | |  ...-021.md |  33 +
| | | | |  ...-022.md |  33 +
| | | | |  ...-023.md |  33 +
| | | | |  ...-024.md |  34 +
| | | | |  ...-025.md |  32 +
| | | | |  16 files changed, 718 insertions(+)
| | | | |
| | | * | commit a7ae8f1c7a72ceb33145dae3b0c84a0d99c36acf (origin/test/concatenate)
| | | | | Author: Liam_laptop <throwaway24259@gmail.com>
| | | | | Date:   Mon Sep 28 15:47:48 2026 +0700
| | | | |
| | | | |     Modify test script for concatenate, and execute test run for build 1, 2
| | | | |
| | | | |  ...ge.json |   3 +-
| | | | |  ...-run.md |  49 ++
| | | | |  ...-run.md |  59 ++
| | | | |  ...ADME.md |  39 ++
| | | | |  ...spec.js |  31 --
| | | | |  ...spec.js |  31 --
| | | | |  ...spec.js |  31 --
| | | | |  ...spec.js |  31 --
| | | | |  ...spec.js |  31 --
| | | | |  ...spec.js |  29 -
| | | | |  ...spec.js |  35 --
| | | | |  ...spec.js |  37 --
| | | | |  ...spec.js |  37 --
| | | | |  ...spec.js |  31 --
| | | | |  ...spec.js |  39 --
| | | | |  ...spec.js |  44 --
| | | | |  ...data.js |  12 +
| | | | |  ...page.js |  55 ++
| | | | |  ...spec.js | 152 ++++++
| | | | |  ...-001.md |  50 ++
| | | | |  ...001.png | Bin 0 -> 51604 bytes
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
| | | | |  ...TION-001.md | 34 +++++
| | | | |  ...TION-002.md | 34 +++++
| | | | |  ...TION-003.md | 34 +++++
| | | | |  ...TION-004.md | 34 +++++
| | | | |  ...TION-005.md | 34 +++++
| | | | |  ...TION-006.md | 35 ++++++
| | | | |  ...TION-007.md | 33 +++++
| | | | |  ...TION-008.md | 33 +++++
| | | | |  ...TION-009.md | 33 +++++
| | | | |  ...TION-010.md | 33 +++++
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
| * | | commit a506a56bf329388a14ecfdf0c0547cc50be5b4d1 (origin/test/multiplication)
| | | | Author: Phuc Hau <phuchau.fit@gmail.com>
| | | | Date:   Mon Sep 28 15:01:08 2026 +0700
| | | |
| | | |     feat: report after running script
| | | |
| | | |  .../TC-MUL-021.md       |   2 +-
| | | |  .../TC-MUL-022.md       |   2 +-
| | | |  .../TC-MUL-023.md       |   2 +-
| | | |  ...-build-4-test-run.md |  61 ++++++
| | | |  ...build-5-test-run.md} |  15 +-
| | | |  ...rint-2-regression.md |   1 -
| | | |  .../README.md           |  10 +-
| | | |  ...ltiplication.page.js |  17 +-
| | | |  .../BUG-MUL-001.md      |  43 ++++
| | | |  .../BUG-MUL-002.md      |  47 ++++
| | | |  .../BUG-MUL-002.png     | Bin 0 -> 95828 bytes
| | | |  11 files changed, 188 insertions(+), 12 deletions(-)
| | | |
| * | | commit c231de6e77122293585511982b91deed3b06b508
| | | | Author: Phuc Hau <phuchau.fit@gmail.com>
| | | | Date:   Mon Sep 28 14:55:55 2026 +0700
| | | |
| | | |     feat: script for multiplication feature
| | | |
| | | |  .gitignore              |   3 +
| | | |  package-lock.json       |  58 +++++
| | | |  package.json            |  10 +
| | | |  ...sprint-1-test-run.md |  61 ++++-
| | | |  .../.gitkeep            |   0
| | | |  .../README.md           |  34 +++
| | | |  ...ltiplication.data.js |  24 ++
| | | |  ...ltiplication.page.js |  55 +++++
| | | |  ...ltiplication.spec.js |  63 ++++++
| | | |  ...playwright.config.js |  26 +++
| | | |  .../BUG-MUL-001.png     | Bin 0 -> 743047 bytes
| | | |  11 files changed, 333 insertions(+), 1 deletion(-)
| | | |
| * | | commit 3013b81fff0f004131dc1eedbcbc93040289b9db
| | | | Author: Phuc Hau <phuchau.fit@gmail.com>
| | | | Date:   Mon Sep 28 14:55:34 2026 +0700
| | | |
| | | |     feat: add 3 fail testcase for build 5
| | | |
| | | |  .../TC-MUL-001.md        |  3 +-
| | | |  .../TC-MUL-002.md        |  3 +-
| | | |  .../TC-MUL-003.md        |  3 +-
| | | |  .../TC-MUL-004.md        |  3 +-
| | | |  .../TC-MUL-005.md        |  3 +-
| | | |  .../TC-MUL-006.md        |  3 +-
| | | |  .../TC-MUL-007.md        |  3 +-
| | | |  .../TC-MUL-008.md        |  3 +-
| | | |  .../TC-MUL-009.md        |  3 +-
| | | |  .../TC-MUL-010.md        |  3 +-
| | | |  .../TC-MUL-011.md        |  3 +-
| | | |  .../TC-MUL-012.md        |  3 +-
| | | |  .../TC-MUL-013.md        |  3 +-
| | | |  .../TC-MUL-014.md        |  3 +-
| | | |  .../TC-MUL-015.md        |  3 +-
| | | |  .../TC-MUL-016.md        |  3 +-
| | | |  .../TC-MUL-017.md        |  3 +-
| | | |  .../TC-MUL-018.md        |  3 +-
| | | |  .../TC-MUL-019.md        |  3 +-
| | | |  .../TC-MUL-020.md        |  3 +-
| | | |  .../TC-MUL-021.md        | 40 +++++
| | | |  .../TC-MUL-022.md        | 45 ++++++
| | | |  .../TC-MUL-023.md        | 44 +++++
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
| | | | |  ...B-001.md |  35 +
| | | | |  ...B-002.md |  35 +
| | | | |  ...B-003.md |  35 +
| | | | |  ...B-004.md |  35 +
| | | | |  ...B-005.md |  35 +
| | | | |  ...B-006.md |  35 +
| | | | |  ...B-007.md |  35 +
| | | | |  ...B-008.md |  35 +
| | | | |  ...B-009.md |  35 +
| | | | |  ...B-010.md |  35 +
| | | | |  ...B-011.md |  35 +
| | | | |  ...B-012.md |  35 +
| | | | |  ...B-013.md |  35 +
| | | | |  ...B-014.md |  35 +
| | | | |  ...B-015.md |  34 +
| | | | |  ...B-016.md |  34 +
| | | | |  ...B-017.md |  33 +
| | | | |  ...B-018.md |  34 +
| | | | |  ...B-019.md |  34 +
| | | | |  ...B-020.md |  34 +
| | | | |  ...B-021.md |  34 +
| | | | |  ...B-022.md |  34 +
| | | | |  ...B-023.md |  32 +
| | | | |  ...B-024.md |  35 +
| | | | |  ...cases.md | 853 +-----
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
| | | |    .../testcases.md      | 825 ++++++
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
| | |  .../TC-CONCAT-001.spec.js      | 31 +++++++
| | |  .../TC-CONCAT-002.spec.js      | 31 +++++++
| | |  .../TC-CONCAT-003.spec.js      | 31 +++++++
| | |  .../TC-CONCAT-004.spec.js      | 31 +++++++
| | |  .../TC-CONCAT-005.spec.js      | 31 +++++++
| | |  .../TC-CONCAT-006.spec.js      | 29 ++++++
| | |  .../TC-CONCAT-007.spec.js      | 35 ++++++++
| | |  .../TC-CONCAT-008.spec.js      | 37 ++++++++
| | |  .../TC-CONCAT-009.spec.js      | 37 ++++++++
| | |  .../TC-CONCAT-010.spec.js      | 31 +++++++
| | |  .../TC-CONCAT-011.spec.js      | 39 ++++++++
| | |  .../TC-CONCAT-012.spec.js      | 44 ++++++++++
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
| |    .../multiplication/.gitkeep           |  0
| |    .../multiplication/TC-MUL-001.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-002.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-003.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-004.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-005.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-006.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-007.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-008.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-009.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-010.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-011.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-012.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-013.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-014.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-015.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-016.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-017.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-018.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-019.md      | 44 +++++++++++++
| |    .../multiplication/TC-MUL-020.md      | 44 +++++++++++++
| |    21 files changed, 880 insertions(+)
| |
| * commit 91d2c9ac68b1ab1f60e08142a7181041151ca352
|/  Author: Liam_laptop <throwaway24259@gmail.com>
|   Date:   Mon Sep 28 14:54:44 2026 +0700
|
|       Add test case for concatenation feature
|
|    .../concatenation/TC-CONCAT-001.md          | 36 ++++++++++++++++
|    .../concatenation/TC-CONCAT-002.md          | 36 ++++++++++++++++
|    .../concatenation/TC-CONCAT-003.md          | 36 ++++++++++++++++
|    .../concatenation/TC-CONCAT-004.md          | 36 ++++++++++++++++
|    .../concatenation/TC-CONCAT-005.md          | 36 ++++++++++++++++
|    .../concatenation/TC-CONCAT-006.md          | 35 +++++++++++++++
|    .../concatenation/TC-CONCAT-007.md          | 36 ++++++++++++++++
|    .../concatenation/TC-CONCAT-008.md          | 36 ++++++++++++++++
|    .../concatenation/TC-CONCAT-009.md          | 38 +++++++++++++++++
|    .../concatenation/TC-CONCAT-010.md          | 36 ++++++++++++++++
|    .../concatenation/TC-CONCAT-011.md          | 35 +++++++++++++++
|    .../concatenation/TC-CONCAT-012.md          | 37 ++++++++++++++++
|    12 files changed, 433 insertions(+)
|
* commit 79b551f099be5377b3714b521e1c7a46f2faba49 (main)
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

* commit 12789260af3e936b17a5228efd4f650da256bf21 (origin/master)
  Author: Phuc Hau <phuchau.fit@gmail.com>
  Date:   Mon Sep 28 14:13:31 2026 +0700

      chore: initial structure files

   tests/test-runs/sprint-1-test-run.md      | 0
   tests/test-runs/sprint-2-regression.md    | 0
   tests/test-summary/traceability-matrix.md | 0
   3 files changed, 0 insertions(+), 0 deletions(-)