const commands = {
    'help': 'Available commands:\nhelp - Display this help message\nabout - Show about information\nprojects - List projects\ncontact - Show contact information\nlinkedin - Open LinkedIn profile\nclear - Clear the terminal',
    'ls': 'File system under development, use "help"',
    'about': 'Hello! I\'m Charana, an Electrical Engineer with experience in various areas including industrial automation, circuit design, and renewable energy systems. I\'m passionate about leveraging technology to solve real-world problems.',
    'projects': 'Projects:\n1. Industrial Automation System\n2. Renewable Energy Solution\nMore details coming soon...',
    'contact': 'You can contact me via email at: randula@example.com (replace with actual email address)',
    'linkedin': 'Opening LinkedIn profile...',
    'clear': 'clear',
};

function handleCommand(input) {
    const command = input.trim().toLowerCase();
    const outputElement = document.getElementById('output');

    if (commands[command]) {
        if (command === 'clear') {
            outputElement.innerHTML = '';
        } else if (command === 'linkedin') {
            outputElement.innerHTML += `randula@portfolio:~$ ${command}\n${commands[command]}\n`;
            window.open('https://www.linkedin.com/in/randall-charana/', '_blank');
        } else {
            outputElement.innerHTML += `randula@portfolio:~$ ${command}\n${commands[command]}\n`;
        }
    } else {
        outputElement.innerHTML += `randula@portfolio:~$ ${command}\nCommand not found. Type 'help' for a list of available commands.\n`;
    }

    outputElement.scrollTop = outputElement.scrollHeight;
}

document.getElementById('input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const input = event.target.value;
        handleCommand(input);
        event.target.value = '';
    }
});

window.addEventListener('scroll', () => {
    const computer = document.getElementById('computer');
    const projects = document.getElementById('projects');
    const scrollY = window.scrollY;
    const maxScroll = window.innerHeight / 2;

    if (scrollY < maxScroll) {
        const rotation = (scrollY / maxScroll) * 10;
        const opacity = 1 - (scrollY / maxScroll);
        computer.style.transform = `rotateX(${rotation}deg)`;
        computer.style.opacity = `${opacity}`;
    } else {
        computer.style.transform = `rotateX(10deg)`;
        computer.style.opacity = `0`;
        projects.style.opacity = `1`;
    }
});