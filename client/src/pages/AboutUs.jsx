import React from "react";


const styles = {
    
    text: {
      fontSize: '20px',
      padding: '20px',
      color: 'white'   
    },
    textbox: {
      padding: '20px',
      display:'flex', 
      flexWrap: 'wrap', 
      flexDirection: 'column'
    }, 
    
  }

export default function AboutUs() {
    return (
    <div style={styles.textbox}>
    <div style={styles.text}>
      <h2>Welcome to [Your Company Name]</h2>

<div>
    At [Your Company Name], we believe that fashion is more than just clothing—it’s a way to express yourself and your unique style to the world. Since our founding in [Year Founded], we have been dedicated to curating a collection of clothing that not only speaks to current trends but also celebrates timeless elegance and quality craftsmanship.
</div>
<h2>Our Story</h2>

<div>
[Your Company Name] started with a simple yet ambitious goal: to redefine the way people experience fashion. What began as a passion project by [Founder's Name] has grown into a thriving online destination for fashion-forward individuals.

Driven by our love for style and our commitment to exceptional customer service, we have expanded our offerings to include a wide range of apparel for men and women. From casual wear to formal attire, each piece in our collection is carefully selected to ensure the perfect blend of comfort, durability, and aesthetic appeal.
</div>

<h2>Our Mission</h2>

<div>
At [Your Company Name], our mission is to empower individuals to embrace their personal style with confidence. We strive to provide our customers with not only fashionable clothing but also a seamless shopping experience. Whether you’re looking for the latest trends or timeless classics, we are here to help you find exactly what you need.
</div>

<h3>Why Choose Us?</h3>

<div>
Quality: We partner with trusted suppliers and designers to deliver clothing that meets the highest standards of quality and craftsmanship.

Style: Our team of fashion enthusiasts is constantly on the lookout for the latest trends and timeless pieces to keep your wardrobe fresh and exciting.

Service: We prioritize your satisfaction above all else. Our dedicated customer support team is always available to assist you with any questions or concerns.
</div>

<h3>Join Our Community</h3>

<div>
We invite you to explore our collection and discover why [Your Company Name] is more than just a clothing store—it’s a lifestyle. Follow us on social media and sign up for our newsletter to stay up-to-date with the latest arrivals, promotions, and style tips.
</div>

<h5>Thank you for choosing [Your Company Name]. We look forward to helping you express yourself through fashion.</h5>
    </div>
    </div>
)
} 