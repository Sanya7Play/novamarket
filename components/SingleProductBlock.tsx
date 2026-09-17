import BlockPhotoProduct from "@/components/BlockPhotoProduct";
import BlockInformationProduct from "@/components/BlockInformationProduct";
import BlockRatingAI from "@/components/BlockRatingAI";
import BlockReviewsUsers from "@/components/BlockReviewsUsers";

export default function SingleProductBlock(){
	return (
		<div className="flex flex-col">
			<div className='grid grid-cols-[1fr_400px] px-5'>
				<div className='flex flex-col gap-10'>
					<div className='flex flex-row gap-5'>
						<BlockPhotoProduct/>
						<BlockInformationProduct/>
					</div>
					<div>
						<BlockReviewsUsers/>
					</div>
				</div>
				<div className='flex flex-col'>
					<BlockRatingAI/>
				</div>
			</div>
		</div>

	)
}