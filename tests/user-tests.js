const chakram = require("chakram"),
  expect = chakram.expect;

const params = require("../data.js");

const userRequest = require("../request/user-request.js");
const userResponse = require("../response/user-response.js");

describe("User Test", function () {
  it("userCreate", function () {
    const response = chakram.post(
      params.BaseURL + "v2/user",
      userRequest.createUserBody()
    );
    expect(response).to.have.status(200);
    expect(response).to.have.json(userResponse.createResponseBody());
    return chakram.wait();
  });

  it("getUserInfo", function () {
    const response = chakram.get(params.BaseURL + "v2/user/Can");
    expect(response).to.have.status(200);
    expect(response).to.have.json(userResponse.getUserInfoBody());
    return chakram.wait();
  });

  it("userUpdate", function () {
    const response = chakram.put(
      params.BaseURL + "v2/user/Can",
      userRequest.updateUserBody()
    );
    expect(response).to.have.status(200);
    expect(response).to.have.json(userResponse.userUpdateBody());
    return chakram.wait();
  });

  it("userDelete", function () {
    const response = chakram.delete(params.BaseURL + "v2/user/Can");
    expect(response).to.have.status(200);
    expect(response).to.have.json(userResponse.userDeleteResponse);
    return chakram.wait();
  });

  it("userLogin", function () {
    const response = chakram.get(params.BaseURL + "v2/user/login", {
      qs: userRequest.userLoginQS(),
    });
    expect(response).to.have.status(200);
    return chakram.wait();
  });

  it("userLogout", function () {
    const response = chakram.get(params.BaseURL + "v2/user/logout", {
      headers: userRequest.userHeaders(),
    });
    expect(response).to.have.status(200);
    expect(response).to.have.json(userResponse.userLogoutResponse());
    return chakram.wait();
  });

  it("UserCreateWithArray", function () {
    const response = chakram.post(
      params.BaseURL + "v2/user/createWithArray",
      userRequest.createWithArray(),
      { headers: userRequest.userHeaders() }
    );
    expect(response).to.have.status(200);
    expect(response).to.have.json(userResponse.userLogoutResponse);
    return chakram.wait();
  });

  it("UserCreateWithList", function () {
    const response = chakram.post(
      params.BaseURL + "v2/user/createWithList",
      userRequest.createWithArray(),
      { headers: userRequest.userHeaders() }
    );

    expect(response).to.have.status(200);
    expect(response).to.have.json(userResponse.userLogoutResponse);
    return chakram.wait();
  });

  it("userNotFound", function () {
    const response = chakram.get(params.BaseURL + "v2/user/Canseker");

    expect(response).to.have.status(404);
    expect(response).to.have.json(userResponse.userNotFoundResponse());
    return chakram.wait();
  });
});
