---
title: Standard Deviation of Standard Deviation
description: Understanding how sample standard deviation can vary depending on sample size. Calculating the confidence interval of standard deviation and how to interpret the results
createdDate: 2025-03-18
tags:
  - python
  - statistics
---
## Confidence Interval of Sample Standard Deviation

$$
\frac{(n-1)s^2}{\chi^2_{1-\alpha/2,n-1}} \leq \sigma^2 \geq \frac{(n-1)s^2}{\chi^2_{\alpha/2,n-1}}
$$

- Results are based on [Wikipedia Standard Deviation ](https://en.wikipedia.org/wiki/Standard_deviation#Confidence_interval_of_a_sampled_standard_deviation)

## i don't know how to structure this

- The introduction to this needs to explain population and samples. The main idea is that sample standard deviation is itself a statistic and can vary
	- If there is some familiarity, it should be similar to sample means. And how sample means have standard error and confidence intervals
	- This probably needs to also explain interpreting standard error and confidence intervals
	- I feel like the normality of standard error and how it affects confidence intervals is probably too complicated
	- This should have a visualization, probably to use the normal distribution and show taking samples from it
- There should be a lot of interactive elements
	- I don't know if it should actually do the calculations though. I could pregenerate everything in python
	- Maybe the difference is if this should be just a demonstration or if it should be an actual calculator. Ex. include an actual standard deviation confidence interval calculator