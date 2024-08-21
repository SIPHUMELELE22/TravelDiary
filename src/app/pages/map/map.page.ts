import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements AfterViewInit {

  map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -29.86667, 31.03370],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);


  }

  
  constructor() { }



  ngAfterViewInit()
  {
   this.initMap();
    
    // const map =   L.map('map').setView([-29.85923, 31.03276], 6);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    // }).addTo(map);
 
    // L.marker([-29.85923, 31.03276]).addTo(map).bindPopup('A sample marker!').openPopup();
  }

  /**
   * Map Method
   */
  async loadMap() {
   const map =   L.map('map').setView([-29.85923, 31.03276], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
 
    L.marker([-29.85923, 31.03276]).addTo(map).bindPopup('A sample marker!').openPopup();
 
  }


  ionViewDidEnter(){
    
  }
}

