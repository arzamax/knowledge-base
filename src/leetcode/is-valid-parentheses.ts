// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
//
// Example 1:
// Input: s = "()"
// Output: true
//
// Example 2:
// Input: s = "()[]{}"
// Output: true
//
// Example 3:
// Input: s = "(]"
// Output: false
//
// Example 4:
// Input: s = "([)]"
// Output: false
//
// Example 5:
// Input: s = "{[]}"
// Output: true

const OPEN_BRACKETS = new Set(['(', '[', '{']);

const isValidParentheses = (str: string) => {
  const stack = [];

  for (const s of str) {
    if (OPEN_BRACKETS.has(s)) {
      switch (s) {
        case '(':
          stack.push(')');
          break;
        case '[':
          stack.push(']');
          break;
        case '{':
          stack.push('}');
          break;
        default:
          return false;
      }
    } else {
      if (stack.length === 0 || s !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
