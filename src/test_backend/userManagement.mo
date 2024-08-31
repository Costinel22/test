// import rxmodb "mo:base/rxmodb";

// actor UserManagement {
//   stable var users : rxmodb.RxMap<Text, Text> = rxmodb.open<Text, Text>("users");

//   public func registerUser(username: Text, password: Text) : async Bool {
//     if (users.contains(username)) {
//       return false; // User already exists
//     }
//     users.put(username, password);
//     return true; // Registration successful
//   };
// };
actor UserManagement {
    public type User = {
      name: Text;
      email: Text;
      age: Nat8;
      accessLevel: AccessLevel;
      createdAt: Time.Time;
    };
  
    type AccessLevel = {
      #admin;
      #user;
      #guest;
      #banned;
    };
  
    public type UserId = Text;
  
    var users = TrieMap.TrieMap<UserId, User>(Text.equal, Text.hash);
    stable var usersEntries: [(UserId, User)] = [];
  
    system func preupgrade() {
      usersEntries := Iter.toArray(users.entries());
    };
  
    system func postupgrade() {
      users := TrieMap.fromEntries(usersEntries.vals(), Text.equal, Text.hash);
    };
  
    public shared func createUser(args: User): async () {
      users.put(args.email, args);
    };
  
    public shared query func getUser(id: UserId): async Result.Result<User, Text> {
      switch (users.get(id)) {
        case (null) {
          return #err("User not found");
        };
        case (?user) {
          return #ok(user);
        };
      };
    };
  
    public shared func updateUser(user: User): async () {
      users.put(user.email, user);
    };
  
    public func deleteUser(userId: UserId): async () {
      users.delete(userId);
    };
  
    public shared query func getUsers(): async [User] {
      return Iter.toArray(users.vals());
    };
  
    public shared query func getAccessLevel(email: Text): async Result.Result<Text, Text> {
      switch (users.get(email)) {
        case (null) {
          return #err("User not found");
        };
        case (?user) {
          switch (user.accessLevel) {
            case (#admin) {
              return #ok("You are an admin");
            };
            case (#user) {
              return #ok("You are a user");
            };
            case (#guest) {
              return #ok("You are a guest");
            };
            case (#banned) {
              return #ok("You are banned");
            };
          };
        };
      };
    };
  };
  