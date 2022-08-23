import {Composition} from 'remotion';
import {VerticalVideo} from './vertical';

export const VocabulumVideos: React.FC = () => {
	return (
		<>
			<Composition
				id="vertical"
				component={VerticalVideo}
				durationInFrames={3*60}
				fps={60}
				width={1080}
				height={1920}
				defaultProps={{
					titleText: "amicus, amici m.",
					pictureLink: "https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg"
				}}
			/>
		</>
	);
};
