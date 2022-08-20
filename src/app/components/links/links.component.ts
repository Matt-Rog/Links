import { Component, OnInit } from '@angular/core';
import { Social } from './../../models/Social';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links!:Social[]

  constructor() { }

  ngOnInit(): void {
    this.links = [
      {
        title: "Github",
        url: "https://github.com/Matt-Rog",
        image_url: "assets/images/github.png",
        username: "Matt-Rog",
        description: "Contribute to my open source projects"
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/thematthewrogers/",
        image_url: "assets/images/linkedin.png",
        username: "Matthew Rogers",
        description: "Connect with me professionally"
      },
      {
        title: "Matthew Rogers",
        url: "https://www.mattrog.dev",
        image_url: "assets/images/mrlogopurple.png",
        username: "mattrog.dev",
        description: "View my work and contact me (Under construction)"
      },
    ]
  }

  navigateURL (id: number) {
    const url = this.links[id].url
    window.open(url, '_blank');
  }

}
