hexo.extend.tag.register('image', ([src, title]) => {
    return `<figure class="image-bubble">
                <img src="${src}" alt="${title}">
                <div class="image-caption">${title}</div>
            </figure>`
})
