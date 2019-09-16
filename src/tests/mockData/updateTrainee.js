const createData = {
  success: `mutation{
        updateTrainee(input: {
          id:"5d7608f2a646f0427670cfe6"
          dataToUpdate: {
            name: "hello"
          }
        }){
          message
          status
          data{
            id
          }
        }
        
      }`,
  wrongID: `mutation{
    updateTrainee(input: {
      id:"123456"
      dataToUpdate: {
        name: "hello"
      }
    }){
      message
      status
      data{
        id
      }
    }
  }`,
  emailExists: `mutation{
    updateTrainee(input: {
      id:"5d7608f2a646f0427670cfe6"
      dataToUpdate: {
        email: "head.trainer@successive.tech"
      }
    }){
      message
      status
      data{
        id
      }
    }
  }`,
  wrongDataToUpdate: `mutation{
    updateTrainee(input: {
      id:"5d7608f2a646f0427670cfe6"
      dataToUpdate: {
        name: "sh@!."
        password: ""
      }
    }){
      message
      status
      data{
        id
      }
    }
  }`
}
export default createData
