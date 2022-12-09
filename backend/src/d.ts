type RequireProperty<Type, Key extends keyof Type> = Type & {
    [Property in Key]-?: Type[Property];
};

interface Console {
    tick: any,
    take: any,
    peek: any,
    watch: any,
}

type User = {
    id: number
    name: string
    username: string
    password: string
    permissions: number
}

type UserInput = Pick<User, "name" | "username" | "password" | "permissions">
type UserId = Pick<User, "username">
type UserLogin = Pick<User, "username" | "password">