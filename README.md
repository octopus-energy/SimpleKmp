## What is this?
A playground project to test how KMP shared code interacts with different platforms.

We generally go for a philosophy of share all the code you can with as thinner interface as possible. To make that feasible every
platform needs to have certain functionality.

We know this works smoothly for Kotlin/Jvm (Android) & Kotlin/Native (iOS). The next step is Kotlin/Js (Web).

*JS Checklist*
- [x] Shared code is converted to javascript readable code
- [x] Code conversion process is depends on the gradle build task
- [x] Use generated code in a web project
- [x] Trigger the build task from a javascript IDE
- [ ] Multithreading works
- [ ] Consume a StateFlow
- [ ] Interface / impl setup
- [ ] Use suspend from an impl
- [ ] Automated dependency injection
- [ ] Generics works
- [ ] What libraries work? Database/keyvalue/graphql
