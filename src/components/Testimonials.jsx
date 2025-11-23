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
        image: null,
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
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students who achieved their dreams with our guidance
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Main Slider */}
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="relative min-h-[450px]">
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-out ${
                    idx === currentIndex
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#004c8f]/10 text-[#004c8f] rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#004c8f]/10 text-[#004c8f] rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-12 h-3 bg-[#004c8f]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-[#004c8f]/50'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-6 text-gray-600 font-medium">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, isActive }) {
  return (
    <div className="grid md:grid-cols-2 h-full">
      {/* Left Side - Quote Section */}
      <div className="bg-gradient-to-br from-red-500 to-red-600 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 right-8 w-32 h-32 border-4 border-white rounded-full" />
          <div className="absolute bottom-8 left-8 w-24 h-24 border-4 border-white rounded-full" />
        </div>

        <div className="relative z-10">
          {/* Quote Icon */}
          <div
            className={`mb-6 transition-all duration-700 delay-200 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <Quote className="w-12 h-12 md:w-14 md:h-14 text-white/90" />
          </div>

          {/* Quote Text */}
          <blockquote
            className={`text-white text-lg md:text-xl lg:text-2xl leading-relaxed font-light transition-all duration-700 delay-300 ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            "{testimonial.text}"
          </blockquote>

          {/* Decorative Line */}
          <div
            className={`mt-6 w-16 h-1 bg-white/50 transition-all duration-700 delay-500 ${
              isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </div>

      {/* Right Side - Student Info */}
      <div className="bg-white p-8 md:p-10 flex flex-col justify-between">
        {/* College Badge */}
        <div
          className={`transition-all duration-700 delay-400 ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-semibold shadow-lg">
            {testimonial.exam}
          </div>
        </div>

        {/* Institute Image */}
        {testimonial.instituteImage && (
          <div
            className={`my-4 transition-all duration-700 delay-450 ${
              isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            <div className="relative w-full h-32 md:h-40 rounded-lg overflow-hidden shadow-md">
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
          className={`my-4 transition-all duration-700 delay-500 ${
            isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            {testimonial.college}
          </h3>
          <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full" />
        </div>

        {/* Student Info */}
        <div
          className={`flex items-center gap-4 md:gap-6 transition-all duration-700 delay-600 ${
            isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}
        >
          {/* Avatar */}
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
              {testimonial.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-3 md:border-4 border-white" />
          </div>

          {/* Name and Role */}
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-600 text-base md:text-lg">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
}