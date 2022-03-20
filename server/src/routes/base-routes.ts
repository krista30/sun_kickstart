import {Router} from "express";
import {getBase,
    getBaseById,
    addBase,
    updateBaseById,
    deleteBaseById
  } from "../controllers/base.controller";

const router = Router();

/**
 *
 * Base Route Endpoints
 */
router.route('/base').get(getBase);
router.route('/base/:id').get(getBaseById);
router.route('/base').post(addBase);
router.route('/base/:id').patch(updateBaseById);
router.route('/base/:id').delete(deleteBaseById);



export default router;