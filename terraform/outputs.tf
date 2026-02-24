output "website_bucket" {
  description = "The ID of the website S3 bucket"
  value       = aws_s3_bucket.website_bucket.id
}

output "cloudfront_url" {
  description = "The domain name corresponding to the CloudFront distribution"
  value       = aws_cloudfront_distribution.website_cdn.domain_name
}

output "cloudfront_distribution_id" {
  description = "The ID of the CloudFront distribution"
  value       = aws_cloudfront_distribution.website_cdn.id
}