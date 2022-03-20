import {Request} from "express";

// Interface to be mapped with database
export interface IBase {
    id: string;
}

export interface IGetBaseReq extends Request{}
export interface IAddBaseReq extends Request{}
export interface IUpdateBaseReq extends Request{}
export interface IDeleteBaseReq extends Request{}
