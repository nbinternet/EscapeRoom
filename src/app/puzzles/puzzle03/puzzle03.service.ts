import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Puzzle03Service {
    public phishingSigns = {
        theRequest: {
            name: 'The Request',
            desc: 'Unsolicitaed and asks for information or for you to perform an action, e.g. click a link that is unusual for your role or the sender',
            found: false
        },
        language: {
            name: 'Language',
            desc: 'Unsolicitaed and asks for information or for you to perform an action, e.g. click a link that is unusual for your role or the sender',
            found: false
        },
        content: {
            name: 'Content',
            desc: 'Unsolicitaed and asks for information or for you to perform an action, e.g. click a link that is unusual for your role or the sender',
            found: false
        },
        sender: {
            name: 'Sender',
            desc: 'Unsolicitaed and asks for information or for you to perform an action, e.g. click a link that is unusual for your role or the sender',
            found: false
        },
        links: {
            name: 'Links',
            desc: 'Unsolicitaed and asks for information or for you to perform an action, e.g. click a link that is unusual for your role or the sender',
            found: false
        },
        formatting: {
            name: 'Formatting',
            desc: 'Unsolicitaed and asks for information or for you to perform an action, e.g. click a link that is unusual for your role or the sender',
            found: false
        },
    }

    //stores an array of found signs in the oder they are found
    public signsFound: any[] = [];

    public xxsPreventionOptions = [
        {
            name: 'Create a web application firewall',
            desc: '',
            isCorrect: true,
            checked: false,
        },
        {
            name: 'Filter all request parameters before they hit the server',
            desc: '',
            isCorrect: true,
            checked: false,
        },
        {
            name: 'Use encryption to encode the requests in transit',
            desc: '',
            inCorrect: false,
            checked: false,
        },
        {
            name: 'Use HTTPS or SSL protocols to transfer private information',
            desc: '',
            isCorrect: false,
            checked: false,
        },
        {
            name: 'Block any unauthenticated users from accessing the site',
            desc: '',
            isCorrect: false,
            checked: false,
        },
        {
            name: 'Use a Virtual Private Network (VPN) to control malicious traffic to the site',
            desc: '',
            isCorrect: false,
            checked: false,
        },
        {
            name: 'Sanitize all outputs received from the server for malicious code',
            desc: '',
            isCorrect: false,
            checked: false,
        },
        {
            name: 'Use modern up-to-date web frameworks, such as Angular or React with built in methods to handle server requests',
            desc: '',
            isCorrect: false,
            checked: false,
        },
        {
            name: 'Patch the software to remove vulnerabilities',
            desc: '',
            isCorrect: false,
            checked: false,
        },
        {
            name: 'Block all external URLs from the GSC metwork',
            desc: '',
            isCorrect: false,
            checked: false,
        },
    ];
}