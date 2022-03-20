import {Request, RequestHandler, Response} from "express";
import {
    IGetBaseReq,
    IAddBaseReq,
    IUpdateBaseReq,
    IDeleteBaseReq
} from '../models/base.model';

import * as BaseService from '../services/base.service';


/**
 *Get active items
 *
 * @param req Express Request
 * @param res Express Response
 */
export const getBase: RequestHandler = async (req: Request, res: Response) => {
 try {
      const items = await BaseService.getItems();

      res.status(200).json({
          items
      });
 } catch (error) {
      console.error('[items.controller][getItems][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
      res.status(500).json({
         message: 'There was an error when fetching items'
      });
 }

};


/**
 * Get items record based on id
 *
 * @param req Express Request
 * @param res Express Response
 */
export const getBaseById: RequestHandler = async (req: IGetBaseReq, res: Response) => {
 try {
     const item = await BaseService.getItemById(req.params.id);

     res.status(200).json({
        item
     });
 } catch (error) {
     console.error('[item.controller][getItemById][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
     res.status(500).json({
         message: 'There was an error when fetching item'
     });
 }
};

/**
 * Inserts a new team record based
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addBase: RequestHandler = async (req: IAddBaseReq, res: Response) => {
    try {
        const result = await BaseService.insertItem(req.body);

        res.status(200).json({
            result
        });
    } catch (error) {
        console.error('items.controller][addItem][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
        res.status(500).json({
            message: 'There was an error when adding new item'
        });
    }
};

/**
 * Update existing item record
 *
 * @param req Express Request
 * @param res Express Response
 */
export const updateBaseById: RequestHandler = async (req: IUpdateBaseReq, res: Response) => {
  try {
      const result = await BaseService.updateItem({...req.body, id:req.params.id});

      res.status(200).json({
         result
      });
  } catch (error) {
      console.error('[items.controller][updateItemById][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
      res.status(500).json({
          message: 'There was an error when updating item'
      });
  }
};


/**
 *  Deletes a item
 *
 *  @param req Express Request
 *  @param res Express Response
 */
export const deleteBaseById: RequestHandler = async (req: IDeleteBaseReq, res: Response) => {
  try {
      const result = await BaseService.deleteItem(req.params.id);

      res.status(200).json({
         result
      });
  }catch (error) {
      console.error('[items..controller][deleteItemById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
      res.status(500).json({
          message: 'There was an error when deleting item'
      });
  }
};
