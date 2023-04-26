import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Puzzle03Service {
    public phishingSigns = {
        theRequest: {
            name: 'The Request',
            desc: 'Unsolicited and asks for information or for you to perform an action, e.g. click a link that is unusual for your role or the sender.',
            found: false
        },
        language: {
            name: 'Language',
            desc: 'Urgent, authoritative, scary, exciting or tempting.',
            found: false
        },
        content: {
            name: 'Content',
            desc: 'Grammar and spelling mistakes - e.g. "reply me back" and "interntional".',
            found: false
        },
        sender: {
            name: 'Sender',
            desc: 'Name or email address is generic, has typos (e.g. "@gloogle.com"), has no internet / Intranet search results, or name and email address don\'t match.',
            found: false
        },
        links: {
            name: 'Links',
            desc: 'The URL destination (which you can see by hovering over the link) looks suspicious, e.g. random characters and spelling mistakes.',
            found: false
        },
        formatting: {
            name: 'Formatting',
            desc: 'Unprofessional or inconsistent; fake branding or logos.',
            found: false
        },
    };

    //stores an array of found signs in the oder they are found
    public signsFound: any[] = [];

    public xxsPreventionOptions = [
        {
            name: 'Create a web application firewall',
            desc: 'The best way to protect against unexpected parameters is to create a well-managed firewall. A firewall is a set of rules that will allow or deny network traffic entry to a domain based on a set of conditions.',
            isCorrect: true,
            checked: false,
        },
        {
            name: 'Filter all request parameters before they hit the server',
            desc: 'When parameters are passed through request headers like this, they should always be filtered for malicious code. This can be done by using prepared statements, comparing them to expected values, and stripping any unexpected characters which could be interpreted as code.',
            isCorrect: true,
            checked: false,
        },
        {
            name: 'Use encryption to encode the requests in transit',
            desc: 'Encrypting data between network requests will keep it secure if it\'s intercepted while in transit, but it will not prevent this type of attack as the malicious data was part of the request that was sent to the server.',
            inCorrect: false,
            checked: false,
        },
        {
            name: 'Use HTTPS or SSL protocols to transfer private information',
            desc: 'HTTPS and SSL protocols help keep data secure in transit. It will not prevent this kind of attack as the malicious data was part of the request that was sent to the server. Also, if you look closely, this URL already uses the HTTPS protocol.',
            isCorrect: false,
            checked: false,
        },
        {
            name: 'Block any unauthenticated users from accessing the site',
            desc: 'Since this type of attack needs an authenticated user to click on a vulnerable link, having authentication will do nothing to prevent this type of attack.',
            isCorrect: false,
            checked: false,
        },
        {
            name: 'Use a Virtual Private Network (VPN) to control malicious traffic to the site',
            desc: 'A VPN will create a secure connection to the internet by encrypting network traffic and routing it through a point to point connection. It will do nothing to prevent malicious scripts from being part of this request.',
            isCorrect: false,
            checked: false,
        },
        {
            name: 'Sanitize all outputs received from the server for malicious code',
            desc: 'The best way to prevent malicious scripts being interpreted as HTML is to encode or sanitize all data that is returned from a server; removing any special characters such as HTML brackets or translating the data as a string.',
            isCorrect: true,
            checked: false,
        },
        {
            name: 'Use modern up-to-date web frameworks, such as Angular or React with built in methods to handle server requests',
            desc: 'Most modern frameworks have well maintained and thoroughly tested functions that sanitize parameters to prevent them from being interpreted. These are usually more reliable than writing your own custom ones.',
            isCorrect: true,
            checked: false,
        },
        {
            name: 'Patch the software to remove vulnerabilities',
            desc: 'You should always patch software versions as soon as a new comes out, so that you are not leaving your code vulnerable. However, this kind of attack can still occur even if all software it up to date.',
            isCorrect: false,
            checked: false,
        },
        {
            name: 'Block all external URLs from the GSC network',
            desc: 'This would have no effect on this type of attack because the hacker changed an internal URL to contain a malicious script.',
            isCorrect: false,
            checked: false,
        },
    ];
}