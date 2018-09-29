const isAvailable = (function isAvailableIffe() {
    const test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }());
  
  const util = {
    get(key) {
      if (isAvailable) {
        return localStorage.getItem(key);
      }
      return null;
    },
  
    set(key, value) {
      if (isAvailable) {
        return localStorage.setItem(key, value);
      }
  
      return null;
    },
  
    remove(key) {
      if (isAvailable) {
        return localStorage.removeItem(key);
      }
  
      return null;
    },
  };
  
  export default util;
  