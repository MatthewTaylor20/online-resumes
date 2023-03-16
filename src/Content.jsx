import { Timeline } from "react-twitter-widgets";

export function Content() {
  let student = {
    first_name: "Michael",
    last_name: "Scott",
    email: "Michaelscott@dundermifflin.com",
    phone_number: "888-555-5556",
    short_bio: "I sell the best paper at the best paper company in the world.",
    linkedin_url: "https://www.linkedin/in/michaelscott",
    twitter_handle: "TwitterDev",
    personal_blog_website_url: "test.com",
    github_url: "https://github.com/michaelscott",
    experiences: [
      {
        id: 1,
        start_date: "12/01/23",
        end_date: "16/04/13",
        job_title: "Taxi Driver",
        company_name: "Relaxi-Cab",
        details: "Drove a taxicab for mobile massages",
      },
      {
        id: 2,
        start_date: "17/05/04",
        end_date: "19/12/12",
        job_title: "Buyer",
        company_name: "Ralph Lauren",
        details: "Bought clothing for Ralph Lauren",
      },
      {
        id: 3,
        start_date: "22/08/25",
        end_date: "present",
        job_title: "Paleontologist",
        company_name: "A University",
        details: "do dino thangs and teach",
      },
    ],
    educations: [
      {
        id: 1,
        start_date: "04/04/04",
        end_date: "08/08/08",
        degree: "High School",
        university_name: " Mizzou",
        details: "The school is fluent in Japanese, and allows everyone to eat bagel bites.",
      },
      {
        id: 1,
        start_date: "05/05/05",
        end_date: "10/10/10",
        degree: "Bachelors",
        university_name: "Louisiana State",
        details: "The school is fluent in Japanese, and allows everyone to eat bagel bites.",
      },
    ],
    capstones: [
      {
        id: 1,
        name: "beepbeep",
        description: "Here are a whole lot of details about the project!",
        url: "",
        screenshot: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
    ],
  };
  let experiences = student.experiences.reverse();
  let educations = student.educations.reverse();
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css"
        media="all"
      />
      <link rel="stylesheet" type="text/css" href="resume.css" media="all" />
      <div id="doc2" className="yui-t7">
        <div id="inner">
          <div id="hd">
            <div className="yui-gc">
              <div className="yui-u first">
                <h1>{`${student.first_name} ${student.last_name}`} </h1>
                <h2>Web Developer, Software Engineer</h2>
              </div>
              <div className="yui-u">
                <div className="contact-info">
                  {/* <h3>
                    <a id="pdf" href="#">
                      Download PDF
                    </a>
                  </h3> */}
                  <h3>
                    <a href="#">{`${student.linkedin_url}`}</a>
                  </h3>
                  <h3>
                    <a href="#">{`${student.github_url}`}</a>
                  </h3>
                  <h3>
                    <a href="#">{`${student.personal_blog_website_url}`}</a>
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
              <div className="yui-b">
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Bio</h2>
                  </div>
                  <div className="yui-u">
                    <p className="enlarge">{`${student.short_bio}`}</p>
                  </div>
                </div>
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Projects</h2>
                  </div>
                  <div className="yui-u">
                    {student.capstones.map((capstone) => {
                      return (
                        <div className="job" key={capstone.id}>
                          <h2>{`${capstone.name}`}</h2>
                          <img src={capstone.screenshot} alt="tree image" />
                          <p>{capstone.description} </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Skills</h2>
                  </div>
                  <div className="yui-u">
                    <ul className="talent">
                      <li>XHTML</li>
                      <li>CSS</li>
                      <li className="last">Javascript</li>
                    </ul>
                    <ul className="talent">
                      <li>Jquery</li>
                      <li>PHP</li>
                      <li className="last">CVS / Subversion</li>
                    </ul>
                    <ul className="talent">
                      <li>OS X</li>
                      <li>Windows XP/Vista</li>
                      <li className="last">Linux</li>
                    </ul>
                  </div>
                </div>
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2>Experience</h2>
                  </div>
                  <div className="yui-u">
                    {/* <p> {testDate} </p> */}
                    {/* {student.experiences.sort(function (a, b) {
                      if (b.end_date === a.end_date) {
                        return 0;
                      } else if (b.end_date === "present") {
                        return 1;
                      } else if (a.end_date === "present") {
                        return -1;
                      } else {
                        return new Date(b.end_date) - new Date(a.end_date);
                      }
                    })} */}
                    {/* // remove reverse function // */}

                    {experiences.map((experience) => {
                      return (
                        <div className="job" key={experience.id}>
                          <h2>{`${experience.job_title}`}</h2>
                          <h3>{`${experience.company_name}`}</h3>
                          <h4>{`${experience.start_date} - ${experience.end_date}`} </h4>
                          <p>{`${experience.details}`} </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="yui-gf last">
                  <div className="yui-u first">
                    <h2>Education</h2>
                  </div>
                  <div className="yui-u">
                    {educations.map((education) => {
                      return (
                        <div className="job" key={education.id}>
                          <h2>
                            {`${education.university_name}`} - {`${education.degree}`}
                          </h2>
                          <h4>{`${education.start_date} - ${education.end_date}`} </h4>
                          <h5>{`${education.details}`}</h5>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="twitter-container">
        <Timeline
          dataSource={{
            sourceType: "profile",
            screenName: student.twitter_handle,
          }}
          options={{
            height: "400",
          }}
        />
      </div>
    </div>
  );
}
