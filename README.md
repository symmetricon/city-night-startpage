# City Night Start Page

![Imgur](https://i.imgur.com/e9F4YBo.png)

## Background Image credit
[Yuting Gao](https://www.pexels.com/@leofallflat)

[image](https://www.pexels.com/photo/people-walking-near-concrete-buildings-1557547/)


## Use

copy dist folder, place and rename it however you see fit.

see [configure links] for customization 



## Configure Links

configuration via ```JSON``` found in ```dist(or w.e you named it)/src/links-config.json```

### JSON structure
```
{
    category": "category 1",
    linksArr: [
        {
            "linkName": "Link 1",
            "url": "https://url-for-link-1"
        },
        {
            "linkName": "Link 2",
            "url": "https://url-for-link-2"
        }
    ]
},
{
    category": "category 2",
    linksArr: [
        {
            "linkName": "Link 1",
            "url": "https://url-for-link-1"
        },
        {
            "linkName": "Link 2",
            "url": "https://url-for-link-2"
        }
    ]
}
```
### by example
see Programming Resources column in screenshot

```
{
    category": "Programming Resources",
    linksArr: [
        {
            "linkName": "MDN",
            "url": "https://developer.mozilla.org/"
        },
        {
            "linkName": "Hoogle",
            "url": "https://hoogle.haskell.org/"
        },
        {
            "linkName": "Hacker Noon",
            "url": "https://hackernoon.com/"
        }
}
```

## backdrop-filter support for blur effect
in firefox this feature requires a little digging to get working(doesnt change the page too much without it... the links will just be transparent without the background bluring behind them)

[Look for firefox support](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)

these need to be set to true in firefox about:config

- layout.css.backdrop-filter.enabled
- gfx.webrender.all

## Dev

start dev server: ```npm run dev```

port and host set in ```.env```

