---
title: Standard Deviation of Standard Deviation
description: How to calculate the standard deviation of standard deviation. Formulas for standard error of sample sample standard deviation and variance.
createdDate: 2025-12-18
updatedDate: 2026-01-06
tags:
  - python
  - statistics
---
<script>
	import {SampleStdevDemo} from "$lib/content/interactive/sample-stdev-demo"
	import StderrStdevCalc from "$lib/content/interactive/stderr-stdev-calc.svelte"
</script>


Standard deviation is random, or more specifically, **sample standard deviation** $s$ is random. This randomness is inherent when randomly sampling a population, because each sample will contain slightly different data.

This spread is quantified using **standard error** $SE$, which is equal to standard deviation of a statistic's sampling distribution. Standard error is commonly used with **sample mean** $\hat{x}$, but the same concept applies to standard deviation. In other words, the standard deviation of standard deviation, is the **standard error of sample standard deviation** ${SE}(S)$

The following is a basic standard error of sample standard deviation calculator:

<StderrStdevCalc/>

This blog post is based on the formulas in: [Standard Errors of Mean, Variance, and Standard Deviation Estimators, Sangtae Ahn and Jeffrey A. Fessler, University of Michigan, 2003](https://www.eecs.umich.edu/techreports/systems/cspl/cspl-413.pdf)

## Standard Error of Sample Standard Deviation



$$
SE(S) = \frac{\sigma}{\sqrt{2(n-1)}} 
$$

$$
\hat{SE}(S) = \frac{s}{\sqrt{2(n-1)}}
$$

- $\sigma$ is the population standard deviation
- $s$ is the sample standard deviation
- $SE(S)$ is the standard error of standard deviation
- $\hat{SE}(S)$ is the estimator of standard error of standard deviation
- $n$ is the sample size and $n-1$ is the degrees of freedom

The difference between $SE(S)$ and $\hat{SE}(S)$ is the use of using population standard deviation $\sigma$, however in most practical situations, the population is unknown and $\hat{SE}(S)$ will need to be used. 

It is important to note that the standard error of standard deviation is not the square root of the standard error of sample variance, $\sqrt{SE(S^2)} \neq SE(S)$. See next section.

## Standard Error of Sample Variance

$$
SE(S^2) = \sigma^2\sqrt{\frac{2}{n-1}}
$$

$$
\hat{SE}(S^2) = s^2\sqrt{\frac{2}{n-1}}
$$

- $\sigma^2$ is the population variance
- $s^2$ is the sample variance
- $SE(S^2)$ is the standard error of sample variance
- $\hat{SE}(S^2)$ is the estimator of standard error of sample variance
- $n-1$ is the degrees of freedom

The distribution of sample variance follows a chi squared distribution with $n-1$ degrees of freedom $\chi^{2}_{n-1}$

## Sample Standard Deviation Demo

<SampleStdevDemo/>

The above demo allows you to generate repeat samples from the standard normal distribution. The standard error of standard deviation is calculated using multiple methods for comparison.
- $SE(S)$ is calculated using the population standard deviation $\sigma$ and sample size $n$
- $\hat{SE}(S)$ is calculated using the sample standard deviation $s$ of a single generated replicate (only the most recent one)
- It is also possible to calculate standard deviation of standard deviation using all of the replicates, effectively treating it like a sample. This would converge with the $SE(S)$ as more replicates are added.






