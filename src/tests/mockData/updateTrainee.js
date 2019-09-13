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
        
      }`
}
export default createData
