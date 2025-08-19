export default function Contact() {
  return (
    <section className="stack">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you. Reach out for partnerships, volunteering, or any queries.</p>

      <div className="contact-grid">
        <form
          className="card form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! This demo form does not send yet.");
          }}
        >
          <label>
            Your Name
            <input type="text" name="name" placeholder="Enter your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="Enter your email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="How can we help?" required />
          </label>
          <button className="btn" type="submit">Send Message</button>
        </form>

        <div className="card contact-info">
          <h3>Get in touch</h3>
          <p><strong>Email:</strong> tusharpareekvlogs.business@gmail.com</p>
          <p><strong>Phone:</strong> +91 7014268552</p>
          <p><strong>Address:</strong> DilSe NGO Gandhi Nagar Jaipur, Rajasthan, India 302015</p>
          <p><strong>Hours:</strong> Mon–Sat, 10:00–18:00</p>
        </div>
      </div>
    </section>
  );
}
