# Exercise 13 - Palindromes

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```

# NOTE TO SELF: 

CREATE THE FOLLOWING TWO SOLUTIONS:
## SOLUTION 1
1. ONLY EXTRACT ALL NUMBERS, LOWERCASE AND CAPITAL LETTERS BY CHECKING WHETHER THE ASCII CHAR NUMBER OR WHATEVER IS IN THE PROPER RANGE.
2. THEN CONVERT BOTH THE GIVEN STRING AND YOUR REVERSED STRING TO LOWERCASE TO NEGLECT CASE-SENSITIVITY
3. COMPARE USING === OPERATOR

## SOLUTION 2
1. USE REGEXES TO EXCLUSIVELY EXTRACT THE LETTERS AND NUMBERS FROM THE STRING
2. THEN DO THE REGULAR REVERSAL LIKE ALWAYS.