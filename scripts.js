const commands = {
    'help': 'Available commands:\nhelp - Display this help message\nabout - Show about information\nprojects - List projects\ncontact - Show contact information\nlinkedin - Open LinkedIn profile\nclear - Clear the terminal',
    'about': 'Hello! I\'m Randall Charana, an Electrical Engineer with experience in various areas including industrial automation, circuit design, and renewable energy systems. I\'m passionate about leveraging technology to solve real-world problems.',
    'projects': 'Projects:\n1. Industrial Automation System\n2. Renewable Energy Solution\nMore details coming soon...',
    'contact': 'You can contact me via email at: randall@example.com (replace with actual email address)',
    'linkedin': 'Opening LinkedIn profile...',
    'clear': 'clear',
};

function handleCommand(input) {
    const command = input.trim().toLowerCase();
    const outputElement = document.getElementById('output');

    if (commands[command]) {
        if (command === 'clear') {
            outputElement.innerHTML = '';
        } else {
            outputElement.innerHTML += `randall@portfolio:~$ ${command}\n${commands[command]}\n`;
            if (command === 'linkedin') {
                window.open('https://www.linkedin.com/in/randall-charana/', '_blank');
            }
        }
    } else {
        outputElement.innerHTML += `randall@portfolio:~$ ${command}\nCommand not found. Type 'help' for a list of available commands.\n`;
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