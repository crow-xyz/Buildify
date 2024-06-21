import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatIconModule, MatButtonModule, MatToolbarModule]
})
export class ToolbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
