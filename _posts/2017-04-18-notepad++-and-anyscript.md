---
title: "Notepad++ and AnyScript files"
excerpt: "In this post, I will show an extension to get syntax highlighting and code folding working for Notepad++."
modified: 2017-04-19T13:01:51+02:00
author: mel
header:
  teaser: "assets/images/posts/npp-teaser.png"
categories:
  - Editors
tags: 
  - Syntax highlighting
---

In this post, I will show an extension to get syntax
highlighting and code folding working for
[Notepad++](https://notepad-plus-plus.org/). This the first post in a series on using external editors with the AnyBody
Modeling System.

## Why another editor?

I shall be the first to admit that the editor in the AnyBody Modeling System
(AMS) can feel very limited at times. It does have some crucial features like
integration with the model tree. Even though some of these functions are
indispensable when debugging models, the features of the editor in itself are
pretty basic.


So when I write, edit or format AnyScript code I look for something more
productive. Luckily, there are much more powerful alternatives available. Maybe
you have heard about trending editors like [Atom](https://atom.io/), [Sublime
Text](https://www.sublimetext.com/), [VS Code](https://code.visualstudio.com/)?
Or perhaps a bit older options like [notepad++](https://notepad-plus-plus.org/)?
All are text editors which many developers couldn't live without.

Modern text editors have become popular for very good reasons. They are fast,
lightweight, and powerful and they are not limited to a particular programming
language like most integrated developer environments (IDE). If you ever used
some of these powerful text editors, it can be hard to live without the features
they provide.

# AnyScript support in Notepad++

Notepad++ was my favorite text editor for many years and I often still use it.
It is fast and works well on Windows. To enable AnyScript support in Notepad++
you need to the install AnyScript language extension.

You can find the extension on [GitHub](https://github.com/AnyBody/notepad-plus-plus-anyscript),
or download it here directly:

[<i class="fa fa-download"></i> Download AnyScript
Notepad++](https://github.com/AnyBody/notepad-plus-plus-anyscript/raw/master/anyscript.xml){:
.btn .btn--success .btn--large}

Save the file `AnyScript.xml` to your computer. Open Notepad++ and select the menu: "Language"->"Define your language" and click import...

![image](https://cloud.githubusercontent.com/assets/22542671/20790053/f6378fe6-b7b6-11e6-9379-3d6b2f6f9b49.png)

With the extension in place AnyScript code will highlight correctly, and braces
will match up. And it is possible to collapse pairs of braces `{`/`}`, as well
as pairs of `#if`/`#endif`. That is huge advantage when working with very big
AnyScript files.


### Why is Notepad++ usefull

The main benefits are:

+ Effective search replace with regex
+ Code folding
+ Syntax highlighting
+ Macro recording/playback
+ [Multi editing](http://notepad-plus-plus.org/features/multi-editing.html)
+ Document map

To really understand the power of notepad++ see this example of column mode editing:

{% capture column_edit %}
![column mode editing](https://cloud.githubusercontent.com/assets/22542671/20789877/5b5ba2b4-b7b6-11e6-991a-1f85db8522a0.gif)
{% endcapture %}

<figure>
  {{ column_edit | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>The ability to write at multiple cursors or select a column of text is fantastic.</figcaption>
</figure>

