import { openDB  } from 'idb'

const DB_NAME = 'Properties'

export async function insertProperty(propertyInfo:any) {
    const db = await openDB(DB_NAME,1)
    await db.put('properties',propertyInfo)
}

export async function deleteProperty(idRoute:number) {
    const db = await openDB(DB_NAME,1)
    await db.delete('properties',idRoute)
}

export async function getAllProperties() {
    const db = await openDB(DB_NAME,1)
    return await db.getAll("properties")
}

export async function getProperty(idRoute:number) {
    const db = await openDB(DB_NAME,1)
    return await db.get("properties",idRoute)
}

initializedDB().then(()=>{
    console.log("Database initialized!")
})

async function initializedDB() {
    const db = await openDB(DB_NAME, 1, {
        upgrade(db) {
            const store = db.createObjectStore('properties', {
                keyPath: 'id',
                autoIncrement:true
            })
        }
    })
}


