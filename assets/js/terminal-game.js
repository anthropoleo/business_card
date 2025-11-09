// Terminal interface for my website
// Adds a cool hacker-style terminal that visitors can interact with

document.addEventListener('DOMContentLoaded', function() {
    // Create terminal command interface
    const terminalInterface = document.createElement('div');
    terminalInterface.id = 'terminal-interface';
    terminalInterface.style.position = 'fixed';
    terminalInterface.style.bottom = '0';
    terminalInterface.style.left = '0';
    terminalInterface.style.width = '100%';
    terminalInterface.style.backgroundColor = 'rgba(0, 20, 0, 0.9)';
    terminalInterface.style.color = '#0F0';
    terminalInterface.style.fontFamily = 'monospace';
    terminalInterface.style.padding = '10px';
    terminalInterface.style.borderTop = '1px solid #0F0';
    terminalInterface.style.display = 'none';
    terminalInterface.style.zIndex = '1000';
    document.body.appendChild(terminalInterface);

    // Create terminal input
    const terminalForm = document.createElement('form');
    terminalForm.id = 'terminal-form';
    
    const terminalPrompt = document.createElement('span');
    terminalPrompt.textContent = 'visitor@leos-terminal:~$ ';
    terminalPrompt.style.marginRight = '5px';
    
    const terminalInput = document.createElement('input');
    terminalInput.type = 'text';
    terminalInput.id = 'terminal-input';
    terminalInput.style.backgroundColor = 'transparent';
    terminalInput.style.border = 'none';
    terminalInput.style.outline = 'none';
    terminalInput.style.color = '#0F0';
    terminalInput.style.fontFamily = 'monospace';
    terminalInput.style.width = 'calc(100% - 200px)';
    
    terminalForm.appendChild(terminalPrompt);
    terminalForm.appendChild(terminalInput);
    terminalInterface.appendChild(terminalForm);
    
    // Create terminal output
    const terminalOutput = document.createElement('div');
    terminalOutput.id = 'terminal-output';
    terminalOutput.style.maxHeight = '150px';
    terminalOutput.style.overflowY = 'auto';
    terminalOutput.style.marginBottom = '10px';
    terminalInterface.insertBefore(terminalOutput, terminalForm);
    
    // Add keyboard shortcut to toggle terminal
    document.addEventListener('keydown', function(e) {
        // Alt + T to toggle terminal
        if (e.altKey && e.key === 't') {
            e.preventDefault();
            terminalInterface.style.display = terminalInterface.style.display === 'none' ? 'block' : 'none';
            if (terminalInterface.style.display === 'block') {
                terminalInput.focus();
                
                // Add welcome message if first time
                if (terminalOutput.children.length === 0) {
                    addOutput('Welcome to Leo\'s terminal. Type "help" for available commands.');
                }
            }
        }
    });
    
    // Handle terminal commands
    terminalForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const command = terminalInput.value.trim().toLowerCase();
        addOutput(`visitor@leos-terminal:~$ ${command}`);
        
        processCommand(command);
        
        terminalInput.value = '';
    });
    
    // Process terminal commands
    function processCommand(command) {
        switch(command) {
            case 'help':
                addOutput('Available commands:');
                addOutput('- help: Show this help message');
                addOutput('- about: Show information about Leo');
                addOutput('- skills: List Leo\'s skills');
                addOutput('- contact: Show contact information');
                addOutput('- clear: Clear the terminal');
                addOutput('- hack: Start a hacking game');
                addOutput('- exit: Close the terminal');
                break;
                
            case 'about':
                addOutput('Leandro Falero (Leo)');
                addOutput('Data scientist based in Gold Coast, Australia');
                addOutput('Specialising in AI and data analysis');
                addOutput('5+ years experience in data analysis and AI');
                addOutput('Masters in Data Science');
                break;
                
            case 'skills':
                addOutput('Programming: Python, R, SQL');
                addOutput('Data Analysis: Statistical analysis, data visualisation');
                addOutput('AI & ML: Neural networks, NLP, computer vision');
                addOutput('Tools: TensorFlow, PyTorch, scikit-learn');
                break;
                
            case 'contact':
                addOutput('Email: leandrofaleroo@gmail.com');
                addOutput('Phone: +61 0450 652 ***');
                addOutput('Location: Gold Coast, Australia');
                addOutput('LinkedIn: https://www.linkedin.com/in/leandrofalero/');
                addOutput('GitHub: https://github.com/anthropoleo');
                break;
                
            case 'clear':
                terminalOutput.innerHTML = '';
                break;
                
            case 'exit':
                terminalInterface.style.display = 'none';
                break;
                
            case 'hack':
                startHackingGame();
                break;
                
            case '':
                // Do nothing for empty command
                break;
                
            default:
                addOutput(`Command not found: ${command}. Type "help" for available commands.`);
        }
    }
    
    // Add output to terminal
    function addOutput(text) {
        const outputLine = document.createElement('div');
        outputLine.textContent = text;
        outputLine.style.marginBottom = '5px';
        terminalOutput.appendChild(outputLine);
        
        // Scroll to bottom
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
    
    // Start hacking game
    function startHackingGame() {
        addOutput('INITIATING HACKING SEQUENCE...');
        addOutput('Target: Secure Database');
        addOutput('Objective: Guess the 4-digit access code');
        addOutput('Type 4 digits to make a guess. You have 10 attempts.');
        addOutput('Hints will be provided after each guess:');
        addOutput('✓ = correct digit in correct position');
        addOutput('△ = correct digit in wrong position');
        addOutput('✗ = digit not in the code');
        
        // Generate random 4-digit code
        const codeDigits = [];
        for (let i = 0; i < 4; i++) {
            codeDigits.push(Math.floor(Math.random() * 10));
        }
        const code = codeDigits.join('');
        
        let attempts = 0;
        const maxAttempts = 10;
        
        // Override terminal command processing temporarily
        const originalProcessCommand = processCommand;
        processCommand = function(input) {
            // Check if input is 4 digits
            if (/^\d{4}$/.test(input)) {
                attempts++;
                
                if (input === code) {
                    addOutput('ACCESS GRANTED!');
                    addOutput('Congratulations! You\'ve successfully hacked the system.');
                    addOutput(`You cracked the code in ${attempts} attempts.`);
                    
                    // Easter egg reward
                    addOutput('');
                    addOutput('As a reward, here\'s a secret link:');
                    addOutput('https://data-explorer-app.streamlit.app/');
                    
                    // Restore original command processing
                    processCommand = originalProcessCommand;
                    return;
                }
                
                // Generate hint
                let hint = '';
                const inputDigits = input.split('');
                const codeDigitsCopy = [...codeDigits];
                
                // First pass: check for correct digits in correct positions
                for (let i = 0; i < 4; i++) {
                    if (parseInt(inputDigits[i]) === codeDigits[i]) {
                        hint += '✓ ';
                        inputDigits[i] = 'X';
                        codeDigitsCopy[i] = 'Y';
                    }
                }
                
                // Second pass: check for correct digits in wrong positions
                for (let i = 0; i < 4; i++) {
                    if (inputDigits[i] !== 'X') {
                        const digit = parseInt(inputDigits[i]);
                        const index = codeDigitsCopy.indexOf(digit);
                        
                        if (index !== -1) {
                            hint += '△ ';
                            codeDigitsCopy[index] = 'Y';
                        } else {
                            hint += '✗ ';
                        }
                    }
                }
                
                addOutput(`Attempt ${attempts}/${maxAttempts}: ${input} - ${hint}`);
                
                if (attempts >= maxAttempts) {
                    addOutput('MAXIMUM ATTEMPTS REACHED. ACCESS DENIED.');
                    addOutput(`The correct code was: ${code}`);
                    
                    // Restore original command processing
                    processCommand = originalProcessCommand;
                }
            } else {
                addOutput('Invalid input. Please enter exactly 4 digits.');
            }
        };
    }
    
    // Add floating terminal button
    const terminalButton = document.createElement('button');
    terminalButton.textContent = '> Terminal';
    terminalButton.style.position = 'fixed';
    terminalButton.style.bottom = '10px';
    terminalButton.style.left = '10px';
    terminalButton.style.backgroundColor = '#0F0';
    terminalButton.style.color = '#000';
    terminalButton.style.border = '1px solid #0F0';
    terminalButton.style.padding = '5px 10px';
    terminalButton.style.fontFamily = 'monospace';
    terminalButton.style.cursor = 'pointer';
    terminalButton.style.zIndex = '999';
    
    terminalButton.addEventListener('click', function() {
        terminalInterface.style.display = terminalInterface.style.display === 'none' ? 'block' : 'none';
        if (terminalInterface.style.display === 'block') {
            terminalInput.focus();
            
            // Add welcome message if first time
            if (terminalOutput.children.length === 0) {
                addOutput('Welcome to Leo\'s terminal. Type "help" for available commands.');
            }
        }
    });
    
    document.body.appendChild(terminalButton);
    
    // Add tooltip about terminal usage
    const tooltip = document.createElement('div');
    tooltip.textContent = 'Use the terminal to navigate faster';
    tooltip.style.position = 'fixed';
    tooltip.style.bottom = '40px';
    tooltip.style.left = '10px';
    tooltip.style.backgroundColor = 'rgba(0, 20, 0, 0.8)';
    tooltip.style.color = '#0F0';
    tooltip.style.border = '1px solid #0F0';
    tooltip.style.padding = '5px';
    tooltip.style.fontFamily = 'monospace';
    tooltip.style.fontSize = '12px';
    tooltip.style.zIndex = '999';
    tooltip.style.opacity = '0';
    tooltip.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(tooltip);
    
    // Show tooltip when hovering over button
    terminalButton.addEventListener('mouseenter', function() {
        tooltip.style.opacity = '1';
    });
    
    terminalButton.addEventListener('mouseleave', function() {
        tooltip.style.opacity = '0';
    });
});