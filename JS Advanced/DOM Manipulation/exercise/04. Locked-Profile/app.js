function lockedProfile() {
    let arrayOfProfiles = Array.from(document.getElementsByClassName("profile"));

    
    arrayOfProfiles.forEach(prof=> {
        let unlockButton = prof.getElementsByTagName("input")[1];
        let button = prof.getElementsByTagName("button")[0];
        let div = prof.getElementsByTagName("div")[0];
        button.addEventListener("click",()=>{
            if (unlockButton.checked) {
                if (button.textContent === "Show more") {
                button.textContent = "Hide it";
                div.style.display = "block";
                } else {
                    button.textContent = "Show more";
                    div.style.display = "none";
                }
            };
        });
    });
}