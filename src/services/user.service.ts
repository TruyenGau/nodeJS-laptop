import getConnection from "config/database";

const handleCreateUser = async (fullName: string, email: string, address: string) => {
    const connection = await getConnection();
    try {
        const sql = 'INSERT INTO `users`(`name`, `email`, `address`) VALUES (?, ?, ?)';
        const values = [fullName, email, address];
        const [results, fields] = await connection.execute(sql, values);
        return results;
    } catch (err) {
        return [];
    }
}

const getAllUser = async () => {
    const connection = await getConnection();
    try {
        const [results, fields] = await connection.execute(
            'SELECT * FROM `users`'
        );
        return results;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const handleDeleteUser = async (id: string) => {
    const connection = await getConnection();
    try {
        const sql = 'DELETE FROM `users` WHERE `id` = ?';
        const values = [id];
        const [results, fields] = await connection.execute(sql, values);
        return results;
    } catch (err) {
        return [];
    }
}

const getUserById = async (id: string) => {
    try {
        const connection = await getConnection();
        const sql = 'SELECT * FROM `users` WHERE `id` = ?';
        const values = [id];
        const [results, fields] = await connection.execute(sql, values);
        return results[0];
    } catch (err) {
        return [];
    }
}

const updateUserById = async (id: string, email: string, fullName: string, address: string) => {
    try {
        const connection = await getConnection();
        const sql = 'UPDATE `users` SET `name` = ?, `email` = ?, `address` = ? WHERE `id` = ?';
        const values = [fullName, email, address, id];
        const [results, fields] = await connection.execute(sql, values);
        return results;
    } catch (err) {
        return [];
    }
}

export { handleCreateUser, getAllUser, handleDeleteUser, getUserById, updateUserById }