function Spy(target,method) {
    let originalFn = target[method];

    let result = {
        count: 0
    };

    target[method] = function () {
        result.count++;
        return originalFn.apply(this,arguments);
    };

    return result;
}