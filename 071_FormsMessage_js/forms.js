const myFunction = () => {
    const input = document.querySelector("input");

    if (input.validity.rangeOverflow) {
        input.setCustomValidity(
            `You made RangeOver error,value limitation under 210`
        );
    } else if (input.validity.rangeUnderflow) {
        input.setCustomValidity(`you made rangeUnderFlow error`);
    }

    if (!input.checkValidity()) {
        document.querySelector("#h3").innerHTML = input.validationMessage;
    }
};
