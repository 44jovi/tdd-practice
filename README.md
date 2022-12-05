# School Report App

## About

- A TDD exercise, working on the feedback from a live external coding process review (recorded)

---

## User story

- Teachers want to get an overview of how students are doing.

## Task

- Output a report counting the number of grades per grade category: green, amber or red.

## Input / Output (Examples)

### Regular cases

| Input                           | Output                       |
| ------------------------------- | ---------------------------- |
| "Green, Green, Red, Amber, Red" | "Green: 2\nAmber: 1\nRed: 2" |
| "green, Green, red, Amber, Red" | "Green: 2\nAmber: 1\nRed: 2" |
| "Green"                         | "Green: 1"                   |

### Exceptions / errors

| Input                               | Output                                       |
| ----------------------------------- | -------------------------------------------- |
| "Green, Red"                        | "Green: 2\nRed: 2" <!-- omit zero counts --> |
| "Green Green Red Amber Red"         | "Error - check input"                        |
| 1234 [or any other non string data] | "Error - check input"                        |

---
