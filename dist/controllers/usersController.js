import UsersService from "../services/usersService.js";
import { ApiError } from "../errors/ApiError.js";
export function findAllUser(_, res) {
    const users = UsersService.findAll();
    res.json({ users });
}
export function findOneUser(req, res, next) {
    const userId = Number(req.params.userId);
    const user = UsersService.findOne(userId);
    if (!user) {
        next(ApiError.resourceNotFound("user not found."));
        return;
    }
    res.json({ user });
}
export function createOneUser(req, res) {
    const newUser = req.body;
    const user = UsersService.createOne(newUser);
    res.status(201).json({ user });
}
export function updateUser(req, res, next) {
    const userId = Number(req.params.productId);
    const updateUserData = req.body;
    const userIndex = UsersService.findIndex(userId);
    if (userIndex === -1) {
        next(ApiError.resourceNotFound("User not found."));
        return;
    }
    const updatedUser = UsersService.updateUser(userIndex, updateUserData);
    res.status(201).json({ updatedUser });
}
export function deleteUser(req, res, next) {
    const userId = Number(req.params.userId);
    const userIndex = UsersService.findIndex(userId);
    if (userIndex === -1) {
        next(ApiError.resourceNotFound("User not found."));
        return;
    }
    UsersService.deleteUser(userIndex);
    res.status(201).json("User deleted ...");
}
export default {
    findOneUser,
    findAllUser,
    createOneUser,
    updateUser,
    deleteUser,
};
