# Project Overview

## Project Name

devlog - log your development!

## Project Description

Simple way to organize user's programming skills. Each note can be organzied by programming language, framework, library, and more.

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
}
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

|  Day | Deliverable | Status
|---|---| ---|
|Aug 19| Prompt / Wireframes | Complete
|Aug 20| Hierarachy / README / Project Approval / Core Application Structure | Incomplete
|Aug 23| Pseudocode / actual code - MVP: Home page / form / detail page | Incomplete
|Aug 24| Pseudocode / actual code - MVP: filtered view, CSS | Incomplete
|Aug 25| Pseudocode / actual code - MVP: More CSS and media query | Incomplete
|Aug 26| PostMVP | Incomplete
|Aug 27| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Fetching API Data | H | 2hrs| -hrs | -hrs |
| Display notes on homepage(/) | H | 3hrs| -hrs | -hrs |
| Create a Form component | H |  4hrs | -hrs | -hrs |
| Create a Detail component (showpage) | H | 3hrs| -hrs | -hrs |
| Connect a Form component from homepage(new note, .post) and from showpage(edit, .put) | H | 7hrs| -hrs | -hrs |
| Render new note's showpage when it's newly posted or editted | H | 3hrs| -hrs | -hrs |
| Create a filtered view (categorized) in homepage | H | 3hrs| -hrs | -hrs |
| CSS(flexbox) / media query | H | 15hrs| -hrs | -hrs |
| Total | H | 40hrs| -hrs | -hrs |

## SWOT Analysis

### Strengths:

### Weaknesses:

### Opportunities:

### Threats:
