hexo.extend.tag.register('image', function (args) {
    const src = args[0]
    const title = args[1]
    return `<figure class="image-bubble">
                <img src="${src}" alt="${title}">
                <div class="image-caption">${title}</div>
            </figure>`
})
