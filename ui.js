class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    //Display profile in UI
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-outline-primary btn-block mb-4">View Profile</a>
                     </div>
                        <div class="col-md-9">
                            <span class="badge bg-primary mb-3">Public Repos: ${user.public_repos}</span>
                            <span class="badge bg-secondary mb-3">Public Gists: ${user.public_gists}</span>
                            <span class="badge bg-success mb-3">Followers and Following: ${user.followers}, Followings: ${user.following}</span>
                            <br><br>
                            <ul class="list-group">
                                <li class="list-group-item">Company: ${user.company}</li>
                                <li class="list-group-item">Blog: ${user.blog}</li>
                                <li class="list-group-item">Location: ${user.location}</li>
                                <li class="list-group-item">Bio: ${user.bio}</li>
                                <li class="list-group-item">Member Since: ${user.created_at}</li>
                            </ul>
                        </div> 
            </div>
        </div>
        <hr>
        <h3 class= "page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }

    //Display Repos in UI
    showRepos(repos) {
        let output = '';
        repos.forEach((repo) => {
            output += `<div class="card card-body mb-2">
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="${repo.html_url}" target="_blank" class="mb-3" style = "text-decoration: none;">${repo.name} </a>
                                </div>
                                <div class="col-md-6">
                                <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
                                <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
                                <span class="badge bg-success">Forks: ${repo.forks_count}</span>
                                <br><br>
                                </div>
                            </div>
                        </div>
                        `;
        });

        //Output repositories
        document.getElementById('repos').innerHTML = output;
    }

    // Show alert message
    showAlert(message,className) {
        //Clear any previous alert message
        this.clearAlert();
        //create div
       const div = document.createElement('div');
       //add classes
       div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //get parent
        const container = document.querySelector('.search-container');
        const search = document.querySelector('.search');

        //insert before 
        container.insertBefore(div, search);

//Timeout after 3secs
setTimeout(() => {
    this.clearAlert();
},3000);

    }
    //clear alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert) {
            currentAlert.remove();
        }
    }
}

