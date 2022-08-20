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
  projectDesc = "Lorem Ipsum"
  profileURL = "assets/images/me.png"

  icons!:Social[]

  constructor(private githubService:GithubService){
    githubService.getRepos().subscribe((data: any) => {
      var recent = {
        'name': "None",
        'html_url': "https://github.com/Matt-Rog",
        'description': "None"
      }
      var latestTime = 0
      for (var repo of data) {
        var updateTimeFormat = repo.pushed_at
        var epoch = this.epochTime(updateTimeFormat)
        if( epoch > latestTime ){
          latestTime = epoch
          recent = repo
        }
      }
      this.projectName = recent.name
      this.projectURL = recent.html_url
      this.projectDesc = recent.description
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
