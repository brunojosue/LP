function createToken(user) {
    let token = jwt.sign({id: user.id}, config.secret, {
      expiresIn: config.expiresPassword
    });
  
    return {auth: true, token}
  };