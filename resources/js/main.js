// color-button html
const btn = document.getElementById('color-btn');

let index = 0;

const colors = ['#FF6663', '#FEB144', '#FDFD97', '#9EE09E', '#9EC1CF', '#CC99C9'];;

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = colors[index];
    btn.style.color = 'black';

    index = index >= colors.length - 1 ? 0 : index + 1;
});
// end of color-button html