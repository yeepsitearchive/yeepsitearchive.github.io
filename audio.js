// NOT MY CODE
document.addEventListener('DOMContentLoaded', function () {
    var yourAudio = document.getElementById('audiojs');
    var ctrl = document.getElementById('audioControl');

    ctrl.onclick = function () {
        var pause = ctrl.innerHTML === 'Pause audio';
        ctrl.innerHTML = pause ? 'Play audio' : 'Pause audio';

        yourAudio[pause ? 'pause' : 'play']();
        return false;
    };
});