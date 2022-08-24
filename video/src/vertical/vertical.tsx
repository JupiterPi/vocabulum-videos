import {AbsoluteFill, Img, Sequence} from "remotion";
import {Title} from "./Title";
import "../font.css";
import {BackgroundImage, ForegroundImage} from "./image";

export const VerticalVideo: React.FC<{
	baseForm: string;
	baseTranslation: string;
	imageLink: string;
}> = ({baseForm, baseTranslation, imageLink}) => {
	return (
		<AbsoluteFill style={{
			backgroundColor: "white"
		}}>

			<BackgroundImage zoomDuration={150} zoomTarget={1.4} pictureLink={imageLink} />
			<ForegroundImage pictureLink={imageLink} />

			<Sequence from={15}>
				<AbsoluteFill style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-evenly",
					padding: "50px 0"
				}}>
					<Title text={baseForm} color="black" transitionDuration={50} delay={0} fontFamily="Playfair Display" />
					<Title text={baseTranslation} color="white" transitionDuration={50} delay={40} fontFamily="Playfair Display" />
				</AbsoluteFill>
			</Sequence>

		</AbsoluteFill>
	);
};
