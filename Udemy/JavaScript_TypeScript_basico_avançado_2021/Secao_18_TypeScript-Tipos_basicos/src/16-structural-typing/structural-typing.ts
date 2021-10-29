type VerifyUserFn = (user: User, sentValue: User) => boolean
type User = { username:string; password: string}

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username && 
        user.password === sentValue.password
    )
}

// const bdUser = { username: 'joao', password: '123456'}
const sentUser = { username: 'joao', password: '123456'}

const loggedIn = verifyUser({ username: 'joao', password: '123456'}, sentUser)

console.log(loggedIn);
