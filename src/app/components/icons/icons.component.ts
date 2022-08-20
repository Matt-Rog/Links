import { Component, OnInit } from '@angular/core';
import { Social } from './../../models/Social';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {


  icons!:Social[]

  constructor() { }

  ngOnInit(): void {
    this.icons = [
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
        title: "MatthewRogers",
        url: "https://mattrog.notion.site/8b7f237c492d465685d4f3ccb9d68559?v=78a63996ee224f458528d0fff2c174c6",
        image_url: "assets/images/instagram.png",
        username: "@maffewrogers",
        description: "Follow me on Instagram"
      },
      {
        title: "Discord",
        url: "https://discordapp.com/users/344212009845260298",
        image_url: "assets/images/discord.png",
        username: "Matthew Rogers",
        description: "Add me on Discord"
      },
      {
        title: "Twitter",
        url: "https://twitter.com/socksittoem",
        image_url: "assets/images/twitter.png",
        username: "@socksittoem",
        description: "Follow me on Twitter"
      }
        

    ]
  }

  navigateURL (id: number) {
    const url = this.icons[id].url
    window.open(url, '_blank');
  }

}
