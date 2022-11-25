function extractText() {
    const elements = document.querySelectorAll('li');
    const result = document.getElementById('result')
    for (let el of elements) {
        result.value += el.textContent + '\n'
    }
}