import HeaderNav from "@/components/layout/HeaderNav";
import SearchInput from "@/components/layout/SearchInput";
import HeaderButtons from "@/components/layout/HeaderButtons";

export default function Header() {
	return (
		<div className="flex flex-row items-center justify-between px-5 py-5">
			<HeaderNav/>
			<SearchInput/>
			<HeaderButtons/>
		</div>
	)
}