import {AbsoluteFill, Img, Sequence} from "remotion";
import {Title} from "./Title";
import "../font.css";
import {BackgroundImage, ForegroundImage} from "./image";

export const VerticalVideo: React.FC<{
	titleText: string;
	pictureLink: string;
}> = ({titleText, pictureLink}) => {
	return (
		<AbsoluteFill style={{
			backgroundColor: "white"
		}}>

			<BackgroundImage zoomDuration={150} zoomTarget={1.4} pictureLink={pictureLink} />
			<ForegroundImage pictureLink={pictureLink} />

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
