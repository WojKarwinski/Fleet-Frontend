import { render } from "../preset/react.js";
export const bridgeData = {
    "workspaceFolder": "file:///d%3A/School 2023-2024/Fleet Frontend/fleet_frontend",
    "serverRootDir": "",
    "previewFolderRelPath": "preview",
    "activeFileRelPath": "src/App.jsx",
    "mapFileRelPath": "src/App.jsx",
    "presetName": "react",
    "workspaceFolderName": "fleet_frontend"
};
export const preview = () => render(getMod);
const getMod = () => import("../../src/App.jsx");