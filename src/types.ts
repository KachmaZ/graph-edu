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
  description: string;
  themeColor: 'green' | 'blue' | 'purple' | 'pink';
  nodes: Record<string, EduNode>;
  edges: Record<string, EduEdge>;
}

export interface EduNode extends vNG.Node {
  id: string;
  status: 'passed' | 'available' | 'closed';
  modules: EduNodeModule[];
  normal: Partial<EduNodeOptions>;
  hover: Partial<EduNodeOptions>;
}

export interface EduNodeModule {
  id: string;
  title: string;
  contentType: 'article' | 'video' | 'test';
  content: EduModuleContent;
  status: 'available' | 'passed' | 'current' | 'closed';
}

export type EduModuleContent = string;
// export type ModuleContent = MCArticle | MCVideo | MCTest
// Это на новый год
// type MCArticle = string // Полный текст, возможно в формате html
// type MCVideo = string // Ссылка на видеофайл
// type MCTest = MCTestQuestion[]
// type MCTestQuestion = {
//   question: string;
//   options: string[];
//   correctOption: string;
// };
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
  courses: string[];
}
