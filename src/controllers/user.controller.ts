import { Request, Response } from "express";
import { getAllUser, getUserById, handleCreateUser, handleDeleteUser, updateUserById } from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUser();
    return res.render("home", { allUsers: users });
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user");
}
const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, email, address } = req.body;
    await handleCreateUser(fullName, email, address);
    return res.redirect('/');
}

const postDeleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await handleDeleteUser(id);
    res.redirect('/');
}

const getViewUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await getUserById(id);
    return res.render("view-user.ejs", { user: user, id: id });
}

const postUpdateUser = async (req: Request, res: Response) => {
    const { id, email, fullName, address } = req.body;
    await updateUserById(id, email, fullName, address);
    return res.redirect('/');
}

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser }