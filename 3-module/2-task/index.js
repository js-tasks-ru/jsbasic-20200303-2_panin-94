/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
let minmax = str
    .split(",")
    .join(" ")
    .split(" ")
    .filter(item => isNaN(item) == false)
    .map(item => +item)
let min = Math.min(...minmax)
let max = Math.max(...minmax)
return {
    min:min,
    max:max,
}
}
