---
title: Confidence Intervals and Hypothesis Tests on Standard Deviation
description: How to calculate the confidence interval of standard deviation. How to run hypothesis tests on standard deviation.
createdDate: 2026-01-19
updatedDate: 2026-01-23
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

In the figure above, we can see how the 95% confidence interval narrows as **sample size** $n$ increases. Our estimation of **population standard deviation** $\sigma$ improves as **sample size** $n$ increases.

At low samples, the randomness from sampling can be significant. For example, sample size of $n=30$, results in 95% confidence interval of $[s*0.796, s*1.344]$. We are 95% confident that the **population standard deviation** $\sigma$ is between 0.796x and 1.344x the **sample standard deviation** $s$.

This blog post will shows how to calculate confidence intervals and hypothesis tests for standard deviation. **Note:** These calculations assume the underlying distribution is normal.

Also see the previous blog post for [Standard Error of Sample Standard Deviation](/blog/standard-deviation-of-standard-deviation)

## Confidence Interval of Sample Standard Deviation

<CiStdevCalc/>

### Two Sided Confidence Interval

The distribution of sample variance follows the chi-squared distribution. The following was taken from [Wikipedia Standard Deviation ](https://en.wikipedia.org/wiki/Standard_deviation#Confidence_interval_of_a_sampled_standard_deviation):
$$
\frac{(n-1)s^2}{q_{1-\alpha/2}} \leq \sigma^2 \leq \frac{(n-1)s^2}{q_{\alpha/2}}
$$

This can be simplified as:
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

**Left Sided:**

Confidence interval with an upper limit on population standard deviation. **Note:** Standard deviation can not be negative.

$$
\sigma \leq \sqrt\frac{(n-1)}{q_{\alpha}}*s
$$

**Right Sided:**

Confidence interval with an lower limit on population standard deviation.

$$
\sqrt\frac{(n-1)}{q_{1-\alpha}}*s \leq \sigma
$$


## Hypothesis Testing of Sample Standard Deviation


<StdevHtestCacl/>

Closely related to the idea of confidence intervals is hypothesis testing, which evaluates if the sample standard deviation is significant compared to an assumed population standard deviation (null hypothesis). 

The following test statistic is used for chi squared distribution:   

$$
\chi^2 = \frac{(n-1)s^2}{\sigma^2}
$$


Calculations based on [LibreTexts Hypothesis Test on a Single Standard Deviation](https://stats.libretexts.org/Courses/Rio_Hondo_College/Math_130%3A_Statistics/08%3A_Hypothesis_Testing_with_One_Sample/8.05%3A_Hypothesis_Test_on_a_Single_Standard_Deviation) and [Elgin EDU Hypothesis Tests for a Population Standard Deviation](https://faculty.elgin.edu/dkernler/statistics/ch10/10-4.html)



### Two Tailed Hypothesis Test

Evaluates if the sample standard deviation is significantly different than the expected standard deviation. The chi squared distribution is not symmetric, both tails of the distribution need to be evaluated.

The p-value would be compared with the significance level $a$, usually $a=0.05$

$$
H_0: \sigma = \sigma_0 \\
H_1: \sigma \neq \sigma_0
$$

$$
min(P(\chi^2 < \chi^2_0), P(\chi^2 > \chi^2_0))*2
$$


- $H_0$ is the null hypothesis
- $H_1$ is the alternate hypothesis
- $\sigma$ is the population standard deviation
- $\sigma_0$ is the value selected for the null hypothesis
- $\chi^2_0$ is the calculated test statistic

### One Tail Hypothesis Test

**Left Tailed:**

Evaluates if the standard deviation is less than a upper limit. Ex. $\sigma$ is less than 5 based on sample data.

$$
H_0: \sigma = \sigma_0 \\
H_1: \sigma < \sigma_0
$$
$$
P(\chi^2 < \chi^2_0)
$$


**Right Tailed:**

Evaluates if the standard deviation is greater than a lower limit. Ex. $\sigma$ is greater than 5 based on sample data.

$$
H_0: \sigma = \sigma_0 \\
H_1: \sigma > \sigma_0
$$
$$
P(\chi^2 > \chi^2_0)
$$
