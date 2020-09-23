import Backend from "./backend";

export default async function getUser(username, password)
{
    const b = new Backend();
    const user = b.get('/user/' + username + '/' + password);
    return user;
}