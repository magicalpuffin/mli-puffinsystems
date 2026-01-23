---
title: Confidence Interval and Hypothesis Test on Standard Deviation
description: How to calculate the standard deviation of standard deviation. Formulas for standard error of sample sample standard deviation and variance.
createdDate: 2026-01-19
updatedDate: 2026-01-19
tags:
  - statistics
---
<script>
	import CiStdevCalc from "$lib/content/interactive/calc/ci-stdev-calc.svelte"
	import StdevHtestCacl from "$lib/content/interactive/calc/stdev-htest-calc.svelte"
	import CiStdevVsSampleSize from "$lib/content/interactive/chart/ci-stdev-vs-sample-size.svelte"

</script>

<CiStdevVsSampleSize/>

Whenever we discuss **sample mean** $\hat{x}$, we usually acknowledge the randomness inherent with sampling in the form of standard errors, confidence intervals, and hypothesis tests. These same principles apply to **sample standard deviation** $s$ but are often times over looked.

In the figure above, we can see how the 95% confidence interval narrows as **sample size** $n$ increases. It shows us how much better our estimation of **population standard deviation** $\sigma$ improves as **sample size** $n$ increases.

For example, sample size of $n=30$, results in 95% confidence interval of $[s*0.796, s*1.344]$. We are 95% confident that the **population standard deviation** $\sigma$ is between 0.796x and 1.344x the **sample standard deviation** $s$.

This blog post will shows how to calculate confidence intervals and hypothesis tests for standard deviation. Note that these calculations assume the underlying distribution is normal.

Also see the previous blog post for [Standard Error of Sample Standard Deviation](/blog/standard-deviation-of-standard-deviation)

## Confidence Interval of Sample Standard Deviation

<CiStdevCalc/>

### Two Sided Confidence Interval

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
- $\alpha$ is the significance level
- $q_p$ is the $p$-th quantile of the chi-squared distribution, $\chi^2_{1-\alpha/2,n-1}$

### One Sided Confidence Interval

The one sided confidence interval is derived from the two sided confidence interval

**Left Sided:**

Confidence interval with an upper limit on population standard deviation. Note that standard deviation can not be negative 
$$
\sigma \leq \sqrt\frac{(n-1)}{q_{\alpha}}*s
$$

**Right Sided:**

Confidence interval with an lower limit on population standard deviation
$$
\sqrt\frac{(n-1)}{q_{1-\alpha}}*s \leq \sigma
$$


## Hypothesis Testing of Sample Standard Deviation


<StdevHtestCacl/>

Closely related to the idea of confidence intervals is hypothesis testing. Often times the objective of a study is to determine if standard deviation is less than some acceptable value. 

Uses the test statistic

Based on [LibreTexts Hypothesis Test on a Single Standard Deviation](https://stats.libretexts.org/Courses/Rio_Hondo_College/Math_130%3A_Statistics/08%3A_Hypothesis_Testing_with_One_Sample/8.05%3A_Hypothesis_Test_on_a_Single_Standard_Deviation)

$$
\chi^2 = \frac{(n-1)s^2}{\sigma^2}
$$

### Two Tailed Hypothesis Test

$$
H_{0}: \sigma = s \\
H_{a}: \sigma \neq s
$$

$$
P(\chi^2 < )
$$


### One Tail Hypothesis Test

**Left Tailed:**

$$
H_{0}: \sigma \ge s \\
H_{a}: \sigma < s
$$

**Right Tailed:**

$$
H_{0}: \sigma \le s \\
H_{a}: \sigma > s
$$

## Additional Notes

The standard error of sample standard deviation doesn't show up in the confidence intervals and hypothesis tests. This is in contrast to the standard error of sample mean which shows up in its confidence intervals and hypothesis tests.