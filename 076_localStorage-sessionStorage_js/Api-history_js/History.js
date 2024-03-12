const back = () => {
    window.history.back();
};

const backTo = (n) => {
    window.history.go(-2);
};

const forward = () => {
    window.history.forward();
};

const getHistory = () => {
    alert(window.history.length);
};
