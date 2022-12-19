import commands from './commands';
import { defaultCmds, careerCmds, xCmds, adminCmds } from './privilegedCommands';

const XY = 1 // 0001
const CAREER = 2 // 0010
const X = 4 // 0100
const ADMIN = 8 // 1000

function checkPermissions(perms) {
    let newCommands = {...commands.commands, ...defaultCmds.commands}
    let newOverride = {...commands.override, ...defaultCmds.override}
    let type = "$";

    if (perms & XY) {
        newCommands = {...newCommands, ...xCmds.commands}
        newOverride = {...newOverride, ...xCmds.override}
        console.log('Applied DEFAULT permissions')
    }
    
    if (perms & CAREER) {
        newCommands = {...newCommands, ...careerCmds.commands}
        newOverride = {...newOverride, ...careerCmds.override}
        console.log('Applied CAREER permissions')
    }
    
    if (perms & X) {
        newCommands = {...newCommands, ...xCmds.commands}
        newOverride = {...newOverride, ...xCmds.override}
        console.log('Applied DEFAULT permissions')
    }
    
    if (perms & ADMIN) {
        type = "#";
        newCommands = {...newCommands, ...careerCmds.commands, ...adminCmds.commands}
        newOverride = {...newOverride, ...careerCmds.override, ...adminCmds.override}
        console.log('Applied ADMIN permissions')
    }

    return {newCommands, newOverride, type};
}

export default checkPermissions;