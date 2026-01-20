---
title: Confidence Interval and Hypothesis Test on Standard Deviation
description: How to calculate the standard deviation of standard deviation. Formulas for standard error of sample sample standard deviation and variance.
createdDate: 2026-01-19
updatedDate: 2026-01-19
tags:
  - statistics
---
<script>
	import CiStdevCalc from "$lib/content/interactive/ci-stdev-calc.svelte"
</script>

<CiStdevCalc/>

Whenever we discuss sample mean $\hat{x}$, we usually acknowledge the randomness inherent with sampling. This is usually in the form of standard errors, confidence intervals, and hypothesis testing. 

I have always been annoyed that the same statistical techniques are rarely extended to standard deviation $s$. See [Standard Deviation of Standard Deviation](/blog/standard-deviation-of-standard-deviation)

Sample standard deviation, like sample mean, is random. See previous blog post on the standard deviation of standard deviation. 

And just like sample mean, it is possible to construct confidence intervals around a sample standard deviation. These confidence intervals and hypothesis testing assume the underlying distribution is normal and the distribution of sample variance follows the chi-squared distribution
## Confidence Interval of Sample Standard Deviation

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
- $q_p$ is the $p$-th quantile of the chi-squared distribution, $\chi^2_{1-\alpha/2,n-1}$

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

We are 95% confident that the population standard deviation is between the lower and upper limits. In other words, if we were to replicate this sample, 95% of the confidence intervals generated would capture the population standard deviation.

### One Sided Confidence Interval

The one sided confidence interval is derived similarly to the two sided confidence interval.

$$
\frac{(n-1)s^2}{q_{1-\alpha}} \leq \sigma^2  \qquad \sigma^2 \leq \frac{(n-1)s^2}{q_{\alpha}}
$$
## Hypothesis Testing of Sample Standard Deviation

Closely related to the idea of confidence intervals is hypothesis testing. Often times the objective of a study is to determine if standard deviation is less than some acceptable value. 

Uses the test statistic

Based on [LibreTexts Hypothesis Test on a Single Standard Deviation](https://stats.libretexts.org/Courses/Rio_Hondo_College/Math_130%3A_Statistics/08%3A_Hypothesis_Testing_with_One_Sample/8.05%3A_Hypothesis_Test_on_a_Single_Standard_Deviation)

$$
\chi^2 = \frac{(n-1)s^2}{\sigma^2}
$$

### Two Sided Hypothesis Test


### One Sided Hypothesis Test

