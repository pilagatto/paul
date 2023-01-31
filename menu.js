function createMenu() {
    // Create menu HTML
    var menu = document.createElement("nav");
    menu.innerHTML = '<ul>\
          <li><a class="active" href="/index.html">Home</a></li>\
          <li><a href="/sobre-mi.html">Sobre Mí</a></li>\
          <li><a href="/portafolio.html">Portafolio</a></li>\
          <li><a href="/form-contacto.html">Contacto</a></li>\
      </ul>';
  
    // Append menu to body
    document.body.appendChild(menu);
  }




/*
<nav>
<ul>
    <li><a class="active" href="/index.html">Home</a></li>
    <li><a href="/sobre-mi.html">Sobre Mí</a></li>
    <li><a href="/portafolio.html">Portafolio</a></li>
    <li><a href="/form-contacto.html">Contacto</a></li>
</ul>
</nav>

*/