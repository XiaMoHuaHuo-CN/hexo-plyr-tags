const depend_text = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.2/plyr.min.css"><script src="https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.2/plyr.min.js"></script>`;

hexo.extend.injector.register('head_end', depend_text, "default");

hexo.extend.tag.register(
    'pvi',
    require('./lib/scripts/tag/video'), 
    {
        ends: true
    }
);