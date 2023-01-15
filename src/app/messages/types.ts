export interface Message {
  id: string;
  title: string;
  text: string;
  comments: any[];
  createdAt: Date;
  updatedAt: Date;
  user: User;
}

export interface CreateMessageRequest {
  title: string;
  text: string;
}

export interface CommentRequest {
  comment: string;
}

export interface SearchRequest {
  search?: string;
  date?: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  fullname: string;
  createdAt: Date;
  updatedAt: Date;
}
