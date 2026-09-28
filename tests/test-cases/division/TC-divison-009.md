# TC-DIV-009: Attempt to divide by zero

## Requirement ID
FR-DIV-001

## Module / Test type / Technique
Division / Negative / Boundary Value Analysis

## Preconditions
- The application is open and ready to accept numeric input.

## Test Owner
Quốc Huy

## Test data
| Numerator | Denominator |
|---|---|
| 8 | 0 |

## Test steps
1. Enter `8` as the numerator.
2. Select the division operation.
3. Enter `0` as the denominator.
4. Submit the calculation.

## Expected result
The application rejects the calculation and displays a clear validation or error message. It does not display a numeric result or crash.

## Status / Related bugs
Not Run / None
