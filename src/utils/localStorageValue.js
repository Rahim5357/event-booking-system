// Save to localStorage with JSON.stringify only if the value is an object
export function setLocalStorageValue(key, value) {
    const isObject = typeof value === "object" && value !== null;
    localStorage.setItem(key, isObject ? JSON.stringify(value) : value);
  }
  
  // Retrieve from localStorage with JSON.parse only if the value is an object
export function getLocalStorageValue(key) {
    const value = localStorage.getItem(key);
    try {
      return value && (value.startsWith("{") || value.startsWith("[")) ? JSON.parse(value) : value;
    } catch (e) {
      return value;
    }
  }
  

export function removeLocalStorageValue(key){
    return localStorage.removeItem(`${key}`);
}