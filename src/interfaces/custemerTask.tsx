import { IError } from "./type";

export interface ITaskReq {
    name: string;
    type: number;
    isDeleted: boolean;
    billable?: boolean;
    id: number;
  }
  
  export interface ITaskRes {
    result: ITaskReq[];
  }
  
  export interface ITaskSaveRes {
    result: ITaskReq[];
  }
    
  export interface ICreateTaskReq {
    id?: number;
    name: string;
    type: number;
  }
  
  export interface ITaskResState {
    task: ITaskReq;
  }
  
  export interface IDeleteTaskRes {
    success: boolean;
    error: IError;
  }
  
  export interface IDeArchiveTaskReq {
    id: number;
  }
  
  export interface ICustomerReq {
    id?: number;
    name: string;
    address: string;
  }
  
  export interface ICustomerRes {
    result: ICustomerReq[];
  }
  
  export interface ICreateCustomerReq {
    id: number;
    name: string;
    address: string;
  }
  
  export interface ICreateCustomerRes {
    result: ICreateCustomerReq[];
  }