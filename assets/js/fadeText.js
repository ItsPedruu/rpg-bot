let texts = ['dungeons', 'battles', 'trades', 'shop', 'inventory', 'map', 'mining', 'exploration', 'missions', 'clans'];
let lastTextIndex = 0;

function fadeOutElement(element) {
    return new Promise((res) => element.fadeOut(1000, res));
}

function fadeInElement(element) {
    return new Promise((res) => element.fadeIn(1000, res));
}

function randomText() {
    let index = Math.floor(Math.random() * texts.length);
    if (index == lastTextIndex) return randomText();

    lastTextIndex = index;
    return texts[index];
}

async function animateText() {
    let textEl = $('#text');
    let text = await randomText();

    await fadeOutElement(textEl);
    textEl.text(text);
    await fadeInElement(textEl);
    animateText();
}


window.onload = async () => {
    animateText();
}