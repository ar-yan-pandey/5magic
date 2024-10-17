function revealFifthCard() {
    const values = [
        parseInt(document.getElementById('card1').value),
        parseInt(document.getElementById('card2').value),
        parseInt(document.getElementById('card3').value)
    ];
    const suit = document.getElementById('suit4').value;
    const fourthCardValue = parseInt(document.getElementById('card4').value);

    const max = Math.max(...values);
    const min = Math.min(...values);
    const mid = values.find(value => value !== max && value !== min);

    let x;
    if (min === values[0] && mid === values[1] && max === values[2]) x = 1;
    else if (min === values[0] && max === values[1] && mid === values[2]) x = 2;
    else if (mid === values[0] && min === values[1] && max === values[2]) x = 3;
    else if (mid === values[0] && max === values[1] && min === values[2]) x = 4;
    else if (max === values[0] && min === values[1] && max === values[2]) x = 5;
    else if (max === values[0] && mid === values[1] && min === values[2]) x = 6;

    const predictedValue = (fourthCardValue + x - 1) % 13 + 1;
    const cardName = getCardName(predictedValue);
    document.getElementById('fifth-card-result').innerText = `The predicted fifth card is: ${cardName} of ${suit}`;
}

function getCardName(value) {
    switch (value) {
        case 1: return 'Ace';
        case 11: return 'Jack';
        case 12: return 'Queen';
        case 13: return 'King';
        default: return value.toString();
    }
}
