// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle Navigation Menu for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }
});

// Hacking Game: Caesar Cipher Challenge
function startCaesarCipherChallenge() {
    const output = document.getElementById('game-output');
    const message = prompt('Enter a message to encrypt with Caesar Cipher:');
    const shift = parseInt(prompt('Enter the shift value:'), 10);
    const encryptedMessage = caesarCipher(message, shift);
    output.innerHTML = `Encrypted Message: ${encryptedMessage}`;
}

// Caesar Cipher Function
function caesarCipher(str, shift) {
    return str.replace(/[a-zA-Z]/g, (char) => {
        const charCode = char.charCodeAt(0);
        const base = charCode >= 65 && charCode <= 90 ? 65 : 97;
        return String.fromCharCode(((charCode - base + shift) % 26) + base);
    });
}

// Hacking Game: Command-Line Puzzle
function startCommandLinePuzzle() {
    const output = document.getElementById('game-output');
    const question = 'Solve the command-line task: What command lists all files in the current directory?';
    const answer = prompt(question);
    if (answer === 'ls') {
        output.innerHTML = 'Correct!';
    } else {
        output.innerHTML = 'Try again!';
    }
}

// Responsive Video Resizing (Optional for Cleaner UX)
window.addEventListener('resize', () => {
    const videoElement = document.querySelector('.my-video');
    if (videoElement) {
        videoElement.style.width = '100%';
        videoElement.style.height = 'auto';
    }
});

// Terminal Simulation (Optional Advanced Feature Placeholder)
function setupInteractiveTerminal() {
    console.log('Interactive Terminal Feature Placeholder');
}

// Network Topology Simulation (Optional Advanced Feature Placeholder)
function setupNetworkTopology() {
    console.log('Network Topology Simulation Placeholder');
}

// Threat Simulation (Optional Advanced Feature Placeholder)
function setupThreatSimulation() {
    console.log('Threat Simulation Feature Placeholder');
}

// Hacking Game Initialization
function setupHackingGame() {
    console.log('Hacking Game Initialized');
}

// Audit Report Simulation (Optional Advanced Feature Placeholder)
function setupAuditReport() {
    console.log('Audit Report Feature Placeholder');
}

// Initialize All Features on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    setupInteractiveTerminal();
    setupNetworkTopology();
    setupThreatSimulation();
    setupHackingGame();
    setupAuditReport();
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add Dynamic Header Background on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
