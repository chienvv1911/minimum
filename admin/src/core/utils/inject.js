export const injectJs = (id, src, async = false) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = src;
        if(async) {
            script.async = true;
        }

        document.body.appendChild(script);
        script.addEventListener('load', () => {
            resolve()
        })
    })
}
