/*-
 * #%L
 * admin base - UI Apps
 * %%
 * Copyright (C) 2017 headwire inc.
 * %%
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 * #L%
 */
import { LoggerFactory } from './logger'
let logger = LoggerFactory.logger('api').setLevelDebug()

let impl = null

class PerApi {

    constructor(implementation) {
        impl = implementation
    }

    populateUser() {
        return impl.populateUser()
    }

    populateTools() {
        return impl.populateTools()
    }

    populateToolsConfig() {
        return impl.populateToolsConfig()
    }

    populateContent(path) {
        return impl.populateContent(path)
    }

    populateComponents() {
        return impl.populateComponents()
    }

    populateTemplates() {
        return impl.populateTemplates()
    }

    populateObjects() {
        return impl.populateObjects()
    }

    populateNodesForBrowser(path, target, includeParents = false) {
        return impl.populateNodesForBrowser(path, target, includeParents)
    }

    populateComponentDefinition(component) {
        return impl.populateComponentDefinition(component)
    }

    populateComponentDefinitionFromNode(path) {
        return impl.populateComponentDefinitionFromNode(path)
    }

    populateObject(path, target, name) {
        return impl.populateObject(path, target, name)
    }

    populatePageView(path) {
        return impl.populatePageView(path)
    }

    setInitialPageEditorState() {
        return impl.setInitialPageEditorState()
    }

    populateByName(name) {
        if(name === '/admin/tools') return this.populateTools()
        if(name === '/admin/toolsConfig') return this.populateToolsConfig()
        if(name === '/admin/components') return this.populateComponents()
        return Promise.reject('populateByName for '+name+' is not defined')
    }

    createPage(parentPath, name, templatePath) {
        return impl.createPage(parentPath, name, templatePath)
    }

    deletePage(path) {
        return impl.deletePage(path)
    }

    renamePage(path, newName) {
        return impl.renamePage(path, newName)
    }

    movePage(path, to, type) {
        return impl.movePage(path, to, type)
    }

    deletePageNode(path, nodePath) {
        return impl.deletePageNode(path, nodePath)
    }

    createTemplate(parentPath, name, component) {
        return impl.createTemplate(parentPath, name, component)
    }

    createObject(parentPath, name, templatePath) {
        return impl.createObject(parentPath, name, templatePath)
    }

    deleteObject(path) {
        return impl.deleteObject(path)
    }

    deleteAsset(path) {
        return impl.deleteAsset(path)
    }

    renameAsset(path, newName) {
        return impl.renameAsset(path, newName)
    }

    moveAsset(path, to, type) {
        return impl.moveAsset(path, to, type)
    }

    createFolder(parentPath, name) {
        return impl.createFolder(parentPath, name)
    }

    deleteFolder(parentPath, name) {
        return impl.deleteFolder(parentPath, name)
    }

    uploadFiles(path, files, cb) {
        return impl.uploadFiles(path, files, cb)
    }

    fetchExternalImage(path, url, name) {
        return impl.fetchExternalImage(path, url, name)
    }

    savePageEdit(path, node) {
        return impl.savePageEdit(path, node)
    }

    saveObjectEdit(path, node) {
        return impl.saveObjectEdit(path, node)
    }

    insertNodeAt(path, component, drop) {
        return impl.insertNodeAt(path, component, drop)
    }

    insertNodeWithDataAt(path, data, drop) {
        return impl.insertNodeWithDataAt(path, data, drop)
    }

    moveNodeTo(path, component, drop) {
        return impl.moveNodeTo(path, component, drop)
    }
}

export default PerApi
