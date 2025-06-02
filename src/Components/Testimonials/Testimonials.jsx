import React, { useRef } from "react";
import "./Testimonials.css";
import alien from "../../assets/alien.jpg";
import elijah from "../../assets/elijah.jpg";
import lillian from "../../assets/lillian.jpg";
import sam from "../../assets/sam.jpg";
import allanella from "../../assets/allanella.jpg";
import torren from "../../assets/torren.jpg";
import jordi from "../../assets/jordi.jpg"
import back from "../../assets/back.jpg";
import next from "../../assets/next.jpg";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const ShowPrev = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const ShowNext = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <h2 className="team">Our team</h2>
      <img src={back} alt="" className="back_btn" onClick={ShowPrev} />
      <img src={next} alt="" className="next_btn" onClick={ShowNext} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="Myelijah" src={elijah} alt="" />
              </div>
              <div>
                <h3>Nyombi Elijah</h3>
              </div>
              <p>
                Elijah Nyombi is one of the Directors for iONA Tech, a
                cutting-edge software company committed to driving innovation
                and providing impactful technological solutions. With a rich
                background in journalism public health, and digital marketing
                communication, Elijah leads the company with a focus on digital
                transformation and high-quality software development. His
                expertise in project management, strategy, and team leadership
                has made iONA Tech a standout in the tech industry. Elijah is
                passionate about leveraging technology to enhance public health
                and create positive change in communities.{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="Mylillian" src={lillian} alt="" />
              </div>
              <div>
                <h3>Nakunda Lillian</h3>
              </div>
              <p>
                Nankunda Lilian, a young but innovative Software Engineering
                student at Makerere University - Uganda , i also take on other
                self-study like short small online courses and practical
                skilling . As a young lady developer, I am currently
                Practicing Systems Analyst, Web Developer, Mobile Developer and
                Graphic Designer in the tech space. I specialize in front-end
                web development and front-end mobile development: transforming
                user interfaces into clean, interactive, and responsive
                experiences. But when the need arises, I also get into backend
                development thereby becoming a full stack developer. I Play With
                A Lot Of Different Languages And Things Like…Kotlin & Java – For
                Android And Backend Logic JavaScript (And React Native) – For
                Cross-Platform Mobile AppsPHP, HTML & CSS – For Dynamic And
                Beautiful Websites. Graphic Design – Bridging creativity
                with tech while making User experience easier through graphics
                I am a I scalable and flexible young lady ready to learn as long
                as my world demands it for the success of development in a
                continuously changing, and evolving computing universe, i am
                ready to with it by adopting new tools, frameworks and practices
                to improve more solutions for quality work.{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="Myallanella" src={allanella} alt="" />
              </div>
              <div>
                <h3>Baliddawa Allan</h3>
              </div>
              <p>
                Iam a passionate and skilled Fullstack Web Developer with a
                strong background in both front-end and back-end development. I
                specialize in building responsive, user-friendly, and scalable
                web applications using modern technologies. My expertise
                includes working with ReactJS for front-end development and Java
                (Spring Boot) and Node.js (Express.js) for back-end solutions,
                along with experience in managing databases like MySQL and
                MongoDB. I thrive on solving complex problems and creating
                seamless user experiences. From designing intuitive user
                interfaces to optimizing server-side performance, I’m committed
                to delivering high-quality solutions that meet business needs.{" "}
              </p>
            </div>
          </li>


          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="jordi" src={jordi} alt="" />
              </div>
              <div>
                <h3>Mulungi Abigail</h3>
              </div>
              <p>
                Abigail is a passionate JavaScript developer with a keen eye for innovation.
                 With a strong focus on crafting exceptional software experiences,
                  She excels in designing and developing scalable web applications and desktop solutions.
                  With a dedication to staying up-to-date on the latest industry trends and technologies.
                  Abigail continually enhances her skills to delive high quality solutions that exceed expectations. {" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="MyAlien" src={alien} alt="" />
              </div>
              <div>
                <h3>Mpairwe Lauben</h3>
              </div>
              <p>
                With over five years of hands-on experience, Mpairwe Lauben is a
                dynamic software engineer with a passion for crafting
                intelligent, scalable, and user-centric digital solutions. His
                core expertise lies at the intersection of mobile application
                development, cloud-native systems, and machine learning
                technologies, where he seamlessly bridges intuitive user
                experiences with powerful backend intelligence. Lauben has led
                and contributed to high-impact projects across various domains,
                architecting mobilefirst solutions that leverage the full
                potential of cloud infrastructure and AI-driven insights. His
                proficiency spans across modern tech stacks, including Flutter,
                React Native, AWS, Firebase, TensorFlow, and Kubernetes,
                enabling him to engineer products that are both technically
                robust and elegantly designed. An advocate for clean
                architecture and agile development, Lauben brings a
                problem-solving mindset, a commitment to innovation, and a deep
                understanding of scalable system design. Whether he’s building
                mission-critical mobile apps, deploying cloud solutions, or
                training intelligent models, he brings precision, performance,
                and a future-forward perspective to every line of code. Outside
                of code, Lauben actively engages in developer communities,
                mentoring emerging engineers and staying ahead of industry
                trends. His work reflects a rare blend of technical mastery,
                creativity, and a deep commitment to delivering technology that
                makes a meaningful impact.{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="Mysam" src={sam} alt="" />
              </div>
              <div>
                <h3>Katongole Samuel</h3>
              </div>
              <p>
                samuel is a passionate java Developer dedicated to crafting
                software that inspires progress and delivers value. Skilled in
                building intuitive, functional desktop and web applications, he
                combines technical expertize with a heart for service,
                collaboration and faith-driven purpose. Samuel believes in using
                technology to make a difference creativity, ethically and
                excellently. Building with purpose. Growing with vision.
                Impacting through code.{" "}
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="UserInfo">
                <img className="Mytorren" src={torren} alt="" />
              </div>
              <div>
                <h3> Amumpire Torren</h3>
              </div>
              <p>
                As a digital enthusiast, AI activist and skilled graphics
                designer, I merge creativity with technological expertise to
                drive innovative solutions. I advocate for responsible AI
                development and harnes its potential to enhance visual story
                telling. Through design, i craft engaging experiences that
                inspire and empower.{" "}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
