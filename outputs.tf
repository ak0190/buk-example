output "lb_dns_name" {
  description = "The DNS name of the load balancer"
  value       = module.alb.dns_name
}

output "service_autoscaling_policies" {
  description = "Map of autoscaling policies and their attributes"
  value = {
    for k, v in module.ecs.services : k => v.autoscaling_policies
  }
  
}

output "service_autoscaling_scheduled_actions" {
  description = "Map of autoscaling scheduled actions and their attributes"
  value = {
    for k, v in module.ecs.services : k => v.autoscaling_scheduled_actions
  }
}