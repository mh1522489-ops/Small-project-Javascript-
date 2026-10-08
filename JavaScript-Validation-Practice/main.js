const weekHeat = [1,2,3];
function isValidWeekHeat(value){
    if(!Array.isArray(value) || value.length ===0 || Number.isFinite(value))return false;
    return value.every((N) => (typeof N == "string" && N.trim() !== "") ? Number(N) : N)
}
console.log(isValidWeekHeat(weekHeat))
