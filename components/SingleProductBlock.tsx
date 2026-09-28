import BlockPhotoProduct from "@/components/BlockPhotoProduct";
import BlockInformationProduct from "@/components/BlockInformationProduct";
import BlockRatingAI from "@/components/BlockRatingAI";
import BlockReviewsUsers from "@/components/BlockReviewsUsers";

export default function SingleProductBlock(){
	return (
		<div className="flex flex-col">
			<div className='grid grid-cols-[repeat(2,auto)] px-5 gap-1'>
				<div className='flex flex-col gap-10'>
					<div className='flex flex-row gap-5 justify-between'>
						<BlockPhotoProduct/>
						<BlockInformationProduct/>
					</div>
					<div>
						<BlockReviewsUsers/>
					</div>
				</div>
				<div className='flex flex-col w-120 lg:w-90'>
					<BlockRatingAI/>
				</div>
			</div>
		</div>

	)
}