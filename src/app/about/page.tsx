const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          About TravelNest
        </h1>

        <div className="prose prose-lg mx-auto">
          <p className="text-xl text-gray-600 mb-6 text-center">
            Your trusted companion for discovering and booking amazing travel
            experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To make travel planning effortless and enjoyable by providing
                comprehensive booking solutions for hotels, transportation, and
                activities all in one place.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Choose Us
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Best price guarantee</li>
                <li>• 24/7 customer support</li>
                <li>• Instant booking confirmation</li>
                <li>• Secure payment processing</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 text-center">
              Join millions of travelers who trust TravelNest for their
              adventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
