function process() {
    var counter = document.getElementById('counter');
    var text = document.getElementById('input-text').value;
    counter.style.display = 'block';
    counter.innerHTML = text.length;
}