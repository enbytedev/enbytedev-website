/* eslint-disable import/no-anonymous-default-export */

const projects = {
    filingsaucer: `
    ❯ 1. Filing Saucer\n
        - A web application that allows users to share files.\n
        - Built with React, TypeScript, Express.js, Knex.js, and unit testing by Jest.\n
        - Full support for user accounts, upload limits, privacy settings and account recovery.\n`,
    confectionery: `
    ❯ 2. confectionery\n
        - A logging library intended to be simple, light, and configurable.\n
        - Built with JavaScript and available on NPM.\n
        - Makes use of Jest unit testing.\n`,
    kitchenlight: `
    ❯ 3. kitchenlight\n
        - A simple developer dependency to make debugging code quicker and easier.\n
        - Built with JavaScript and available on NPM.\n
        - Allows functions to be wrapped and monitored and adds a "console.tick()" for easier debugging.\n
        - Creates and parses a stack trace for each method to ensure the user can find and later remove usage in larger projects.\n`,
}
const stack = {
    frontend: `
    ❯ Frontend\n
        - React\n
        - JavaScript\n
        - HTML\n
        - CSS\n`,
    backend: `
    ❯ Backend\n
        - Java\n
        - TypeScript\n
        - Express.js\n
        - Knex.js\n
        - GraphQL\n`,
    database: `
    ❯ Database\n
        - DynamoDB\n
        - MySQL\n
        - MongoDB\n`,
    devops: `
    ❯ DevOps\n
        - Docker\n
        - AWS (Lambda, API Gateway, IAM, CloudFormation, DynamoDB)\n`,
    misc: `
    ❯ Misc\n
        - Git (GUI & CLI)\n
        - Linux (Headless)\n
        - Nginx\n
        - macOS\n`,
    laf: `
    ❯ Libraries & Frameworks\n
        - Express.js\n
        - Knex.js\n
        - OpenAPI\n
        - Jest\n
        - Dagger\n`

}

export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        info: {
            description: 'About Tommy (enbytedev)',
            usage: 'info',
            fn: () => {
                return `
                    ❯ Name: Tommy\n
                    ❯ Pseudonym: enbyte/enbytedev\n
                    ❯ Age: 19\n
                    ❯ Pronouns: He/They\n
                    ❯ Location: Arizona, US\n
                    ❯ Occupation: Student\n
                    ❯ Contact: contact@enbyte.dev
                    ❯ Languages: English (Native), German (Novice)
                    `
            }
        },
        twitter: {
            description: 'Opens my Twitter Handle',
            usage: 'twitter',
            fn: () => {
                window.open('https://twitter.com/enbytedev', '_blank')
                return "Opening Twitter user @enbytedev in a new tab..."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/enbytedev', '_blank')
                return "Opening GitHub user @enbytedev in a new tab..."
            }
        },
        email: {
            description: 'Opens an email.',
            usage: 'email',
            fn: () => {
                window.open('mailto:contact@enbyte.dev')
                return "Opening default mail application to contact@enbyte.dev..."
            }
        },
        stack: {
            description: 'My software development stack',
            usage: 'stack [frontend/backend/database/devops/misc/laf]',
            fn: (...args) => {
                console.log(args)
                if(args.length === 0) {
                    return `${stack.frontend}\n${stack.backend}\n${stack.database}\n${stack.devops}\n${stack.misc}\n${stack.laf}`
                }
                if (args[0] === "backend") {
                    return `${stack.backend}`}
                if (args[0] === "frontend") {
                    return `${stack.frontend}`}
                if (args[0] === "database") {
                    return `${stack.database}`}
                if (args[0] === "devops") {
                    return `${stack.devops}`}
                if (args[0] === "misc") {
                    return `${stack.misc}`}
                if (args[0] === "laf") {
                    return `${stack.laf}`}
                return "Invalid argument. Please use one of the following: frontend, backend, database, devops, misc, laf"
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `${projects.filingsaucer}\n${projects.confectionery}\n${projects.kitchenlight}`
            }
        },
        repo: {
            description: "Opens the GitHub repository for a project",
            usage: 'repo [1-3]',
            fn: (...args) => {
                if (args.length === 0) {
                window.open("https://github.com/enbytedev/enbytedev-website", '_blank')
                return "opening repository..."
                }
                if (args[0] === "1") {
                    window.open("https://github.com/enbytedev/Filing-Saucer", '_blank')
                    return "opening repository..."
                }
                if (args[0] === "2") {
                    window.open("https://github.com/enbytedev/confectionery", '_blank')
                    return "opening repository..."
                }
                if (args[0] === "3") {
                    window.open("https://github.com/enbytedev/kitchenlight", '_blank')
                    return "opening repository..."
                }
            }
        }
    },
    override: {
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        login: {
            description: 'Login to the system',
            usage: 'login <username> <password>',
        }
    }
}
