import Image from "next/image";

export type ContactButtonType = {
	imgSrc: string;
	text: string;
};

export const ContactButton = ({ imgSrc, text }: ContactButtonType) => {
	return (
		<div className="flex items-center h-10 w-30 rounded-md border-2 border-blue-500 text-blue-500 group hover:border-cyan-500 hover:text-cyan-500 font-medium p-2">
			<Image
				alt={text}
				src={imgSrc}
				className="group-hover:brightness-110"
				width={36}
				height={36}
			/>
			<span>{` ${text}`}</span>
		</div>
	);
};
