import Image from "next/image";

export default function BlockPhotoProduct() {
	return (
		<div className='grid grid-cols-[100px_1fr] p-3 gap-5'>
			<div className='flex flex-col items-center w-auto justify-between'>
				<div>
					<Image
						src='/products/airpodsOriginal.png'
						alt='Airpods'
						width={100}
						height={100}
						className='w-30 h-22 2xl:w-30 2xl:h-22 xl:w-22 xl:h-20 lg:w-16 md:h-14 rounded-xl border-2 border-lime-300'
					/>
				</div>
				<div>
					<Image
					src='/products/airpodsOriginal.png'
					alt='Airpods'
					width={100}
					height={100}
					className='w-30 h-22 2xl:w-30 2xl:h-22 xl:w-22 xl:h-20 lg:w-16 md:h-14 rounded-xl border-2 border-lime-300'
				/>
				</div>
				<div>
					<Image
					src='/products/airpodsOriginal.png'
					alt='Airpods'
					width={100}
					height={100}
					className='w-30 h-22 2xl:w-30 2xl:h-22 xl:w-22 xl:h-20 lg:w-16 md:h-14 rounded-xl border-2 border-lime-300'
				/>
				</div>
				<div>
					<Image
						src='/products/airpodsOriginal.png'
						alt='Airpods'
						width={100}
						height={100}
						className='w-30 h-22 2xl:w-30 2xl:h-22 xl:w-22 xl:h-20 lg:w-16 md:h-14 rounded-xl border-2 border-lime-300'
					/>
				</div>
				<div>
					<Image
						src='/products/airpodsOriginal.png'
						alt='Airpods'
						width={100}
						height={100}
						className='w-30 h-22 2xl:w-30 2xl:h-22 xl:w-22 xl:h-20 lg:w-16 md:h-14 rounded-xl border-2 border-lime-300'
					/>
				</div>
				<div className='flex flex-col items-center justify-center bg-black rounded-xl 2xl:w-25 2xl:h-22 xl:w-22 xl:h-20 lg:w-16 md:h-14 '>
					<p className='flex justify-center items-center w-auto h-auto text-white'>+3</p>
				</div>
			</div>
			<div className='flex justify-center items-start w-30 2xl:w-185 xl:w-120 lg:w-100'>
				<Image src='/products/airpodsOriginal.png' alt='Airpods' width={720} height={720} className='w-auto 2xl:w-185 h-auto rounded-xl' />
			</div>
		</div>
	)
}