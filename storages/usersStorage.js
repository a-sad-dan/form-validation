class usersStorage {
  constructor() {
    this.storage = {
      0: { id: 0, firstName: "Danish", lastName: "Asad" },
      1: { id: 1, firstName: "Akram", lastName: "Khan" }
    };
    this.id = 0;
  }


  addUser({ firstName, lastName }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName };
    this.id++;
  };

  getUsers() {
    return Object.values(this.storage);
  };

  getUser(id) {
    return this.storage[id]
  };

  updateUser(id, { firstName, lastName }) {
    this.storage[id] = { id, firstName, lastName }
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  findUser(query) {
    if (!isNaN(query)) {
      const id = Number(query);
      return this.storage[id] || {};
    }

    query = query.toLowerCase();
    return Object.values(this.storage).filter(
      user =>
        user.firstName.toLocaleLowerCase() === query ||
        user.lastName.toLowerCase() === query
    );
  }
};


module.exports = new usersStorage();