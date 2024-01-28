# README SE_Pair55_Sprint2
Pratham Shah<br>
Andrey Shandybin<br>
This is sprint 2 of the software engineering project where we had to implement a game using HTML, CSS, and Javascript. This project's purpose is to implement an assembler to parse bug instructions, a GUI for the simulator, and the actual simulator itself ability to upload them and pasrse through client side.

the purpose of this sprint is to improve the codebase recieved from one of the other groups the codebase I recieved did not have much progress and only a basic welcome page there was no setup page or simulation page the only thing that I could use from the group was some elements of their bug.js file and bugbrain.js file please go in file `pair55sprint2` to check code also please take a look at  `documentationsprint2pdf` to understand scope of progress

# link
http://clabsql.clamv.jacobs-university.de/~ashandybin/

# File Structure
```
pair55_sprint2/
 ┣ pair55sprint2/
 ┃ ┣ images/
 ┃ ┣testfiles/
 ┃ ┣ javascriptFiles/
 ┃ ┃ ┣ classes/
 ┃ ┃ ┃ ┣ Bug.js
 ┃ ┃ ┃ ┣ Cell.js
 ┃ ┃ ┃ ┗ World.js
 ┃ ┃ ┣ brainValidator.js
 ┃ ┃ ┣ fileLogic.js
 ┃ ┃ ┣ gui.js
 ┃ ┃ ┣ instructionParser.js
 ┃ ┃ ┣ require.js
 ┃ ┃ ┣ Sprite.js
 ┃ ┃ ┣ testCases.js
 ┃ ┃ ┗ worldvalidtor.js
 ┃ ┣ index.html
 ┃ ┣ sim.html
 ┃ ┗ test.html (in code testing of functions)
 ┣ testcasesfilestouploadforchecking
 ┃ ┣ buggyerror1
 ┃ ┣ buggyerror2
 ┃ ┣ buggyerror3
 ┃ ┣ errorworldtestcase1
 ┃ ┣ errorworldtestcase2
 ┃ ┣ errorworldtestcase3
 ┃ ┣ errorworldtestcase4
 ┃ ┣ successworldtestcase
 ┃ ┣ successblackbuggy
 ┃ ┗ successredbuggy
 ┣ DocumentationSprint2Pdf(Imp)
 ┣ Sprint2Video.mp4
 ┗ README.md
```

# Sprint Progess

1. improve UI of welcome page <br>
2. Created settings page <br>
3. Created simulator page <br>
4. quit button on simulator page takes you back to welcome page <br>
5. Implemented `World` class <br>
6. Implemented `Cell` class <br>
7. Implemented `Bug` class <br>
8. Implemented `GUI` class <br>
9. Implemented ability to upload files and parse them all on the client-side <br>
10. Mostly implemented parsing of world map file which displays output of client side<br>
11. Implemented ability to parse through buggy assembler source code and display simulation with number of iterations inputted all on client side<br>
12. implemented test cases for world map file Worldvalidator.js<br>
13. implemented test cases for buggy brain assembler code brainValidator.js<br>
14. implemented tfunctions in buggy assembler code like move, turn, sense ahead etc further detail in documentation<br>
15. tested functions within code using test.html linking it with test.js worldValidator.js and brainValidator.js in order to run press go live in test.html then inspect go on console and you will see the output further information in documentation<br>
16. Documentation Comments for each function file class that was implemented <br>
17. test cases to upload and check (testcasesforuploadfiles) for errors and success's also displayed in documentationspriny2pdf<br>
18. Made a pdf file to explain all the progess please look at Documentation sprint 2 pdf it has lot of important detail<br>
19. red and black bugs move according to the intructions (functions in the buggy assembler file) buggy assembler files(which are recursive) and will keep going on until number of iteration ends<br>
20. logs of simulation displayed when feature is used on settings <br>
22 Sprite.js file has draw function implemented <br>
23. Implemented brainValidator.js which is a file that has code to test the errors for the bug brain which is the assembler source code and worldValidator.js which verifies errors for the worldmapfiles <br>
24. Video demonstration of process <br>
