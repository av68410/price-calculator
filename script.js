function calculatePricePerUnit() {
    const bigBagWeight = document.getElementById('bigBagWeight').value;
    const bigBagPrice = document.getElementById('bigBagPrice').value;

    if (bigBagWeight <= 0 || bigBagPrice <= 0) {
        alert('Please enter valid values for weight and price.');
        return;
    }

    const pricePerUnit = bigBagPrice / bigBagWeight;
    document.getElementById('result').innerText = `Price per unit: $${pricePerUnit.toFixed(2)}`;
}

function calculateCostPerBag() {
    const smallBagWeight = document.getElementById('smallBagWeight').value;
    const bigBagWeight = document.getElementById('bigBagWeight').value;
    const bigBagPrice = document.getElementById('bigBagPrice').value;

    if (smallBagWeight <= 0) {
        alert('Please enter a valid weight for the small bag.');
        return;
    }

    const pricePerUnit = bigBagPrice / bigBagWeight;
    const costPerBag = pricePerUnit * smallBagWeight;

    document.getElementById('bagResult').innerText = `Cost per bag: $${costPerBag.toFixed(2)}`;
}