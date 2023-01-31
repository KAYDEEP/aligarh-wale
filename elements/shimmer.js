import React from 'react'

export default function Shimmer() {
	return (
		Array(5).fill().map(()=>(
			<div class="flex flex-col flex-1 gap-3 justify-center items-center">
			<div class="w-full bg-gray-200 animate-pulse h-14 rounded-2xl">
			</div>
			<div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
			</div>
			<div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
			</div>
			<div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
			</div>
			<div class="w-full h-3 bg-gray-200 animate-pulse rounded-2xl">
			</div>
	</div>
		))
)
}
