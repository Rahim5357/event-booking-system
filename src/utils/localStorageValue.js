export function getLocalStorageValue(key){
    return localStorage.getItem(`${key}`);
}

export function setLocalStorageValue(key, value){
    return localStorage.setItem(`${key}`, value);
}

export function removeLocalStorageValue(key){
    return localStorage.removeItem(`${key}`);
}