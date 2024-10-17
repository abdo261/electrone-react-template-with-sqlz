import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'


// Custom APIs for renderer
const api = {
  // getAllCategories: async () => await ipcRenderer.invoke('getAllCategories'),
  // getAllProducts: async () => await ipcRenderer.invoke('getAllProducts'),
  // createCategory: async (category) => await ipcRenderer.invoke('createCategory', category),
  // createProduct: async (product) => await ipcRenderer.invoke('createProduct', product),
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
