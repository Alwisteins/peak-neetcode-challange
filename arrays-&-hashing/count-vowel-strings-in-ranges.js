function vowelStrings(words, queries) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let n = words.length;

  // step 1: precompute valid vowel word
  let valid = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let w = words[i].toLowerCase();
    if (vowels.has(w[0]) && vowels.has(w[w.length - 1])) {
      valid[i] = 1;
    }
  }

  // step 2: precompute prefix sum
  let prefix = new Array(n).fill(0);
  prefix[0] = valid[0];

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + valid[i];
  }

  // step 3: build the answer
  let ans = [];
  for (let [l, r] of queries) {
    if (l === 0) {
      ans.push(prefix[r]);
    } else {
      ans.push(prefix[r] - prefix[l - 1]);
    }
  }
  return ans;
}
