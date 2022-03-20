import {execute} from "../utils/mysql.connector";

import {BaseQueries} from "../queries/base.queries";
import {IBase} from "../models/base.model";

/**
 * gets all active items
 */
export const getItems = async () => {
  return execute<IBase[]>(BaseQueries.Get, []);
};

/**
 * gets an item based on id provided
 */
export const getItemById = async (id: IBase['id']) => {
    return execute<IBase>(BaseQueries.GetById, [id]);
};

/**
 * adds a new active item
 */
export const insertItem = async  (item: IBase) => {
  const result = await execute<{affectedRows: number}>(BaseQueries.Add, []) ;
  return result.affectedRows > 0;
};

/**
 * updates item information based on the id provided
 */
export const updateItem = async (item: IBase) => {
  const result = await execute<{affectedRows: number}>(BaseQueries.Update, [item.id
  ]);
  return result.affectedRows > 0;
};

/**
 * deletes item information based based on the id provided
 */
export const deleteItem = async (id: IBase['id']) => {
    const result = await execute<{affectedRows: number}>(BaseQueries.Delete, [
        id,
    ]);
    return result.affectedRows > 0;
};