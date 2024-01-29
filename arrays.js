const welcome = [1, 2, 3, 4];

const notwelcome = function (number) {
    const result = number + 1;
    console.log(result);
};

function getin(func, num) {
    if (num % 2 === 0) {
        func(num);
    } else {
        console.log("the NUmber Is odd");
    }
}

for (const index in welcome) {
    getin(notwelcome, welcome[index]);
}
