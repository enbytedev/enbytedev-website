import axios from 'axios';
import checkPermissions from './permissionsManager';
import { setUser, API_URL } from '../App';

export default function loginUser(args, setPrompt, setCmd, setCmdo, loggedIn) {
    if (args.length !== 2) {
        return "❯ Incorrect usage. Type 'help' for more information."
    }

    return axios({
        url: `${API_URL}`,
        method: 'post',
        data: {
            query: `query {
                getUserByLogin (
                    username: "${args[0]}"
                    password: "${args[1]}"
                ) {
                    name
                    username
                    password
                    permissions
                }
            }`
        }
    }).then((result) => {
        if (result.data.data.getUserByLogin === null) {
            return "❯ Incorrect username or password."
        }
        let newCmds = checkPermissions(result.data.data.getUserByLogin.permissions)
        setPrompt(`${result.data.data.getUserByLogin.username}@enbytedev:~${newCmds.type} `)
        setCmd(newCmds.newCommands)
        setCmdo(newCmds.newOverride)
        setUser({username: result.data.data.getUserByLogin.username, password: result.data.data.getUserByLogin.password})

        if (loggedIn) {
            return `❯ Already logged in; switching users.\n❯ Logged in as ${result.data.data.getUserByLogin.username}\n❯ Welcome ${result.data.data.getUserByLogin.name}!`
        }
        return `❯ Logged in as ${result.data.data.getUserByLogin.username}\n❯ Welcome ${result.data.data.getUserByLogin.name}!`
    }).catch((err) => {
        console.log(err)
    }
    )
}