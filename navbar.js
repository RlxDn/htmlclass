import { LitElement, html, css } from "https://unpkg.com/lit-element?module";

class NavBar extends LitElement {
  render() {
    return html`
      <html>
      <head>
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