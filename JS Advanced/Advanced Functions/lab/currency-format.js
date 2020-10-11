function result(fn) {
    let separator = ',';
    let symbol = '$';
    let symbolFirst = true;

    function inner(value) {
      return fn(separator,symbol,symbolFirst,value);
    }

    return inner;
}