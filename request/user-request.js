class userRequest {
  static createUserBody() {
    const requestbody = {
      id: 6325264536892,
      username: "Can",
      firstName: "Can",
      lastName: "Seker",
      email: "can@hotmail.com",
      password: "erm123456",
      phone: "84556860845",
      userStatus: 1,
    };
    return requestbody;
  }

  static updateUserBody() {
    const requestbody = {
      id: 6325264536892,
      username: "Can",
      firstName: "Can Can",
      lastName: "Seker",
      email: "can@hotmail.com",
      password: "erm123456",
      phone: "84556860845",
      userStatus: 1,
    };
    return requestbody;
  }

  static userLoginQS() {
    const queryString = {
      username: "Can",
      password: "erm123456",
    };
    return queryString;
  }

  static userHeaders() {
    const header = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    return header;
  }

  static createWithArray() {
    const requestbody = [
      {
        id: 6437637463,
        username: "ArasB",
        firstName: "Aras",
        lastName: "Biskin",
        email: "a@gmail.com",
        password: "arasbiskin",
        phone: "736473647",
        userStatus: 1,
      },

      {
        id: 643763748783,
        username: "ElisaB",
        firstName: "Elisa",
        lastName: "Biskin",
        email: "e@gmail.com",
        password: "elisabiskin",
        phone: "736767473647",
        userStatus: 0,
      },
    ];
    return requestbody;
  }
}

module.exports = userRequest;
