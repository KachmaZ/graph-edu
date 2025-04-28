import type { EduRequestOptions } from '../clients/types';
import EDU_COURSES from '@/data/edu_courses.json';
import EDU_USERS from '@/data/edu_users.json';
import EDU_ENROLS from '@/data/edu_enrols.json';

class MockProvider {
  computeQueryParams(query: string) {
    if (!query) return '';
    const queryParams = new URLSearchParams(query);
    return '?' + queryParams.toString();
  }

  request(path: string, options: EduRequestOptions) {
    const params = path.split('/');

    if (params.includes('course')) {
      return EDU_COURSES;
    }

    if (params.includes('user')) {
      return EDU_USERS;
    }

    if (params.includes('enrol')) {
      return EDU_ENROLS;
    }

    console.log(options);
  }
  async onError(response: any) {
    if (response.json) {
      const { error } = await response.json();
      throw Error(error.message);
    } else if (response.message) {
      throw Error(response.message);
    }
  }

  get(path: string, requestOptions: EduRequestOptions) {
    return this.request(path, { method: 'GET', ...requestOptions });
  }

  post(path: string, requestOptions: EduRequestOptions) {
    return this.request(path, { method: 'POST', ...requestOptions });
  }

  put(path: string, requestOptions: EduRequestOptions) {
    return this.request(path, { method: 'PUT', ...requestOptions });
  }

  delete(path: string, requestOptions: EduRequestOptions) {
    return this.request(path, { method: 'DELETE', ...requestOptions });
  }
}

export default new MockProvider();
