# piper
node command line text processing used to capture content with Obsidian

test with
```
piper -t json https://twitter.com/jappleby/status/1541536474365149190
```
you should see

```
{
  url: 'https://twitter.com/jappleby/status/1541536474365149190',
  author_name: 'Jack Appleby Γÿò∩╕Å',
  author_url: 'https://twitter.com/jappleby',
  html: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I am a 33 year old man and this is my full-time job. <a href="https://t.co/Xd8xdS3Q0O">pic.twitter.com/Xd8xdS3Q0O</a></p>&mdash; Jack Appleby Γÿò∩╕Å (@jappleby) <a href="https://twitter.com/jappleby/status/1541536474365149190?ref_src=twsrc%5Etfw">June 27, 2022</a></blockquote>\n' +
    '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\n',
  width: 550,
  height: null,
  type: 'rich',
  cache_age: '3153600000',
  provider_name: 'Twitter',
  provider_url: 'https://twitter.com',
  version: '1.0',
  parsed: '> I am a 33 year old man and this is my full-time job. [pic.twitter.com/Xd8xdS3Q0O](https://t.co/Xd8xdS3Q0O)\n' +
    '> \n' +
    '> ΓÇö Jack Appleby Γÿò∩╕Å (@jappleby) [June 27, 2022](https://twitter.com/jappleby/status/1541536474365149190?ref_src=twsrc%5Etfw)'
}
```

## Use with Shell Command on Obsidian

Currently only works for tweeter urls.

You can try with this URL: https://twitter.com/jappleby/status/1541536474365149190

Copy this url so it's in the clipboard then invoke the shell command to see the result. You should have a note open in edit mode in obsidian.

set the output of shell command for stdout as "current file: caret position" and stderr as ignore

Some useful commands to try:

output parsed tweet content
```
piper {{clipboard}}
```


output the html with code guard around it:

```
piper -t html -o code {{clipboard}}
```

output everything piper returns in json format with code guard around it

command for shell command:

```
piper -t json -o code {{clipboard}}
```

