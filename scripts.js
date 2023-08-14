let container = document.getElementById('container');
function button(){
    text = '';
    k=0;
    for (j=0;j<Song.length;j++){
        text += '<div class="row_ele">';
        text += '<img class="imags" src="'+Image[k]+'">';
        text += '<p class="par_song">'+Song[k]+'</p>';
        text += '<p class="par_arts">'+Artist[k]+'</p>';
        text += '<p class="par_rlsd">'+Release[k].slice(0,4)+'</p>';
        text += '</div>';
        k += 1;
    }
    container.innerHTML = text;
}
button();