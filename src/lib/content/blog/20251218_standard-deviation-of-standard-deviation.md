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


Standard deviation is random, or more specifically, **sample standard deviation** $s$ is random. This randomness is inherent when randomly sampling a population, because each sample will contain slightly different data. As a result, each repeated sample will also have different statistics (ex. mean, standard deviation). 

This spread can be quantified using **standard error** $SE$, which is equal to standard deviation of a statistic's sampling distribution. In other words, the standard deviation of standard deviation, is the **standard error of sample standard deviation** $\hat{SE}(S)$ and represents the distribution standard deviation generated from repeated sampling.

This blog post and formulas are based on: [Standard Errors of Mean, Variance, and Standard Deviation Estimators, Sangtae Ahn and Jeffrey A. Fessler, University of Michigan, 2003](https://www.eecs.umich.edu/techreports/systems/cspl/cspl-413.pdf)

<SampleMeanStdev/>

The above demo allows you to generate repeat samples from the standard normal distribution. The standard error of standard deviation is calculated using multiple methods for comparison.
- $SE(S)$ is calculated using the population standard deviation $\sigma$ and sample size $n$
- $\hat{SE}(S)$ is calculated using the sample standard deviation $s$ of a single generated replicate (only the most recent one)
- It is also possible to calculate standard deviation of standard deviation using all of the replicates, effectively treating it like a sample. This would converge with the $SE(S)$ as more replicates are added.


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

