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
    let baseUrl = document.location.origin;

    let url = baseUrl + "/api/songs";

    // fetch without cors
    let fsongs = await fetch(url, {
        mode: "no-cors",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        }
    });
    songs = await fsongs.json();

    loadSongs();
}

init();
