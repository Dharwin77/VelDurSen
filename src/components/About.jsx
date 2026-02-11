import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Veldursen</h2>
          <p>
            Veldursen is a forward-thinking software development company dedicated to creating innovative, 
            scalable, and high-performance digital solutions. We combine cutting-edge technology with 
            creative problem-solving to help businesses thrive in the digital age.
          </p>
          
          <div className="about-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Expert Developers</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="about-features">
          <h3>Why Choose Veldursen?</h3>
          <div className="features-list">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Technical Excellence</h4>
                <p>State-of-the-art technology stack and best practices</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Agile & Flexible</h4>
                <p>Quick adaptation to changing requirements and markets</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Dedicated Support</h4>
                <p>24/7 assistance and ongoing maintenance</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Cost Efficient</h4>
                <p>Optimized solutions that deliver maximum ROI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
