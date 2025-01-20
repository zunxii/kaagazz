import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Product = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const images = document.querySelectorAll('.product-image');
    images.forEach((image, index) => {
      if (index >= 2) { // Only apply to last 4 images
        const overlay = image.querySelector('.overlay');
        
        image.addEventListener('mouseenter', () => {
          gsap.to(overlay, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        image.addEventListener('mouseleave', () => {
          gsap.to(overlay, {
            y: '100%',
            duration: 0.3,
            ease: 'power2.in'
          });
        });
      }
    });

    const productCards = document.querySelectorAll('.grid > div');
    productCards.forEach((card, index) => {
      const direction = index % 2 === 0 ? -100 : 100; // Alternate left/right animations
      
      gsap.fromTo(card, 
        {
          x: direction,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top center",
            scrub: 1,
            toggleActions: "play none none reverse"
          },
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        }
      );
    });

    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-pink-100 py-20">
      <h1 className="text-6xl font-bold text-center text-[#355F9B] mb-12 px-4">Our Products</h1>
      
      <div className="bg-white max-w-7xl mx-auto p-8 rounded-lg shadow-lg">
        <div className="grid gap-12">
          
          <div className="flex gap-8">
            <div className="w-1/2">
              <div className="product-image aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Product Images</span>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center px-6">
              <h2 className="text-3xl font-bold text-[#355F9B] mb-4">32 Leaves & 32 Tips</h2>
              <p className="text-gray-600 mb-4">We offer you a perfect combination of fine quality, vegan rolling paper along with flexible filter tips. 

Our unique blend makes it a lot easier for you to roll and gives you a smooth and crisp experience every time you use it. On the other hand, our filter tips are perfectly designed in such a way that they will compliment your experience perfectly. </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-1/2 flex flex-col justify-center px-6">
              <h2 className="text-3xl font-bold text-[#355F9B] mb-4">Pre-rolled Cone</h2>
              <p className="text-gray-600 mb-4">The Kaagazz Pre-roll is a very lovingly and thoughtfully crafted product designed to enhance and simplify your life, using vegan and eco-conscious materials.

Each pre-roll is made keeping in mind the quality of our premium paper in harmony with our smooth-flowing roach, presenting you with an overall effortless experience.

The Kaagazz Pre-roll stands tall and thin. 109mm in length and the cone opening at just 11.8mm in diameter. This makes it not too airy and not too thick.

Additionally, the straw/poker inside is biodegradable reflecting our commitment to the environment.</p>
            </div>
            <div className="w-1/2">
              <div className="product-image aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Product Images</span>
              </div>
            </div>
          </div>


          <div className="flex gap-8">
            <div className="w-1/2">
              <div className="product-image aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400">Product Images</span>
                <div className="overlay absolute inset-x-0 bottom-0 h-full bg-[#355F9B] bg-opacity-80 flex items-center justify-center translate-y-full">
                  <span className="text-white text-2xl font-bold">Coming Soon</span>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center px-6">
              <h2 className="text-3xl font-bold text-[#355F9B] mb-4">32 Filter Tips</h2>
              <p className="text-gray-600 mb-4">This is more than just 32 roaches. It is a way to make yourself used to a better roll. Our filter tips are top-notch in quality and will attend to every single one of your rolling needs perfectly. 

Our filter tips are equal parts ductile and robust, making sure that not only will you be able to bend them any way you want, but their quality ensures that it sits comfortably in a thin or thick roll. </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-1/2 flex flex-col justify-center px-6">
              <h2 className="text-3xl font-bold text-[#355F9B] mb-4">Kaagazz Premium Cone</h2>
              <p className="text-gray-600 mb-4">The Premium Cone is one of our higher-end products. It is unique not just because of the premium paper, but also because of the way it is packaged. It comes in a hemp-plastic shell that is bio-degradable and reusable. 

But, what makes this product such a novelty, is the fact that it comes with a glass-filter tip, which is essentially a reusable roach. This roach can be used multiple times and saves you the hassle of rolling a roach every time. Not just that, the aforementioned eco-friendly hemp-plastic shell acts as the perfect storage unit for your roll, which you can carry anywhere. 

Now, all you gotta do is, keep changing your paper, the rest is taken care of. </p>
            </div>
            <div className="w-1/2">
              <div className="product-image aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400">Product Images</span>
                <div className="overlay absolute inset-x-0 bottom-0 h-full bg-[#355F9B] bg-opacity-80 flex items-center justify-center translate-y-full">
                  <span className="text-white text-2xl font-bold">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-1/2">
              <div className="product-image aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400">Product Images</span>
                <div className="overlay absolute inset-x-0 bottom-0 h-full bg-[#355F9B] bg-opacity-80 flex items-center justify-center translate-y-full">
                  <span className="text-white text-2xl font-bold">Coming Soon</span>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex flex-col justify-center px-6">
              <h2 className="text-3xl font-bold text-[#355F9B] mb-4">32 Leaves</h2>
              <p className="text-gray-600 mb-4">This is a bundle of 32 of Kaagazz&apos;s premium quality rolling papers. With every paper made out of an organic, slow-burning, vegan blend unlike any other. Our paper is eco-friendly and ensures an effortless roll and a sumptuous feel.

We realised that packaging is just as important to the experience as the quality of the paper so, we put a lot of thought into it. Kaagazz&apos;s premium quality packaging not only makes the paper very easily accessible but also makes sure your paper is completely wrinkle-free, which makes all the difference while rolling.</p>
            </div>
          </div>


          <div className="flex gap-8">
            <div className="w-1/2 flex flex-col justify-center px-6">
              <h2 className="text-3xl font-bold text-[#355F9B] mb-4">2 Leaves 2 Tips</h2>
              <p className="text-gray-600 mb-4">Kaagazz&apos;s 2 Leafs and 2 Tips is the best way to satisfy your rolling needs. As good as the quality of our paper and our filter tips is, what makes this product one of our best is how it can use every part of itself, including the packaging.

The 2 Leafs and 2 Tips come in a matchbox-like rolling tray. Which makes it very easy to carry around and even easier to use. But, what makes it special is the fact that the packaging can act as a rolling tray. Making it a very efficient product for your rolling needs as it can even offer you storage despite its sleek design. </p>
            </div>
            <div className="w-1/2">
              <div className="product-image aspect-square bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <span className="text-gray-400">Product Images</span>
                <div className="overlay absolute inset-x-0 bottom-0 h-full bg-[#355F9B] bg-opacity-80 flex items-center justify-center translate-y-full">
                  <span className="text-white text-2xl font-bold">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product
