export default function Header() {
  return (
    <aside id="oliven-aside">
      <div class="oliven-logo">
        <a href="/">
          <img src="images/logo.png" alt="" />
          <span>Jess &amp; Russ</span>
          <h6>22.04.2024</h6>
        </a>
      </div>

      <nav class="oliven-main-menu">
        <ul>
          <li>
            <a href="#venue">Venue</a>
          </li>
          <li>
            <a href="#timings">Timings for the day</a>
          </li>
          <li>
            <a href="#transport">Transport</a>
          </li>
          <li>
            <a href="#stay">Stay</a>
          </li>
          <li>
            <a href="#gifts">Gifts</a>
          </li>
          <li>
            <a href="#todo">Things to see and do</a>
          </li>
          <li>
            <a href="#rsvp">RSVP</a>
          </li>

          <li>
            <a href="#faqs">FAQs</a>
          </li>
        </ul>
      </nav>

      <div class="footer1">
        <img src="/cat.png" id="caticon" /> <span class="separator"></span>
        <p>
          Jess &amp; Russ wedding
          <br />
          22 April 2024, Tetbury
        </p>
      </div>
    </aside>
  );
}
