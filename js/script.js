const $ = (e) => document.querySelectorAll(e);

const _switches = $(".switches")[0];
const _colors = $("input[name='color']");

for (let i = 0; i < _colors.length; i++) {
  _colors[i].addEventListener("change", (e) => {
    if (e.target.checked) _switches.setAttribute("data-theme", e.target.value);
  });
}
