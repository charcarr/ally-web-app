import { FC, ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { NavItem } from "./DesktopNav";
import AllyButton from "../AllyButton";
import { SxProps, Typography } from "@mui/material";
import { scrollToHelpRightNow } from "@/utils/helpers";
import { NavItemDropdown } from "./NavItemDropdown";

const MobileMenuItem = ({
	children,
	sx,
}: {
	children: ReactNode;
	sx?: SxProps;
}) => {
	return (
		<Box
			sx={{
				backgroundColor: "PrimaryBlue",
				height: "48px",
				width: "100%",
				display: "flex",
				alignItems: "stretch",
				justifyContent: "center",
				px: { xs: 3, sm: 6 },
				a: {
					width: "100%",
					height: "100%",
					alignItems: "center",
					justifyContent: "center",
					display: "flex",
				},
				...sx,
			}}
		>
			{children}
		</Box>
	);
};

const MobileNav: FC = () => {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<>
			<AppBar
				component="div"
				color="transparent"
				sx={{
					boxShadow: "none",
				}}
			>
				<Box
					display={`flex`}
					justifyContent={`space-between`}
					alignItems={`center`}
					height={`72px`}
					px={{
						xs: 3,
						sm: 3,
					}}
					sx={{ backgroundColor: open ? "PrimaryBlue" : "transparent" }}
				>
					<Link href="/">
						<Image
							src={"/images/ally-exed-logo.png"}
							width={96}
							height={40}
							alt="Ally exed logo"
						/>
					</Link>

					{open ? (
						<IconButton onClick={handleDrawerClose} sx={{ mr: -1 }}>
							<CloseIcon sx={{ color: `Grey900` }} />
						</IconButton>
					) : (
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							sx={{ mr: -1 }}
						>
							<MenuIcon />
						</IconButton>
					)}
				</Box>
			</AppBar>
			<Drawer
				variant="persistent"
				anchor="top"
				open={open}
				PaperProps={{
					sx: {
						marginTop: "64px",
						pt: 2,
						pb: 4,
						backgroundColor: "PrimaryBlue",
						height: "100vh",
						boxShadow:
							"0px 2px 4px -4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px -10px rgba(0, 0, 0, 0.12)",
					},
				}}
				SlideProps={{
					timeout: 0,
				}}
			>
				<MobileMenuItem>
					<NavItem
						href={`/parents-and-educators`}
						text={`PARENTS & EDUCATORS`}
						onClick={handleDrawerClose}
					/>
				</MobileMenuItem>
				<MobileMenuItem>
					<NavItem
						href={`/about`}
						text={`ABOUT US`}
						onClick={handleDrawerClose}
					/>
				</MobileMenuItem>
				<MobileMenuItem sx={{ pt: 1 }}>
					<AllyButton
						onClick={() => {
							handleDrawerClose();
							scrollToHelpRightNow();
						}}
						sx={{ backgroundColor: "transparent" }}
					>
						<Typography variant="button" color={`White`}>
							GET HELP NOW
						</Typography>
					</AllyButton>
				</MobileMenuItem>
				<MobileMenuItem
					sx={{ minHeight: "72px", pt: 2, maxHeight: "fit-content" }}
				>
					<NavItemDropdown
						title="CHOOSE YOUR GRADE"
						handleDrawerClose={handleDrawerClose}
					/>
				</MobileMenuItem>
			</Drawer>
		</>
	);
};

export default MobileNav;
