import * as React from "react"

const Timeline = React.forwardRef(({ className, children, ...props }, ref) => (
  <ul ref={ref} className={`space-y-2 ${className}`} {...props}>
    {children}
  </ul>
))
Timeline.displayName = "Timeline"

const TimelineItem = React.forwardRef(({ className, children, active, ...props }, ref) => (
  <li ref={ref} className={`relative flex gap-4 pb-4 ${className}`} {...props}>
    {children}
  </li>
))
TimelineItem.displayName = "TimelineItem"

const TimelinePoint = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={`absolute left-0 top-0 flex h-3 w-3 items-center justify-center ${className}`}
    {...props}
  >
    <div className="h-2 w-2 rounded-full bg-primary" />
  </div>
))
TimelinePoint.displayName = "TimelinePoint"

const TimelineContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={`ml-4 ${className}`} {...props}>
    {children}
  </div>
))
TimelineContent.displayName = "TimelineContent"

Timeline.Item = TimelineItem
Timeline.Point = TimelinePoint
Timeline.Content = TimelineContent

export { Timeline }
