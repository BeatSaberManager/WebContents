const installedButton = document.getElementById("installed");
const installButton = document.getElementById("install");
const playlistButton = document.getElementById("playlist");

const installedSongs = document.getElementById("installed_songs");
const installSongs = document.getElementById("download_songs");
const playlistSongs = document.getElementById("manage_playlists");

installButton.addEventListener("click", () => {
    installedSongs.style.display = "none";
    installSongs.style.display = "flex";
    playlistSongs.style.display = "none";
});

installedButton.addEventListener("click", () => {
    installedSongs.style.display = "flex";
    installSongs.style.display = "none";
    playlistSongs.style.display = "none";
});

playlistButton.addEventListener("click", () => {
    installedSongs.style.display = "none";
    installSongs.style.display = "none";
    playlistSongs.style.display = "flex";
});

async function init() {
    let url = "http://localhost:50004/api/songs";

    // fetch the json from the server and log it every 1% progress
    let fsongs = await fetch(url);


    let json = await JSON.parse(await fsongs.json());
    songs = json;

    loadSongs();
}

init();
