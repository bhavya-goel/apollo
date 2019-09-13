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
      }`
}
export default createData
