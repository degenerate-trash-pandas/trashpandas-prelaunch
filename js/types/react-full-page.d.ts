declare module "react-full-page" {
    type ControlComponentsProps = {
        getCurrentSlideIndex: () => number;
        onNext: () => void;
        onPrev: () => void;
        scrollToSlide: (n: number) => void;
        slidesCount: number;
    };

    type FullPageProps = {
        ref?: any;
        className?: any;
        initialSlide?: number;
        duration?: number;
        controls?: boolean | React.FC<ControlComponentsProps>;
        controlProps?: any;
        beforeChange?: () => void;
        afterChange?: () => void;
        scrollMode?: string;
    };
    export const FullPage: React.FC<FullPageProps>;
    type SlideProps = {
        ref?: any;
        className?: any;
        style?: any;
    }
    export const Slide: React.FC<SlideProps>;
}