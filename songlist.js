let songcard = `
<sl-card class="card-overview">
<img
    height="60px"
    width="300px"
    style="object-fit: cover;"
    slot="image"
    src="{{IMGPATH}}"
/>
<strong>{{title}}</strong><br />
<small>{{hash}}</small>

<div slot="footer">
    <sl-button variant="primary" onclick="play('{{FILEPATH}}')">Play</sl-button>
    <sl-button variant="danger" onclick="deletesong('{{HASH}}')">Delete</sl-button>
</div>
</sl-card>
`;

let listDiv = document.getElementById("i_s_list");
let searchInput = document.getElementById("s_l_search");
let progress = document.getElementById("progress");

searchInput.addEventListener("input", () => {
    loadSongsWithKeyword(searchInput.value);
});

async function loadSongs() {
    // cleat the list
    listDiv.innerHTML = "";
    for (const song of songs) {
        console.log(JSON.stringify(song));
        let name = song.name;
        let hash = song.hash;

        let path = song.coverPath.split("/");
        let imgurl = "http://localhost:50004/songs/" + path[path.length - 2] + "/" + path[path.length - 1];

        let soundPath = song.soundPath.split("/");
        let soundurl = "http://localhost:50004/songs/" + soundPath[soundPath.length - 2] + "/" + soundPath[soundPath.length - 1];

        let card = songcard.replace("{{title}}", name);
        card = card.replace("{{hash}}", hash);
        card = card.replace("{{IMGPATH}}", imgurl);
        card = card.replace("{{FILEPATH}}", soundurl);
        card = card.replace("{{HASH}}", hash);
        
        let calcProgress = Math.round((songs.indexOf(song) / songs.length) * 100);
        progress.value = calcProgress;

        listDiv.innerHTML += card;
    }

    progress.value = 100;
}

loadSongs();

async function loadSongsWithKeyword(keyword) {
    // only list the songs which title contains the keyword
    // if keyword is empty, list all 
    // cleat the list
    listDiv.innerHTML = "";

    if (keyword == "") {
        loadSongs();
        return;
    }

    for (const song of songs) {
        console.log(song);
        let name = song.name;
        let hash = song.hash;

        if (name.includes(keyword)) {
            let path = song.coverPath.split("/");
            let imgurl = "http://localhost:50004/songs/" + path[path.length - 2] + "/" + path[path.length - 1];

            let soundPath = song.soundPath.split("/");
            let soundurl = "http://localhost:50004/songs/" + soundPath[soundPath.length - 2] + "/" + soundPath[soundPath.length - 1];

            let card = songcard.replace("{{title}}", name);
            card = card.replace("{{hash}}", hash);
            card = card.replace("{{IMGPATH}}", imgurl);
            card = card.replace("{{FILEPATH}}", soundurl);
            card = card.replace("{{HASH}}", hash);

            listDiv.innerHTML += card;
        }
    }
}

function play(path) {
    let audio = document.getElementById("audio");
    audio.src = path;
    audio.play();
}

function deletesong(path) {

}