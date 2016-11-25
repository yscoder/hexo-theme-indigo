function renderImage(src, title) {
    return `<figure class="image-bubble">
                <div class="img-lightbox">
                    <div class="aspect-ratio">
                        <div class="placeholder"></div>
                        <img src="${src}" alt="${title}">
                    </div>
                </div>
                <div class="image-caption">${title}</div>
            </figure>`
}


hexo.extend.tag.register('image', ([src, title]) => {
    return renderImage(src, title)
})

hexo.extend.filter.register('before_post_render', data => {
    data.content = data.content.replace(/\!\[(.*)\]\((.+)\)/gmi, (match, title, src) => {
        const attrs = src.split(' ')
        title = title || (attrs[1] && attrs[1].replace(/\"|\'/g, '')) || '未定义'
        return `{% image ${attrs[0]} ${title} %}`
    })
    return data
})
