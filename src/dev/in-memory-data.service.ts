import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  responseInterceptor(responseOptions: any, responseInfo: any) {
    if(responseInfo.collectionName === 'random-message') {
      let data = responseOptions.body.data;
      let num = data.length;
      let index = Math.floor(Math.random()*num);
      responseOptions.body.data = data[index];
    }
    return responseOptions;
  }

  createDb() {
    let messages = [
      { id: 11, body: 'There are more than 5,600 species of lizards in the world.' },
      { id: 12, body: 'Some species have very small legs or no legs at all and are often mistaken for snakes.' },
      { id: 13, body: 'All Lizards are cold blooded and must absorb sunlight periodically to digest food and produce energy.' }
    ];
    return { "random-message": messages };
  }
}
