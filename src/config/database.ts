import mysql from 'mysql2/promise';

const getConnection = async () => {
    const connection = await mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '2708',
        database: 'nodejspro'
    })

    return connection;
}

export default getConnection;