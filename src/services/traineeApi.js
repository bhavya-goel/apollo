import { RESTDataSource } from 'apollo-datasource-rest'
export default class TraineeApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:9000/api/';
    }
    
    async getTrainee(){
       
        request.headers.set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDUzZDdjZWFkYjA5NjFkN2NkYzg5NWYiLCJyb2xlIjoiaGVhZC10cmFpbmVyIiwiZW1haWwiOiJoZWFkLnRyYWluZXJAc3VjY2Vzc2l2ZS50ZWNoIiwibmFtZSI6ImhlYWRUcmFpbmVyIiwicGFzc3dvcmQiOiIkMmIkMTAkNm80ZTNLSzR3NG10Wll5azJYNy5BZXJybHhFNy40NUZTZGp1V1Fqb3dZZURFcDNTZjhHR2EiLCJjcmVhdGVkQXQiOiIyMDE5LTA4LTE0VDA5OjQzOjQyLjc4MloiLCJjcmVhdGVkQnkiOiJhZG1pbiIsIm9yaWdpbmFsSUQiOiI1ZDUzZDdjZWFkYjA5NjFkN2NkYzg5NWYiLCJfX3YiOjAsImlhdCI6MTU2NjM4NTc2MywiZXhwIjoxNTY2Mzg2NjYzfQ.VbHvDpXYGwsCnmjD3k8ydYcJN2qgDKwEM_msgu6ampk');
        const result = this.get('trainee');
        return result;
    }
}