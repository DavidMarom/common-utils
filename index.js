import styled from 'styled-components'

function CenterVH(el, w = "100%", h = "100%") {
    const CenterVH = styled.div`
    height:  ${props => (props.h)};
    width:  ${props => (props.w)};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #00ff00;
    `;
    return <CenterVH w={w} h={h}>{el}</CenterVH>
}

function getCUVer() {
    return '1.2.2';
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
    getJSONfromLocalStorage,
    CenterVH
};
