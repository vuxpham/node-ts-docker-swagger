// BASE INTERFACES HERE (ENTITIES)

export interface IReturnData {
  data: object;
  type: 'success' | 'created' | 'deleted' | 'error';
  message: string;
} 