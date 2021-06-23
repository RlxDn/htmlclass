import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class NavBar extends LitElement {
  static get styles() {
    return css`
      html
      body {
        width: 100%;
        height: 100%;
        background:	#f8b600;
      }
      /* #region 건들지 마시오 */
      @import url(https://cdn.rawgit.com/theeluwin/NotoSansKR-Hestia/master/stylesheets/NotoSansKR-Hestia.css);

      html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, button, abbr, acronym, address, code, del, 
      dfn, em, img, strong, sub, sup, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, 
      td, hr{margin:0;padding:0;font-size:100%;box-sizing: border-box;}
      body{height:100%;min-height:100%;font-family:'Noto Sans Korean','Malgun Gothic','맑은고딕','돋움',dotum, sans-serif;font-size:16px;color:#737373;line-height:1.5;}

      #nav-placeholder{ width:100%; height:100%;}
      #nav-placeholder > h1{font-size:0;}
      #nav-placeholder nav {display: flex; background: #2e2e2e;}
      #nav-placeholder nav ul {width: 100%; display: flex; justify-content: center;}
      #nav-placeholder nav ul li {padding-right: 50px; height: 5vh; line-height: 5vh; text-align: center;}
      #nav-placeholder nav ul li:hover a, #nav-placeholder nav ul li.on a{color: orange;}
      #nav-placeholder nav ul li:hover:after, #nav-placeholder nav ul li.on:after{background: orange;}
      nav .logo_box{cursor:pointer;}
      nav .logo_box h5 {position: fixed; height: 5vh; line-height: 5vh; text-align: center; padding-left: 10px; object-fit: cover; color: orange; font-size: 20px;}
      /* #endregion */
    `;
  }
  render() {
    return html`
      <html>
      <head>
        <link type="text/css" rel="stylesheet" href="./css/index.css"/>
      </head>
      <body>
          <section id="nav-placeholder">
              <nav>
                  <strong class="logo_box">
                    <h5>HARMONY</h5>
                  </strong>
                    <ul>
                        <li><a href="./recommend.html">RECOMMENDATION</a></li>
                        <li><a href="./auction.html">AUCTION</a></li>
                        <li><a href="./faq.html">FAQ</a></li>
                        <li><a href="./contact.html">Contact Us</a></li>
                    </ul>
              </nav>
          </section>      
      </body>
      </html>
    `;
  }
}

export default NavBar;