import React from 'react';

function Contact() {
  return (
    <main className="contact-page max-w-50rem mx-auto px-5 py-20">
      <section className="contact">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-700">Request Assistance</h2>
        <div className="flex justify-center">
          <form className="flex flex-wrap justify-center max-w-4xl p-8 bg-white rounded shadow-xl">
            <label htmlFor="name" className="block w-full mb-2 font-bold text-base md:text-lg text-left text-gray-600">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required className="w-full py-2 px-4 rounded mb-5 text-base md:text-lg" />

            <label htmlFor="email" className="block w-full mb-2 font-bold text-base md:text-lg text-left text-gray-600">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required className="w-full py-2 px-4 rounded mb-5 text-base md:text-lg" />

            <label htmlFor="phone" className="block w-full mb-2 font-bold text-base md:text-lg text-left text-gray-600">Phone</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required className="w-full py-2 px-4 rounded mb-5 text-base md:text-lg" />

            <label htmlFor="message" className="block w-full mb-2 font-bold text-base md:text-lg text-left text-gray-600">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message" required className="w-full py-2 px-4 rounded mb-5 text-base md:text-lg"></textarea>

            <button type="submit" className="bg-gray-700 text-white border-none py-2 px-8 rounded text-lg cursor-pointer transition duration-300 hover:bg-gray-800">Send</button>
          </form>
        </div>

        <div className="contact-info text-center mt-10">
          <h3 className="text-2xl mb-5">Contact Information</h3>
          <p className="text-lg mb-5">Feel free to contact us with any questions or concerns. Our support team is available 24/7.</p>
          <ul className="list-none m-0 p-0">
            <li className="mb-2 text-lg"><strong>Phone:</strong> +91 9188777532</li>
            <li className="mb-2 text-lg"><strong>Email:</strong> ybro.support@gmail.com</li>
            <li className="mb-2 text-lg"><strong>Address:</strong> Park Tower, Hollywood, LA</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Contact;
