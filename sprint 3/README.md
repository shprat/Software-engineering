# README SE_Pair54_Sprint3
Pratham Shah<br>
Arkadii Sapozhnikov<br>
This is sprint 3 of the software engineering project where we had to implement a game using HTML, CSS, and Javascript. This project's purpose is to implement an assembler to parse bug instructions, a GUI for the simulator, and the actual simulator itself ability to upload them and pasrse through client side.

the purpose of this sprint is to improve the codebase recieved from one of the other groups the codebase I recieved had a good UI and class definitions however they did not have a working simulation of the world map with iterations please go in file `public_html` to check code also please take a look at  `documentationsprint3pdf` to understand scope of progress

# link
http://clabsql.clamv.jacobs-university.de/~asapozhnik/public/index.html

# Tech Used
HTML<br>
CSS<br>
Javascript<br>

# File Structure
```
pair54_sprint3/
 ┣ public_html/
 ┃ ┣ public/
 ┃ ┃ ┣ index.html
 ┃ ┃ ┗ index.js
 ┃ ┣ src/
 ┃ ┃ ┣ assets/
 ┃ ┃ ┃ ┣ styles/
 ┃ ┃ ┃ ┃ ┃ ┗style.css
 ┃ ┃ ┣ bugWorld/(jsfiles)
 ┃ ┃ ┃ ┣ classes/
 ┃ ┃ ┃ ┃ ┣ Bug.js
 ┃ ┃ ┃ ┃ ┣ Cell.js
 ┃ ┃ ┃ ┃ ┗ World.js
 ┃ ┃ ┃ ┣ brainValidator.js
 ┃ ┃ ┃ ┣ fileLogic.js
 ┃ ┃ ┃ ┣ gui.js
 ┃ ┃ ┃ ┣ instructionParser.js
 ┃ ┃ ┃ ┣ require.js
 ┃ ┃ ┃ ┣ Sprite.js
 ┃ ┃ ┃ ┣ testCases.js
 ┃ ┃ ┃ ┗ worldvalidtor.js
 ┃ ┃ ┣ pages/
 ┃ ┃ ┃ ┣ settings/
 ┃ ┃ ┃ ┃ ┣ images/
 ┃ ┃ ┃ ┃ ┣ filelogic.js
 ┃ ┃ ┃ ┃ ┗settings.js
 ┃ ┃ ┣ test/ (in code testing of functions)
 ┃ ┃ ┃ ┗ test.html
 ┣casesforuploading
 ┃ ┣ buggyerror1
 ┃ ┣ buggyerror2
 ┃ ┣ buggyerror3
 ┃ ┣ errorworldtestcase1
 ┃ ┣ errorworldtestcase2
 ┃ ┣ errorworldtestcase3
 ┃ ┣ errorworldtestcase4
 ┃ ┣ errorworldtestcase5
 ┃ ┣ successworldtestcase
 ┃ ┣ successworldtestcase2
 ┃ ┣ successblackbuggy
 ┃ ┣ successredbuggy
 ┃ ┣ successblackbuggy2
 ┃ ┗ successredbuggy2
 ┣ DocumentationSprint3Pdf(Imp)
 ┣ Sprint3Video.mp4
 ┗ README.md
```

# Sprint Progess

1. improved file structure <br>
2. Improved settings page <br>
3. Created a working simulation <br>
4. quit button on simulator page takes you back to welcome page <br>
5. Improved `World` class <br>
6. Improved `Cell` class <br>
7. Improved `Bug` class <br>
8. Improved `GUI` class <br>
9. Implemented ability to upload files and parse them all on the client-side <br>
10. implemented parsing of world map file which displays output of client side<br>
11. Implemented ability to parse through buggy assembler source code and display simulation with number of iterations inputted all on client side<br>
12. implemented test cases for world map file Worldvalidator.js<br>
13. implemented test cases for buggy brain assembler code brainValidator.js<br>
14. implemented tfunctions in buggy assembler code like move, turn, sense ahead etc further detail in documentation<br>
15. tested functions using test.js worldValidator.js and brainValidator.js test results can be viewed on welcome page of website<br>
16. Documentation Comments for each function file class that was implemented <br>
17. cases to upload and check (casesforuploading) for errors and success's also displayed in documentationsprint3pdf<br>
18. Made a pdf file to explain all the progess please look at Documentation sprint 3 pdf it has lot of important detail<br>
19. red and black bugs move according to the intructions (functions in the buggy assembler file) buggy assembler files(which are recursive) and will keep going on until number of iteration ends<br>
20. logs of simulation displayed when feature is used on settings <br>
21. Sprite.js file has draw function implemented <br>
22. Implemented brainValidator.js which is a file that has code to test the errors for the bug brain which is the assembler source code and worldValidator.js which verifies errors for the worldmapfiles <br>
23. Video demonstration of process <br>
24. improved test cases and validation by displaying test result on website <br>
