function getCUVer(){
    return '1.1.2';
}

function isLetter(c) {
	return c.toLowerCase() != c.toUpperCase();
}

function isNum(val) {
	return (val.charCodeAt(0) > 47 && val.charCodeAt(0) < 58);
}

function saveJSONtoLocalStorage(key, json) {
    localStorage.setItem(key, JSON.stringify(json));
}

function getJSONfromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

module.exports = {
    getCUVer,
    isLetter,
    isNum,
    saveJSONtoLocalStorage,
    getJSONfromLocalStorage
};
