import Backend from "./backend";

export default async function getUser(username, password)
{
    const b = new Backend(); // instancia un objeto de la clase backend

    const user = b.get('/user/' + username + '/' + password);
    return user;
}