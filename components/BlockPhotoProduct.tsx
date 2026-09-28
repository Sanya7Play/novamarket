import Image from "next/image";

export default function BlockPhotoProduct() {
	return (
		<div className='grid grid-cols-[repeat(2,auto)] gap-5'>
			<div className='flex flex-col items-center w-auto gap-3'>
				<div>
					<Image 
					src='/products/airpodsOriginal.png'
					alt='Airpods' 
					width={100} 
					height={100} 
					className='lg:w-25 lg:h-22 md:w-30 md:h-30 rounded-xl border-2 border-lime-300' 
				/>
				</div>
				<div>
					<Image 
					src='/products/airpodsOriginal.png'
					alt='Airpods' 
					width={100} 
					height={100} 
					className='lg:w-25 lg:h-22 md:w-30 md:h-30 rounded-xl border-2 border-lime-300' 
				/>
				</div>
				<div>
					<Image 
					src='/products/airpodsOriginal.png'
					alt='Airpods' 
					width={100} 
					height={100} 
					className='lg:w-25 lg:h-22 md:w-80 md:h-30 rounded-xl border-2 border-lime-300' 
				/>
				</div>
				<div className='flex flex-col items-center justify-center lg:w-25 lg:h-22 bg-black rounded-xl'>
					<p className='flex justify-center items-center w-auto h-auto text-white'>+3</p>
				</div>
			</div>
			<div className='flex justify-center items-start w-60 lg:w-120 md:w-100'>
				<Image src='/products/airpodsOriginal.png' alt='Airpods' width={800} height={800} className='w-auto h-auto rounded-xl' />
			</div>
		</div>
	)
}