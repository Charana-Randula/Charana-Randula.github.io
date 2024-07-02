const commands = {
    'help': 'Available commands:\nhelp - Display this help message\nabout - Show about information\nprojects - List projects\ncontact - Show contact information\nlinkedin - Open LinkedIn profile\noneth - Open Oneth\'s portfolio\nclear - Clear the terminal',
    'ls': 'File system under development, use "help"',
    'about': 'Hello! I\'m Charana, an Electrical Engineer with experience in various areas including industrial automation, circuit design, and renewable energy systems. I\'m passionate about leveraging technology to solve real-world problems.',
    'projects': 'Projects:\n1. Industrial Automation System\n2. Renewable Energy Solution\nMore details coming soon...',
    'contact': 'You can contact me via email at: randula@example.com (replace with actual email address)',
    'linkedin': 'Opening LinkedIn profile...',
    'oneth': 'Opening Oneth\'s portfolio...',
    'kisal': 'Opening Oneth\'s portfolio...',
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
        } else if (command === 'oneth') {
            outputElement.innerHTML += `randula@portfolio:~$ ${command}\n${commands[command]}\n`;
            window.open('https://onethk.github.io/onethportfolio/', '_blank');
        } else if (command === 'kisal') {
            outputElement.innerHTML += `randula@portfolio:~$ ${command}\n${commands[command]}\n`;
            window.open('https://www.linkedin.com/in/kisal-fernando-0a2a5120a/', '_blank');
        } else{
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