class userResponse{
    static createResponseBody(){
        const userCreateResponse ={
            "code": 200,
            "type": "unknown",
            "message": "6325264536892"
        };
        return userCreateResponse;
    }

    static getUserInfoBody(){
        const userInfoResponse = {
            id: 6325264536892,
            username: "Can",
            firstName: "Can",
            lastName: "Seker",
            email: "can@hotmail.com",
            password: "erm123456",
            phone: "84556860845",
            userStatus: 1,
          };
          return userInfoResponse;
    }

    static userUpdateBody(){
        const userUpdateResponse = {
            code: 200,
            type: "unknown",
            message: "6325264536892",
          };
          return userUpdateResponse;
    }
    static userDeleteResponse(){

    const userDeleteResponse = {
        code: 200,
        type: "unknown",
        message: "Can",
      };
      return userDeleteResponse;
    }

    static userLogoutResponse(){
        const userLogoutResponse = {
            code: 200,
            type: "unknown",
            message: "ok",
          };
          return userLogoutResponse;
    }
    static userNotFoundResponse(){
        const userNotFound = {
            code: 1,
            type: "error",
            message: "User not found",
          };
          return userNotFound;
    
    }
    

}

module.exports = userResponse;
