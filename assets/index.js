const fs = require('fs');
const inquirer = require('inquirer');

const generateHtml = ({name, email, github, food, from, username}) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Builder</title>
</head>
<body>
    <header>
        <div>
            <h1> Hi, my name is ${name}</h1>
            <p> I am from ${from}</p>
            <h3> Contact me at ${email}</h3>
            <ul>
                <li>My github Username is ${username}</li>
                <li>You can find my github at ${github}</li>
                <li>Bonus, my favourite food is ${food}</li>
            </ul>
        </div>
    </header>
</body>
</html>`;

inquirer
    .prompt([{
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Where are you from?',
        name: 'from',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is the URL for your Github?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your favourite food?',
        name: 'food',
    },
]) 

    .then((response) => {
        const htmlData = generateHtml(response);
        fs.writeFile('index.html', htmlData, (err) =>
        err ? console.error(err) : console.log('success!')
        );
    });