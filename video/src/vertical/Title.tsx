import {Easing, interpolate, useCurrentFrame} from "remotion";

export const Title: React.FC<{
    text: string;
    transitionDuration: number;
    fontFamily: string;
}> = ({text, transitionDuration, fontFamily}) => {
    const frame = useCurrentFrame();

    const words = text.split(" ");

    return (
        <div style={{
            color: "black",
            fontFamily,
            fontSize: "100px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px"
        }}>
            {words.map((word, i) => {

                const textTranslation = interpolate(
                    frame - i * (transitionDuration / words.length) + 30,
                    [0, 60],
                    [40, 0],
                    {
                        easing: Easing.inOut(Easing.ease),
                        extrapolateLeft: "clamp",
                        extrapolateRight: "clamp"
                    }
                );

                const textOpacity = interpolate(
                    frame - i * (transitionDuration / words.length) + 30,
                    [30, 60],
                    [0, 1]
                );

                return (
                    <span style={{
                        display: "inline-block",
                        transform: `translateY(${textTranslation}px)`,
                        opacity: textOpacity
                    }}>
                        {word}
                    </span>
                );

            })}
        </div>
    );
};