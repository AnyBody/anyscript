---
title: "Solving optimization problems using Python"
excerpt: "The ability to create and run mathematical optimization problems, using third party software is a valuable tool."
author: bkj
modified: 2018-11-13T10:56:32+02:00
sitemap: false
hidden: true
math: true
header:
  teaser: 
  overlay_image: 
  overlay_filter: 0.5
  actions:
    - label: "Try the example"
      url: 
categories:
  - tools
tags: 
  - python
  - Optimization
---

The AnyBody Modeling System (AMS) provides a build-in optimization
class `AnyOptStudy`, and with it you have the opportunity to solve advanced mathematical optimization problems. 

You can get a taste of how it works in the [newly updated tutorial on  parameter and optimization studies](https://anyscript.org/tutorials/Parameter_studies_and_optimization/lesson2.html)
{: .notice--info}

Of course there can be situations were you want to do a little more than what the AMS optimization offers. Say you have two seperate models were you wanted to optimize some parameter across
the performance in both models? or perhaps you wanted to use a specific algorithm suitable for your exact problem? To solve these kinds of problems, you
could perform the optimization process from a third party software. 

In this post we will demonstrate how these problems can be solved using Python.
This topic is part a new [Anybody Tutorial](https://anyscript.org/tutorials/Parameter_studies_and_optimization/lesson3.html) 
which describes the content of this post in
detail.

As part of the post we will show how to integrate the [Scipy](https://docs.scipy.org/doc/scipy/reference/index.html) optimization package
`Scipy.optimize.minimize` by running the [Anybody 2D bike model](https://anyscript.org/ammr-doc/auto_examples/Sports/plot_BikeModel2D.html#sphx-glr-auto-examples-sports-plot-bikemodel2d-py) from Python, using the AnyPyTools package.

The process of performing optimization of AMS models through Python can be sketched in four steps:

1. Defining a function to call the models using AnyPyTools and extract the designvariables
2. Defining a objective function to be either minimized or maximized
3. Defining the constraints and bounds of the problem
4. Running the optimization

And the whole Python code to complete these four steps could look like this:

{% highlight python  %}
{% raw %}

    import math
    import scipy
    from anypytools import AnyPyProcess
    from anypytools.macro_commands import Load, OperationRun, Dump SetValue


    def run_model(saddle_height, saddle_pos, silent=False):
        """Run the AnyBody model and return the metabolism results"""
        macro = [
            Load("BikeModel2D.main.any"),
            SetValue("Main.BikeParameters.SaddleHeight", saddle_height),
            SetValue("Main.BikeParameters.SaddlePos", saddle_pos),
            OperationRun("Main.Study.InverseDynamics"),
            Dump("Main.Study.Output.Pmet"),
            Dump("Main.Study.Output.Abscissa.t"),
        ]
        app = AnyPyProcess(silent=silent)
        results = app.start_macro(macro)
        return results[0]


    def objfun(designvars):
        """Calculate the objective function value"""
        saddle_height = designvars[0]
        saddle_pos = designvars[1]
        result = run_model(saddle_height, saddle_pos, silent=True)

        if "ERROR" in result:
            raise ValueError("Failed to run model")

        pmet = scipy.integrate.trapz(result["Pmet"], result["Abscissa.t"])

        return float(pmet)


    def seat_distance_constraint(designvars):
        """Compute contraint value which must be larger than zero"""
        return math.sqrt(designvars[0] ** 2 + designvars[1] ** 2) - 0.66


    constaints = {"type": "ineq", "fun": seat_distance_constraint}
    bounds = [(0.61, 0.69), (-0.22, -0.05)]
    initial_guess = (0.68, -0.15)

    solution = scipy.optimize.minimize(
        objfun, initial_guess, constraints=constaints, bounds=bounds, method="SLSQP"
    )

    print(solution)
{% endraw %}
{% endhighlight %}

To elaborate a little on the sections, the first part defines the `run_model`
function. This function takes in two arguments and assigns them to the
saddleheight and saddleposition in the AMS model. The function returns the
`Pmet` value for each timestep in the model. 

Details and advanced options of this function and it's components can be found in the [AnyPyTools documentation](https://anybody-research-group.github.io/anypytools-docs/). 
{: .notice--info}

The second part defines the objective function in question. This function takes in a
list of design variable arguments and utilizes the `run_model` function,
afterwards it integrates the `Pmet` over the whole time series and returns the
result.

Next up, the constraints and bounds are defined. For this example only a
seat distance constraint is present. The bounds for each of the design
variables is defined in the `bounds` variable. Lastly, the optimization process is
performed, and here it envokes the [SLSQP](https://docs.scipy.org/doc/scipy/reference/optimize.minimize-slsqp.html#optimize-minimize-slsqp)
algorithm.

And there we have it. A full optimization of a AMS model, and a easy template to
build other and more advanced optimization processes upon. 

Make sure to try out the full tutorial
[here.](https://anyscript.org/tutorials/Parameter_studies_and_optimization/index.html)

For more details and examples of the capabilities of the
`Scipy.optimize`package, follow this
[link](https://docs.scipy.org/doc/scipy/reference/tutorial/optimize.html)