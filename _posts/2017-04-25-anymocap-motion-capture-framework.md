---
title: "AnyMoCap: A model framework motion caputure based models"
excerpt: >
      Creating motion caputure based models is difficult. 
      But this often what new users want to start out working on.
layout: single
author: mel
hidden: true
sitemap: false
math: false
header:
  teaser: "assets/images/posts/anymocap_teaser.png"
categories:
  - AnyMoCap
tags:
  - Motion Capture
---

The AnyMoCap model is an effort to create a simple and unified framework for
doing any kind of mocap analysis with the [AnyBody Modeling
System](http://anybodytech.com).

This is first post in  a series on the AnyMoCap framework. In a series posts I
will show how to use the frame and presents some of the features that makes it
much easier to do motion capture based modelling.

Current motion caputure model examples in the [AnyBody Managed Model Repository
(AMMR)](http://anybodytech.com/software/ammr) are releative complex and quite
difficult to understand for new users.

The reason is that the MoCap models are different from the other examples models
in the AMMR. Most importantly, MoCap models usually require an over-determinate
kinematic solver to handle the excess in information that the optical markers
provide. The over-determinate solver in AMS works great, but it can only find
velocities and accelerations numerically. That has some performance issue when
running inverse dynamics analysis. To overcome the problem, the MOCAP analysis
is split into a two-step producedure. The two steps are 'Marker tracking' and 
'Inverse dynamic analysis' on the figure below:

![Model-structure](https://cloud.githubusercontent.com/assets/1038978/24096596/92051708-0d62-11e7-9cdd-360fc4b28339.png){: .align-center}

The overdeterminate kinematic analysis solves the marker tracking problem, and
writes joint angles to a a set of files. These joint angles can then be used
with the determinate kinematic solver in the inverse dynamic analysis.

## Model structure.

The AnyMoCap framwork contains two main folder `Examples` and `Model`. 

```
AnyMoCap/ 
├───Model/
├───Examples/ 
│   ├───Plug-in-gait-FullBody/
│   ├───Plug-in-gait-LowerExtremity/
│   └───SpecialFeatures/
```
    
The core of the framework is located under `Model/`. The core files will
eventually become part of the AMMR, and you shouldn't need to change these files
unless you want to help improve the AnyMoCap framework (See "Contributing"
below.)

The `Examples/` folder contains examples of how to use the framework. Thre are
currently two full blown examples of how to create a FullBody and LowerExtremity
model with the Plug-in-Gait marker protocol. Other examples with other marker
protocols will come soon. The `SpecialFeatures/` folder contain small examples
on specific features of the framework.

Examples are self-contained and could be locaated anywhere as long they have a
valid reference link to where the AnyMoCap model is located on your computer.

## Usage







