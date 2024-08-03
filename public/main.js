document.addEventListener('DOMContentLoaded', function () {
    let preElements = document.querySelectorAll('pre');
    console.log(preElements);
    preElements.forEach(function (pre) {
        let lang = document.createElement('div');
        lang.className = "lang";
        lang.innerText = pre.getAttribute('data-lang');
        pre.append(lang);
    });
});