let section = document.getElementById('section')
setInterval(function(){
    section.style.minHeight = innerHeight-260+'px';
},1);

let container = document.getElementById('container');
function printData(){
    let text = '';
    let k = 0;
    let numbers = [];

    for (i=0;i<Song.length;i++){
        numbers.push(i);
    }

    function shuffle(ar1,ar2,ar3,ar4){
        let index = Song.length;
        let rnd, tmp1, tmp2, tmp3, tmp4;
      
        while (index){
            rnd = Math.floor(Math.random() * index);
            index -= 1;
            tmp1 = ar1[index];
            tmp2 = ar2[index];
            tmp3 = ar3[index];
            tmp4 = ar4[index];
            ar1[index] = ar1[rnd];
            ar2[index] = ar2[rnd];
            ar3[index] = ar3[rnd];
            ar4[index] = ar4[rnd];
            ar1[rnd] = tmp1;
            ar2[rnd] = tmp2;
            ar3[rnd] = tmp3;
            ar4[rnd] = tmp4;
        }
    }

    shuffle(Song,Artist,Release,Image);

    for (j=0;j<Song.length;j++){
        text += '<div class="row_ele">';
        text += '<img alt="'+Artist[k]+' - '+Song[k]+'" class="par_img" src="'+Image[k]+'">';
        text += '<p class="par_song">'+Song[k]+'</p>';
        text += '<p class="par_arts">'+Artist[k]+'</p>';
        text += '<p class="par_rlsd">'+Release[k].slice(0,4)+'</p>';
        text += '</div>';
        k += 1;
    }
    let loading = document.getElementById('loading');
    loading.style.display = 'none';
    container.innerHTML = text;
}
setTimeout(printData,2000)

function wide(row_elew){
    let row_ele = document.querySelectorAll('.row_ele');
    for (i=0;i<row_ele.length;i++){
        row_ele[i].style.width = row_elew + 'px';
    }
    let x = document.body.clientWidth;
    x = x - 0.05 * x;
    container.style.width = x + 'px';
    let y = x;
    let eleCount = 0;
    while (x >= row_elew){
        x = x - row_elew;
        eleCount++;
        if (x >= row_elew){
            x = x - 10;
        }
    }
    let gap = (y - (row_elew * eleCount)) / (eleCount-1);
    container.style.columnGap = gap + 'px';
}

setInterval(wide,1,180)