import { Suspense } from 'react';
import './HomePage.scss';
// import arrowRight from '../../../assets/arrow-right.svg';
// const myPhoto = lazy(() => import("../../../assets/myPhoto.jpg"));
// import myPhoto from '../../../assets/myPhoto.png';

// const ArticleCs = lazy(() => import('../../atricle-cs/ArticleCs'));
// const Test = lazy(() => import('../../atricle-cs/tes'));

function Home() {
  // const aboutMyselfRef = useRef(null);
  // const skills = useRef(null);
  // const myProject = useRef(null);

  // function scrollToRef(ref) {
  //   const positionTop = ref.current.getBoundingClientRect().y;
  //   document.body.scrollTo(0, positionTop);
  // }

  return <Suspense fallback={<div>Loading...</div>} />;
}

export default Home;
