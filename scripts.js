var section = document.getElementById('section')
setInterval(function(){
    section.style.minHeight = innerHeight-230+'px';
},1);

function button(){
    var container = document.getElementById('container');
    var text = '';
    var k = 0;
    var numbers = [];

    for (i=0;i<Song.length;i++){
        numbers.push(i);
    }

    for (i=numbers.length-1;i>0;i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
    }

    function randomizeArray(SelArray){
        for (i=0;i<SelArray.length;i++){
            temp = SelArray[i];
            SelArray[i] = SelArray[numbers[i]];
        }
    }

    randomizeArray(Song);
    randomizeArray(Artist);
    randomizeArray(Release);
    randomizeArray(Image);

    for (j=0;j<Song.length;j++){
        text += '<div class="row_ele">';
        text += '<img class="imags" src="'+Image[k]+'">';
        text += '<p class="par_song">'+Song[k]+'</p>';
        text += '<p class="par_arts">'+Artist[k]+'</p>';
        text += '<p class="par_rlsd">'+Release[k].slice(0,4)+'</p>';
        text += '</div>';
        k += 1;
    }
    var loading = document.getElementById('loading');
    loading.style.display = 'none';
    container.innerHTML = text;
}

setTimeout(button,2000)