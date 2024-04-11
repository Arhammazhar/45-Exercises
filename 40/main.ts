//making function with object

function make_album(artistName: string,albumTitle: string,tracks?: number){
    let album: {artist: string,title: string,tracks?: number} = {
        artist: artistName,
        title: albumTitle,
    } ;
    if(tracks != undefined){
        album.tracks = tracks;
    }
    return album;
}

//calling functions and storing them in variables

let album1 = make_album("Arham","Album 1");

let album2 = make_album("Ashhad","Album 2");

let album3 = make_album("Haroon","Album 3",15);

//printing return value

console.log(album1);

console.log(album2);

console.log(album3);




