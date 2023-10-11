/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// NOTE: can be greatly optmized but I was too tired at the moment of writing
const isIsomorphic = (s, t) => {
  if (s.length != t.length) return false;

  const mapping1 = new Map();
  const mapping2 = new Map();
  for (let i = 0; i < s.length; i++) {
    if (
      (mapping1.has(s[i]) && mapping1.get(s[i]) != t[i]) ||
      (mapping2.has(t[i]) && mapping2.get(t[i]) != s[i])
    ) {
      return false;
    } else {
      mapping1.set(s[i], t[i]);
      mapping2.set(t[i], s[i]);
    }
  }

  return true;
};

console.log(isIsomorphic("badc", "bxdx"));
// console.log(isIsomorphic("bada", "badc"));
