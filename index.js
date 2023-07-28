var ID = 'insert id here';

async function getID(id) {
    let response = await fetch(`https://api.lanyard.rest/v1/users/${id}`);
    let data = await response.json()
    console.log(id)
    const stringify = JSON.stringify(data)
    const parsed = JSON.parse(stringify)
    return parsed;  
}

// 0, offline 1, online 2, idle 3, dnd, 5 Spotify
var status_ = 0;

//Spotify with Author
getID(`${ID}`).then(parsed => {
    console.log(parsed.data.listening_to_spotify)
    if (parsed.data.listening_to_spotify == true) {
        console.log("Listening to spotify right now!")
        console.log(`${parsed.data.spotify.song} by ${parsed.data.spotify.artist}`)
        status_ = 5;
    } 
    else if (parsed.data.listening_to_spotify == false) 
    {
        console.log("Not listening to spotify right now!")
    }
    else {
        console.log("Error")
    }
})


//Get Discord Status
getID(`${ID}`).then(parsed => {
    //console.log(parsed.data.discord_status)
    if (parsed.data.discord_status === 'dnd') {
        console.log("DND")
        status_ = 3;
    } 
    else if (parsed.data.discord_status === 'online') 
    {
        console.log("online")
        status_ =1;
    } else if (parsed.data.discord_status === 'offline')
    {
        console.log("offline")
        status_ = 0;
    }
    else {
        console.log("Error in fetching status!")
    }
})


