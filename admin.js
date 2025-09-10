
import { kafka } from "./client.js";


async function init(){
    const admin=kafka.admin();
    console.log('admin connecting...')
    admin.connect();
    console.log('admin connection success')

    console.log('creating topic [rider-updates]')
    await admin.createTopics({
        topics:[
            {
                topic: 'rider-updates',
                numPartitions: 2,

            },
        ],
    })
    console.log('created topic [rider-updates]')

    console.log('Disconnecting admin...')
    await admin.disconnect();
}
init();