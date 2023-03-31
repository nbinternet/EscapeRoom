import { Injectable } from '@angular/core';
import { File } from '../models/file';

@Injectable({
    providedIn: 'root'
})
export class FileService {
    generateMockFiles(): File {
    //Base File
    let base: File = new File('I:/', null, 'folder', '');
    //Creating 3 top level folders
    let config: File = new File('config', base, 'folder', 'rw-r--r--');
    let scripts: File = new File('scripts', base, 'folder', 'rwr-xr--');
    let assets: File = new File('assets', base, 'folder', 'rwr--r-r');
    let code: File = new File('code', base, 'folder', 'rwr-xr-x');
    base.subFiles = [config, scripts, assets, code];
    //Creating Assets Sub Dir
    let flowerImage: File = new File('flower-image', assets, 'file', 'rw-r--r--');
    let spaceImage: File = new File('space-image', assets, 'file', 'rw-r--r--');
    assets.subFiles = [flowerImage, spaceImage];
    //Creating config Sub Dir
    let passwordConfig: File = new File('password-config', config, 'file', 'rwxrwxrwx');
    let envConfig: File = new File('env-config', config, 'file', 'rwxr-xr-x');
    config.subFiles = [passwordConfig, envConfig]
    //Creating Code Sub Dir
    let mainCode: File = new File('main', code, 'folder', 'rwxr-xr-x');
    let testCode: File = new File('test', code, 'folder', 'rwxr-xr-x');
    code.subFiles = [mainCode, testCode]
    //Creating Main Code Sub Dir
    let createNewUser: File = new File('user', mainCode, 'file', 'rwxr-xr-x');
    let createNewStaff: File = new File('staff', mainCode, 'file', 'rwxr-xr-x');
    mainCode.subFiles = [createNewUser, createNewStaff]
    //Creating Main Code Test Sub Dir
    let testCreateNewUser: File = new File('user', testCode, 'file', 'rwxr-xr-x');
    let testCreateNewStaff: File = new File('staff', testCode, 'file', 'rwxr-xr-x');
    testCode.subFiles = [testCreateNewUser, testCreateNewStaff]
    //Creating Scripts Sub Dir
    let setupFirstEnvScript: File = new File('setup-env.sh', scripts, 'file', 'rwxr-xr--');
    scripts.subFiles = [setupFirstEnvScript]
    return base;
    }
}