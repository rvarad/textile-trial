"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Sidebar() {
	const pathname = usePathname()

	const style = "font-extrabold"
	return (
		<div>
			<Link
				href="/"
				className={pathname === "/" ? style : ""}
			>
				Dashboard
			</Link>
			<Link
				href={"/folders"}
				className={pathname === `${/^\/folders\/.+$/}` ? style : ""}
			>
				Folders
			</Link>
			<Link
				href={"/weavesettings"}
				className={pathname === `${/^\/weavesettings\/.+$/}` ? style : ""}
			>
				Weave Settings
			</Link>
			<Link
				href={"/yarncounts"}
				className={pathname === `${/^\/yarncounts\/.+$/}` ? style : ""}
			>
				Yarn Rules
			</Link>
		</div>
	)
}

export default Sidebar
