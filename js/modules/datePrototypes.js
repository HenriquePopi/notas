export default function diasNoCorrenteMe() {
  var days = [30, 31],
  m = this.getMonth();

  if (m == 1) {
    return ( (this.getFullYear() % 4 == 0) && ( (this.getFullYear() % 100 != 0 ) || (this.getFullYear() % 400 == 0) ) ) ? 29 : 28;
  } else {
    return days[(m + (m < 7 ? 1 : 0)) % 2];
  }
}

// Date.prototype.diasNoCorrenteMes = function() {
//   var days = [30, 31],
//   m = this.getMonth();

//   if (m == 1) {
//     return ( (this.getFullYear() % 4 == 0) && ( (this.getFullYear() % 100 != 0 ) || (this.getFullYear() % 400 == 0) ) ) ? 29 : 28;
//   } else {
//     return days[(m + (m < 7 ? 1 : 0)) % 2];
//   }
// }