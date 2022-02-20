import { SampleNextArrow, SamplePrewArrow } from "../components/CustomSlick/Slick.styled";

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <SamplePrewArrow
        {...props}
        className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        Previous
    </SamplePrewArrow>
);
export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <SampleNextArrow
        {...props}
        className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    >
        Next
    </SampleNextArrow>
);