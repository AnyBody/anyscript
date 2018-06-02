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


Graphical user interfaces (GUIs) enables easy and intuitive interaction between
users and computer software. But GUIs may also hamper the flexibility and make
the software less powerful. Hence, many powerful software tools are based on
scripts, text and code. This is also the case of the AnyBody Modeling System.
AnyScript is the language in which models are constructed.

One of the first things I also did when starting to use the AnyBody Modeling
System, was to understand how to configure the human model. How to enable different body parts and how to set the available options for muscles, ligaments
etc. The model is configured via AnyScript by defining switches
which we call Body Model (BM) statements.

{% highlight AnyScriptDoc %}
{% raw %}
#define BM_ARM_RIGHT ON
{% endraw %}
{% endhighlight %}

Wouldn’t it be nice to configure the model by having some buttons and
instantaneous visual feedback as well? That is what I thought! Therefore, I have
developed a software which provides a GUI for configuring the
Body Model in a more friendly manner and without trying to give up the
flexibility of AnyScript.

{% capture BM_Plugin_Demo %}
![BM_Plugin_Demo]({{ "/assets/images/posts/BM_Plugin_demo.gif" | absolute_url }})
{% endcapture %}

<figure>
  {{ BM_Plugin_Demo | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>BM Plugin: gives you the ability to visually configure the Body Model.</figcaption>
</figure>

This software (called 'BM-Plugin') comes as an extension for the AnyBody
Modeling System. The layout is pretty straight forward, so you will not have a
hard time finding your way around it. The available adjustments for the Body
Model are classified in 6 tabs (Body, Arms, Trunk, Legs, Scaling, Mannequin
Drivers). The adjustments which could not be classified in any of the tabs can
be found in the ‘Advanced Tab’.

## Installation

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
