---
title: "Create Animated GIFs"
excerpt: "If a picture is worth a thousand words. What is the value of an animated GIF?"
modified: 2017-04-11T21:26:10+01:00
author: mel
header:
  teaser: "assets/images/posts/gif-teaser.gif"
categories:
  - Tips-n-Tricks
tags: 
  - Creating Videos
---

If a picture is worth a thousand words. What is the value of an animated GIF? 

If anyone knew the answer to this question it was 
[Eadweard Muybridge](https://en.wikipedia.org/wiki/Eadweard_Muybridge) 
who was an 19th century photographer and the grandfather of today's
biomechanical scientists. He used sequences of photographs to analyze human and
animal motion. At Muybridge's time the work created lots of attention, and even
today his short animations are iconic.

{% capture muybridge_gif %}
![Muybridge animated horse]({{ "/assets/images/posts/gif_muybridge_horse.gif" | absolute_url }})
{% endcapture %}

<figure>
  {{ muybridge_gif | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Galloping horse by Eadweard Muybridge.</figcaption>
</figure>


[In a previous post]({{ "" | absolute_url }}{% post_url 2017-03-27-creating-videos-from-your-simulations %})
I introduced an AnyScript class-template to create awesome
videos of your musculoskeletal simulations with a single click. But sometimes
videos are just not enough. 

If we want something that loops continuously and runs
automatically, then we must create animated GIF files. Small animations
accomplish something, which Eadweard Muybridge discovered long ago. They
immediately convey the message and spell bind the viewer by allowing them 
to dwell on the details.

## New feature to create animated GIFs

Today I just added a new feature to the video plugin. The ability to create good
looking GIF files directly from the video. After producing the video, it can be converted into a GIF file. Just run the operation `Operations.Convert_video_to_animated_gif`

![Convert GIF operation]({{"/assets/images/posts/gif-convert-operation.png" | absolute_url }})
{: .full}

Creating good looking GIF is more tricky than it may seem. The number of
possible colors is limited to 256 in a GIF file. Thus, it is important to
specify a color palette, otherwise, the image quality will suffer.

The video plugin uses [**FFmpeg**](https://ffmpeg.org/) in two passes. The first
pass generates a global color palette from the entire video. The second pass
encodes the GIF file with the generated palette. You can read more on the
approach in this [excellent blog post](http://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html)

The video plugin does not create animated GIF  by default. For several reasons. Not all
videos work well as an animated GIF file, and GIF files can take up a lot of space.
But if you want to avoid the manual step, when generating the GIF file add the
`CREATE_GIF=1` argument to the AnyScript class template:

{% highlight AnyScriptDoc  %}
{% raw %}
  VideoLookAtCamera  MyCam (UP_DIRECTION = y, CREATE_GIF = 1) = 
  {
       CameraLookAtPoint = Main.MyModel.Femur.Knee.r;  
       CameraFieldOfView  = 1;
       CameraDirection  = {1, 1, -1};
       BackgroundColor = {1, 1, 1};
       VideoInputFrameRate  = 10;
       VideoResolution = {1920, 1080};
       Analysis = {
          AnyOperation &ref = Main.MyStudy.Kinematics;
       };
  };
{% endraw %}
{% endhighlight %}

### Find the code on GitHub

The AnyScript template is [hosted on GitHub](https://github.com/AnyBody/video-recorder), 
where you can also find a few examples that show how it works. The repository also has
documentation on the `class_template` and its options.

{% capture humanGif_img %}
![Human gif file]({{ "/assets/images/posts/video_human.gif" | absolute_url }})
{% endcapture %}

<figure>
  {{ humanGif_img | markdownify | remove: "<p>" | remove: "</p>" }}
  <figcaption>Animated GIF file, where the camera is spinning around the model.</figcaption>
</figure>