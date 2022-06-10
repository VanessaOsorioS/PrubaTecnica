import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Users {
  identifier: string;
  place: string;
  satisfaction: string;
  priority: string;
 
}

const ELEMENT_DATA: Users[] = [
  {identifier: 'Blanca Sarmiento' , place: 'New York', satisfaction: '100%', priority: 'High'},
  {identifier: 'Ricardo Osorio' , place: 'Canada', satisfaction: '50%', priority: 'Medium'},
  {identifier: 'Adriana Ceballos' , place: 'Italia', satisfaction: '30%', priority: 'Medium'},
  {identifier: 'Sandra Osorio' , place: 'Italia', satisfaction: '50%', priority: 'Low'},
  {identifier: 'Jennifer Giraldo' , place: 'Canada', satisfaction: '100%', priority: 'High'},
];

/**
 * @title Table with filtering
 */
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['identifier', 'place', 'satisfaction', 'priority'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  title="prueba"
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
