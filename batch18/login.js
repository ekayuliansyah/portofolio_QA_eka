const domain = require("supertest")("http://barru.pythonanywhere.com");
const expect = require("chai").expect;

describe("Scenario Login Feature", function () {
  it("Verify Success Login with registered email and password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "ekajulian@gmail.com", password: "12345678" });
      
    expect(response.body.status).to.eql('SUCCESS_LOGIN');
    expect(response.body.message).to.eql('Anda Berhasil Login');
    expect(response.body).to.include.keys("data", "message", "status", "credentials"); 
  });

  it("Verify Failed Login with registered empty email and empty password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "", password: "" });
      
    expect(response.body.data).to.eql('Cek Formulir Anda');
    expect(response.body.message).to.eql('Email & Password tidak boleh kosong');
    expect(response.body.status).to.eql('FAILED_LOGIN');
  });

  it("Verify Failed Login with registered email and empty password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "ekajulian@gmail.com", password: "" });
      
    expect(response.body.data).to.eql('Cek Formulir Anda');
    expect(response.body.message).to.eql('Password tidak boleh kosong');
    expect(response.body.status).to.eql('FAILED_LOGIN');
  });

  it("Verify Failed Login with email & password are not registered", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "ekajulian55@gmail.com", password: "23523523" });
      
    expect(response.body.data).to.eql('User\'s not found');
    expect(response.body.message).to.eql('Email atau Password Anda Salah');
    expect(response.body.status).to.eql('FAILED_LOGIN');
  });

  it("Verify Failed Login with invalid email & filled password", async function () { 
    const response = await domain 
      .post("/login")
      .send({ email: "ekajulian55", password: "23523523" });
      
    expect(response.body.data).to.eql('Email tidak valid');
    expect(response.body.message).to.eql('Cek kembali email anda');
    expect(response.body.status).to.eql('FAILED_LOGIN');
  });
});

// Skenario Register
describe("Scenario Register Feature", function () {
  it("Verify Success Register with register email and password", async function () { 
    const response = await domain 
      .post("/register")
      .send({ email: "hampura@gmail.com", password: "12345678" , name: "tempur"});
      
    expect(response.body.data).to.eql('berhasil');
    expect(response.body.message).to.eql('created user!');
    expect(response.body.status).to.eql('SUCCESS_REGISTER');
  });
  it("Verify Success Register with register email, password, and empty name", async function () { 
    const response = await domain 
      .post("/register")
      .send({ email: "cakap@gmail.com", password: "12345678" , name: ""});
      
    expect(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
    expect(response.body.message).to.eql('Gagal Registrasi');
    expect(response.body.status).to.eql('FAILED_REGISTER');
  });
  it("Verify Success Register with register empty email, password, and name", async function () { 
    const response = await domain 
      .post("/register")
      .send({ email: "", password: "" , name: ""});
      
    expect(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
    expect(response.body.message).to.eql('Gagal Registrasi');
    expect(response.body.status).to.eql('FAILED_REGISTER');
  });
  it("Verify Success Register with register invalid email but filled password, and name", async function () { 
    const response = await domain 
      .post("/register")
      .send({ email: "ekaiuaklafn", password: "12345678" , name: "adulll"});
      
    expect(response.body.data).to.eql('Email tidak valid');
    expect(response.body.message).to.eql('Cek kembali email anda');
    expect(response.body.status).to.eql('FAILED_REGISTER');
  });
  it("Verify Success Register with register email, name,and empty password", async function () { 
    const response = await domain 
      .post("/register")
      .send({ email: "ekajuuu@gmail.com", password: "" , name: "silakan"});
      
    expect(response.body.data).to.eql('Email/Username/Password tidak boleh kosong');
    expect(response.body.message).to.eql('Gagal Registrasi');
    expect(response.body.status).to.eql('FAILED_REGISTER');
  });
  it("Verify Success Register with registered email, name,and empty password", async function () { 
    const response = await domain 
      .post("/register")
      .send({ email: "ekajulian@gmail.com", password: "12345678" , name: "eka"});
      
    expect(response.body.data).to.eql('Email sudah terdaftar, gunakan Email lain');
    expect(response.body.message).to.eql('Gagal Registrasi');
    expect(response.body.status).to.eql('FAILED_REGISTER');
  });
});

// Skenario List data
describe("Scenario List User Feature", function () {
  it("Success get List User, without param  ", async function () { 
        const response = await domain 
          .get("/list-user")
          .send({ email: "", name: ""  });
          
        expect(response.body.status).to.eql('SUCCESS_USER_LIST');
        expect(response.body.message).to.eql('List of registered users');
        expect(response.body).to.include.keys("data", "message", "status"); 
   });
     it("Success get List User, with empty email parameter  ", async function () { 
        const response = await domain 
          .get("/list-user")
          .send({ email: "", name: "eka"  });
      
        expect(response.body.status).to.eql('SUCCESS_USER_LIST');
        expect(response.body.message).to.eql('List of registered users');
        expect(response.body).to.include.keys("data", "message", "status"); 
  });

  it("Success get List User, with empty email and empty username parameter  ", async function () { 
        const response = await domain 
          .get("/list-user")
          .send({ email: "", name: ""  });
    
        expect(response.body.status).to.eql('SUCCESS_USER_LIST');
        expect(response.body.message).to.eql('List of registered users');
        expect(response.body).to.include.keys("data", "message", "status"); 
  });

  it("Success get List User, with email value and empty username parameter  ", async function () { 
        const response = await domain 
          .get("/list-user")
          .send({ email: "ekajulian@gmail.com", name: ""  });
    
        expect(response.body.status).to.eql('SUCCESS_USER_LIST');
        expect(response.body.message).to.eql('List of registered users');
        expect(response.body).to.include.keys("data", "message", "status"); 
  });

  it("Success get List User, with email value and valid username parameter  ", async function () { 
        const response = await domain 
          .get("/list-user")
          .send({ email: "ekajulian@gmail.com", name: "eka"  });
    
        expect(response.body.status).to.eql('SUCCESS_USER_LIST');
        expect(response.body.message).to.eql('List of registered users');
        expect(response.body).to.include.keys("data", "message", "status"); 
  });
});