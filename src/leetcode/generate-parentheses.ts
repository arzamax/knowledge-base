// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
//
// Example 2:
// Input: n = 1
// Output: ["()"]

const backtrack = (res: string[], current: string, open: number, close: number, max: number) => {
  if (current.length === max * 2) {
    res.push(current);
    return current;
  }

  if (open < max) {
    backtrack(res, `${current}(`, open + 1, close, max);
  }

  if (close < open) {
    backtrack(res, `${current})`, open, close + 1, max);
  }
};

const generateParenthesis = (n: number): string[] => {
  const res: string[] = [];
  backtrack(res, '', 0, 0, n);
  return res;
};
