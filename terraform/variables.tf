variable "aws_region" {
  description = "The AWS region to deploy resources in"
  type        = string
  default     = "ap-south-1"
}

variable "project_name" {
    type = string
    default = "manideep-portfolio"
}

variable "domain_name" {
    type = string
}

variable "common_tags" {
    type = map(string)
    default = {
        "Project"     = "manideep-portfolio",
        "Environment" = "production",
        "ManagedBy"   = "Terraform"
    }
}

variable "state_bucket" {
    type = string
    default = "manideep-portfolio-terraform-state"
}