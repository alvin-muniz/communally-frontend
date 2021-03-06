# CommunallyFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## CI/CD
Git -> Travis CI -> Heroku

Scripts initiated by Travis.yml file:

    "test_headless": "ng test --watch false --browsers ChromeHeadless",
    "test_suite": "npm run lint && npm run test_headless"



## Code scaffolding

To develop my models, I created interfaces that will help provide an 
additional level of type security to the http request. Defining these 
interfaces to reflect the model of the incoming data helped ensuring that I 
was receiving back what I was expecting.

export interface User {
password: string;
username: string;
id: number;
emailAddress: string;
}

export interface LoginRequest {
password: string;
emailAddress: string;
}

// Strongly typed example to help maintain type integrity through workflow
registerUser(user: User): Observable<User> {
return this.http.post<User>('http://localhost:9092/auth/users/register', user);
}


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Testing was done for every component, starting with me thinking about what I 
wanted each component to contain from

https://dev.to/lysofdev/an-angular-testing-cheatsheet-5hj2

The meditation timer proved difficult to test so I had to put that to the side but I was able to incrementally through specifications:
  
![image](https://user-images.githubusercontent.com/28934521/119710184-b1242180-be23-11eb-9164-e0c63dbe99be.png)
  
![image](https://user-images.githubusercontent.com/28934521/119710249-c4cf8800-be23-11eb-9c2d-1d5c3a7fb237.png)


My workflow consisted of having Karma open on one window and hte local 
server running in another and moving between them, starting with the red 
tests in Karma and then confirming the changes in the html and then the live 
server. THis allows the easiest route to update as I went along. 

## Custom Pipe
I utilized a custom pipe for the meditation timer to transform the 
information from the time variable into a time format that's appropriate. I like this approach as I can use the time variable as is to persist the duration into the database for future retrieval meaning, keeping the integratity of the original variable.
  
  ![image](https://user-images.githubusercontent.com/28934521/119709823-407d0500-be23-11eb-8246-a3ebd57be882.png)


## Persisting Sessions

The trigger for the submit reflection event is a button. That calls off 2 events within the observable that will do the following in order.

Update the DOM to show that the Reflection has been added.  And also, it wil save the content added to the reflection if the user would like to have those added. This is optional.

Structuring data in a Map object allows for easy polymorphism across different contexts, you can not only signal off a boolean event but also use that object to do some related event. I like working this way as it helps me really focus on what I want to do and not how.

## Capturing time via lifecycle hooks

  The timer proved interesting to test. As a means of acheiving sepeartion of concerns and utilizing native angular features I opted to have the display time be a component in and of itself. I choose that route, because through a lot of the logic in a timer is really wrapped up in the functioning of the actual time portion so by utilizing ngOnChanges as the hook  to emit data to the parent I was able to natively capture the session length and send a completion signal once it reaches a certain. I think this will prove easy to maintain as I build on the application.
  
  ![image](https://user-images.githubusercontent.com/28934521/119709275-a1f0a400-be22-11eb-9ab4-f05d7d4d972d.png)

## Capturing the mood
  
To make use of native angular features I opted to experiment with the dialog material library. This route was chosen to keep the integrity of the user experience and to limit to amount of interation the user needs to do to start and end a meditation.

![image](https://user-images.githubusercontent.com/28934521/119710556-1b3cc680-be24-11eb-99ba-f32bef076ef7.png)

### Overlay implemented on Timer Component
  
  ![image](https://user-images.githubusercontent.com/28934521/119710797-68209d00-be24-11eb-8776-7cce8f41b7ff.png)

  
## Future Plans
Video RTC to allow a community component to the application
https://blog.theodo.com/2021/01/webRTC-websockets-video-call-app/


Testing Resource
https://github.com/priyankaprasadam/TestAngularApp/blob/master/src/app/Services/PostService.spec.ts
https://www.dotnetcurry.com/angularjs/unit-testing-angular-services
https://angular.io/guide/testing-services
https://semaphoreci.com/community/tutorials/testing-routes-in-angular-2

https://www.prestonlamb.com/blog/unit-testing-in-angular

https://www.digitalocean.com/community/tutorials/angular-testing-with-spies

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
