import {Easing, interpolate, useCurrentFrame} from "remotion";

export const Title: React.FC<{
    text: string;
    color: string;
    transitionDuration: number;
    delay: number;
    fontFamily: string;
}> = ({text, color, transitionDuration, delay, fontFamily}) => {
    const frame = useCurrentFrame() - delay;

    const words = text.split(" ");

    const fontSize = interpolate(
        text.length,
        ["sol".length, "quaemadmodum".length],
        [160, 120]
    )

    return (
        <div style={{
            color,
            fontFamily,
            fontSize: `${fontSize}px`,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            flexWrap: "wrap",
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