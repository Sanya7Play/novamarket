import BlockPhotoProduct from "@/components/BlockPhotoProduct";
import BlockInformationProduct from "@/components/BlockInformationProduct";
import BlockRatingAI from "@/components/BlockRatingAI";
import BlockReviewsUsers from "@/components/BlockReviewsUsers";
import RecommendationBlockForUser from "@/components/RecommendationBlockForUser";

export default function SingleProductBlock(){
	return (
		<div className="flex flex-col max-w-[1800px] mx-auto">
			<div className='grid grid-cols-[repeat(2,auto)] lg:grid-cols-[minmax(0,2fr)_360px] px-5 gap-1'>
				<div className='flex flex-col gap-10'>
					<div className='flex flex-row gap-5 justify-between'>
						<BlockPhotoProduct/>
						<BlockInformationProduct/>
					</div>
					<div>
						<RecommendationBlockForUser/>
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