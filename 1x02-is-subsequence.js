// 21-03-2023

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let j = 0;
  let search = s[j];
  for (let i = 0; i < t.length; i++) {
    if (search == t[i]) {
      if (j + 1 == s.length) return true;
      search = s[++j];
    }
  }

  return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
