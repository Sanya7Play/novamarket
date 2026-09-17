import Image from "next/image";

export default function BlockPhotoProduct() {
	return (
		<div className='grid grid-cols-[repeat(2,auto)] flex-row gap-5'>
			<div className='flex flex-col justify-between items-center w-auto h-auto gap-5'>
				<Image src='/airpodsOriginal.png' alt='Airpods' width={100} height={100} className='w-auto h-auto rounded-xl border-2 border-lime-300' />
				<Image src='/airpodsOriginal.png' alt='Airpods' width={100} height={100} className='w-auto h-auto rounded-xl border-2' />
				<Image src='/airpodsOriginal.png' alt='Airpods' width={100} height={100} className='w-auto h-auto rounded-xl border-2' />
				<Image src='/airpodsOriginal.png' alt='Airpods' width={100} height={100} className='w-auto h-auto rounded-xl border-2' />
				<div className='flex flex-col items-center justify-center w-32 h-28 bg-black rounded-xl'>
					<p className='flex justify-center items-center w-auto h-auto text-white'>+3</p>
				</div>
			</div>
			<div className='flex'>
				<Image src='/airpodsOriginal.png' alt='Airpods' width={900} height={900} className='w-auto h-auto rounded-xl' />
			</div>
		</div>
	)
}