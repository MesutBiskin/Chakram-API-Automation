
const chakram = require("chakram"),
  expect = chakram.expect;

const params = require("../data.js");  

describe("User Test", function () {
  it("userCreate", function () {
    const requestbody = {
      id: 6325264536892,
      username: "Can",
      firstName: "Can",
      lastName: "Seker",
      email: "can@hotmail.com",
      password: "erm123456",
      phone: "84556860845",
      userStatus: 1
    };

    const response = chakram.post(
      params.BaseURL+"v2/user",
      requestbody
    );
    expect(response).to.have.status(200);
    return chakram.wait();
  });

  it("getUserInfo", function () {
    const response = chakram.get(params.BaseURL+"v2/user/Can");
    expect(response).to.have.status(200);
    return chakram.wait();
  });

  it("userUpdate", function () {
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

    const response = chakram.put(
      params.BaseURL+"v2/user/Can",
      requestbody
    );
    expect(response).to.have.status(200);
    return chakram.wait();
  });

  it("userDelete", function () {
    const response = chakram.delete(params.BaseURL+"v2/user/Can");
    expect(response).to.have.status(200);
    return chakram.wait();
  });

  it("userLogin", function () {
    const queryString = {
      username: "Can",
      password: "erm123456",
    };

    const response = chakram.get(params.BaseURL+"v2/user/login", {
      qs: queryString,
    });
    expect(response).to.have.status(200);
    return chakram.wait();
  });

  it("userLogout", function () {
    const header = {
      accept: "application/json",
    };
    const response = chakram.get(params.BaseURL+"v2/user/logout", {
      headers: header,
    });
    expect(response).to.have.status(200);
    return chakram.wait();
  });

  it("UserCreateWithArray", function () {
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

    const header = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = chakram.post(
      params.BaseURL+"v2/user/createWithArray",
      requestbody,
      { headers: header }
    );
    expect(response).to.have.status(200);
    return chakram.wait();
  });

  it("UserCreateWithList", function () {
    const requestbody = [
      {
        id: 98479837,
        username: "GamzeB",
        firstName: "Gamze",
        lastName: "Biskin",
        email: "gamze@gmail.com",
        password: "s8473647863",
        phone: "47398739434",
        userStatus: 0,
      },
    ];

    const header = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = chakram.post(params.BaseURL+"v2/user/createWithList", requestbody,{ headers: header } );
    expect(response).to.have.status(200);
    return chakram.wait();
  });

  it("userNotFound", function () {
    const response = chakram.get(params.BaseURL+"v2/user/Canseker");
    expect(response).to.have.status(404);
    return chakram.wait();
  });


});
