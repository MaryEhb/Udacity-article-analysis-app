function urlChecker(url) {
    const format = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return format.test(url);
}

export { urlChecker }
