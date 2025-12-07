import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

export default function TestimonialsShowcase() {
  const testimonials = [
    {
      text: "Matrix Science Academy played a crucial role in my success. Their expert guidance and structured approach were key in my selection for IIT Mandi. I'm deeply grateful for their support & dedication. Thank you",
      name: "Dhruv Shinde",
      college: "IIT Mandi",
      exam: "IIT-JEE",
      image: null,
      instituteImage: 'https://images.unsplash.com/photo-1700982938897-08f1072f969b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      text: "I never thought I could crack NEET on my first attempt. The structured approach and constant guidance made all the difference in my preparation journey.",
      name: "Rahul Kavhale",
      college: "IIT Kharagpur",
      exam: "IIT-JEE",
      image: null,
      instituteImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop'
    },
    {
      text: "The doubt-clearing sessions and mock tests were instrumental in building my confidence. I'm grateful for the support that helped me achieve my goal.",
      name: "Maithili Sagare",
      college: "IIT Guwahati",
      exam: "IIT-JEE",
      image: null,
      instituteImage: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      text: "The faculty here transformed my understanding of engineering. Their innovative teaching methods and personal attention helped me secure admission to my dream college.",
      name: "Dhruv Unde",
      college: "NIT Trichy",
      exam: "MHT-CET",
      image: null,
      instituteImage: 'https://images.shiksha.com/mediadata/images/articles/1640753204phpKAryNC.jpeg'
    },
    {
      text: "The faculty here transformed my understanding of engineering. Their innovative teaching methods and personal attention helped me secure admission to my dream college.",
      name: "Soham Deshpande",
      college: "NIT Jamshedpur",
      exam: "MHT-CET",
      image: 'https://res.cloudinary.com/ddqgxrgnc/image/upload/v1763882946/soham1_s7aa4m.png',
      instituteImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0kvOY7H6o7X-VGA5B4yED52IVJ6fR5Qit1w&s'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState('next');
  const autoPlayRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setDirection('next');
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [testimonials.length, isAutoPlaying]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  const goToPrev = () => {
    setDirection('prev');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    pauseAutoPlay();
  };

  const goToNext = () => {
    setDirection('next');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    pauseAutoPlay();
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="bg-white py-4 sm:py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header - Outside colored section */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1a67] mb-2">
            Student Success Stories
          </h2>
          <p className="text-sm sm:text-base text-[#0a1a67]/70 max-w-2xl mx-auto">
            Hear from students who achieved their dreams with our guidance
          </p>
        </div>

        {/* Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-xl">
            <div className="relative min-h-[350px] sm:min-h-[400px]">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-out ${idx === currentIndex
                    ? 'opacity-100 translate-x-0 scale-100'
                    : idx < currentIndex
                      ? 'opacity-0 -translate-x-full scale-95'
                      : 'opacity-0 translate-x-full scale-95'
                    }`}
                >
                  <TestimonialCard testimonial={testimonial} isActive={idx === currentIndex} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#0a1a67]/10 text-[#0a1a67] rounded-full p-2 sm:p-3 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#0a1a67]/10 text-[#0a1a67] rounded-full p-2 sm:p-3 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Thumbnail Previews */}
        <div className="grid grid-cols-5 gap-2 sm:gap-3 mt-4 sm:mt-6">
          {testimonials.map((testimonial, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`
                relative rounded-lg overflow-hidden transition-all duration-300
                ${currentIndex === idx
                  ? 'ring-4 ring-[#0a1a67] scale-105 shadow-xl'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
                }
              `}
            >
              <div className="aspect-video bg-gradient-to-br from-[#B30027] to-[#8a001e] flex items-center justify-center">
                {testimonial.instituteImage ? (
                  <img
                    src={testimonial.instituteImage}
                    alt={testimonial.college}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="text-white text-xs sm:text-sm font-bold text-center p-2">
                    {/* Empty - just show gradient */}
                  </div>
                )}
              </div>
              {currentIndex === idx && (
                <div className="absolute inset-0 bg-[#0a1a67]/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 ${currentIndex === idx
                ? 'w-8 h-2 bg-[#0a1a67]'
                : 'w-2 h-2 bg-gray-300 hover:bg-[#0a1a67]/50'
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, isActive }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
      {/* Left Side - Quote Section */}
      <div className="bg-gradient-to-br from-[#B30027] to-[#8a001e] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden min-h-[300px] sm:min-h-[350px]">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border-2 sm:border-4 border-white rounded-full" />
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 w-12 sm:w-16 md:w-24 h-12 sm:h-16 md:h-24 border-2 sm:border-4 border-white rounded-full" />
        </div>

        <div className="relative z-10">
          {/* Student Name at Top */}
          <div
            className={`mb-3 sm:mb-4 transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
          >
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{testimonial.name}</h4>
            <p className="text-white/80 text-xs sm:text-sm md:text-base">Student</p>
          </div>

          {/* Quote Icon */}
          <div
            className={`mb-4 sm:mb-6 transition-all duration-700 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
          >
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white/90" />
          </div>

          {/* Quote Text */}
          <blockquote
            className={`text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-light transition-all duration-700 delay-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            "{testimonial.text}"
          </blockquote>

          {/* Decorative Line */}
          <div
            className={`mt-4 sm:mt-6 w-12 sm:w-16 h-1 bg-white/50 transition-all duration-700 delay-500 ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </div>

      {/* Right Side - Student Info */}
      <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[250px] sm:min-h-[300px]">
        {/* College Badge */}
        <div
          className={`transition-all duration-700 delay-400 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
        >
          <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
            {testimonial.college}
          </div>
        </div>

        {/* Institute Image */}
        {testimonial.instituteImage && (
          <div
            className={`my-3 sm:my-4 transition-all duration-700 delay-450 ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}
          >
            <div className="relative w-full h-24 sm:h-32 md:h-40 rounded-lg overflow-hidden shadow-md">
              <img
                src={testimonial.instituteImage}
                alt={testimonial.college}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>
        )}

        {/* Institute Name */}
        <div
          className={`my-3 sm:my-4 transition-all duration-700 delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {testimonial.college}
          </h3>
          <div className="w-10 sm:w-12 md:w-16 h-1 bg-gradient-to-r from-[#B30027] to-[#8a001e] rounded-full" />
        </div>
      </div>
    </div>
  );
}