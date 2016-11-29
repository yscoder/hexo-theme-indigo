const version = require('../package.json').version
hexo.extend.helper.register('theme_version', () => version)

function renderImage(src, alt = '', title = '') {
    return `<figure class="image-bubble">
                <div class="img-lightbox">
                    <div class="overlay"></div>
                    <img src="${src}" alt="${alt}" title="${title}">
                </div>
                <div class="image-caption">${title || alt}</div>
            </figure>`
}

hexo.extend.tag.register('image', ([src, title]) => {
    return renderImage(src, title)
})

hexo.extend.filter.register('before_post_render', data => {

    // 包含图片的代码块 <escape>[\s\S]*\!\[(.*)\]\((.+)\)[\s\S]*<\/escape>
    // 行内图片 [^`]\s*\!\[(.*)\]\((.+)\)([^`]|$)
    data.content = data.content.replace(/<escape>.*\!\[(.*)\]\((.+)\).*<\/escape>|([^`]\s*|^)\!\[(.*)\]\((.+)\)([^`]|$)/gm, match => {

        // 忽略代码块中的图片
        if (/<escape>[\s\S]*<\/escape>|.?\s{3,}/.test(match)) {
            return match
        }

        return match.replace(/\!\[(.*)\]\((.+)\)/, (img, alt, src) => {
            const attrs = src.split(' ')
            const title = (attrs[1] && attrs[1].replace(/\"|\'/g, '')) || ''
            return `{% image ${attrs[0]} ${alt} ${title} %}`
        })
    })
    return data
})
