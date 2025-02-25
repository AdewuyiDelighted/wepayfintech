import express from "express";
import {  initialize_payment, transfer_fund, verify_transaction } from "../controllers/transaction.controller";

const routes = express.Router();

export const PATHS = {
    initialize_payment : "/initialize-payment",
    verify_transaction:"/verify-transaction",
    transfer_fund:"/transfer-fund"

};

routes.post(PATHS.initialize_payment,initialize_payment)
routes.post(PATHS.verify_transaction,verify_transaction)
routes.post(PATHS.transfer_fund,transfer_fund)
export default routes;