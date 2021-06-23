import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class NavBar extends LitElement {
  static get styles() {
    return css`
      @import url(https://cdn.rawgit.com/theeluwin/NotoSansKR-Hestia/master/stylesheets/NotoSansKR-Hestia.css);

      html, body{width: 100%; height: 100%; margin:0; padding:0;}
      body{height:100%;min-height:100%;font-family:'Noto Sans Korean'}

      nav {width: 100%; height: 100%; background: #2e2e2e; display: flex; align-items: center;}
      nav ul {width: 100%; display: flex; justify-content: center; list-style: none;}
      nav ul li {margin-right: 30px;}
      a{text-decoration: none; color: gray;}
      nav ul li:hover a, nav ul li.on a{color: orange;}
      nav ul li:hover:after, nav ul li.on:after{background: orange;}
      nav .logo_box {position: fixed; cursor:pointer; padding-left: 10px; color: orange; font-size: 20px; margin: 0px;}
    `;}
  render() {
    return html`
      <html>
      <head>
      </head>
      <body>
        <nav>
          <a class="logo_box" href="./index.html">HARMONY</a>
          <ul>
            <li><a href="./recommend.html">RECOMMENDATION</a></li>
            <li><a href="./auction.html">AUCTION</a></li>
            <li><a href="./faq.html">FAQ</a></li>
            <li><a href="./contact.html">Contact Us</a></li>
          </ul>
        </nav>      
      </body>
      </html>
    `;
  }
}

export default NavBar;