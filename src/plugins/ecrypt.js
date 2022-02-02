import md5 from "md5";

export function encrypt(str) {
    console.log(md5(str), str);
    return md5(str)
}