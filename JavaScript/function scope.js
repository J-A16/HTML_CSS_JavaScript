const myAlert = () => {
    const x = "Help! I think I found a clue!";
    let count = 0;
    const alerter = () => {
        alert(`${x} ${++count}`);
    };

    return alerter;
};

const funcAlert = myAlert();
const funcAlert2 = myAlert();
funcAlert(); // Help! I think I found a clue! 1
funcAlert(); // Help! I think I found a clue! 2
funcAlert2(); // Help! I think I found a clue! 1
funcAlert2(); // Help! I think I found a clue! 2