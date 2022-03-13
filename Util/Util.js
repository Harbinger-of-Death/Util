const fetch = require("node-fetch");
const fs = require("fs");
class Util {

    static async getBuffer(url) {
        if(url instanceof Buffer) return url
        if(/^(http(s)?)/gi.test(url)) {
            const resource = await fetch(url)
            return await resource.buffer()
        }

        if(/^(\.(\.)?)/gi.test(url)) return fs.readFileSync(url)

        throw new TypeError(`Invalid File type. Must be either a Buffer, path, or url`)
    }

    static async downloadFile(url, filename = "file.txt") {
        if(!(url instanceof Buffer)) url = await this.getBuffer(url)
        return fs.writeFileSync(filename, url)
    }
}

module.exports = Util