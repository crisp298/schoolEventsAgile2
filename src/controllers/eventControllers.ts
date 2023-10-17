import axios from "axios";
import { Response, Request, NextFunction } from "express";
import {open} from "sqlite";
import sqlite3 from "sqlite3";
import participants from "../models/Participants";
import { createDbConnection } from "../db/dbConfig";
import { Database } from "sqlite3";
import logger from "../services/logger";


const dbPromise = open({
    filename: "src/db/database.sqlite",
    driver: sqlite3.Database,
    });