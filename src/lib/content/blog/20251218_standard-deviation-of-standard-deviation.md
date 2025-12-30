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

## Standard Error of Sample Variance and Standard Deviation

These formulas are from [Standard Errors of Mean, Variance, and Standard Deviation Estimators, Sangtae Ahn and Jeffrey A. Fessler, University of Michigan, 2003](https://www.eecs.umich.edu/techreports/systems/cspl/cspl-413.pdf).

The standard error of sample variance. 

Note that standard error and standard deviation are used interchangeably. The standard error of sample variance is the standard deviation of sample variance


### Standard Error of Sample Variance

$$
SE(S^2) = \sigma^2\sqrt{\frac{2}{n-1}} \qquad \hat{SE}(S^2) = s^2\sqrt{\frac{2}{n-1}}
$$

- $\sigma^2$ is the population variance
- $s^2$ is the sample variance
- $\hat{SE}(S^2)$ is the estimator of standard error of sample variance
- $n-1$ is the degrees of freedom

$SE(S^2)$ is the standard error of sample variance and while $\hat{SE}(S^2)$ is it's estimator. The main difference is that $\sigma^2$ is the true or population variance while $s^2$ is the sample variance. Practically speaking, the population variance will always be unknown.

### Standard Error of Sample Standard Deviation

$$
SE(S) = \frac{\sigma}{\sqrt{2(n-1)}} \qquad \hat{SE}(S) = \frac{s}{\sqrt{2(n-1)}}
$$

- $\sigma$ is the population standard deviation
- $s$ is the sample standard deviation
- $\hat{SE}(S)$ is the estimator of standard error of standard deviation
- $n-1$ is the degrees of freedom

It is important to note that the standard error of standard deviation is not the square root of the standard error of sample variance, $\sqrt{SE(S^2)} \neq SE(S)$


### Example

For a sample size of $n=30$, a mean of $\hat{x}=0.27$ and sample standard deviation of $s=0.89$ was found. The estimated standard error of standard deviation would be $0.12$.


## Confidence Interval of Sample Standard Deviation

These formulas were taken from [Wikipedia Standard Deviation ](https://en.wikipedia.org/wiki/Standard_deviation#Confidence_interval_of_a_sampled_standard_deviation).

$$
\frac{(n-1)s^2}{\chi^2_{1-\alpha/2,n-1}} \leq \sigma^2 \leq \frac{(n-1)s^2}{\chi^2_{\alpha/2,n-1}}
$$
The distribution of sample variance follows the chi-squared distribution. The following was taken from [Wikipedia Standard Deviation ](https://en.wikipedia.org/wiki/Standard_deviation#Confidence_interval_of_a_sampled_standard_deviation):
$$
\frac{(n-1)s^2}{q_{1-\alpha/2}} \leq \sigma^2 \leq \frac{(n-1)s^2}{q_{\alpha/2}}
$$

Which can be simplified as:
$$
\sqrt\frac{(n-1)}{q_{1-\alpha/2}}*s \leq \sigma \leq \sqrt\frac{(n-1)}{q_{\alpha/2}}*s
$$

- $s$ is the sample standard deviation
- $\sigma$ is the population standard deviation or true standard deviation
- $(n-1)$ is the degree of freedom
- $1-\alpha$ is the confidence level
- $q_p$ is the $p$-th quantile of the chi-squared distribution, $\chi^2_{1-\alpha/2,n-1}$
- Results are based on [Wikipedia Standard Deviation ](https://en.wikipedia.org/wiki/Standard_deviation#Confidence_interval_of_a_sampled_standard_deviation)

```python
def calc_stdv_ci(sample_size: int, confidence_level: float = 0.95, s: float = 1.0):
    df = sample_size - 1
    alpha = 1 - confidence_level

    q_upper = chi2.ppf((1 - alpha / 2), df)
    q_lower = chi2.ppf(alpha / 2, df)
    ci_lower = (df * s**2 / q_upper) ** 0.5
    ci_upper = (df * s**2 / q_lower) ** 0.5

    return ci_lower, ci_upper
```


### One Sided Confidence Interval

$$
\frac{(n-1)s^2}{q_{1-\alpha}} \leq \sigma^2  \qquad \sigma^2 \leq \frac{(n-1)s^2}{q_{\alpha}}
$$
## i don't know how to structure this

- The introduction to this needs to explain population and samples. The main idea is that sample standard deviation is itself a statistic and can vary
	- If there is some familiarity, it should be similar to sample means. And how sample means have standard error and confidence intervals
	- This probably needs to also explain interpreting standard error and confidence intervals
	- I feel like the normality of standard error and how it affects confidence intervals is probably too complicated
	- This should have a visualization, probably to use the normal distribution and show taking samples from it
- There should be a lot of interactive elements
	- I don't know if it should actually do the calculations though. I could pregenerate everything in python
	- Maybe the difference is if this should be just a demonstration or if it should be an actual calculator. Ex. include an actual standard deviation confidence interval calculator. 
	- Could make a standard error and confidence interval calculator at the top
- Not sure how to present the validation in python
	- Trying to generate samples and then check if the confidence intervals and standard deviation made sense
- There are some practical notes
	- The main reason for this is due to how standard deviation is used and it's misconceptions. Standard deviation is a statistic and can be random
	- Useful in manufacturing context. Maybe this should be another blog post
	- In practical application, the upper limit is what matters more. Ex. trying to get a process within a variance limit.
	- Maybe it is worth considering 1 sided confidence interval. Ex. 95% confident that the true standard deviation is less than a limit
	- In Gage R&R. The standard deviation excluding part to part variability ends up being used as the pass fail criteria. Used to estimate risk of a measurement accepting nonconforming parts
		- I think a lot of Gage R&R is only considering confidence interval for categorical measurements. 
		- For continuous measurements, it seems to just use standard deviation, there isn't really any consideration for how standard deviation itself could vary. 
	- For stuff like 6 sigma, it is usually in the context of a mean. I guess it could already consider how standard deviation could vary. 6 sigma is a very strict standard. But it mostly applies for low samples and how samples are taken. It mostly informs you if you should push samples lower or higher. Theoretically a smaller sample could work if you are 95% confident that the true stdev is within a passing range. Or you could interpret it is a warning if your sample size is too low. That you can incorrectly estimate your standard deviation
	- In Process Capability
	- Maybe this would also go into running a hypothesis test using standard deviation
- I think there are 3 main ideas
	- Confidence interval of standard deviation
	- Standard error of standard deviation
	- Practical applications of this interpretation
- There are two main objectives
	- Creating a calculator of standard deviation confidence interval
	- A good explanation of how standard deviation is random
- https://www.eecs.umich.edu/techreports/systems/cspl/cspl-413.pdf
- https://stats.stackexchange.com/questions/156518/what-is-the-standard-error-of-the-sample-standard-deviation