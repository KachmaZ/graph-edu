export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  patronimic: string;
  role: 'student' | 'teacher';
  courses: string[];
}
