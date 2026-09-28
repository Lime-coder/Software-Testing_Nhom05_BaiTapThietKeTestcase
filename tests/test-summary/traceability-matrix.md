# Traceability Matrix — Addition Module

## Requirement → Test Case → Bug

| Requirement | Test Cases | Build 1 Status | Build 2 Status | Bugs |
| --- | --- | --- | --- | --- |
| FR-CALC-ADDITION-01 (Basic arithmetic) | TC-001 đến TC-006, TC-011 đến TC-013, TC-018 đến TC-020, TC-024 | Mostly Passed (1 fail) | All Failed | BUG-ADD-002, BUG-ADD-003 |
| FR-CALC-ADDITION-02 (Whitespace handling) | TC-014, TC-015 | Passed | Failed | BUG-ADD-003 |
| FR-CALC-ADDITION-03 (Validation messages) | TC-007 đến TC-010, TC-016, TC-017, TC-021 đến TC-023 | All Failed | All Failed | BUG-ADD-001, BUG-ADD-004 |
| FR-CALC-ADDITION-04 (Clear button) | TC-025 | Passed | Passed | - |

## Bug Summary

| Bug ID | Build | Severity | Priority | Affected TCs | Status |
| --- | --- | --- | --- | --- | --- |
| BUG-ADD-001 | 1 | Major | P1 | TC-007,008,009,010,016,017,021,022,023 | Open |
| BUG-ADD-002 | 1 | Minor | P2 | TC-018 | Open |
| BUG-ADD-003 | 2 | Critical | P0 | TC-001~006, TC-011~015, TC-018~020, TC-024 | Open |
| BUG-ADD-004 | 2 | Major | P1 | TC-007,008,009,010,016,017,021,022,023 | Open |

## Test Run Coverage

| Build | Total | Passed | Failed | Pass Rate | Run Date |
| --- | ---: | ---: | ---: | ---: | --- |
| Build 1 | 25 | 15 | 10 | 60% | 2026-09-28 |
| Build 2 | 25 | 1 | 24 | 4% | 2026-09-28 |
