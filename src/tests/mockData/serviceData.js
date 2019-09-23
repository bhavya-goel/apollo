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
  loginError: {
    extensions:
      {
        code: undefined,
        response:
          {
            url: 'http://localhost:9000/api/user/login',
            status: 400,
            statusText: 'Bad Request',
            body:
              {
                error: 'Bad Request',
                message:
              ['Please enter email in format ( abc@successive.tech )special characters ( . -)allowed'],
                status: 400,
                timestamp: '2019-09-16T05:44:41.985Z'
              }
          }
      }
  },
  emailError: {
    extensions:
      {
        code: undefined,
        response:
        {
          url: 'http://localhost:9000/api/user/login',
          status: 400,
          statusText: 'Bad Request',
          body: {
            error: 'email not found',
            message: 'Please sign up before login or provide correct email',
            status: 400,
            timestamp: '2019-09-16T06:14:13.089Z'
          }
        }
      }
  },
  passwordError: {
    extensions:
      {
        code: undefined,
        response:
          {
            url: 'http://localhost:9000/api/user/login',
            status: 400,
            statusText: 'Bad Request',
            body:
            {
              error: 'password not matched',
              message: 'please provide correct pasword',
              status: 400,
              timestamp: '2019-09-16T06:17:17.154Z'
            }
          }
      }
  },
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
  userMeFail: {
    extensions:
   {
     code: 'UNAUTHENTICATED',
     response:
      {
        url: 'http://localhost:9000/api/user/me',
        status: 401,
        statusText: 'Unauthorized',
        body:
        {
          error: 'Forbidden',
          message: 'Authentication failed',
          status: 401,
          timestamp: '2019-09-16T06:31:48.695Z'
        }
      }
   }
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
  createEmailFail: {
    extensions:
      {
        code: undefined,
        response:
        {
          url: 'http://localhost:9000/api/trainee',
          status: 400,
          statusText: 'Bad Request',
          body:
          {
            error: 'Bad Request',
            message: 'email exists',
            status: 400,
            timestamp: '2019-09-16T06:40:51.211Z'
          }
        }
      }
  },
  createWrongInput: {
    extensions:
      {
        code: undefined,
        response:
        {
          url: 'http://localhost:9000/api/trainee',
          status: 400,
          statusText: 'Bad Request',
          body:
          {
            error: 'Bad Request',
            message: ['Please enter email in proper format',
              'enter a alphanumeric name',
              'password cannot be empty'],
            status: 400,
            timestamp: '2019-09-16T06:40:51.211Z'
          }
        }
      }
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
  deleteFail: {
    extensions:
    {
      code: undefined,
      response:
        {
          url: 'http://localhost:9000/api/trainee/5d7608fea646f0427670cfe8',
          status: 400,
          statusText: 'Bad Request',
          body:
          {
            error: 'Bad Request',
            message: 'User not found',
            status: 400,
            timestamp: '2019-09-16T06:58:45.274Z'
          }
        }
    }
  },
  updateSucess: {
    message: 'Trainee Updated Successfully',
    status: '200',
    data: {
      id: '5d7608f2a646f0427670cfe6'
    }
  },
  updateWrongID: {
    extensions:
   {
     code: undefined,
     response:
      {
        url: 'http://localhost:9000/api/trainee',
        status: 400,
        statusText: 'Bad Request',
        body:
        {
          error: 'Bad Request',
          message: 'User not found',
          status: 400,
          timestamp: '2019-09-16T07:06:34.856Z'
        }
      }
   }
  },
  updateWithAlreadyEmail: {
    extensions:
   {
     code: undefined,
     response:
      {
        url: 'http://localhost:9000/api/trainee',
        status: 400,
        statusText: 'Bad Request',
        body:
        {
          error: 'Bad Request',
          message: 'email exists',
          status: 400,
          timestamp: '2019-09-16T07:06:34.856Z'
        }
      }
   }
  },
  updateWithWrongData: {
    extensions:
   {
     code: undefined,
     response:
      {
        url: 'http://localhost:9000/api/trainee',
        status: 400,
        statusText: 'Bad Request',
        body:
        {
          error: 'Bad Request',
          message: ['enter an alphanumeric name,password cannot be empty'],
          status: 400,
          timestamp: '2019-09-16T07:06:34.856Z'
        }
      }
   }
  },
  createByResponse: {
    name: 'headTrainer'
  }
}
export default ServiceData
