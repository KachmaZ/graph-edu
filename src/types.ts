import * as vNG from 'v-network-graph';

export interface EduNodeOptions {
  color: string;
  strokeColor: string;
  strokeWidth: number;
}

export interface EduNodeContent {
  id: string;
  modules: EduNodeModule[];
}

export interface EduCourse {
  id: string;
  img: string;
  name: string;
  nodes: Record<string, EduNode>;
  edges: Record<string, EduEdge>;
}

export interface EduNodeModule {
  id: string;
  title: string;
  content: string;
}

export interface EduNode extends vNG.Node {
  id: string;
  status: 'passed' | 'available' | 'closed';
  modules: EduNodeModule[];
  normal: Partial<EduNodeOptions>;
  hover: Partial<EduNodeOptions>;
}

export interface EduEdge extends vNG.Edge {
  width: number;
  color: string;
  dashed?: boolean;
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  patronimic: string;
  role: 'student' | 'teacher';
  courses: EduCourse[];
}
