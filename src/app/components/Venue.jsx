export default function Venue() {
  return (
    <div id="venue" class="whenwhere story section-padding bg-pink">
      <div class="container story-img">
        <div class="row">
          <div class="col-md-12 mb-30">
            <span class="oliven-title-meta">Venue</span>
            <h2 class="oliven-title">Where</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <h3 class="mb-4">The Hare and Hounds Hotel, Tetbury</h3>
            <p>
              Address: The Hare and Hounds, Bath Road, Westonbirt, Tetbury,
              Gloucestershire, GL8 8QL
            </p>
            <div class="item">
              <ul>
                <li>
                  <a
                    href="https://www.cotswold-inns-hotels.co.uk/hare-and-hounds-hotel"
                    target="_blank"
                  >
                    Hare and Hounds Hotel, Tetbury
                  </a>
                </li>
                <li>
                  <a href="mailto:hareandhounds.reception@cotswold-inns-hotels.co.uk">
                    Email the hotel
                  </a>
                </li>
                <li>
                  <a href="tel:01666 881000">Call the hotel: 01666 881000</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-7">
            <div class="img">
              <img src="/hotel.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
