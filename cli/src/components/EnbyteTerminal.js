import Terminal from 'react-console-emulator'
import React from 'react'
import commands from '../utils/commands.js'
import loginUser from '../utils/login.js'
import { setUser } from '../App.js'

const motdBanner = `
❯ enbyte.dev cli // enbytedev@github
❯ logged in as guest
❯ type 'help' for a list of commands
`                       

export default function EnbyteTerminal() {
    const [cmds, setCmds] = React.useState(commands.commands)
    const [cmdo, setCmdo] = React.useState(commands.override)
    const terminal = React.createRef()
    const [prompt, setPrompt] = React.useState('guest@enbytedev:~$ ') // this allows the prompt to change for logged in users
    
    return (
            <Terminal
                ref={terminal}
                welcomeMessage={[
                    motdBanner,
                    "-",
                ]}
                autoFocus
                style={{
                    backgroundColor: null,
                    minHeight: null,
                    maxHeight: null,
                    overflow: 'auto',
                    height: '100%',
                    width: '100%',     
                }}
                commands={{help: {
                    description: 'List all available commands (handled by override)',
                    usage: 'help (handled by override)',
                    fn: () => {
                        return `
                        Command${" ".repeat(3)} | Description${" ".repeat(39)} | Usage
                        ${"-".repeat(10)} | ${"-".repeat(50)} | ${"-".repeat(10)}
                            ${Object.keys(cmdo).map(cmd => `${cmd}${" ".repeat(10-cmd.length)} | ${cmdo[cmd].description}${" ".repeat(50-cmdo[cmd].description.length)} | ${cmdo[cmd].usage}`).join('\n')}
                            ${Object.keys(cmds).map(cmd => `${cmd}${" ".repeat(10-cmd.length)} | ${cmds[cmd].description}${" ".repeat(50-cmds[cmd].description.length)} | ${cmds[cmd].usage}`).join('\n')}
                        `
                    }
                },
                login: {
                    description: 'Login to a user account (handled by override)',
                    usage: 'login <username> <password> (handled by override)',
                    fn: (...args) => { 
                        if ('guest@enbytedev:~$ ' !== prompt) {return loginUser(args, setPrompt, setCmds, setCmdo, true);}
                        return loginUser(args, setPrompt, setCmds, setCmdo, false)}
                },
                logout: {
                    description: 'Logout of a user account (handled by override)',
                    usage: 'logout (handled by override)',
                    fn: () => {
                        if ('guest@enbytedev:~$ ' === prompt) {
                            return '❯ You are not logged in.'
                        }
                        setCmds(commands.commands)
                        setCmdo(commands.override)
                        setUser({username: 'guest', password: 'guest'})
                        setPrompt('guest@enbytedev:~$ ')
                        return '❯ Logged out.'
                    }
                },
                ...cmds}}
                promptLabel={prompt}
                styleEchoBack='fullInherit'
                contentStyle={{ color: '#708090' , fontWeight: 'normal', paddingLeft: null}} // Text colour
                promptLabelStyle={{ color: '#7393B3' , fontWeight:'bold'}} // Prompt label colour
                inputTextStyle={{ color: '#B2BEB5' , fontWeight: 'normal'}}
                messageStyle={{ color: '#708090' , fontWeight: 'normal', paddingLeft: null}}
                scrollBehavior='auto'
                noDefaults
        />
    )

}