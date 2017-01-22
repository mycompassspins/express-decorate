/**
 * Created by Justin on 8/16/16.
 */
"use strict";
const fs_1 = require('fs');
class FileSystemHelper {
    /**
     * Traverse directory and return contents in array
     * @param root
     * @param recursive
     * @returns {any}
     * @constructor
     */
    static GetDirectoryContents(root, recursive) {
        // If arg passed to method is not a directory, return empty array
        if (!this.IsDirectory(root))
            return [];
        try {
            fs_1.readdirSync(root).forEach((rootItem) => {
                if (this.IsDirectory(`${root}/${rootItem}`) && recursive) {
                    this.GetDirectoryContents(`${root}/${rootItem}`, true);
                }
                else {
                    this.contents.push({
                        fileName: rootItem,
                        fullPath: `${root}/${rootItem}`
                    });
                }
            });
        }
        catch (e) {
            return [];
        }
        return this.contents;
    }
    static IsDirectory(item) {
        return fs_1.lstatSync(item).isDirectory();
    }
}
FileSystemHelper.contents = [];
exports.FileSystemHelper = FileSystemHelper;
//# sourceMappingURL=FileSystemHelper.js.map