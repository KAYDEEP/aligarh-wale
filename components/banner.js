export const Banner = (props) => {
	const {title, desc , btnText,colorCls,img, slug } = props;
	return (

		// <div className={`relative `}>
			<div className={`${colorCls} px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20`}>
				<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
					<div className="flex flex-col mb-16 sm:text-center sm:mb-0">
						<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
							<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
								{title}
							</h2>
							<p className="text-base text-indigo-100 md:text-lg">
							{desc}
							</p>
						</div>
						<div>
							<a
								href={`${slug}`}
								className="inline-flex items-center justify-center h-12 px-6 bg-gray-100 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
							>
								{btnText}
							</a>
						</div>
					</div>
				</div>
			</div>
		// </div>
	);
};