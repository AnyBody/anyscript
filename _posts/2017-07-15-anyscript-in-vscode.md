---
title: "AnyScript support in Visual Studio Code"
excerpt: "Visual Studio Code is currently my favorite editor, so it natural that it should also support AnyScript."
modified: 2017-07-15T23:00:10+01:00
layout: single
author: mel
header:
  teaser: "assets/images/posts/vscode-teaser.png"
categories:
  - Editors
tags:
  - Syntax highlighting
  - Visual Studio Code
---

[Visual Studio Code](https://code.visualstudio.com/)(VS Code) is one of the newest text
editors to join the group of new powerful source code editors like [Atom](https://atom.io/),  [Sublime Text](https://www.sublimetext.com/) and [brackets](http://brackets.io). All of which have become extremely popular in recent years.

Visual Studio Code  is currently my favorite text editor. It is cross-platform, lightweight, extensible and powerful. So of
course I want to use it when working with AnyScript. In this post I will show a new
AnyScript extension for VSCode, that does syntax highlighting, code folding,
and snippets. 

This is the second post in our series on using external editors for AnyScript.
[In the first post]({{ "" | absolute_url }}{% post_url 2017-04-18-notepad++-and-anyscript %}))
I showed a handy extension for [Notepad++](https://notepad-plus-plus.org/),
so if you use Notepad++ check that post. 

## Visual Studio Code
Visual Studio Code or VS Code is a source code editor developed by Microsoft for
both Windows, Linux and MacOS. It is free, open source and includes a lot of
advanced features for working with source code. It is also very customizable so 
users can change themes, keyboard shortcuts and much more. 

{% capture UI_figure %}
![VSCode]({{ "/assets/images/posts/vscode_screenshot.png" | absolute_url }})
{% endcapture %}

<figure>
  {{ UI_figure | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Screenshot from Visual Studio Code, with AnyScript syntax highlighting.</figcaption>
</figure>

VS code looks a little different from traditional Windows programs, but it is
easy enough to use. The simple looks deceives. VS Code has all the same features
as for example [Notepad++](https://notepad-plus-plus.org/), and if you miss a certain feature VS Code has a good extension system. So the chances are
that there is a user contributed extension to help your specific need. 

## AnyScript Extension
In the screen shoot above shows a file with AnyScript syntax highlighting. Highlighting in AnyScript files works as soon as the AnyScript extension is installed. It is easy to install. Just click the extension icon at the bottom of left sidebar and
search for AnyScript. Then click install.

{% capture Install_figure %}
![VSCode]({{ "/assets/images/posts/vscode_extension_install.png" | absolute_url }})
{% endcapture %}

<figure>
  {{ Install_figure | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Installing the AnyScript extension.</figcaption>
</figure>


### Syntax highlighting and code folding

Once the extension is installed the all AnyScript files will have highlighting.

THe plugin also gives you code folding, which allows you to collapse classes and
folders. A feature which is really handy when working on large files. 

![VSCode code folding]({{ "/assets/images/posts/vscode_folding.png" | absolute_url }})

VS hCode supports code snippets which are templates that makes it easier to write
repeating code patterns. This part isn't fully supported by the extension yet.
But I have added few snippets for the following classes and functions:
`AnyDrawRefFrame`, `AnyRefNode`, `RotMat`, `AnyFunConst`,  `AnyFolder`,
`AnyKinMeasureOrg`, `AnyKinRotational`. 

The snippet inserter is activated by pressing `ctrl-shift-P` and then writing
`insert snippet`. Note: you need to be in a AnyScript file to get the AnyScript
snippets. 

Snippets can also be inserted using the tab completer. So if you start to type
the name of the class e.g. `AnyDrawRe` and press tab the snippet is inserted. 

![VSCode code folding]({{ "/assets/images/posts/vscode_snippets.gif" | absolute_url }})

The snippets are just meant as a test, but hopefully we can have snippets for all the AnyScript classes in the future.

### Help make the extension better

Here is an link to page where the extension live:
https://github.com/AnyBody/vscode-anyscript. Any improvements and help is most
appreciated. 