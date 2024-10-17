import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import sequelize from './database'; // Adjust path accordingly
import Category from './models/Category';
import Product from './models/Product';

const PORT = 5000
const serverApp = express()
serverApp.use(cors())

serverApp.use(bodyParser.json())

const initializeDatabase = async () => {
  try {
    await sequelize.sync(); // Sync all defined models to the DB
    console.log('Database synced successfully');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

serverApp.get('/api/hello', async (req, res) => {
  try {
    res.json({ message: 'hello' })
  } catch (error) {
    res.json({ message: error.message })
  }
})

serverApp.get('/api/products', async (req, res) => {
  try {
    const products = await Product.findAll({ include: Category, }); // Include Category data
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
})
const randomProductNames = [
  'Product A',
  'Product B',
  'Product C',
  'Product D',
  'Product E'
];
serverApp.post('/api/products/add', async (req, res) => {
  try {
    // Generate a random product name from the list
    const randomName = randomProductNames[Math.floor(Math.random() * randomProductNames.length)];

    // Specify a category ID (ensure this category exists in your database)
    const categoryId = null; // Replace with a valid category ID

    // Create a new product
    const newProduct = await Product.create({
      name: randomName,
      categoryId: categoryId // Assuming your Product model has a categoryId field
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: error.message });
  }
});
serverApp.listen(PORT, () => {
  console.log(`server raning in ${PORT}`)
  initializeDatabase();
})
// Function to create the main window
async function createWindow() {
  // Dynamically import electron-is-dev
  const isDev = (await import('electron-is-dev')).default // This is now a dynamic import

  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  mainWindow.loadURL('http://localhost:' + PORT)
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // Load the appropriate URL for development or production
  if (isDev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Start the Express server

  // Default open or close DevTools by F12 in development
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
