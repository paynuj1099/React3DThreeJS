import { Suspense, useState, useEffect } from "react";
import Scene from "./components/Scene";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="app-container">
      {/* Hero Section */}
      <section className={`hero ${isLoaded ? "loaded" : ""}`}>
        <div className="hero-content">
          <div className="text-section">
            <div className="badge">
              <span className="badge-dot"></span>
              NEW COLLECTION 2025
            </div>
            <h1 className="hero-title">
              Step Into The
              <span className="gradient-text"> Future</span>
            </h1>
            <p className="hero-description">
              Experience the perfect blend of cutting-edge design and unmatched
              comfort. Our latest collection redefines what footwear can be.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                Explore Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="btn btn-secondary">
                Watch Video
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </button>
            </div>
            <div className="stats">
              <div className="stat-item">
                <div className="stat-number">50K+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">200+</div>
                <div className="stat-label">Premium Styles</div>
              </div>
            </div>
          </div>

          <div className="canvas-section">
            <div className="canvas-wrapper">
              <Suspense
                fallback={
                  <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Loading 3D Experience...</p>
                  </div>
                }
              >
                <Scene />
              </Suspense>
            </div>
            <div className="canvas-overlay">
              <div className="tip">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
                Drag to rotate • Scroll to zoom
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>Engineered for speed and agility</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">💎</div>
          <h3>Premium Quality</h3>
          <p>Crafted with finest materials</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌟</div>
          <h3>Iconic Design</h3>
          <p>Turn heads wherever you go</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌍</div>
          <h3>Eco-Friendly</h3>
          <p>Sustainable production methods</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <h3 className="footer-title">Built With</h3>
          <div className="tech-stack">
            <div className="tech-item">
              <i className="devicon-react-original colored tech-icon"></i>
              <span>React</span>
            </div>
            <div className="tech-item">
              <i className="devicon-typescript-plain colored tech-icon"></i>
              <span>TypeScript</span>
            </div>
            <div className="tech-item">
              <i className="devicon-threejs-original tech-icon"></i>
              <span>Three.js</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className="tech-icon" width={40} />
              <span>Vite</span>
            </div>
            <div className="tech-item">
              <i className="devicon-vercel-original tech-icon"></i>
              <span>Vercel</span>
            </div>
          </div>
          <p className="footer-credit">
            © 2025 Rolando Remolacio. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Background Elements */}
      <div className="bg-blur blur-1"></div>
      <div className="bg-blur blur-2"></div>
      <div className="bg-blur blur-3"></div>
    </div>
  );
}

export default App;
