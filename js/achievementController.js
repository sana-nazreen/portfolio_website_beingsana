

function extratctUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('p');

    let v = 'i' + myParam;

    $(`#${v}`).addClass("active");
}