import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { urlForImage } from "@/lib/sanity/image";

// class Slideshow extends Component {
//   constructor() {
//     super();
//     this.slideRef = React.createRef();
//     this.back = this.back.bind(this);
//     this.next = this.next.bind(this);
//     this.state = {
//       current: 0
//     };
//   }

//   back() {
//     this.slideRef.current.goBack();
//   }

//   next() {
//     this.slideRef.current.goNext();
//   }

//   render() {
//     const properties = {
//       duration: 1000,
//       autoplay: true,
//       transitionDuration: 500,
//       indicators: true,
//       canSwipe: true,
//       arrows: false,
//       infinite: true,
//       easing: "ease",
//       indicators: (i) => <div className="indicator">{i + 1}</div>
//     };
//     const slideImages = [
//       "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//       "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//       "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//       "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
//     ];
//     return (
//       <div className="App">
//         <div className="slide-container relative z-0 mx-auto aspect-[16/10] max-w-screen-lg overflow-hidden lg:rounded-lg">
//           <Slide ref={this.slideRef} {...properties}>
//             {slideImages.map((each, index) => (
//               <div key={index} className="each-slide">
//                 <img className="lazy" src={each} alt="sample" />
//               </div>
//             ))}
//           </Slide>
//         </div>
//       </div>
//     );
//   }
// }

// export default Slideshow;

export default function Slideshow({ slideshow }) {
  const properties = {
    duration: 1000,
    autoplay: true,
    transitionDuration: 500,
    indicators: false,
    canSwipe: true,
    arrows: false,
    infinite: true,
    easing: "ease",
  };
  const slideImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  ];

  return (
    <div className="slide-container relative z-0 mx-auto aspect-[16/10] max-w-screen-lg overflow-hidden lg:rounded-lg">
      {/* <Slide {...properties}> */}
        {/* {slideshow.slideshowImages && slideshow?.slideshowImages.map((e, index) => ( */}
          {/* <div key={index} className="each-slide"> */}
            {/* <img src={e.asset._ref} alt={`Slide ${index}`} /> */}
            {/* <p>{e}</p> */}
          {/* </div> */}
        {/* ))} */}

        {/* {slideImages.map((each, index) => ( */}
          {/* <div key={index} className="each-slide"> */}
            {/* <img className="lazy" src={each} alt="sample" /> */}
          {/* </div> */}
        {/* ))} */}
      {/* </Slide> */}
      {slideshow?.slideshowImages && (
      <img
        {...urlForImage(slideshow?.slideshowImages[0])}
        // alt={"Thumbnail"}
        // loading="eager"
        // fill
        // sizes="100vw"
        // className="object-cover"
        // width={0}
        // height={0}
        // priority={true}
      />)}
    </div>
  );
}