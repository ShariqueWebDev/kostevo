import React from "react";

const TestimonialCard = () => {
  return (
    <div className="space-y-5 text-center">
      <h3 className="text-gray-700 font-normal max-sm:text-base text-2xl">
        This company has been our partner for two years. They take full
        responsibility for all assigned tasks and perform the work efficiently
        and on time. This company has competent employees, discipline and a
        strong team spirit.
      </h3>
      <div className="space-y-2 flex flex-col justify-center items-center">
        <h4 className="text-xl font-medium">Ashly William</h4>
        <p className="text-gray-400 text-sm">Business Owner</p>
        <div className="w-16 h-16 !mt-7 rounded-full overflow-hidden">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Testimonial"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
