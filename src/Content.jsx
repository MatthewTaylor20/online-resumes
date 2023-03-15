export function Content() {
  let student = {
    first_name: "Michael",
    last_name: "Scott",
    email: "Michaelscott@dundermifflin.com",
    phone_number: "888-555-5556",
    short_bio: "I sell the best paper at the best paper company in the world.",
    linkedin_url: "https://www.linkedin/in/michaelscott",
  };
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css"
        media="all"
      />
      <link rel="stylesheet" type="text/css" href="resume.css" media="all" />
      <div id="doc2" class="yui-t7">
        <div id="inner">
          <div id="hd">
            <div class="yui-gc">
              <div class="yui-u first">
                <h1>{`${student.first_name} ${student.last_name}`} </h1>
                <h2>Web Developer, Software Engineer</h2>
              </div>
              <div class="yui-u">
                <div class="contact-info">
                  {/* <h3>
                    <a id="pdf" href="#">
                      Download PDF
                    </a>
                  </h3> */}
                  <h3>
                    <a href="#">LinkedIn</a>
                  </h3>
                  <h3>
                    <a href="#">GitHub</a>
                  </h3>
                  <h3>
                    <a href="#">Personal Website</a>
                  </h3>
                  <h3>
                    <a href="#">{`${student.email}`}</a>
                  </h3>
                  <h3>{`${student.phone_number}`}</h3>
                </div>
              </div>
            </div>
          </div>
          <div id="bd">
            <div id="yui-main">
              <div class="yui-b">
                <div class="yui-gf">
                  <div class="yui-u first">
                    <h2>Profile</h2>
                  </div>
                  <div class="yui-u">
                    <p class="enlarge">{`${student.short_bio}`}</p>
                  </div>
                </div>
                <div class="yui-gf">
                  <div class="yui-u first">
                    <h2>Skills</h2>
                  </div>
                  <div class="yui-u">
                    <div class="talent">
                      <h2>Web Design</h2>
                      <p>Assertively exploit wireless initiatives rather than synergistic core competencies. </p>
                    </div>
                    <div class="talent">
                      <h2>Interface Design</h2>
                      <p>Credibly streamline mission-critical value with multifunctional functionalities. </p>
                    </div>
                    <div class="talent">
                      <h2>Project Direction</h2>
                      <p>
                        Proven ability to lead and manage a wide variety of design and development projects in team and
                        independent situations.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="yui-gf">
                  <div class="yui-u first">
                    <h2>Technical</h2>
                  </div>
                  <div class="yui-u">
                    <ul class="talent">
                      <li>XHTML</li>
                      <li>CSS</li>
                      <li class="last">Javascript</li>
                    </ul>
                    <ul class="talent">
                      <li>Jquery</li>
                      <li>PHP</li>
                      <li class="last">CVS / Subversion</li>
                    </ul>
                    <ul class="talent">
                      <li>OS X</li>
                      <li>Windows XP/Vista</li>
                      <li class="last">Linux</li>
                    </ul>
                  </div>
                </div>
                <div class="yui-gf">
                  <div class="yui-u first">
                    <h2>Experience</h2>
                  </div>
                  <div class="yui-u">
                    <div class="job">
                      <h2>A University</h2>
                      <h3>Paleontologist</h3>
                      <h4>August 2022 - Present</h4>
                      <p>Doing dino thangs and teach. </p>
                    </div>
                    <div class="job">
                      <h2>Ralph Lauren</h2>
                      <h3>Buyer</h3>
                      <h4>May 2017 - December 2019</h4>
                      <p>Bought clothing for Ralph Lauren. </p>
                    </div>
                    <div class="job">
                      <h2>Relaxi-Cab</h2>
                      <h3>Taxi Driver</h3>
                      <h4>January 2012 - April 2016</h4>
                      <p>Drove a cab for mobile massages </p>
                    </div>
                  </div>
                </div>
                <div class="yui-gf last">
                  <div class="yui-u first">
                    <h2>Education</h2>
                  </div>
                  <div class="yui-u">
                    <h2>Louisiana State - Baton Rouge, LA </h2>
                    <h3>
                      BS: Computer Science &mdash; <strong>May 2005 - October 2010</strong>{" "}
                    </h3>
                    <h2>Mizzou High School- Townsend Hall Columbia, MO</h2>
                    <h3>
                      High School Diploma &mdash; <strong>April 2004 - August 2008</strong>{" "}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
