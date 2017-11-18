var x, y 

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function inc(n) {
  n = n++
  return n
}

function dec(n) {
  y = n--
  n = y
  return y
}

function makeInt(n) {
  return n.parseInt ;
}

function preserveDecimal(n) {
  return n.parseFloat;
}


