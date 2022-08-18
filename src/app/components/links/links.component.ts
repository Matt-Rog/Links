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
        description: "View and contribute to my open-source projects"
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/thematthewrogers/",
        image_url: "assets/images/linkedin.png",
        username: "Matthew Rogers",
        description: "Follow my experience and connect with me professionally"
      },
      {
        title: "MatthewRogers",
        url: "https://www.linkedin.com/in/thematthewrogers/",
        image_url: "assets/images/instagram.png",
        username: "@maffewrogers",
        description: "Follow me on Instagram"
      }
    ]
  }

  navigateURL (id: number) {
    const url = this.links[id].url
    window.open(url, '_blank');
  }

}
