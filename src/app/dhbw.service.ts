import { Injectable } from '@angular/core';
import { Room } from './room';

@Injectable()
export class DhbwService {

  myRooms: Room[] = [
    {id: 1, name: 'raum1'},
    {id: 2, name: 'raum2'},
    {id: 3, name: 'raum3'},
    {id: 4, name: 'raum4'}
  ]
  
  constructor() { }

}
