---
title: "Contributor License Agreement"
layout: single
permalink: /cla/
hidden: true
sitemap: false
no_draft: true

---
Thank you for your interest in contributing to the AnyScript Repositories.

The purpose of this Contributor License Agreement (CLA) is to clarify and 
document the rights granted by contributors to AnyBody Technology A/S. 

A CLA is a legal document stating that you are entitled to 
contribute some code/documentation the project and that you are willing 
to have it used in distributions and derivative works. [Read more what a CLA is and why it is necessary](https://www.clahub.com/pages/why_cla)

**Note:** By contributing, your email and name will become an embedded part of the code 
(git version control system), which may be publicly available. This document also 
describes that you waive the right to have your name and email removed or changed 
at a later time, as doing so would be utterly destructive to the project all who 
contribute, utilize and benefit from it. 
{: .notice--primary}

{% capture defintion-text %}
## Definitions

**"Us"** means AnyBody Technology A/S.

**"You"** means the Individual Copyright owner who submits a Contribution to Us.

**"Contribution"** means any original work of authorship (software, model, data and/or documentation) including any modifications or additions to an existing work, Submitted by You to Us, in which You own the Copyright.  

**"Copyright"** means all rights protecting works of authorship owned or controlled by You, including copyright, moral and neighbouring rights, as appropriate, for the full term of their existence including any extensions by You.

**"Material"** means the software, model, data or documentation made available by Us to third parties. After You Submit the Contribution, it may be included in the Material.

**"Submit"** means any form of physical, electronic, or written communication sent to Us, including but not limited to electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, Us, but excluding communication that is conspicuously marked or otherwise designated in writing by You as "Not a Contribution."

**"Submission Date"** means the date You Submit a Contribution to Us.

**"Documentation"** means any portion of a Contribution which is not software, model or data.

{% endcapture %}

<div class="notice">
  {{ defintion-text | markdownify }}
</div>


## 1. License Grant

### 1.1 Copyright License to Us

Subject to the terms and conditions of this Agreement, You hereby assign any perpetual, worldwide rights, including without limitation copyrights including moral rights and database rights to Us, including, but not limited to:

*	to freely use, assign and amend the Contribution as if it was created by Us.
*	to publish the Contribution,
*	to modify the Contribution, to prepare derivative works based upon or containing the Contribution and to combine the Contribution with other software code,
*	to reproduce the Contribution in original or modified form,
*	to distribute, to make the Contribution available to the public, display and publicly perform the Contribution in original or modified form.

For the avoidance of doubt, it is the purpose of this assignment to be a total and all-encompassing assignment as if it were taking place in accordance with § 59 of the Danish Copyright Act.

## 2. Your Warranties to Us

### 2.1 You warrant 

<ol type="a">
<li>that the data or models uploaded by you are made by you and do not infringe any third party rights.</li>
<li>that experimental data included in the material has been obtained in accordance with the ethical rules valid at the time and location of the experiment.</li>
<li>that the data contains no references to any identifiable individuals.</li>
<li>that the data you upload comply with the license under which they are submitted.</li>
</ol>

As part of your contribution to the AnyScript repositories, you agree that your email address 
and your name becomes an embedded part of the code, which may be publically available. 
You understand that removing this information at a later time would be impermissibly 
destructive for the project and everyone who use, benefit and contribute to it.
 You, therefore, waive your rights to have this information removed or changed under 
any applicable law. You understand that this is a requirement for any contribution. 

## 3. Disclaimer

AnyBody Technology A/S acknowledges that, except as explicitly described in this Agreement, the Contribution is provided on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND .

## 4. Consequential Damage Waiver

To the maximum extent permitted by applicable law, in no event will you or 
us be liable for any loss of profits, loss of anticipated savings, loss of 
data, indirect, special, incidental, consequential and exemplary damages 
arising out of this agreement regardless of the legal or equitable theory 
(contract, tort or otherwise) upon which the claim is based.


## 5. Term

This Agreement shall come into effect when You Submit your Contribution to Us.

## 6. Miscellaneous

**6.1** *This agreement shall be governed by, and exclusively construed in accordance with, the laws of the kingdom of Denmark, not taking into account its provisions that may lead to the application of any other substantial law than Danish law.*

**6.2** *Any dispute, controversy or claim arising out of or in connection with this license or the breach, termination or invalidity thereof or the products shall be settled by the ordinary Danish courts*

**6.3** *The parties hereby irrevocably submits to the city court of Aalborg, Denmark, as the agreed venue in the first instance.*

**6.4** *Notwithstanding the above, Us shall at its sole descression  be entitled to initiate proceedings against the licensee in a court of its choice including without limitation in case of non-payment by the licensee or the licensees infringement of Us's intellectual property rights or trade secrets or breach of the license by the licensee.*


{% raw %}
<div class="notice--success">
<h2>Sign the Contributor License Agreement </h2>
<form id="cla-form">
  <div class="form-group">
        <label for="contact-name">Full name *</label>
        <input type="text" class="form-control" id="contact-name" placeholder="Name" name="entry.80898643" aria-describedby="contact-name-error" aria-required="true">
        <p id="contact-name-error" class="help-block"></p>
  </div>
  <div class="form-group">
        <label for="contact-email">Email Address *</label>
        <input type="email" class="form-control" id="contact-email" placeholder="Email" name="entry.2059855177" aria-describedby="contact-email-error" aria-required="true">
        <p id="contact-email-error" class="help-block"></p>
  </div>
  <div class="form-group">
        <label for="github-user">GitHub Username *</label>
        <input type="text" class="form-control" id="github-user" placeholder="GitHub user name" name="entry.623309498" aria-describedby="github-user-error" aria-required="true">
        <p id="github-user-error" class="help-block"></p>
  </div>
  <div class="form-group">
        <label for="contact-address">Mailing Address, including Country *</label>
        <textarea class="form-control" id="contact-address" placeholder="Mailing Address" name="entry.789029173" aria-describedby="contact-address-error" aria-required="true"></textarea>
        <p id="contact-address-error" class="help-block"></p>
  </div>
  <div class="form-group">
        <label for="contrib-policy">Your employer's policy on contributing to 3. party projects, if applicable
Your answer</label>
        <textarea class="form-control" id="contrib-policy" placeholder="" name="entry.1261061474" aria-describedby="contrib-policy-error"></textarea>
        <p id="contrib-policy-error" class="help-block"></p>
  </div>
  <button type="submit" class="btn btn-default" id="cla-form-submit">Sign agreement</button>
</form>
</div>
{% endraw %}


{% include scripts.html %}
{% raw %}
<script src="../assets/js/cla.js"></script>
{% endraw %}


V. 1.0, AnyBody Technology, 2. January 2017
{: .notice}
