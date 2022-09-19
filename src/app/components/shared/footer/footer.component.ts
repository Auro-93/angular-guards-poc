import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerText:string = "Made with &hearts; by Aurora Sirigu"

  constructor() { }

  ngOnInit(): void {
  }

}
