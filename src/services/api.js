class Api {
  login({ email, password }) {
    if (email === 'admin@admin.com' && password === '1234') {
      return true;
    }

    return false;
  }
}

export default new Api();
