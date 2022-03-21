function createSecretHolder(secret) {
  let obj = {
    getSecret() {
      return secret;
    },
    setSecret(n) {
      secret = n;
    },
  };
  return obj;
}
console.log(createSecretHolder(5));
