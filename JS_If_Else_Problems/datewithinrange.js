function isSpringSeason(day, month) {
    if ((month === 3 && day >= 20) || (month === 4) || (month === 5) || (month === 6 && day <= 20)) {
        return true;
    }
    return false;
}

const args = process.argv.slice(2);
const day = parseInt(args[0], 10);
const month = parseInt(args[1], 10);

console.log(isSpringSeason(day, month));
