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

**Sample standard deviation** ($s$) is random. Repeat independent samples with the same **sample size** ($n$) from the same population, will result in different standard deviations. The standard deviation of a statistic's sampling distribution is called **standard error**. 

The randomness inherent with sample statistics is acknowledged when discussing **sample mean** ($\hat{x}$) in the form of **standard error**, **confidence intervals** and **hypothesis testing**. The same applies for **sample standard deviation** ($s$) but I couldn't find many good online resources.

This blog post aims to be that online resource for the standard deviation of standard deviation, or more specifically, the **standard error of sample standard deviation**


**Note:**
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


