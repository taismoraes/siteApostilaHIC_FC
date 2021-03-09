export function mudarCor(h1){
  h1.style.backgroundColor= '#ccc';
}

<script> document.getElementById('titulo').focus();
function mudaCor() {
    var colorAnt = document.getElementById('titulo').style.backgroundColor;
    if (colorAnt === 'black') {
        document.getElementById('titulo').style.backgroundColor = 'orange';
    } else {
        document.getElementById('titulo').style.backgroundColor = 'black';
    }
} 
</script>