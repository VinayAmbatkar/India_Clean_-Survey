import * as SQLite from 'expo-sqlite/next';


async function openDatabase(): Promise<SQLite.SQLiteDatabase| null> {
  try {
    return await SQLite.openDatabaseAsync('form.sqlite');
  } catch (error) {
    console.error('Error opening database:', error);
    return null;
  }
}

export async function createTables() {
  const db = await openDatabase();
  if (!db) {
    console.error('Database is null');
    return;
  }
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS TableName (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT,
        lastName TEXT,
        phoneNumber TEXT,
        email TEXT,
        wasteLandmark TEXT,
        wasteAddress TEXT,
        wasteImage TEXT,
        numberOfDays INTEGER,
        wasteQuantity INTEGER
      );
    `);
    // console.log('Table created successfully');
  } catch (error) {
    console.error('Error creating table', error);
  }
}

export async function insertFormData(formData: any) {
  const db = await openDatabase();
  if (!db) {
    console.error('Database is null');
    return;
  }
  try {
    const result = await db.runAsync(
      'INSERT INTO TableName (firstName, lastName, phoneNumber, email, wasteLandmark, wasteAddress, wasteImage, numberOfDays, wasteQuantity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        formData.firstName,
        formData.lastName,
        formData.phoneNumber,
        formData.email,
        formData.wasteLandmark,
        formData.wasteAddress,
        formData.wasteImage,
        formData.numberOfDays,
        formData.wasteQuantity,
      ]
    );
    console.log('Data inserted successfully. Last insert row ID:', result.lastInsertRowId);
  } catch (error) {
    console.error('Error inserting data', error);
  }
}