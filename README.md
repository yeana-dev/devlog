# Project Overview

## Project Name

devlog - log your development! (https://yeana-devlog.netlify.app/)

## Project Description

Simple way to organize user's programming skills. Each note can be organzied by programming language, framework, library, and more. User can write notes using markup language to customize notes and add images.

## Wireframes

![image](https://user-images.githubusercontent.com/78275456/130250604-69180aa5-7f27-4961-897a-149db92bfa0b.png)

## Component Hierarchy

![image](https://user-images.githubusercontent.com/78275456/130250705-fdaa4035-46e2-4be8-963b-c563d77c69f8.png)

## API and Data Sample

```json
{
  "records": [
    {
      "id": "reciJnyhZcjKd50fa",
      "fields": {
        "comfortLevel": 5,
        "content": "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
        "title": "Array.filter()",
        "category": "JavaScript"
      },
      "createdTime": "2021-08-19T14:43:01.000Z"
    },
    {
      "id": "recnfD1rk3pY8iFOC",
      "fields": {
        "comfortLevel": 4,
        "content": "The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.",
        "title": "Array.slice()",
        "category": "JavaScript"
      },
      "createdTime": "2021-08-19T14:43:01.000Z"
    },
    {
      "id": "recyUlM9W1liK4J76",
      "fields": {
        "title": "JavaScript Callbacks",
        "category": "JavaScript",
        "comfortLevel": 3,
        "content": "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.\n\nfunction greeting(name) {\n  alert('Hello ' + name);\n}\n\nfunction processUserInput(callback) {\n  var name = prompt('Please enter your name.');\n  callback(name);\n}\n\nprocessUserInput(greeting);"
      },
      "createdTime": "2021-08-19T14:43:01.000Z"
    }
  ]
```

### MVP/PostMVP

#### MVP

- Use Axios to consume data from Airtable, and GET/render all data(notes) in homepage.
- User can view notes by categories (Programming language / framework)
- Post/edit notes within one component (/form)
- Showpage (detail note) for each notes with clickable edit(axios.put) and delete(axios.delete) button
- Implement responsive design on 2 screen sizes, using a media query.
- Structured components layout using Flexbox.

#### PostMVP

- User can create new category on the posting/editing page. (Also it will be added to navbar)
- Project page(component): User can present their projects. (separate airtable/api)
- Contact me page for visitors to leave their name,email, and comment.

## Project Schedule

star
| Day | Deliverable | Status |
| ------ | ------------------------------------------------------------------- | ---------- |
| Aug 19 | Prompt / Wireframes | Complete |
| Aug 20 | Hierarachy / README / Project Approval / Core Application Structure | Complete |
| Aug 23 | Pseudocode / actual code - MVP: Home page / form / detail page | Complete |
| Aug 24 | Pseudocode / actual code - MVP: filtered view, CSS | Complete |
| Aug 25 | Pseudocode / actual code - MVP: More CSS and media query | Complete |
| Aug 26 | PostMVP | Complete |
| Aug 27 | Presentations | Complete |

## Timeframes

| Component                                                                             | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Fetching API Data                                                                     |    H     |      2hrs      |     2hrs      |    2hrs     |
| Display notes on homepage(/)                                                          |    H     |      3hrs      |    1.5hrs     |   1.5hrs    |
| Create a Form component                                                               |    H     |      4hrs      |     4hrs      |    4hrs     |
| Create a Detail component (showpage)                                                  |    H     |      3hrs      |     3hrs      |    3hrs     |
| Connect a Form component from homepage(new note, .post) and from showpage(edit, .put) |    H     |      7hrs      |     6hrs      |    6hrs     |
| Render new note's showpage when it's newly posted or editted                          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Create a filtered view (categorized) in homepage                                      |    H     |      3hrs      |     3hrs      |    3hrs     |
| CSS(flexbox) / media query                                                            |    H     |     15hrs      |     16hrs     |    16hrs    |
| Total                                                                                 |    H     |     40hrs      |    38.5hrs    |   38.5hrs   |

## SWOT Analysis

### Strengths:

- By using gained knowledges from previous project about array methods, Displaying each different categories on the navbar was easier than I thought.

### Weaknesses:

- Customizing bootstrap's CSS. Need to learn how to make hamburger collapsible navbar in pure JavaScript
- Need to integrate text editor instead of using dangerouslysetinnerhtml

### Opportunities:

- Learned how to incorporate different npm packages by installing three different npm packages.
- First time using Bootstrap. Fascinated by how easy to layout responsive navbar.
