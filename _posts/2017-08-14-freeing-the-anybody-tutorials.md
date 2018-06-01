---
title: "Freeing the AnyBody Tutorials"
excerpt: "Anyone, who works with AnyBody modeling system has at one time used the the AnyBody tutorials. They are a valuable resources when learning to use
the AnyBody Modeling System"
modified: 2017-11-24T11:06:10+01:00
author: mel
header:
  teaser: "assets/images/posts/tutorials_teaser.png"
categories:
  - news
tags: 
  - Tutorials
  - Sphinx
---

Anyone, who works with AnyBody modeling system has at one time used the AnyBody
tutorials. They are a valuable resource when learning to use the AnyBody
Modeling System and there are more than 15 different tutorials covering
everything from 'Getting Started' tutorials for the new users to very advanced
topics like force dependent kinematics and FEA interfaces.


Today, we are releasing a new [web based version](https://anyscript.org/tutorials) of the tutorials. 


{% capture new-tutorials %}
![New tutorials website]({{ "/assets/images/posts/tutorials_new_tutorial.png" | absolute_url }})
{% endcapture %}

<figure>
  {{ new-tutorials | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>The new tutorials</figcaption>
</figure>


## A little history

The tutorials used to live as compiled HTML (CHM), a binary format for a
documentation system called Microsoft HTML Help. You find this kind of help
resources in many older Windows Programmers. 

{% capture ms-html-help %}
![Old tutorials hosted as Microsoft HTML help]({{ "/assets/images/posts/tutorials_old_tutorial.png" | absolute_url }})
{% endcapture %}

<figure>
  {{ ms-html-help | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>The old Tutorials served through Microsoft HTML help</figcaption>
</figure>

Today it may look old fashioned, but it was the best choice for distributing
documentation in 2003 when the first version of AnyBody emerged. 

Microsoft has since discontinued the HTML Help system. Today there are much
better options for software documentation which makes it easier to both use the
tutorials and maintain them.


## Sphinx for software documentation

[Sphinx](http://www.sphinx-doc.org/en/stable/) is a tool for generating software
documentation. The Python community originally developed it for creating the
documentation for the Python programming language. Today it is widely used in
many different domains. The Linux community recently (2016) chose Sphinx as the
new documentation system for the Linux kernel. Sphinx is well maintained and
actively developed, and very easy to use.

Sphinx converts reStructuredText files into HTML, pdf, epub or other formats.
reStructuredText is simply plain text files with extra simple markup to define
headers and other types of formatting.

A reStructuredText file could look like this: 

```

Lesson 2: Advanced Concepts
===========================

Open the model from lesson 1 and change the following lines:

.. code-block:: AnyScript

    InverseDynamics.Criterion = {
      Type = §MR_Polynomial§;
    };

Now we have specified polynomial muscle recruitment, which 
comes down to the following objective function:

.. math:: G = \sum_{i} \left( \frac{f_i}{N_i} \right)^p

We have not, however, specified what the power *p* is. In the
absence of a specification, AnyBody assumes *p* = 3, If we 
reload and rerun the model now, we get the following result:

.. figure:: _static/lesson2/chart1.png
   :scale: 50 %
   
   Results with 5 order Polynomial muscle criterion.

``` 

Having the tutorials as plain text, may at first seem like a disadvantage. The
AnyBody tutorials are currently stored as Word documents. But reStructuredText
has many advantages as well.

- Better control of formatting and style
- Easier tracking of updates and changes
- Pictures and images live outside the document
- Makes it easier to accept contribution from users

Finally, MS Word can still be used when writing new tutorials. The `*.docx` file
can be converted into reStructured text using the [Pandoc](https://pandoc.org/)
document converter. Pandoc can convert tables, any formatting, embedded images
into reStructuredText. Pandoc even converts equations from MS Word into Latex
style formulas which work in reStructuredText files.


# Hosting tutorials on GitHub

The new source files for tutorials are hosted on the AnyBody Github account togehter with the build HTML files.

- **Source files:** [https://github.com/AnyBody/anybody-tutorial](https://github.com/AnyBody/anybody-tutorial)

- **Web page:** [https://anyscript.org/tutorials/dev](https://anyscript.org/tutorials)


Contributions are always welcome! So if you find typos, missing links or
anything else help us fix it. It is easy. Just fork [the repository on
GitHub](https://github.com/AnyBody/anybody-tutorial>), make the changes, and
issue a pull request. 

Every pull request is automatically tested, to ensure that Sphinx builds the
tutorials without errors. This done using [Travis
CI](https://en.wikipedia.org/wiki/Travis_CI) 

- See status of the Travis CI build: [![Build
  Status](https://travis-ci.org/AnyBody/anybody-tutorial.svg?branch=master)](https://travis-ci.org/AnyBody/anybody-tutorial).

Once a change is accepted and merged into the repository the script also
automatically deploys the tutorial web page.








