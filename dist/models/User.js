// Simulating a DataBase
export class UserRepo {
    constructor() {
        this.users = [
            {
                id: 1,
                name: "Jia",
                email: "jia@mail.com",
                password: "12345",
                role: "user",
            },
            {
                id: 2,
                name: "John",
                email: "john@mail.com",
                password: "123",
                role: "user",
            },
            {
                id: 3,
                name: "Jon",
                email: "jon@mail.com",
                password: "1212",
                role: "user",
            },
        ];
    }
    findOne(userId) {
        const user = this.users.find((user) => user.id === userId);
        return user;
    }
    findAll() {
        return this.users;
    }
    findIndex(userId) {
        const userIndex = this.users.findIndex((user) => user.id === userId);
        return userIndex;
    }
    createOne(newUser) {
        this.users = [...this.users, newUser];
        return newUser;
    }
    updateUser(userIndex, updateUserData) {
        this.users[userIndex] = Object.assign(Object.assign({}, this.users[userIndex]), updateUserData);
        return this.users[userIndex];
    }
    deleteUser(userIndex) {
        const user = this.users.splice(userIndex, 1);
        return user;
    }
}
