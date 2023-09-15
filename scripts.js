var section = document.getElementById('section')
setInterval(function(){
    section.style.minHeight = innerHeight-260+'px';
},1);

var container = document.getElementById('container');
function printData(){
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
        text += '<img alt="'+Artist[k]+' - '+Song[k]+'" class="par_img" src="'+Image[k]+'">';
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
setTimeout(printData,2000)

function wide(row_elew){
    let row_ele = document.querySelectorAll('.row_ele');
    for (i=0;i<row_ele.length;i++){
        row_ele[i].style.width = row_elew + 'px';
    }
    var x = document.body.clientWidth;
    x = x - 0.05 * x;
    container.style.width = x + 'px';
    var y = x;
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