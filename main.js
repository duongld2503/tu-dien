
let eng = ['dog','cat','turtle','lion'];
let vnm = ['chó','mèo','rùa','sưtử'];
let word = prompt("nhap tu tim kiem: ")


for (i=0;i<eng.length;i++) {
    let n;
    if (word == eng[i]){
        n = i;
        alert(vnm[n]);
        break;
    }
    if (word == vnm[i]) {
        n = i;
        alert(eng[n])
        break;
    }
}


