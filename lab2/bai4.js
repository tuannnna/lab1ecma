(function(){
    const hearder = document.querySelector('h1');
    hearder.style.color ='red';

    document.querySelector('body').addEventListener('click', function(event){
        event.target.style.color = 'blue';
    });
})();