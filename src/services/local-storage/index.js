export const localStorageService = {
  write (key, value) {
    localStorage.setItem(key, value);
  },
  read (key) {
    return localStorage.getItem(key);
  },
  remove (key) {
    localStorage.removeItem(key);
  },
  removeAll () {
    localStorage.clear();
  }
};
