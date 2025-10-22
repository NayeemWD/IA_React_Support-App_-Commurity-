import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerTestimonial = () => {
  const testimonials = [
    {
      text: "Many thanks for your kind and efficient service. I would like to take this opportunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.",
      name: "Cherice Justin",
      handle: "@chericeJ",
      img: "../../public/Images/CustomerTestimonial/img (1).png",
    },
    {
      text: "I would like to take this opportunity to thank SA Places for the great service rendered to us and in particular Estelle.",
      name: "Minnie Horn",
      handle: "@minnieH",
      img: "../../public/Images/CustomerTestimonial/img (2).png",
    },
    {
      text: "I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me.",
      name: "Veona Watson",
      handle: "@veonaW",
      img: "../../public/Images/CustomerTestimonial/img (3).png",
    },
    {
      text: "Many thanks for your kind and efficient service. I have used your services already and will definitely continue to recommend your services.",
      name: "Merlyn Manley",
      handle: "@merlynM",
      img: "../../public/Images/CustomerTestimonial/img (4).png",
    },
    {
      text: "Thank you for all your help. Your service was excellent and very fast. The online booking and follow-up were highly efficient.The online booking and follow-up were highly efficient.",
      name: "Cherice Justin",
      handle: "@chericeJ",
      img: "../../public/Images/CustomerTestimonial/img.png",
    },
    {
      text: "I would like to take this opportunity to thank SA Places for the great service rendered to us and in particular Estelle.",
      name: "Minnie Horn",
      handle: "@minnieH",
      img: "../../public/Images/CustomerTestimonial/img (4).png",
    },
    {
      text: "I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I  to book through an agency instead of directly. Thank you",
      handle: "@veonaW",
      img: "../../public/Images/CustomerTestimonial/img (6).png",
    },
    {
      text: "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tey quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend",
      name: "Merlyn Manley",
      handle: "@merlynM",
      img: "../../public/Images/CustomerTestimonial/img (7).png",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //     },
    //   },
    // ],
  };

  return (
    <section className="py-16 bg-[#fdfcfb]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">What clients say about us</h2>
          <p className="text-gray-500">Customer testimonials</p>
        </div>

        <Slider {...settings} className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.handle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerTestimonial;
