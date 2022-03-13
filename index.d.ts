export class Util {
    /**
     * Downloads a file
     * @param url - The buffer you want to write to a file
     * @param filename - The name you want to name this file
     */
    public static downloadFile(url: BufferResolvable, filename: string): Promise<void>
    /**
     * Resolves a url, path to a buffer
     * @param url - The url or path to resolve
     */
    public static getBuffer(url: BufferResolvable): Promise<Buffer>
}


export type BufferResolvable = string | Buffer