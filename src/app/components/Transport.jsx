export default function Transport() {
  return (
    <div id="transport" class="transport section-padding bg-pink">
      <div class="container">
        <div class="row">
          <div class="col-md-12 mb-30">
            <span class="oliven-title-meta">Transport</span>
            <h2 class="oliven-title">How to get to the venue and parking</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div className="item">
              <h2 class="oliven-title">Taxis</h2>
              <p>
                Local taxi services are available. See the list below for local
                companies:
              </p>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://abbey-taxis-malmesbury.ueniweb.com/"
                  >
                    Abbey Taxis, Malmesbury
                  </a>
                </li>
                <li>
                  <a target="_blank" href="http://www.expresstaxi.co.uk/">
                    Express Taxis, Tetbury
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://samanthascabsmalmesbury.business.site/"
                  >
                    Samantha's Cabs, Malmesbury
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.veezu.co.uk/ride/locations"
                  >
                    Veezu: Bath, Bristol and Chippenham
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div className="item">
              <h2 class="oliven-title">Rail</h2>
              <p>The nearest railway stations are:</p>
              <ul>
                <li>Kemble (15 mins away by car)</li>
                <li>Chippenham (25 mins away by car)</li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div className="item">
              <h2 class="oliven-title">Parking</h2>
              <p>There is lots of parking available at the hotel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
