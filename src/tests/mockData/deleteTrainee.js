const createData = {
  success: `mutation{
      deleteTrainee(id: "5d7608fea646f0427670cfe8"){
        message
        status
        data{
          id
        }
      }
    }`,
  fail: `mutation{
    deleteTrainee(id: "12345"){
      message
      status
      data{
        id
      }
    }
  }`
}
export default createData
