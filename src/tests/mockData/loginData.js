const loginData = {
  loginSuccess: `{
        login(input: 
          {
          email:"head.trainer@successive.tech"
          password:"trainer@123"
        })
        {
          message
          data
          status
        }
    }`,
  wrongEmailType: `{
        login(input: 
          {
          email:"head.trainer@succesive.tech"
          password:"trainer@123"
        })
        {
          message
          data
          status
        }
    }`,
  wrongEmail: `{
        login(input: 
          {
          email:"head.trainr@successive.tech"
          password:"trainer@123"
        })
        {
          message
          data
          status
        }
    }`,
  wrongPassword: `{
        login(input: 
          {
          email:"head.trainer@successive.tech"
          password:"trainr@123"
        })
        {
          message
          data
          status
        }
    }`
}
export default loginData
