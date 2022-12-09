import users from "./Users.js"

const getUserByLogin = (args: { username: string, password: string }): UserLogin | undefined =>
    users.find(u => u.username === args.username && u.password === args.password)

const getUserById = (args: { id: number }): UserId | undefined =>
    users.find(u => u.id === args.id)

const getUsers = (): User[] => users

const createUser = (args: { input: UserInput }): User => {
    const user = {
        id: users.length + 1,
        ...args.input,
    }
    users.push(user)

    return user
}

const updateUser = (args: { user: User }): User => {
    const index = users.findIndex(u => u.id === args.user.id)
    const targetUser = users[index]

    if (targetUser) users[index] = args.user

    return targetUser
}

const root = {
    getUserByLogin,
    getUserById,
    getUsers,
    createUser,
    updateUser,
}

export default root;