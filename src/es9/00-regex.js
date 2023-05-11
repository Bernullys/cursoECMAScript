const regularExpression = /(\d{4})-(\d{2})-(\d{2})/;
const matcherss = regularExpression.exec("2023-05-11");
console.log(matcherss);
console.table(matcherss);