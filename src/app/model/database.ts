export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      resources: {
        Row: {
          createdAt: string
          description: string
          dimension: string
          id: string
          language: string
          level: number
          subdimension: string
          title: string
          type: string
          url: string
        }
        Insert: {
          createdAt?: string
          description: string
          dimension: string
          id?: string
          language: string
          level: number
          subdimension: string
          title: string
          type: string
          url: string
        }
        Update: {
          createdAt?: string
          description?: string
          dimension?: string
          id?: string
          language?: string
          level?: number
          subdimension?: string
          title?: string
          type?: string
          url?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
