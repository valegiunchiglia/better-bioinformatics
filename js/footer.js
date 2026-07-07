// Injects the shared site footer into <footer id="site-footer"></footer>
(function () {
  "use strict";
  var mount = document.getElementById("site-footer");
  if (!mount) return;

  mount.innerHTML = ""
    + '<div class="container">'
    + '  <div class="footer-grid">'
    + '    <div>'
    + '      <div class="footer-brand"><img src="assets/logo.svg" alt=""><span>Better Bioinformatics</span></div>'
    + '      <p style="max-width:34ch;">An independent, fortnightly seminar series on computational biology, bioinformatics, and AI/ML in the life sciences.</p>'
    + '      <p><a href="https://www.linkedin.com/company/112442256/" target="_blank" rel="noopener">Follow us on LinkedIn ↗</a></p>'
    + '    </div>'
    + '    <div>'
    + '      <h4>Explore</h4>'
    + '      <ul>'
    + '        <li><a href="schedule.html">Schedule</a></li>'
    + '        <li><a href="speakers.html">Speakers</a></li>'
    + '        <li><a href="recordings.html">Recordings</a></li>'
    + '      </ul>'
    + '    </div>'
    + '    <div>'
    + '      <h4>Get involved</h4>'
    + '      <ul>'
    + '        <li><a href="https://forms.office.com/pages/responsepage.aspx?id=B3WJK4zudUWDC0-CZ8PTB7A7Rfez5q5GpMsFEuYySSVUNzdBVVdSSUdGMkgzRlhTQ0hFVDZMRU45Qy4u&amp;route=shorturl" target="_blank" rel="noopener">Register for a session</a></li>'
    + '        <li><a href="mailto:vg816@ic.ac.uk?subject=Proposing%20a%20talk%20for%20Better%20Bioinformatics">Propose a talk</a></li>'
    + '        <li><a href="organisers.html">Organisers</a></li>'
    + '        <li><a href="contact.html">Contact</a></li>'
    + '      </ul>'
    + '    </div>'
    + '    <div>'
    + '      <h4>Series info</h4>'
    + '      <ul>'
    + '        <li>Every other Tuesday</li>'
    + '        <li>1:00–2:00pm UK time</li>'
    + '        <li>Online via Zoom</li>'
    + '      </ul>'
    + '    </div>'
    + '  </div>'
    + '  <div class="footer-bottom">'
    + '    <span>&copy; <span data-year></span> Better Bioinformatics. An independent, community-run seminar series.</span>'
    + '    <span>Not affiliated with any university or institution.</span>'
    + '  </div>'
    + '</div>';

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
