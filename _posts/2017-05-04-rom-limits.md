---
title: "Add limits to the Range of Motion"
excerpt: "In this post you will see how to add range-of-motion limits to your simulations."
author: st
sitemap: false
hidden: true
header:
  teaser: "assets/images/posts/rom-limits_teaser.png"
categories:
  - tools
tags: 
  - kinematics
  - joints
---

In this post, I will show a new AnyScript class template to add range-of-motion
limits to Human body model.

The implementation consist of two AnyScript class templates. A high
level class template `RangeOfMotionLimits` which makes it easy to add
Range-of-motion limits to all the joints on the Musculoskeltal model.

Behind the scenes the high-level template uses a more generic low-leve template
`KinLimitsDriver`, which can add limits to any kinematic measure.


## Usage: 

To use the high level class template `RangeOfMotionLimits` you must first 
include the file in which it is defined. 

Add `#include "../path/to/RangeOfMotionLimits_template.any"` in the beginning
of your main file. Then create the `RangeOfMotionLimits` class inside Main after 
the human model is included in the model:

{% highlight AnyScriptDoc  %}
{% raw %}
#include "../path/to/RangeOfMotionLimits_template.any"

Main = {

  // It is important that the human model is include
  // before the JointLimit template. This is to ensure
  // that all BM statements are defined.
  #include "<ANYBODY_PATH_BODY>/HumanModel.any"


  RangeOfMotionLimits ROM_Limits(
      ARM_RIGHT = BM_ARM_RIGHT,
      ARM_LEFT = BM_ARM_LEFT,
      LEG_RIGHT = BM_LEG_RIGHT,
      LEG_LEFT = BM_LEG_LEFT,
      TRUNK_NECK = BM_TRUNK_NECK
   ) = {
      // Example of changing af few of the limits
      Limits.Trunk.PelvisThoraxExtension = {-90, 90};
      Limits.Right.ElbowPronation = {-90, 90};
   }; 
      

{% endraw %}
{% endhighlight %}

If some joint should not have range of motion limits, the class accepts
arguments for disabling individual joint limits:

{% highlight AnyScriptDoc  %}
{% raw %}
  RangeOfMotionLimits RoMLimits(
    PELVIS_THORAX_LATERAL_BENDING = "Off"
    ... 
{% endraw %}
{% endhighlight %}


### Find the code on GitHub

The AnyScript template is [hosted on GitHub](https://github.com/AnyBody/range-of-motion-limits),
where you can find examples and documentation on the
`class_template` and the options which are available.
