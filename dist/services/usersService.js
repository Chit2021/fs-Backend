import { UserRepo } from "../models/User.js";
const usersRepo = new UserRepo();
function findAll() {
    const users = usersRepo.findAll();
    return users;
}
function findOne(userId) {
    const user = usersRepo.findOne(userId);
    return user;
}
function createOne(user) {
    const newUser = usersRepo.createOne(user);
    return newUser;
}
function findIndex(userId) {
    const userIndex = usersRepo.findIndex(userId);
    return userIndex;
}
function updateUser(userIndex, user) {
    const updateUser = usersRepo.updateUser(userIndex, user);
    return updateUser;
}
function deleteUser(userIndex) {
    const user = usersRepo.deleteUser(userIndex);
    return user;
}
export default {
    findOne,
    findAll,
    createOne,
    findIndex,
    updateUser,
    deleteUser
};
