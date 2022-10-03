import { Color } from './../../models/color';
import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor(private colorService:ColorService) { }

  colors:Color[];
  currentColor:Color;
  ngOnInit(): void {
    this.getColors();
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    }
      )
  }
  setCurrentColor(color:Color){
    this.currentColor = color;
  }
  getCurrentColor(color:Color){
    if(color == this.currentColor){
      return "list-group-item list-group-item-action active"
    }
    else{
      return "list-group-item"
    }
  }

}
