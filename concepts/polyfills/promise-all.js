Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let completed = 0;
        promises.forEach((p, i) => {
            Promise.resolve(p)
                .then((val) => {
                    results[i] = val;
                    completed++;
                    if (completed === promises.length) resolve(results);
                })
                .catch(reject);
        });
    });
};
