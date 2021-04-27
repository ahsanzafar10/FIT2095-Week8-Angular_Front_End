import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week8app';

  maker = "";
  model = "";
  body_type = "";
  year = 0;
  address = "";
  state = "";
  post_code = "";

  db = [];

  addCar() {
    let new_id = uuidv4(); 
    let newObject = {id:new_id, maker: this.maker, model: this.model, body_type: this.body_type, year: this.year, address: this.address, state: this.state, post_code: this.post_code};
    this.db.push(newObject);
  }

  calculateNumItems() {
    return this.db.length;
  }

  calculateNumOldCars() {
    let counter = 0;
    for (let i=0; i<this.db.length; i++) {
      if (this.db[i].year < 2000) {
        counter++;
      }
    }
    return counter;
  }

  deleteCarById(car) {
    let i = 0;
    while (i < this.db.length) {
      if (this.db[i].id == car.id) {
        this.db.splice(i,1);
      } else i++;
    }
  }

  deleteOldCars() {
    let i = 0;
    while (i < this.db.length) {
      if (this.db[i].year < 2000 ) {
        this.db.splice(i,1);
      } else i++;
    }
  }

}
