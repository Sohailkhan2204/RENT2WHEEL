import React from 'react';

const Banner = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-blue-primary to-blue-light rounded-2xl p-8 md:p-16 text-white overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold font-outfit mb-4">
              Do You Own a Luxury Car?
            </h2>
            <p className="font-outfit text-base leading-relaxed mb-8">
              Monetize your vehicle effortlessly by listing it on CarRental. We take care of insurance, driver verification, and secure payments — so you can earn passive income, stress-free.
            </p>
            <button className="bg-white text-blue-secondary font-medium font-outfit px-8 py-3 rounded-lg hover:bg-slate-100 transition-colors">
              List your car
            </button>
          </div>
          <img 
            src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/78c5/60dd/367f9b776e70da465aff5e9edd19bf9b?Expires=1762732800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MDh49Es4YaMDZ1gonNpTpuV1M2qPGl06dCs2GO-BWvGHISDOMzrf0FN-Bihvdx-j-esU30EftJWprp4p4zFiZLtBfkPb6aIVdcbm-uEmIidGQltXsKmoLinCo6ld7PPpr9J70VxUHXRGmY~17OSXfUFSCnMsXusn0YqcgCv7E-mx0c~NVqO~DXn4K-ZQU3uVYg4-KXL~EKQqJWR6H9WIyAr9wq1pVST9n0vV70L0r5H4~zurnFrCeiJTlHliwEZEdZ5El53NiV41vegoRwjhj0qbiASAaoMSKhE9z8DaLOXuFFA4b6LaRXA1MU-aLB6zM0jeV5EbjDmc4PCYtLGisA__" 
            alt="White luxury car" 
            className="absolute right-0 bottom-0 w-1/2 md:w-2/5 h-auto object-contain z-0 hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
