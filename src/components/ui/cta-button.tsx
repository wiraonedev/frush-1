import whatsapp from "@/assets/images/whatsapp.png";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const CtaButton = ({
	className,
	message,
	children,
	style,
}: {
	className?: string | string[];
	message?: string;
	children?: ReactNode;
	style?: React.CSSProperties;
}) => {
	const phoneNumber = "6288987135615"; // Ganti dengan nomor kamu
	const defaultMessage =
		"Halo Admin, saya ingin memesan. Mohon informasi pricelist dan ketersediaan produknya.";
	// Format link wa.me
	const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || defaultMessage)}`;
	return (
		<div className={cn("relative", className)} style={style}>
			<a href={waLink} target="_blank" rel="noopener noreferrer">
				{children || (
					<img src={whatsapp} alt="WhatsApp" className="w-12 h-12" />
				)}
			</a>
		</div>
	);
};
export default CtaButton;
