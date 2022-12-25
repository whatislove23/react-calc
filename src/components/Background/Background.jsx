import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
export default ({ children }) => (
  <MouseParallaxContainer
    globalFactorX={0.02}
    globalFactorY={0.02}
    className="container"
  >
    <MouseParallaxChild
      factorX={0.3}
      factorY={0.3}
      className="round r1"
    ></MouseParallaxChild>
    <MouseParallaxChild
      factorX={0.12}
      factorY={0.15}
      className="round r2"
    ></MouseParallaxChild>
    <MouseParallaxChild
      factorX={0.4}
      factorY={0.35}
      className="round r3"
    ></MouseParallaxChild>
    <MouseParallaxChild
      factorX={0.2}
      factorY={0.2}
      className="round r4"
    ></MouseParallaxChild>
    {children}
  </MouseParallaxContainer>
);
