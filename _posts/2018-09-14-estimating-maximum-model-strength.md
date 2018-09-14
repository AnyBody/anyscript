---
title: "Getting the maximal strength of your model!"
excerpt: "In this post you will see how to find the maximum strength of model."
author: bkj
modified: 2018-09-14T14:24:32+02:00
sitemap: false
hidden: true
header:
  teaser: "assets/images/posts/max-strength_teaser.png"
categories:
  - tools
tags: 
  - strength
  - muscle
---

When working with subject specific scaling of models, it can be a
valuable tool to know what the strength of your model is for a given
posture. This post will show you a way of calculating the maximal
strength of a simple 2D arm model in various postures. The concepts
presented can of course be extended to models involving the full body
model or parts of it.

<figure>
  <img src="/assets/images/posts/max-strength_simple-arm.png" alt="Model of a simple arm">
  <figcaption>Fig. 1</figcaption>
</figure>

For us to do this we first need to setup an example model. The
model is a 2D arm model comprised of an upper and lower arm segment,
attached with 8 simple muscles (fig. 1). The model is constraint to only
allow movement in the global x and y direction. This allows us to impose
movements which resembles flexion and extension of the shoulder and
elbow joint. Since we want to show a general way of calculating the
strength, we setup four load scenarios to mimic a flexion, extension,
push, and pull movement. Since we want to investigate maximum strength,
we need to be sure that the muscles are recruited appropriately. This is
done by switching to the `MinMax_Strict` muscle recruiter.


The first step in finding the default max strength for a posture is the know the
relationship between load and max muscle activity ($mmact$). We do this by
implementing a parameter study to investigate the $mmact$ across a spectrum of
loads. This is done using the AnyParamStudy class as seen below: 


{% highlight AnyScriptDoc  %}
{% raw %}
  AnyParamStudy StrengthEval = 
  {
    Analysis = {AnyOperation& Opr = ..ArmStudy.InverseDynamics;}; 
    nStep = {100};

    AnyDesVar load = 
    {
      Val = Main.ArmModel.Loads.Dumbbell.load;
      Min = -200;
      Max = 300;
    };

    AnyDesMeasure objfun = 
    {
      Val = (max(Main.ArmStudy.MaxAct())-1)^2;
    };
    AnyDesMeasure maxact = 
    {
      Val = max(Main.ArmStudy.MaxAct());
    };
    AnyDesMeasure maxs = 
    {
      Val = Main.ArmStudy.MaxStrength()[0];
    };
};
{% endraw %}
{% endhighlight %}


This study runs our model through the loads defined in the $load$ variable. So, in this
example it does 100 steps where it starts at -200 N and stops at 300 N. This
enables us to plot the $mmact$ as a function of the load. By running the parameter
study for all four load scenarios we end up with a graph as seen in fig.2.

<figure>
  <img src="/assets/images/posts/max-strength_max_act.png" alt="Max activity as function of load">
  <figcaption>Fig. 2: Max activity if a function of external load</figcaption>
</figure>

We can see that for very low loads there might be other factors
affecting the relationship. If we dwell by this fact and think why this
could be, we could infer that the influence of gravity and segment mass
could interfere with the relationship between $load$ and $mmact$. This means
that when applying low external loads, the important factor in $mmact$ is
the mass of the moved segments, and the gravity imposed on these
segments. The graph also tells us that for high loads there is a linear
relationship between load and $mmact$, and the linear part is crossing
through $mmact = 1$ for all scenarios. We can use this information to
calculate the maximal strength of the model. If we look at the equation
for a linear function it looks like this:

$$\begin{equation} \label{eq:1}  y = ax + \ b \end{equation}$$

Where in this case y is the mmact, $x$ is the load, $a$ is the slope of the
function, and $b$ is the intercept with the y-axis. The slope of the
linear part can be calculated using only two points and applying the
equation:


$$\begin{equation} \label{eq:1} a = \frac{(y_{2} - y_{1})}{(x_{2} - x_{1})} \end{equation}$$

Now that we know the coordinates of two points and the slope, we can
start figuring out what the load is at $mmact = 1$. For this
we again look at equation $\ref{eq:2}$, only this time we know the slope, the point
$\left( x_{2},y_{2} \right$, and the $y_{1}$ coordinate,
which should be equal to 1. We are therefore interested in finding
$x_{1}$. We rearrange equation $\ref{eq:2}$, into:


$$\begin{equation} \label{eq:3} x_{1} = \frac{1}{a} - \frac{y_{1}}{a} + x_{2} \end{equation}$$

This allows us to evaluate what is the maximal load $x_{1}$ that
the model can support in a given posture. To check our results, we can
calculate the maximal strength using equation $\ref{eq:2}$ and try and implement
that load in our model. As anticipated the $mmact$ reached 0.996, and the
same holds across all four load scenarios.


### Find the code on GitHub

The AnyScript example which shows the concepts of finding the maximum muscle
strength is available [on
GitHub](https://github.com/AnyBody/max-muscle-strength). 
