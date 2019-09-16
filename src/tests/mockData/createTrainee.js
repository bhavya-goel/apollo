const createData = {
  success: `mutation{
      createTrainee(input: {
      email:"y@successive.tech"
        name:"y"
        password:"y"
      }) {
        data{
          name
        }
        message
        status
      }
      }`,
  wrongInput: `mutation{
    createTrainee(input: {
    email:"y@successie.tech"
      name:"y@."
      password:""
    }) {
      data{
        name
      }
      message
      status
    }
    }`
}
export default createData
