import { Kafka } from "kafkajs";

export const kafka=new Kafka({
    clientId: 'my-app',
    brokers: ['172.16.144.249:9092'],
})