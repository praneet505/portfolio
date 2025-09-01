import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Drawer from './components/Drawer';
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";

function App() {
  const typedElRef = useRef(null);

  useEffect(() => {
    let typedInstance;
    (async () => {
      const { default: Typed } = await import('typed.js');
      typedInstance = new Typed(typedElRef.current, {
        strings: ["Designer", "Developer", "Trainer"],
        typeSpeed: 120,
        backSpeed: 300,
        backDelay: 900,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '|'
      });
    })();
    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['Home', 'About', 'Resume', 'Portfolio', 'Services', 'Contact'];
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible.target.id);
        }
      },
      { root: null, rootMargin: '0px', threshold: [0.2, 0.4, 0.6, 0.8, 1] }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        name="PRANEET J NAIK"
        active={activeSection}
        onNavigate={handleNavigate}
        footerLink="https://github.com/praneet505"
      />
      <main style={{ flex: 1, minHeight: '100vh', padding: 0, background: '#0b1220', color: 'white' }}>
        {/* Home Section */}
        <section
          id="home"
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            overflow: 'hidden',
            backgroundImage: `url(${image2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'none'
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.45)'
            }}
          />
          <div style={{ position: 'relative', padding: 24 }}>
            <h1 style={{ fontSize: 56, margin: 0, fontWeight: 800 }}>PRANEET J NAIK</h1>
            <p style={{ fontSize: 24, marginTop: 12, color: '#e2e8f0' }}>
              I'm a <span style={{ color: '#60a5fa' }} ref={typedElRef} />
            </p>
            <div style={{ height: 2, width: 80, background: '#60a5fa', margin: '16px auto 0', borderRadius: 999 }} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ background: '#0b1220', color: '#8eadeaff', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#faa584ff', fontSize: 36, margin: 0, fontWeight: 800 }}>About</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 24, lineHeight: 1.8, color: '#79b0f2ff' }}>
              As a creative and quick-thinking individual with a passion for building scalable and high
              performance systems, I design and develop modern web applications for clients. Backed by a
              degree in Computer Science, I thrive in fast-moving environments and love crafting delightful
              user experiences that also perform well.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, alignItems: 'start', marginTop: 24 }}>
              <div>
                <h3 style={{ color: '#e2e8f0', fontSize: 24, marginTop: 0 }}>Web Developer & Mobile Developer</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <li><strong>Birthday:</strong> 24 MARCH 2007</li>
                  <li><strong>Age:</strong> 18</li>
                  <li><strong>Phone:</strong> +91 7975429600</li>
                  <li><strong>Degree:</strong> SSLC, CSE</li>
                  <li><strong>City:</strong> KARNATAKA, UTTARKANNADA KUMTA,MIRJAN</li>
                  <li><strong>Freelance:</strong> learning</li>
                </ul>
              </div>
              <div style={{ textAlign: 'center' }}>
                <img src={image1} alt="About visual" style={{ maxWidth: '100%', height:'400px', borderRadius: 16, opacity: 0.95 }} />
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Resume</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 24, color: '#cbd5e1' }}>
              Are you searching for a Web Developer/Android/iOS Developer, Designer, Digital Marketer? Wanna hire me for
              your vacant role? Check out my Resume here...
              <a href="#" style={{ color: '#0ea5e9', textDecoration: 'none', marginLeft: 8 }}>View/Download Resume</a>
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 24 }}>
              {/* Summary and Education */}
              <div style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
                <h3 style={{ marginTop: 0, color: '#e2e8f0' }}>Summary</h3>
                <h4 style={{ margin: '8px 0', color: '#e2e8f0' }}>PRANEET J NAIK</h4>
                <p style={{ color: '#cbd5e1' }}>
                  Innovative and deadline-driven Web Developer with 2+ years of freelance experience designing and
                  developing Web Applications for many clients.
                </p>
                <ul style={{ color: '#94a3b8', paddingLeft: 18 }}>
                  <li>karnataka, India</li>
                  <li>+91 7975429600</li>
                  <li>praneetjnaik@gmail.com (Personal)</li>
                  <li>praneetj33@gmail.com (Business)</li>
                </ul>
                <h3 style={{ marginTop: 24, color: '#e2e8f0' }}>Education</h3>
                <div>
                  <h4 style={{ margin: '8px 0', color: '#e2e8f0' }}> Computer Science & Engineering</h4>
                  <div style={{ background: '#e5e7eb1a', display: 'inline-block', padding: '4px 8px', borderRadius: 6 }}>null - null</div>
                  <p style={{ color: '#94a3b8' }}>Just compleated deploma in computer science have plan to do Engineering in computer science</p>
                  <p style={{ color: '#94a3b8' }}>CGPA: ---</p>
                </div>
                <div>
                  <h4 style={{ margin: '8px 0', color: '#e2e8f0' }}>Diploma in Computer Science & Engineering</h4>
                  <div style={{ background: '#e5e7eb1a', display: 'inline-block', padding: '4px 8px', borderRadius: 6 }}>2023 - 2026</div>
                  <p style={{ color: '#94a3b8' }}>SDM Polytechnic, Ujire, IN</p>
                  <p style={{ color: '#94a3b8' }}>CGPA: 8.2/10</p>
                </div>
              </div>

              {/* Experience */}
              <div style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
                <h3 style={{ marginTop: 0, color: '#e2e8f0' }}>FRESHER</h3>
                <div style={{ marginBottom: 18 }}>
                  <h4 style={{ margin: '6px 0', color: '#e2e8f0' }}>Learned Software Development Engineer - Android/iOS</h4>
                  <div style={{ background: '#e5e7eb1a', display: 'inline-block', padding: '4px 8px', borderRadius: 6 }}>2022 - Present</div>
                  <p style={{ color: '#94a3b8', marginTop: 8 }}>Learned few skils given below:-</p>
                  <ul style={{ color: '#94a3b8', paddingLeft: 18 }}>
                    <li>Mobile Application Developer using Flutter and React Native</li>
                    <li>Built internal apps for attendance tracking, resource management, resume extractor</li>
                    <li>Developed medical product "Medinous" patient portal</li>
                    <li>Can work as Web Developer on client projects</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ margin: '6px 0', color: '#e2e8f0' }}>Can easily work as Software Development Engineer</h4>
                  <div style={{ background: '#e5e7eb1a', display: 'inline-block', padding: '4px 8px', borderRadius: 6 }}></div>
                  <p style={{ color: '#94a3b8', marginTop: 8 }}></p>
                  <ul style={{ color: '#94a3b8', paddingLeft: 18 }}>
                    <li>Built careers website using React JS</li>
                    <li>Can Work as Digital Marketer; Can performe SEO and Ads management</li>
                    <li>Can use Firebase; integrated with React apps</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Portfolio</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 16, color: '#cbd5e1' }}>Here are some of my works as a Freelance Project and Personal Project</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 12 }}>
              {/* Freelance Projects and Personal Project */}
              <div>
                <h4 style={{ color: '#e2e8f0', marginBottom: 8 }}>Freelance Projects & Personal Project</h4>
                <ul style={{ color: '#94a3b8', paddingLeft: 18, lineHeight: 1.8 }}>
                  <li><a style={{ color: '#0ea5e9', textDecoration: 'none' }} href="https://www.triyatri.in">www.triyatri.in</a> - Auto Booking website for locals in Ujire</li>
                  <li><a style={{ color: '#0ea5e9', textDecoration: 'none' }} href="https://www.sdmpalumniassociation.in">www.sdmpalumniassociation.in</a> - Alumni Association website</li>
                  <li><a style={{ color: '#0ea5e9', textDecoration: 'none' }} href="https://springeracademyofchess.com">https://springeracademyofchess.com</a> - School of Chess site</li>
                  <li>www.sarvaresorts.in - Group booking web app for 8 resorts (domain expired)</li>
                  <li><a style={{ color: '#0ea5e9', textDecoration: 'none' }} href="https://www.hammerrestopub.com">https://www.hammerrestopub.com</a> - Restaurant website</li>
                  <li>MyNCC Admin Dashboard web app (private)</li>
                  <li>e-Swachh Bharath - eWaste Management System</li>
                  <li>Blood Bank Management System - blood donors and receivers app</li>
                  <li>V-Connect - Social Media for SDM Polytechnic Students</li>
                  <li>Face Expression Recognition using CNN Algorithm - final year project</li>
                  <li>Law Firm - Whitelabel web application for lawyers</li>
                  <li>Legal Karnataka - eCommerce site for legal documents</li>
                </ul>
              </div>
              {/* LogiSian Projects */}
              <div>
                <h4 style={{ color: '#e2e8f0', marginBottom: 8 }}></h4>
                <ul style={{ color: '#94a3b8', paddingLeft: 18, lineHeight: 1.8 }}>
                  <li><a style={{ color: '#0ea5e9', textDecoration: 'none' }} href="https://logisian.in">https://logisian.in</a> - Company website</li>
                  <li><a style={{ color: '#0ea5e9', textDecoration: 'none' }} href="https://mapulator.app/">https://mapulator.app/</a> - Product site</li>
                  <li><a style={{ color: '#0ea5e9', textDecoration: 'none' }} href="https://ginferno.app/">https://ginferno.app/</a> - Company site and digital marketing</li>
                </ul>
              </div>
              {/* Nous Infosystems Projects */}
              <div>
                <h4 style={{ color: '#e2e8f0', marginBottom: 8 }}></h4>
                <p style={{ color: '#94a3b8' }}>
                  I can work as a Web Developer and Mobile Developer.
                  I have worked in multiple projects and some with Client projects too. Here are some information about my projects in Nous.
                </p>
                <ul style={{ color: '#94a3b8', paddingLeft: 18, lineHeight: 1.8 }}>
                  <li>Rediker Softwares - built 20+ websites using Bootstrap and React JS</li>
                  <li>View Point Mobile Application - Flutter app for attendance and resource management</li>
                  <li>nRich - Internal Flutter app for resource allocation</li>
                  <li>Sanofi - React Native mobile application (banking related)</li>
                  <li>Medinous - Patient Portal using Flutter for hospital management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Services</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 16, color: '#cbd5e1' }}>Our team is capable of providing following services</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 24 }}>
              {[
                'Web Development',
                'Digital Marketing',
                'Social Media handling',
                'Logo Making and Video Editing',
                'Youtube Channel Management',
                'Mobile App Development'
              ].map((service, idx) => (
                <div key={idx} style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
                  <div style={{ fontWeight: 600, color: '#e2e8f0' }}>{service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Freelance Career Section */}
        <section id="freelance" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Freelance Career</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 24, lineHeight: 1.8, color: '#cbd5e1' }}>
              Starting my freelancing journey during my Diploma days out of sheer passion, I've remained dedicated to
              creating web applications, mobile applications, marketing materials, and design projects. Over the years,
              I've found success in consistently delivering what my clients demand, honing my skills and expertise along
              the way. My commitment to excellence and my genuine love for what I do drive me to exceed expectations
              with each project I undertake.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 36 }}>
              <div style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 44, fontWeight: 800, color: '#60a5fa' }}>11</div>
                <div style={{ marginTop: 6, color: '#cbd5e1' }}>Happy Clients</div>
              </div>
              <div style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
                <div style={{ fontSize: 44, fontWeight: 800, color: '#60a5fa', textAlign: 'center' }}>30</div>
                <div style={{ marginTop: 6, color: '#cbd5e1', textAlign: 'center' }}>Projects</div>
                <ul style={{ marginTop: 12, color: '#94a3b8', paddingLeft: 18 }}>
                  <li>Web Apps</li>
                  <li>Android/iOS Apps</li>
                  <li>Designing</li>
                  <li>Video Editing</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
              <div style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 44, fontWeight: 800, color: '#60a5fa' }}>1</div>
                <div style={{ marginTop: 6, color: '#cbd5e1' }}>Active members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Skills</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 24, lineHeight: 1.8, color: '#cbd5e1' }}>
              I've developed various skills which helped my personal as well as professional career. Here are some
              skills I'm familiar with!
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginTop: 24 }}>
              {[
                { label: 'HTML 5', value: 100 },
                { label: 'CSS 3', value: 90 },
                { label: 'JavaScript', value: 80 },
                { label: 'Figma', value: 50 },
                { label: 'React JS', value: 70 },
                { label: 'PYTHON', value: 80 },
                { label: 'React Native', value: 70 },
                { label: 'Photoshop', value: 70 }
              ].map((skill, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#cbd5e1', fontSize: 14 }}>
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div style={{ height: 20, background: '#e5e7eb1a', borderRadius: 999 }}>
                    <div
                      style={{
                        width: `${skill.value}%`,
                        height: '100%',
                        background: '#0ea5e9',
                        borderRadius: 999
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ background: '#0b1220', color: '#e5e7eb', padding: '64px 24px' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto' }}>
            <h2 style={{ color: '#e2e8f0', fontSize: 32, margin: 0, fontWeight: 800 }}>Contact</h2>
            <div style={{ height: 4, width: 70, background: '#60a5fa', borderRadius: 999, marginTop: 12 }} />
            <p style={{ marginTop: 16, color: '#cbd5e1' }}>
              Contact me for any queries or you can write us, we will get back to you in 48 hours.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 24, marginTop: 24 }}>
              <div style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }}>
                <p><strong>Location:</strong> SDM IT, AKSHARA BOYS HOSTEL , UJIRE</p>
                <p><strong>Email:</strong> praneetjnaik@gmail.com</p>
                <p><strong>Call:</strong> +91 7975429600</p>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/+917975429600" style={{ color: '#0ea5e9', textDecoration: 'none' }}>click here</a></p>
              </div>
              <form style={{ background: '#0f172a', border: '1px solid #1f2937', borderRadius: 16, padding: 24 }} onSubmit={e => e.preventDefault()}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <input placeholder="Your Name" style={{ padding: 12, borderRadius: 8, border: '1px solid #1f2937', background: '#0b1220', color: '#e2e8f0' }} />
                  <input placeholder="Your Email" style={{ padding: 12, borderRadius: 8, border: '1px solid #1f2937', background: '#0b1220', color: '#e2e8f0' }} />
                </div>
                <input placeholder="Subject" style={{ marginTop: 12, width: '100%', padding: 12, borderRadius: 8, border: '1px solid #1f2937', background: '#0b1220', color: '#e2e8f0' }} />
                <textarea placeholder="Message" rows={8} style={{ marginTop: 12, width: '100%', padding: 12, borderRadius: 8, border: '1px solid #1f2937', background: '#0b1220', color: '#e2e8f0', resize: 'vertical' }} />
                <button type="submit" style={{ marginTop: 12, padding: '12px 16px', borderRadius: 8, border: 'none', background: '#0ea5e9', color: 'white', fontWeight: 600 }}>Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
