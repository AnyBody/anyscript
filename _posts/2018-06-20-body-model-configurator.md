---
title: "Body Model Configuration App"
excerpt: "This introduces a python application to help configure your model."
hidden: true
sitemap: false
layout: single
author: ms
header:
  teaser: "assets/images/posts/BM_Plugin_teaser.JPG"
categories:
  - Tools
tags:
  - Model configuration
  - BM switches
---


One of the first things I did when starting to use the AnyBody Modeling
System, was to understand how to configure the human model. This means enabling and disabling different body parts and setting up the available options for muscles, ligaments
etc. The model is configured via AnyScript by defining switches
which we call Body Model (BM) statements.

{% highlight AnyScriptDoc %}
{% raw %}
#define BM_ARM_RIGHT ON
{% endraw %}
{% endhighlight %}

Wouldn’t it be nice to configure the model by having some buttons and
instantaneous visual feedback as well? That is what I thought! Therefore, I have
developed a software which provides a graphical user interface (GUI) for configuring the
Body Model, called BM-Plugin. By using it, you will be able to configure your human model in a more friendly manner but without trying to give up the
flexibility of AnyScript. 

{% capture BM_Plugin_Demo %}
![BM_Plugin_Demo]({{ "/assets/images/posts/bm_config_bmdemo.gif" | absolute_url }})
{% endcapture %}

<figure>
  {{ BM_Plugin_Demo | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>BM Plugin: gives you the ability to visually configure the Body Model.</figcaption>
</figure>

BM-Plugin has in target both beginner and advanced AMS users. If you have little to no experience using
AnyScript, the BM Plugin will help you a lot in getting started with it and to understand how switches and BM statements work. 
If you are an advanced AMS user, you will find configuring your human model much easier and much faster by using the plugin. And don't worry
about loosing your freedom with AnyScript! BM Plugin is not meant to replace it, it is meant to write it for you, so it saves you time.

In the remainder of this post I will show you what the plugin is able of doing and some technicalities.



## How to get and use BM-Plugin

BM-Plugin comes integrated with AMMR v2.2(???) and it is available to use in AMS starting with version v7.2(???). All you have to do is to make sure that
you have these versions or later available on your computer. You can find more information about how to get the latest AMMR 
[here](https://anyscript.org/getting-started/). Once you have everything ready,
load your model containing the `HumanModel`:

{% highlight AnyScriptDoc %}
{% raw %}
#include "<ANYBODY_PATH_BODY>/HumanModel.any"
{% endraw %}
{% endhighlight %}

and if everything is fine, you should be able to start the BM-Plugin by clicking the button marked in the figure below:

{% capture BM_Plugin_1 %}
![BM_Plugin_1]({{ "/assets/images/posts/bm_config_image1.png" | absolute_url }})
{% endcapture %}

<figure>
  {{ BM_Plugin_1 | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Load your model and start the plugin by only clicking a button.</figcaption>
</figure>

## Using BM-Plugin

The BM-Plugin is structured in a number of tabs, each of them giving you options
to adjust the configuration of different body parts while providing visual
feedback if available. These tabs are: `Body`, `Legs`, `Arms`, `Trunk` and
`Mannequin Drivers`. Once the desired configuration is set, you can load it in
AMS by clicking `Apply` or `OK`. The difference is that by clicking `Apply`
the Plugin will stay open for you to configure the model further. When `OK` is clicked, the configuration is saved in a history file which is available in the `Apply History` drop menu, next to the `Apply` button. It is therefore possible to load a previous configurations of the model.

{% capture BM_Plugin_Tabs %}
![BM_Plugin_Tabs]({{ "/assets/images/posts/bm_config_tabs.gif" | absolute_url }})
{% endcapture %}

<figure>
  {{ BM_Plugin_Tabs | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>The 'Body', 'Legs', 'Arms', 'Trunk' and 'Mannequin Drivers' tabs.</figcaption>
</figure>

Of course, not all BM statements have a visual representation in the AMS Model View or are directly related to physical body parts. Therefore, the BM statements which were not classified in the tabs mentioned before can be found and modified in the `Advanced` tab. 

By having the presented overview of the Plugin, you should be ready to use it now. However, if you are interested in finding some details about how it works behind scenes the too, continue reading.

## How BM-Plugin works

As stated in the introduction, the BM-Plugin is dependent on the `HumanModel`. Therefore, every time you start the plugin, it will check your `.main.any` file to determine if it is included. If it is, the Plugin will create a new file named `BodyModelConfiguration.any` inside the `Model` folder next to your `.main.any` file. The plugin will then ask you if you allow it to include this file inside the main file (I recommend that you do):

{% highlight AnyScriptDoc %}
{% raw %}
#include "Model/BodyModelConfiguration.any"
{% endraw %}
{% endhighlight %}

The plugin will store and modify all the needed BM statements for your model inside the `BodyModelConfiguration.any` file. I encourage you to use this file to store the BM statements regardless if you use the plugin frequently or not. You will also find that most of the examples using the `HumanModel` have this structure implemented and they are ready to be configured using the BM-Plugin.

The Configuration file can be seen inside the plugin under the `Script File` tab:

{% capture BM_Plugin_Script %}
![BM_Plugin_Script]({{ "/assets/images/posts/bm_config_script.png" | absolute_url }})
{% endcapture %}

<figure>
  {{ BM_Plugin_Script | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>The `Script File` tab.</figcaption>
</figure>




Now I think you know enough about the plugin to try it yourself, so what are you waiting for?

Any development suggestions and feedback are more than welcomed!
