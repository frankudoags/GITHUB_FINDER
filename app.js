 //create instance of github class
const github = new GitHub;

//instance of ui class
const ui = new UI;
 
 //Search input
 const searchUser = document.getElementById('searchUser');

 //search input event listener
 searchUser.addEventListener('keyup', (e) => {
     //get input text
     const userText = e.target.value;
     if(userText !== '') {
                //Make http call request
                github.getUser(userText)
                .then(data => {
                    if(data.profile.message === 'Not Found'){
                            //show alert
                        ui.showAlert('User not found','alert alert-danger');
                        return;

                    }else{
                    //Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                    }
                })

     } else {

        // Clear Profile
        document.getElementById('profile').innerHTML = '';
     }
 });