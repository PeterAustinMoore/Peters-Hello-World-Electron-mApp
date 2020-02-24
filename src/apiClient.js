import axios from 'axios';

const BASE_URI = 'http://0.0.0.0:2000/api/v1/';

const client = axios.create({
 //baseURL: BASE_URI,
 json: true
});

const liveClient = axios.create({
  json:true
})
class APIClient {
 constructor(accessToken) {
   this.accessToken = accessToken;
 }

 getShape() {
   return this.perform('get', 'https://glenviewil.data.socrata.com/resource/idy3-5zs6.geojson?$select=the_geom,ori')
 }

 getPins() {
   return this.perform('get', 'pins.geojson?domain=glenviewil.data.socrata.com&shape=u2ma-9vv5&prop=call_type')
 }

 getEvents() {
   return this.perform('get', 'events');
 }

  async performLive (method, resource, data) {
    return liveClient({
      method,
      url: resource
    }).then(resp => {
      return resp.data ? resp.data : [];
    })
  }

 async perform (method, resource, data) {
   return client({
     method,
     url: resource
   }).then(resp => {
     return resp.data ? resp.data : [];
   })
 }
}

export default APIClient;
