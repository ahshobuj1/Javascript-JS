//* selecting

const selectFont = document.querySelector(`#selectFont`);
const selectBg = document.querySelector(`#selectBg`);
const btn = document.querySelector(`#btn`);
const main = document.querySelector(`main`);

selectFont.addEventListener(`change`, (event) => {
    const fontSize = event.target.value;
    main.style.fontSize = fontSize;
    localStorage.setItem('fontSizeStore', fontSize);
});

selectBg.addEventListener(`change`, (e) => {
    const bgColor = e.target.value;
    main.style.backgroundColor = bgColor;
    localStorage.setItem(`bgColorStore`, bgColor);
});

btn.addEventListener(`click`, () => {
    localStorage.removeItem(`fontSizeStore`);
    localStorage.removeItem(`bgColorStore`);
    seatValue(`18px`, `antiqueWhite`);
});

//* setValue

const seatValue = (fontData, bgData) => {
    selectFont.value = fontData;
    selectBg.value = bgData;
    main.style.fontSize = fontData;
    main.style.backgroundColor = bgData;
};

//* Load localStorage Value

const getData = () => {
    const fontData = localStorage.getItem(`fontSizeStore`);
    const bgData = localStorage.getItem(`bgColorStore`);

    if (fontData && bgData) {
        seatValue(fontData, bgData);
    } else if (fontData && !bgData) {
        seatValue(fontData, `antiqueWhite`);
    } else if (!fontData && bgData) {
        seatValue(`18px`, bgData);
    }
};
getData();
