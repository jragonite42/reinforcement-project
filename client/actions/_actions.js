import * as types from '../constants/types.js';
import { createAction } from '@reduxjs/toolkit';

export const feed = createAction(types.FEED);
export const heal = createAction(types.HEAL);
export const clean = createAction(types.CLEAN);
export const groom = createAction(types.GROOM);
