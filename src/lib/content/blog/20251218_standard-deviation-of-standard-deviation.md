---
title: Standard Deviation of Standard Deviation
description: Understanding how sample standard deviation can vary depending on sample size. Calculating the confidence interval of standard deviation and how to interpret the results
createdDate: 2025-03-18
tags:
  - python
  - statistics
---
<script>
	import {SampleMeanStdev} from "$lib/content/interactive/sample-mean-stdev"
</script>

<SampleMeanStdev/>

Standard deviation is random, or more specifically, **sample standard deviation** $s$ is random. Whenever you take a sample from a population, the data you collect is inherently random. Repeat samples will result in different data, and therefore different statistics (mean, standard deviation). 

This spread is quantified by **standard error** $SE$, which is equal to standard deviation of a statistic's sampling distribution. In other words, the standard deviation of standard deviation, is also the **standard error of sample standard deviation** $\hat{SE}(S)$.

Standard error is well understood in the context of **sample mean** $\hat{x}$, where **standard error of sample mean** $SE(\hat{x})$ represents the distribution of each sample mean generated from repeated sampling. Importantly, it shows how **sample size** $n$ affects the spread of sample means, ex. larger sample sizes are closer to the true mean.

$$
SE(\hat{x}) = \frac{\sigma}{\sqrt{n}}
$$

The effect of sampling on **sample standard deviation** $s$ on the other hand, seems to be much less generally understood, or at least I couldn't as many good online resources. I decided create this blog post to be that online resource.


**Notes:**
- Replicates means an independent random repeat of the same sample size
- Standard deviation and standard error is often interchangeable, standard error is the standard deviation of a sample statistic
- standard deviation and mean usually refers to the sample standard deviation and sample mean, not population. 
- Replicates should be random and independent. Population should also be large compared to sample size.
- Formulas are from: [Standard Errors of Mean, Variance, and Standard Deviation Estimators, Sangtae Ahn and Jeffrey A. Fessler, University of Michigan, 2003](https://www.eecs.umich.edu/techreports/systems/cspl/cspl-413.pdf)

## Standard Error of Sample Variance

$$
SE(S^2) = \sigma^2\sqrt{\frac{2}{n-1}}
$$

$$
\hat{SE}(S^2) = s^2\sqrt{\frac{2}{n-1}}
$$

- $\sigma^2$ is the population variance
- $s^2$ is the sample variance
- $\hat{SE}(S^2)$ is the estimator of standard error of sample variance
- $n-1$ is the degrees of freedom

$SE(S^2)$ is the standard error of sample variance and while $\hat{SE}(S^2)$ is it's estimator. The main difference is that $\sigma^2$ is the true or population variance while $s^2$ is the sample variance. Practically speaking, the population variance will always be unknown.

## Standard Error of Sample Standard Deviation

$$
SE(S) = \frac{\sigma}{\sqrt{2(n-1)}} 
$$

$$
\hat{SE}(S) = \frac{s}{\sqrt{2(n-1)}}
$$

- $\sigma$ is the population standard deviation
- $s$ is the sample standard deviation
- $\hat{SE}(S)$ is the estimator of standard error of standard deviation
- $n-1$ is the degrees of freedom

It is important to note that the standard error of standard deviation is not the square root of the standard error of sample variance, $\sqrt{SE(S^2)} \neq SE(S)$


### Example

For a sample size of $n=30$, a mean of $\hat{x}=0.27$ and sample standard deviation of $s=0.89$ was found. The estimated standard error of standard deviation would be $0.12$.


