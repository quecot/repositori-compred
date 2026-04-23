export interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  dimension: string;
  subdimension: string;
  level: number;
  language: string;
  url: string;
  createdAt?: string;
}