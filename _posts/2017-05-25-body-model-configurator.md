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

In the remainder of this post I will show you what the plugin is able of and a little bit of technicalities.

## How to get and use BM-Plugin

BM-Plugin comes integrated with AMMR v2.2(???) and it is available starting with AMS v7.2(???). All you have to do is to make sure that
you have these versions or later available on your computer. You can find more information about how to get the latest AMMR 
[here](https://anyscript.org/editors/anyscript-in-vscode/). Once you make sure that you have the latest version of AMS and AMMR installed,
load your model which contains the `HumanModel`:

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


To use the BM-Plugin, you must have installed the Anaconda Python distribution
which you can find it [here](https://www.continuum.io/downloads). Make sure to
install python 3.6. Open an Anaconda terminal and execute:

```bash
conda install --channel anybody bm-plugin
```

If the command is not working, you might need to run the terminal as Administrator.
After the installation you can find the application in the Windows start menu. 

`Start->AnyBody plugins->Body Model Configurator`

The Plugin modifies an AnyScript (`.any`) file and stores the configuration as 
BM statements inside it. Once you open the plugin, it will ask you
to choose an existing `.any` file. You can 
also use the tool on your existing model. Just choose the file where you have your
BM-statements.

{% capture Any_file %}
![Any_file]({{ "/assets/images/posts/Any_file.JPG" | absolute_url }})
{% endcapture %}

<figure>
  {{ Any_file | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Choose the .any file with which the plugin will interact.</figcaption>
</figure>

The absolute path of the `.any` file has to be included in your model:

{% highlight AnyScriptDoc %}
#include BM_configuration.any
{% endhighlight %}

Be sure to include it before the `HumanModel.any` is included. Otherwise the configuration will
have no effect.
{: .notice--warning}

{% capture Include_Plugin %}
![Include_Plugin]({{ "/assets/images/posts/Include_Plugin.JPG" | absolute_url }})
{% endcapture %}

<figure>
  {{ Include_Plugin | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Include the .any file in AnyBody</figcaption>
</figure>

The plugin modifies only the BM statements in the .any file, and shouldn't mess
with formatting of the file. Therefore, you may have other stuff in it. Any new
BM statements are added at the end of the file, but are free to manually format
the file.

## Usage

As I said before, the plugin is very easy to use and it offers an alternative to
writing AnyScript for configuring the Body Model. You will see that there is a
level of interdependency between different available options. So the
combinations of adjustments which cannot be compiled by the AnyBody Modeling
System will not be possible to select in the Plugin. However, in the Advanced tab
you are allowed to choose any combination of BM
statements you desire. Descriptions for each BM statement and for their available options are provided in this tab.

{% capture Adv_tab %}
![Adv_tab]({{ "/assets/images/posts/Adv_tab.JPG" | absolute_url }})
{% endcapture %}

<figure>
  {{ Adv_tab | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>The advanced tab of the plugin.</figcaption>
</figure>

The grid in the Advanced tab is populated using the `.xml` file located in AMMR
where all the BM statements can be found. Every time you run the plugin, it
will check that `.xml` file for any changes and it will update the grid in
advanced tab with any new BM statements it finds. The `.xml` file is in the installation
files of the plugin.

## Further development:

To make this plugin as attractive as possible, a number of new cool things will
be added in the feature and I am already working on them:

*	Connection with AnyBody: in order to give the possibility of opening the
plugin directly from AnyBody, to load the model by pressing a button in the
plugin and to automatically add the include line where it has to be in the Body
Model’s script;

*	Add control over Body parameters like Weight and Height (these are not BM statements);

*	Integrate the plugin with AMMR to be up to date with the latest BM statements;

*	Add the possibility for the user to add their own GUI elements linked to custom BM statements.

Now I think you know enough about the plugin to try it yourself, so what are you waiting for?

Any development suggestions and feedback are more than welcomed!
