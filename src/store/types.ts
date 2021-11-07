/*
 * @Author: FunJust
 * @Date: 2021-11-06 22:30:33
 * @Description:
 */

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export interface UserProps{
  isLogin: boolean;
  id?: number;
  name: string;
}

export interface RuleProp {
  type: 'required' | 'email' | 'range';
  message: string;
}

export type RulesProp = RuleProp[]
