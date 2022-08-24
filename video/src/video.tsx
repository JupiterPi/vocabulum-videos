import {Composition} from 'remotion';
import {VerticalVideo} from './vertical/vertical';

export const VocabulumVideos: React.FC = () => {
	const pictureLinks = [
		"https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg",
		"https://images.pexels.com/photos/7277042/pexels-photo-7277042.jpeg",
		"https://images.pexels.com/photos/5607365/pexels-photo-5607365.jpeg",
		"https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg"
	];
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
					baseForm: "amicus",
					baseTranslation: "der Freund",
					imageLink: pictureLinks[2]
				}}
			/>
		</>
	);
};
