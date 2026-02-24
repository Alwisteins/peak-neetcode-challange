class Solution {
  /**
   * @param {string[]} emails
   * @return {number}
   */
  numUniqueEmails(emails) {
    let total = new Map();
    for (let i = 0; i < emails.length; i++) {
      let [local, domain] = emails[i].split("@");

      local = local.split("+")[0];
      local = local.split(".").join("");

      total.set(local + "@" + domain);
    }
    return total.size;
  }
}
