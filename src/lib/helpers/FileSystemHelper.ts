/**
 * Created by Justin on 8/16/16.
 */

import { readdirSync, lstatSync } from 'fs'

export class FileSystemHelper
{
    public static contents:any[] = [];

    /**
     * Traverse directory and return contents in array
     * @param root
     * @param recursive
     * @returns {any}
     * @constructor
     */
    public static GetDirectoryContents(root:string, recursive:boolean):string[]
    {
        // If arg passed to method is not a directory, return empty array
        if (!this.IsDirectory(root)) return [];

        try
        {
            readdirSync(root).forEach((rootItem:string) =>
            {
                if (this.IsDirectory(`${root}/${rootItem}`) && recursive)
                {
                    this.GetDirectoryContents(`${root}/${rootItem}`, true);
                }
                else
                {
                    this.contents.push({
                        fileName: rootItem,
                        fullPath: `${root}/${rootItem}`
                    })
                }
            });
        }
        catch(e)
        {
            return [];
        }

        return this.contents;
    }

    public static IsDirectory(item:string):boolean
    {
        return lstatSync(item).isDirectory();
    }
}

