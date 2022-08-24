import {AbsoluteFill, Img, interpolate, useCurrentFrame} from "remotion";

export const BackgroundImage: React.FC<{
    zoomDuration: number;
    zoomTarget: number;
    pictureLink: string;
}> = ({zoomDuration, zoomTarget, pictureLink}) => {
    const frame = useCurrentFrame();

    const zoom = interpolate(
        frame,
        [0, zoomDuration],
        [1.2, zoomTarget],
        {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp"
        }
    );

    return (
        <AbsoluteFill style={{
            backgroundImage: `url(${pictureLink})`,
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center",
            backgroundSize: "cover",
            boxShadow: "100px black inset",
            filter: "blur(50px)",
            overflow: "hidden",
            margin: "-5px -10px -10px -5px",
            transform: `scale(${zoom})`
        }} />
    );
};

export const ForegroundImage: React.FC<{
    pictureLink: string;
}> = ({pictureLink}) => {
    return (
        <AbsoluteFill style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center"
        }}>
            <Img src={pictureLink} style={{

            }} />
        </AbsoluteFill>
    );
};