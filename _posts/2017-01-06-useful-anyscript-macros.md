---
title: "Useful AnyScript Macros"
excerpt: "Some usefull code macros when working with AnyScript."
modified: 2017-01-07T09:55:10-04:00
author: mel
header:
  teaser: "assets/images/macro_post_teaser.png"
categories:
  - Tips-n-Tricks
tags: 
  - AnyScript
---


AnyBody makes it easy to do musculoskeletal modelling, but some tasks which are simple in 
normal programming languages (i.e. C, Matlab, Python) can be hard to accomplish in AnyScript. 
This could be simple tasks like:

* Creating an abitrary matrix of zeros
* Adding a constant to single row in a matrix
* Change a single value in matrix
* Thresholding a vector 

These are all easy with traditional programming constructs like for-loops and if-else clauses etc.

The reason that such tasks are hard is that AnyScript is not a traditional programming language. 
For-loops and sequential algorithms are not allowed because AnyScript is a modelling language 
(or a declarative language). That is in contrast to most other programming languages which are 
imperative (i.e., implements a sequence of commands). This distinction can sometimes be hard for 
new users to grasp. But keep in mind that the declarative nature of AnyScript is also what makes 
AnyBody so compelling.

**Notice!** Although it is not the topic of this blog post, it is possible to call external C or Python functions to do stuff which is otherwise impossible in AnyScript.
{: .notice--info}


### Creating a NxM matrix

However, with a little ingenuity, many things can also be accomplished directly in AnyScript. For example, let us create a to create a `MxN` matrix of zeros using the matrix product of two vectors.

1. First, we create two vectors of length `M` and `N` with the `iarr()` function

   ```AnyScriptDoc
   {% raw %}AnyInt M = 3;
   AnyInt N = 4;
   AnyVar v1 = iarr(1, M); // {1,2,3}
   AnyVar v2 = iarr(1, N); // {1,2,3,4} {% endraw %}
   ```
   
2. Then we take the matrix product of the vectors to create a matrix. 

   ```AnyScriptDoc
   {% raw %}AnyVar Mat = v1'*{v1}; // {{1,2,3,4},{2,4,6,8},{3,6,9,12}} {% endraw %}
   ```
   Here we have to tranpose `v1` to make a 3x1 column maxtrix, and wrap `v2` in an extra brace to make it an 1x4 row matrix.
   Their product is then a 4x3 matrix. 

3. Finally, we can multiply it with zero to make zero matrix
   
   ```AnyScriptDoc
   {% raw %}AnyVar zeromat = Mat*0.0; // {{0,0,0,0},{0,0,0,0},{0,0,0,0}} {% endraw %}
   ```
   
   
Using workarounds like this can make the code very unreadable. Luckily, we can wrap the expression in a code macro and reuse it like a small function. 
   
   
### Code macros

Code macros in AnyScript are exactly as in C and C++. They make complex expresions easier to reuse and read. The syntax is also very similar. 

```AnyScriptDoc
{% raw %}#define ZEROS(M,N) (0.0*iarr(1,M)'*{iarr(1,N)})

AnyVar mat = 3 + ZEROS(3,3);   // {{3,3,3},{3,3,3},{3,3,3}} {% endraw %}

```

The `ZEROS()` function is arguably something that should have been a built-in function of AnyScript ( And maybe it will be soon )
{: .notice}

Here is a summery of myfavorite code macros that make it easiser to work with AnyBody. 
You can find their implementatin further down:


| Macro                              |                        Description                     |
| ---------------------------------- | ------------------------------------------------------ | 
| `ZEROS(M,N)`                       | MxN zero matrix                                        |
| `ONES(M,N)`                        | MxN ones matrix                                        |
| `EYE(M)`                           | Square identity matrix                                 |
| `REPVEC(V,N)`                      | Repeats a vector or matrix along the second dimension  |
| `ONES_J(M,N,J)`                    | Matrix with ones in j'th coloumn and zero else where   |
| `ONES_I(M,N,I)`                    | Matrix with ones in I'th coloumn and zero else where   |
| `ONES_IJ(M,N,I,J)`                 | Mmatrix with a one in the i,j element zeros else where |
| `SMOOTHERSTEP(edge0, edge1, val)`  | Smooth step function from 0.0 at edge0 to 1.0 at edge1. The function has first and second derivatives equal to zero at the edge values. `val` can be both a sigal value or vector. | 
 


**Notice!** All the examples shown here are designed to work with AnyBody version 6.1.
{: .notice--warning}



### The helper macros include file

All the macros are defined in the file below. Just download the file and include it in your application:

```AnyScriptDoc
#include "helper_macros.any"
```

Also, the file is hosted as a Gist on GitHub. So feel free to contribute if you have more useful AnyScript macros.

{% gist melund/cc98dba91cd1f29a18502f7a252938e7 %}
