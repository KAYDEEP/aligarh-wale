export const Hero = () => {
    return (
      <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-12 sm:text-center sm:mb-0">
            <a href="/" className="mb-4 sm:mx-auto">
              {/* <div className="flex items-center justify-center h-14"> */}
            <img src='/logo.png' />
              {/* </div> */}
            </a>
            <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-8">
              {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                quick, brown fox jumps over a lazy dog
              </h2> */}
              <p className="text-base text-gray-700 md:text-lg px-4">
             Aligarh.com is the fastest growing Aligarh city guide, providing experts recommendations of what’s best in Aligarh city.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };