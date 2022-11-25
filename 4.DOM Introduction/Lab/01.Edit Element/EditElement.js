function editElement(element, match, replace) {
    const text = element.textContent;
    const pattern = new RegExp(match, 'g');
    const result = text.replace(pattern, replace);
    element.textContent = result;
}