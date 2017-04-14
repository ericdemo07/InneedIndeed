export class DataExtractPOJO {
    constructor(
        public date: any,
        public devicetype: string,
        public inputtype: number,
        public userid: string,
        public mailid: string,
        public inputFile: File
    ) { }
}
