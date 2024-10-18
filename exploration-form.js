function clearSelection() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach( radio => radio.checked = false);
}
