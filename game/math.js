//minからmaxまでの乱数を返す関数
function rnd(min, max){
    return Math.floor( Math.random()*(max - min + 1) ) + min
}