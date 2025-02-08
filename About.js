function createFlash() {
    const flash = document.querySelector('.flash-overlay');
    flash.classList.add('flash-active');
    
    setTimeout(() => {
        flash.classList.remove('flash-active');
    }, 2000);
}

function toggleNeonEffect() {
    const textContent = document.getElementById('text-content');
    const paragraphs = textContent.getElementsByTagName('p');
    
    textContent.classList.toggle('text-background');
    
    for(let p of paragraphs) {
        p.classList.toggle('neon-text');
    }
} 