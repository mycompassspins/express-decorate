"use strict";
const fs = require('fs');
class FileSystemHelper {
    static GetDirectoryContents(root, recursive) {
        if (!this.IsDirectory(root))
            return [];
        try {
            fs.readdirSync(root).forEach((rootItem) => {
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
        return fs.lstatSync(item).isDirectory();
    }
}
FileSystemHelper.contents = [];
exports.FileSystemHelper = FileSystemHelper;
//# sourceMappingURL=FileSystemHelper.js.map