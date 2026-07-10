
        const input = document.getElementById("find")
        const button = document.getElementById("button")
        const card = document.getElementById("empty")


    async function loadUser() {
        const find = input.value.trim()
        if(!find){
            card.innerHTML = "<p>Please enter the Github profile</p>"
            return
        }
        card.innerHTML= "<p>Loading....</p>"

        try{
            const response = await fetch(`https://api.github.com/users/${find}`)
            
            if(!response.ok){
                throw new Error("user not found")
            }
            
           const data = await response.json()
           console.log(data)
           card.innerHTML=`<div class = "empty">
            <div class ="flex">
              <img src = "${data.avatar_url}" class ="image"/>
                <h2> ✦ Login: ${data.login}</h2>
               <h2> ✦ ID: ${data.id}</h2>
               <button><a href = "${data.html_url}" target="_blank" </a>Visit Profile</button>
                </div>
                <div class= "main">
                  <div class = "inner-div">
               <h3> ✦ FOLLOWERS: <span>${data.followers}</span></h3>
               <h3> ✦ BIO: <span>${data.bio}</span></h3>
               </div>
               <div class = "inner-div">
               <h3> ✦ PUBLIC_REPO: <span>${data.public_repos}</span></h3>
               <h3> ✦ FOLLOWING: <span>${data.following}</span></h3>
               </div>
               <div class = "inner-div">
               <h3> ✦ LOCATION: <span>${data.location}</span></h3>
               <h3> ✦ COMPANY: <span>${data.company}</span></h3>
               </div>
               </div>
               </div>`

        }catch(err){
            console.log("No user found - please enter the valid Username",err)
        }
 
    }

   button.addEventListener("click", loadUser)