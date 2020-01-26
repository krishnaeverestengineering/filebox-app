export function urlParams() {
    let p = "";
    if(window.location.hash){
        p += window.location.hash.replace(/^\#/, "");
    }
    if(window.location.search){
        if(p !== "") p += "&";
        p += window.location.search.replace(/^\?/, "");
    }
    return p.split("&").reduce((mem, chunk) => {
        const d = chunk.split("=");
        if(d.length !== 2) return mem;
        mem[decodeURIComponent(d[0])] = decodeURIComponent(d[1]);
        return mem;
    }, {})
}

export const getBearerToken = () => {
    const token = localStorage.getItem("token");
    if(token != "" || token != "undefined") {
        return "Bearer " + token;
    }
    return "";
}