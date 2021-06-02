## What is this?
A playground project to test how KMP shared code interacts with different platforms.

We generally go for a philosophy of share all the code you can with as thinner interface as possible. To make that feasible every
platform needs to have certain functionality.

We know this works smoothly for Kotlin/Jvm (Android) & Kotlin/Native (iOS). The next step is Kotlin/Js (Web).

*Getting up and running*
- Download android studio to get all the build tooling and accept sdk liscences (hopefully we can remove this step in the
future)
- Run `./gradlw build` from the terminal which will build the android/ios/web libraries
- Can then check the individual projects for how to run

*JS Checklist*
- [x] Shared code is converted to javascript readable code
- [x] Code conversion process is depends on the gradle build task
- [x] Use generated code in a web project
- [x] Trigger the build task from a javascript IDE
- [ ] Figure out how to generate a nice package structure
- [ ] Multithreading works
- [ ] Consume a StateFlow
- [ ] Interface / impl setup
- [ ] Use suspend from an impl
- [ ] Automated dependency injection
- [ ] Generics works
- [ ] What libraries work? Database/keyvalue/graphql

*Limitations*
- Any export to JS needs annotated with @JSExport (as of 1.5.0)
