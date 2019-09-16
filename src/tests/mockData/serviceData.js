const ServiceData = {
  loginSuccess: {
    message: 'User Login Successful',
    data: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ
    faWQiOiI1ZDc2MDhiNGE2NDZmMDQyNzY3MGNmZTUi
    LCJyb2xlIjoiaGVhZC10cmFpbmVyIiwiZW1haWwiO
    iJoZWFkLnRyYWluZXJAc3VjY2Vzc2l2ZS50ZWNoIi
    wibmFtZSI6ImhlYWRUcmFpbmVyIiwicGFzc3dvcmQ
    iOiIkMmIkMTAkRFlVTUhyVHZqQmNHVjh0S2kvQm5S
    ZTRVM1N6MlRCMXJuU3RoTDMuMVRSb2lXZ1V5VjlHb
    jIiLCJjcmVhdGVkQXQiOiIyMDE5LTA5LTA5VDA4Oj
    A5OjI0Ljk1MloiLCJjcmVhdGVkQnkiOiI1ZDc2MDh
    iNGE2NDZmMDQyNzY3MGNmZTUiLCJvcmlnaW5hbElE
    IjoiNWQ3NjA4YjRhNjQ2ZjA0Mjc2NzBjZmU1IiwiX
    192IjowLCJpYXQiOjE1NjgzNTM3OTQsImV4cCI6MT
    U2ODM1NDY5NH0.xPddcK-BSKftV_9rJBPw3jhl62g
    2O86XTsdHoI8L9Os`,
    status: '200'
  },
  loginError: 'Please enter email in proper format',
  emailError: 'Please sign up before login or provide correct email',
  passwordError: 'please provide correct pasword',
  userMeSuccess: {
    data: {
      name: 'headTrainer',
      createdBy: {
        name: 'headTrainer'
      },
      _id: '5d7608b4a646f0427670cfe5',
      email: 'head.trainer@successive.tech',
      role: 'head-trainer',
      createdAt: '2019-09-09T08:09:24.952Z',
      originalID: '5d7608b4a646f0427670cfe5'
    },
    message: 'User details fetched',
    status: '200'
  },
  createSuccess: {
    data: {
      name: 'y',
      _id: '5d7b46d76855f50d58c1edcd',
      email: 'y@successive.tech',
      role: 'trainee',
      createdBy: {
        name: 'headTrainer'
      },
      createdAt: '2019-09-13T07:35:51.640Z',
      originalID: '5d7b46d76855f50d58c1edcd'
    },
    message: 'Trainee Created Successfully',
    status: '200'
  },
  getAllSuccess: {
    message: 'Successfully fetched trainees',
    status: '200',
    data: {
      count: 1,
      records: [
        {
          createdBy: {
            name: 'headTrainer'
          },
          name: 'y',
          originalID: '5d7608fea646f0427670cfe8',
          role: 'trainee',
          _id: '5d78dea86058c10e23062fca',
          email: 'y@successive.tech'
        }
      ]
    }
  },
  deleteSuccess: {
    message: 'Trainee Deleted Successfully',
    status: '200',
    data: {
      id: '5d7608fea646f0427670cfe8'
    }
  },
  updateSucess: {
    message: 'Trainee Updated Successfully',
    status: '200',
    data: {
      id: '5d7608f2a646f0427670cfe6'
    }
  },
  createByResponse: {
    name: 'headTrainer'
  }
}
export default ServiceData
