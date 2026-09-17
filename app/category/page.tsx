import BlockCategoryPage from "@/components/BlockCategoryPage";
import WindowAssistant from "@/features/assistant/components/WindowAssistant";

export default function CategoryPage(){
	return (
		<div className='flex flex-row justify-between gap-2 px-10 pt-2'>
			<BlockCategoryPage/>
			<WindowAssistant/>
		</div>
	)
}