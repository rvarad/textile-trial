"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Sidebar() {
	const pathname = usePathname()

	const style = "font-extrabold"
	return (
		<div className="sidebar">
			<Link
				href="/"
				// className={pathname === "/" ? "current nav-elements" : "nav-elements"}
				className={`nav-elements ${pathname === "/" ? "current" : ""}`}
			>
				Dashboard
			</Link>
			<Link
				href={"/folders"}
				// className={
				// 	pathname === `${/^\/folders\/.+$/}`
				// 	? "current nav-elements"
				// 		: "nav-elements"
				// 	}
				className={`nav-elements ${pathname === "/folders" ? "current" : ""}`}
			>
				Folders
			</Link>
			<Link
				href={"/weavesettings"}
				className={`nav-elements ${
					pathname === "/weavesettings" ? "current" : ""
				}`}
			>
				Weave Settings
			</Link>
			<Link
				href={"/yarncounts"}
				className={
					pathname === "/yarncounts" ? "current nav-elements" : "nav-elements"
				}
			>
				Yarn Rules
			</Link>
		</div>
	)
}

export default Sidebar
