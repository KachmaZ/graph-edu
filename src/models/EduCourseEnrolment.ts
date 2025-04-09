export interface CourseEnrollment {
  id: string;
  userId: string; // \\ u\d+ \\
  courseId: string; // \\ c\d+ \\
  progress: CourseProgress;
  completed: boolean;
}
export interface CourseProgress {
  [moduleId: string]: ModuleProgress;
}

export interface ModuleProgress {
  status: 'not-started' | 'in-progress' | 'completed';
}
