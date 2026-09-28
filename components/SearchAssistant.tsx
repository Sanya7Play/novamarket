import {ShoppingCart} from "lucide-react";
import Image from "next/image";
import SearchAssistantInput from "@/features/assistant/components/SearchAssistantInput";
import ButtonRecommendation from "@/features/assistant/components/ButtonRecommendation";

export default function SearchAssistant() {
	return (
		<div className='flex flex-col gap-4 px-8'>
			<div className='absolute top-10 z-[-1] right-5 flex p-6'>
				<Image src='/brand/fon.png' alt='FonAvatar' width={1200} height={1200} className='relative w-auto h-auto' loading='eager' />
			</div>
			<div className='flex flex-row items-center gap-3 py-2'>
				<div className='flex flex-row text-xs bg-lime-300 text-muted-foreground p-1 px-1 rounded-full font-bold'>
					<ShoppingCart size={14}/>
				</div>
				<p className='text-lime-600 font-semibold'>Умные рекомендации</p>
			</div>
			<h2 className='text-5xl font-bold w-auto'>Покупки,<br/> персонализированные под вас.</h2>
			<p className='text-base w-auto text-muted-foreground'>
				Откройте для себя товары, подобранные на основе ваших <br/> интересов, привычек и образе жизни.
			</p>
			<SearchAssistantInput/>
			<ButtonRecommendation/>
		</div>
	)
}