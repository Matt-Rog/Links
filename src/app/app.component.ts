import { Component } from '@angular/core'
import { GithubService } from './services/github.service';
import { Social } from './models/Social';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Matthew Rogers';
  projectName = "None"
  projectURL = "https://github.com/Matt-Rog"
  projectDesc = "No recent projects found, try again later :)"
  profileURL = "assets/images/me.png"

  icons!:Social[]

  constructor(private githubService:GithubService){
    githubService.getEvents().subscribe((data: any) => {
      var recent = {
        'name': "None",
        'html_url': "https://github.com/Matt-Rog",
        'description': "No recent projects found, try again later :)"
      }
      var event = data[0]
      var repoURL = event.repo.url

      githubService.getURL(repoURL).subscribe((data: any) => {
        recent = data
        this.projectName = recent.name
        this.projectURL = recent.html_url
        this.projectDesc = recent.description
      })
    })

    githubService.getMe().subscribe((data: any) => {
      this.profileURL = data.avatar_url
    })

  }

  epochTime(formatted: string){
    var date = new Date(formatted)
    return date.getTime()
  }

  navigateURL (url: string) {
    window.open(url, '_blank');
  }

}
