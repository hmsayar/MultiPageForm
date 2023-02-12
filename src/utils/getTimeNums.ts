export default function getTimeNums(){
    let date = new Date()
    return {day:date.getDate(), month:date.getUTCMonth()+1, year:date.getUTCFullYear()}
}