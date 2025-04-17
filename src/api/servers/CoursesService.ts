import type { EduCourse } from '@/types';
import { HttpClient } from '../clients/HttpClient';
import mockProvider from '../providers/mockProvider';

const BASE_URL = '/courses';

class CoursesService extends HttpClient {
  getCourses = async () => {
    return this.get('/course');
  };

  getCourseById = async (courseID: string) => {
    const courses: EduCourse[] = await this.get('/course');
    return courses.find((course) => course.id === courseID);
  };
}

export default new CoursesService({
  httpProvider: mockProvider,
  baseURL: BASE_URL,
  //   getToken,
});
