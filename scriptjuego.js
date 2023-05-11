const array = ["", "", ""];

preventDefault = (ev) => {
    ev.preventDefault();
}


const drag = (ev) => {
    console.log('se inicio');
    ev.dataTransfer.setData("text", ev.target.id)
}


const drop = (ev) => {
    if (array[(ev.target.id)] == "") {
        let data = ev.dataTransfer.getData("text");
        array[(ev.target.id)] = data;
        ev.target.appendChild(document.getElementById(data));
        console.log(data);

    }
}


const reinicio = () => {
    window.location.reload();
}

