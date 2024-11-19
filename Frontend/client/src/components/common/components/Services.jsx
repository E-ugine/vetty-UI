function Services() {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
          <p className="text-gray-600 mb-10">
            Providing everything your furry friends need for a happy and healthy life.
            Expert grooming to keep your pets looking their best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-blue-500 text-4xl mb-4">
                <i className="fas fa-paw"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Pet Grooming</h3>
              <p className="text-gray-600">
                Expert grooming to keep your pets looking their best.
                Expert grooming to keep your pets looking their best
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-green-500 text-4xl mb-4">
                <i className="fas fa-bone"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Pet Food</h3>
              <p className="text-gray-600">
                High-quality, nutritious food for your beloved pets.
                Expert grooming to keep your pets looking their best.
                Expert grooming to keep your pets looking their best
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-yellow-500 text-4xl mb-4">
                <i className="fas fa-stethoscope"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Vet Consultation</h3>
              <p className="text-gray-600">
                Professional health advice and check-ups for your pets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
