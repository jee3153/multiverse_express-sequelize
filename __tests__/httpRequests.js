const app = require('../index');
const request = require('supertest');


describe('POST Endpoints', () => {
  it('should post comapny', () => {
    request(app)
      .post('/companies')
      .send({
        name: 'EAT',
        logoUrl: 'logo/logo.jpg'
      })
      .expect(200)
      .expect(res => {
        res.body.length = 2;
        res.body.data[0].name = 'EAT'
      })
  })

  it('should post location', () => {
    request(app)
      .post('/companies/1/locations')
      .send({
        name: 'Leeds',
        capacity: 100,
        manager: 'Noelle'
      })
      .expect(200)
      .expect(res => {
        res.body.length = 3;
        res.body.data[0].name = 'Leeds'
      })
  })

  it('should post menus', () => {
    request(app)
      .post('/companies/1/menus')
      .send({
        title: 'carrot soup'
      })
      .expect(200)
      .expect(res => {
        res.body.length = 1;
        res.body.data[0].title = 'carrot soup'
      })
  })
})

describe('GET Endpoints', () => {
  
  it('should get companies', () => {
    const response = [{name: 'EAT', logoUrl: 'logo/logo.jpg'}]
    request(app)
      .get('/companies')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(response)
    
  })
  
  it('should get a location', () => {
    const response = [{name: 'Leeds', capacity: 100, manager: 'Noelle'}]

    request(app)
      .get('/companies/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(response)  
  })
  
  it('should get a menu', () => {
    const response = [{title: 'carrot soup'}]

    request(app)
      .get('/companies/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(response)
    })
})
  
describe('PATCH/PUT Endpoints', () => {
  it('should replace company',  () => {
    request(app)
      .patch(`/companies/1`)
      .send({name: 'Mcdonalds', logoUrl: 'mc/logo.jpg'})
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => {
        res.body.length = 2;
        res.body.data[0].name = 'Mcdonalds'
      })
  })
  
  it('should edit location',  () => {
    request(app)
      .patch(`/companies/1/locations/1`)
      .send({capacity: 99})
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => {
        res.body.length = 1;
        res.body.data[0].capacity = 99
      })
  })

})

describe('DELETE Endpoints', () => {
  it('should delete company',  () => {
    request(app)
      .delete(`/companies/1`)
      .expect(200)
      .expect([])
  })
  
  it('should delete location',  () => {
    request(app)
      .delete(`/companies/1/locations/1`)
      .expect(200)
      .expect([])
  })

  it('should delete menu',  () => {
    request(app)
      .delete(`/companies/1/menus/1`)
      .expect(200)
      .expect([])
  })
})