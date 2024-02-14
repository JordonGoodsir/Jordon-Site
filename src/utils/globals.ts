export const openLink = (link: string) => {
    window.open(link, '_blank')
}

export const openEmail = () => {
    window.open('mailto:jordon.goodsir1@gmail.com')
}

export const timer = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, time)
    })
}