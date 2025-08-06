export interface User {
  id: string;
  username: string;
  linkCode: string;
  createdAt: string;
}

export interface CreateUserRequest {
  username: string;
}

export interface CreateUserResponse {
  success: boolean;
  user?: User;
  error?: string;
}