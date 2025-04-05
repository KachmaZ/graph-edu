import type { EduCourse } from '../types';

import cardBgImg from '@/assets/images/courseAssets/cardBg.png';
import bannerBgBigImg from '@/assets/images/courseAssets/bannerBgBig.png';
import bannerBgSmallImg from '@/assets/images/courseAssets/bannerBgSmall.png';

export default function useCourseTheme(
  course: EduCourse,
  type: 'card' | 'big-banner' | 'small-banner',
) {
  const colorByTheme = {
    green: '#d5ffe8',
    blue: '#d2e8ff',
    purple: '#eadcff',
    pink: '#ffe3fd',
  };

  const imgByType = {
    card: cardBgImg,
    'big-banner': bannerBgBigImg,
    'small-banner': bannerBgSmallImg,
  };

  return {
    backgroundColor: colorByTheme[course.themeColor as keyof typeof colorByTheme],
    backgroundImage: `url(${imgByType[type]})`,
  };
}
