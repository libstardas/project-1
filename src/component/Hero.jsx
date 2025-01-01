const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOU FEEL DESERVE THE BEST ONE WE'RE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button>Category</button>
        </div>

        <div className="sopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/amazonlogo.jpg" alt="amazon-logo" />
            <img src="/images/flipkartlogo.png" alt="flipkart-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/download.jpeg" alt="hero-image" />
      </div>
    </main>
  );
};
export default HeroSection;
