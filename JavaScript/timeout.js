const myAlert = () => {
    const x = "Help! I think I found a clue!";
    const alerter = () => {
        alert(x);
    };

    setTimeout(alerter, 1000); // this is an asynchronous function
    console.log("This log happens before the alert.");
};