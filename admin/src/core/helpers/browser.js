const Browser = {
    supportLocalStorage: null,
    isSupportLocalStorage(){
        if(this.supportLocalStorage === null) {
            const test = 'test';
            try {
                localStorage.setItem(test, test);
                localStorage.removeItem(test)
                this.supportLocalStorage = true;
            } catch (error) {
                this.supportLocalStorage = false;
            }
        }

        return this.supportLocalStorage;
    },
    redirect(url) {
        window.location = url;
    },
    isFireFox(){
        return navigator.userAgent.toLocaleLowerCase().indexOf('firefox') > -1;
    }
}

export default Browser;