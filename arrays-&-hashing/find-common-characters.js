function commonChars(words) {
  let common = [];
  let first = words[0];

  for (let char of first) {
    let flag = true;
    for (let i = 1; i < words.length; i++) {
      let index = words[i].indexOf(char);
      if (index === -1) {
        flag = false;
        break;
      } else {
        words[i] = words[i].slice(0, index) + words[i].slice(index + 1);
      }
    }
    if (flag === true) {
      common.push(char);
    }
  }
  return common;
}
