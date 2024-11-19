const About = () => {
    return (
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div
          className="text-white py-16 relative"
          style={{
            backgroundImage: 'url("https://i.pinimg.com/736x/d9/98/d4/d998d4a1b942a451c52af088b101803e.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '60vh',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div> 
          <div className="container mx-auto px-6 text-center relative z-10">
            <small className="text-sm uppercase tracking-widest">Welcome to Vetty Stores!</small>
            <h1 className="text-4xl font-bold mt-4">WE AIM TO MAKE A DIFFERENCE</h1>
            <p className="mt-4 text-lg">
            We strive to enhance the lives and bonds between pets and their people.
            Our goal is to be your trusted local, neighborhood pet store, because after all, we speak pet!
            </p>
          </div>
        </div>
  
        {/* About Section */}
        <div className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-semibold text-center mb-8">About Vetty Stores</h2>
          <p className="text-lg text-gray-700 mb-12 text-center">
          We’re here to stick by your side through the highs, lows and in-betweens of pet parenthood, with everything you and your pet need for a happy and healthy life. At Vetty, our mission is to be the most trusted and convenient destination for pet parents and partners, everywhere.
          At Vetty, pets are the center of our universe. We wake up excited to find ways to make them happy and to make pet parenting easier for you.

We create products they’ll love, find and offer trusted brands you’ll feel good about and deliver it all right to your door. That means less time at the store and more time giving belly rubs.

Happy customers are always our #1 priority. We’ve even expanded to serve Canadian pet parents in Ontario, with more regions coming soon. Pets are family and when you shop with Vetty, you become a part of ours.
          We strive to enhance the lives and bonds between pets and their people.
          Our goal is to be your trusted local, neighborhood pet store, because after all, we speak pet!
          </p>
  
          {/* Services Section */}
          <h3 className="text-2xl font-semibold mt-12 mb-6">What We Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Veterinary services</h4>
              <p className="text-gray-700">
              We are committed to sustainabilty every step of the way.
              </p>
            </div>
            {/* Repeat service blocks */}
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Food safety and inspection</h4>
              <p className="text-gray-700">
              Our all-natural products keep your pet’s wagging, pouncing, and playing from their early days to their senior years.
              </p>
            </div>
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Food-animal veterinarians</h4>
              <p className="text-gray-700">
              We work closely with our holistic veterinarian, Dr. Eugine, to formulate pet products that support full-body wellness.
               We use all-natural, human-grade, sustainably-sourced and certified ingredients that pet parents can trust.
              </p>
            </div>
          </div>
  
          {/* Values Section */}
          <h3 className="text-2xl font-semibold mt-12 mb-6">Our Code Of Ethics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Honesty</h4>
              <p className="text-gray-700">
              At Vetty, we are committed to best helping pet parents give their pets the quality of life they deserve.
               This can only be achieved through the honest and ethical efforts of our partners. Vetty Code of Ethics & Conduct serves as an important guide to inform all Petco partners of their moral, ethical and legal obligations.
              </p>
            </div>
            {/* Repeat value blocks */}
            <div className="bg-blue-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Openness</h4>
              <p className="text-gray-700">
              We believe in transparent processes and top quality ingredients.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">Integrity</h4>
              <p className="text-gray-700">
              We believe in transparent processes and top quality ingredients.
              </p>
            </div>
          </div>
  
          {/* Experts Section */}
          <h3 className="text-2xl font-semibold mt-12 mb-6">Some of Our Experts</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://cdn-fsly.yottaa.net/630e0c4cd931406b4a3cafd4/www.petsupermarket.com/v~4b.40/dw/image/v2/BGTK_PRD/on/demandware.static/-/Library-Sites-PetSupermarketLibrary/default/dwcc618b29/2023/October/ps-dogHug.png?yocs=1E_1J_"
                alt="Degrace Benga"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">Degrace Benga</h4>
              <p className="text-gray-700">Veterinary specialist</p>
            </div>
            {/* Repeat expert blocks */}
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Eugine Agolla"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">Eugine Agolla</h4>
              <p className="text-gray-700">Food-animal veterinarian</p>
            </div>
            <div className="text-center">
              <img
                src="https://image.chewy.com/catalog/cms/images/Allen_H._SX320__V1714435793_.jpeg"
                alt="Alexander Karanja"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">Alexander Karanja</h4>
              <p className="text-gray-700">Food safety and inspection veterinarian</p>
            </div>
            <div className="text-center">
              <img
                src="https://image.chewy.com/catalog/cms/images/Sumit._SX320__V1714435799_.jpeg"
                alt="RickFalton Odhiambo"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">RickFalton Odhiambo</h4>
              <p className="text-gray-700">Food safety and inspection veterinarian</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Methodius Pkemoi"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">Methodius Pkemoi</h4>
              <p className="text-gray-700">Food safety and inspection veterinarian</p>
            </div>
            <div className="text-center">
              <img
                src="https://image.chewy.com/catalog/cms/images/David._SX320__V1714435793_.jpeg"
                alt="Albert Byrone"
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">Albert Byrone</h4>
              <p className="text-gray-700">CEO, Vetty</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  