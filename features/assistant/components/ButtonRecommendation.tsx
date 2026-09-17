import {buttonRecommendation} from "@/types";
import {Button} from "@/components/ui/button";
export default function ButtonRecommendation(){
	return(
		<div className='flex flex-row gap-2 w-full'>
			{buttonRecommendation.map((item) => (
				<Button
					className='text-sm rounded-xl'
					variant='outline'
					key={item.id}
				>
					{item.nameButton}
				</Button>
			))}
		</div>
	)
}