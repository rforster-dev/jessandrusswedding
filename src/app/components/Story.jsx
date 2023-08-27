export default function Story() {
  return (
    <div id="story" class="story section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-5 mb-30">
            <div
              class="story-img animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <div class="img">
                {" "}
                <img src="/us.jpg" class="img-fluid" alt="" />{" "}
              </div>
            </div>
          </div>

          <div
            class="col-md-7 animate-box fadeInRight animated"
            data-animate-effect="fadeInRight"
          >
            <h4 class="oliven-story-subtitle">Our wedding</h4>
            <h3 class="oliven-story-title">Welcome!</h3>
            <p>Welcome to our wedding website!</p>

            <p>We can't wait to share our special day with you.</p>

            <p>
              Find all the details you need here, including timings for the day,
              hotels and travel suggestions, and ideas for what to do in the
              local area if you fancy extending your visit.
            </p>

            <p>
              Just drop us a message if you have any questions (or check the
              FAQs below). And don’t forget to RSVP!
            </p>

            <a
              href="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__rWkQeJUOEs3NE5EVEFFWlFQQ0dMTTY0Q0YyMVlLNC4u"
              target="_blank"
              className="buttono"
            >
              <span>RSVP to our wedding</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
