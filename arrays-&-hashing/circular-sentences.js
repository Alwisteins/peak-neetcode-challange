function isCircularSentence(sentence) {
  const sentences = sentence.split(" ");

  for (let i = 0; i < sentences.length; i++) {
    const currentLast = sentences[i].slice(-1);
    const nextFirst = sentences[(i + 1) % sentences.length].charAt(0);

    if (currentLast !== nextFirst) {
      return false;
    }
  }

  return true;
}
