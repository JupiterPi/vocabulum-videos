import {AbsoluteFill, Img, Sequence, useCurrentFrame, useVideoConfig} from "remotion";
import {Title} from "./Title";
import "./font.css";

export const VerticalVideo: React.FC<{
	titleText: string;
	pictureLink: string;
}> = ({titleText, pictureLink}) => {
	return (
		<AbsoluteFill style={{
			backgroundColor: "white"
		}}>

			<Img src={pictureLink} />

			<Sequence from={30}>
				<AbsoluteFill style={{
					justifyContent: "center"
				}}>
					<Title text={titleText} transitionDuration={50} fontFamily="Playfair Display" />
				</AbsoluteFill>
			</Sequence>

		</AbsoluteFill>
	);
};
