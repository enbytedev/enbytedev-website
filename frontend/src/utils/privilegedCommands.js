/* eslint-disable import/no-anonymous-default-export */
import { accessRequest } from "./accessRequest"
import { user } from "../App.js"

const defaultCmds = {
    commands: {},
    override: {
        logout: {
            description: 'Logs out of the current user',
            usage: 'logout',
            fn: () => {}
        }
    }
}

const careerCmds = {
    commands: {
        resume: {
            description: 'Opens my resume in a new tab.',
            usage: 'resume',
            fn: () => {
                accessRequest(user.username, user.password, 'resume')
                return '❯ Opening resume in a new tab...'
            }
        }
    }
}

const xCmds = {
    commands: {
        x: {
            description: 'TODO',
            usage: 'TODO',
            fn: () => {
                return '❯ TODO'
            }
        }
    }
}

const adminCmds = {
    commands: {
        stats: {
            description: 'Application stats',
            usage: 'stats',
            fn: () => {
                return '❯ Application stats\n WIP'
            }
        }
    }
}

export { defaultCmds, careerCmds, xCmds, adminCmds }