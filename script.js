
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

nameInput.addEventListener('input', function() {
    if (nameInput.value.trim() !== '') {
        greeting.textContent = `Hello, ${nameInput.value}!`;
        greeting.style.color = 'green';
        greeting.style.fontWeight = 'bold';
    } else {
        greeting.textContent = 'Hello, friend!';
        greeting.style.color = '';
        greeting.style.fontWeight = '';
    }
});

const moodBox = document.getElementById('moodBox');
const growBtn = document.getElementById('growBtn');
const shrinkBtn = document.getElementById('shrinkBtn');

growBtn.addEventListener('click', function() {
    const currentWidth = parseInt(moodBox.style.width) || 100;
    const currentHeight = parseInt(moodBox.style.height) || 100;
    moodBox.style.width = (currentWidth + 20) + 'px';
    moodBox.style.height = (currentHeight + 20) + 'px';
});

shrinkBtn.addEventListener('click', function() {
    const currentWidth = parseInt(moodBox.style.width) || 100;
    const currentHeight = parseInt(moodBox.style.height) || 100;
    moodBox.style.width = (currentWidth - 20) + 'px';
    moodBox.style.height = (currentHeight - 20) + 'px';
});

const toggleMode = document.getElementById('toggleMode');
toggleMode.addEventListener('click', function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';
    document.body.style.color = document.body.style.color === 'white' ? 'black' : 'white';
});

const secretBtn = document.getElementById('secretBtn');
const secretMessage = document.getElementById('secretMessage');
secretBtn.addEventListener('click', function() {
    if (secretMessage.style.display === 'none') {
        secretMessage.style.display = 'block';
        secretBtn.textContent = 'Hide Secret';
    } else {
        secretMessage.style.display = 'none';
        secretBtn.textContent = 'Show Secret';
    }
});


// What is the difference between ".innerHTML" and ".innerText"?

// .innerText: Only shows the visible text content (what you see on screen)
// .innerHTML: Shows ALL content including HTML tags (can create security risks)

// Example:
// If an element contains: "<span>Hello</span> World"
// - innerText would return: "Hello World"
// - innerHTML would return: "<span>Hello</span> World"
