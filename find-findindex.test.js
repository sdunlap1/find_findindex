describe("#findUserByUsername", function () {
  let users;
  beforeEach(function () {
    users = [
      { username: "mlewis" },
      { username: "akagen" },
      { username: "msmith" },
    ];
  });
  it("should return username if found in the key", function () {
    expect(findUserByUsername(users, "mlewis")).toEqual({ username: "mlewis" });
  });
  it("should return undefined if username is not found in the key", function () {
    expect(findUserByUsername(users, "noname")).toEqual(undefined);
  });
});

describe("#removeUser", function () {
  let rmUsers;
  beforeEach(function () {
    rmUsers = [
      { username: "mlewis" },
      { username: "akagen" },
      { username: "msmith" },
    ];
  });
  it("should remove a user from the array", function () {
    removeUser(rmUsers, "mlewis");
    expect(rmUsers.length).toEqual(2);
  });
  it("should return undefined if no user in the array", function () {
    expect(removeUser(rmUsers, "mmm")).toEqual(undefined);
    expect(rmUsers.length).toEqual(3);
  });
});
