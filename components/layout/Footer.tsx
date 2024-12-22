<footer className="bg-gray-100 text-gray-700 py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Grid Layout -->
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Company Section -->
      <div>
        <h2 className="font-semibold text-lg mb-4">About Us</h2>
        <p className="text-sm">
          Learn more about our mission, values, and the story behind our platform. 
        </p>
      </div>
      
      <!-- Links Section -->
      <div>
        <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
        <ul className="space-y-2">
          <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
          <li><a href="/faq" className="hover:underline">FAQ</a></li>
          <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        </ul>
      </div>
      
      <!-- Social Media Section -->
      <div>
        <h2 className="font-semibold text-lg mb-4">Follow Us</h2>
        <ul className="flex space-x-4">
          <li>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <!-- Facebook Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.992 3.657 9.128 8.438 9.878V14.89h-2.54v-2.89h2.54V10.34c0-2.511 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.243 0-1.63.772-1.63 1.563v1.862h2.773l-.443 2.89h-2.33v7.036C18.343 21.128 22 16.992 22 12z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <!-- Twitter Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 19c9 0 14-7.5 14-14v-.64A9.936 9.936 0 0024 3.4a9.6 9.6 0 01-2.828.794A4.936 4.936 0 0023.337 1c-1.088.646-2.292 1.117-3.567 1.374a4.924 4.924 0 00-8.38 4.486A13.978 13.978 0 011.675.898a4.935 4.935 0 001.526 6.574 4.92 4.92 0 01-2.228-.616c-.053 2.281 1.582 4.431 3.946 4.907a4.936 4.936 0 01-2.224.084 4.927 4.927 0 004.6 3.416 9.874 9.874 0 01-6.102 2.105c-.395 0-.786-.023-1.175-.069A13.94 13.94 0 008 19z"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram" className="hover:text-pink-600">
              <!-- Instagram Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2c-2.757 0-5 2.243-5 5v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10.5 1c.828 0 1.5.672 1.5 1.5S18.328 6 17.5 6 16 5.328 16 4.5 16.672 3 17.5 3zM12 8.5c1.932 0 3.5 1.568 3.5 3.5S13.932 15.5 12 15.5 8.5 13.932 8.5 12 10.068 8.5 12 8.5zm0 1.5a2 2 0 100 4 2 2 0 000-4zm5 9H7c-1.654 0-3-1.346-3-3V9h2.27a7.273 7.273 0 00-.217 2c0 3.86 3.14 7 7 7s7-3.14 7-7c0-.679-.077-1.34-.217-2H20v6c0 1.654-1.346 3-3 3z"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
      
      <!-- Newsletter Section -->
      <div>
        <h2 className="font-semibold text-lg mb-4">Stay Updated</h2>
        <form action="#" method="POST">
          <label for="email" className="sr-only">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            type="submit"
            className="mt-3 w-full px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Bottom Section -->
    <div className="mt-8 border-t border-gray-300 pt-6 text-center text-sm">
      <p>© 2024 YourCompany. All rights reserved.</p>
    </div>
  </div>
</footer>
