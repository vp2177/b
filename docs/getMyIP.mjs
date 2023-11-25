export const IP_SERVICES = {
    ipify:              ["GET", "https://api.ipify.org/?TODO_format"],
    myexternalip:       ["GET", "http://myexternalip.com/raw", null],
    ifconfig_me:        ["GET", "https://ifconfig.me/"],
    ifconfig_co:        ["GET", "https://ifconfig.co/"],
}

/**
 * @param {keyof IP_SERVICES} from
 * @returns {Promise<string>}
 */
export async function getMyIP(from) {
    const [method, url, getter] = IP_SERVICES[from]
    const resp = await fetch(url, {method})
    if (!getter) {
        return resp.text()
    } else {
        const body = await resp.text()
        return getter(body)
    }
}
