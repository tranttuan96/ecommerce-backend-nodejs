import mongoose from "mongoose";
import os from 'os';
import process from 'process';

const OVERLOAD_CHECK_INTERVAL_SECONDS = 60000;

export const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log("Number of database connection:", numConnection)
}

export const checkOverload = () => {
    setInterval(() => {
        const numConnection = mongoose.connections.length; 
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;

        console.log('Active connection:', numConnection);
        console.log(`Memory Usage: ${memoryUsage/ 1024/ 1024} MB`)

        const maxConnections = numCores * 5;
        if(numConnection > maxConnections) {
            console.log('Connection overload detected!');
        }
    }, OVERLOAD_CHECK_INTERVAL_SECONDS)
}