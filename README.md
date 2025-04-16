# js-code-learning
Learning js

javascript Execution Context

{} -> Global Exec Contect 
    -> Function Exec Conetext
    -> Eval Exec Context  ( mongose)

 1 Memory Creation Phase / Creation Phase
 2. Execution Phase


   let val1 = 10
   let val2 = 5
   function addNum(num1, num2) {
        let total = num1 + num2
        return total
   }
   let result = addNum(val1, val2)
   let result2 = addNum(10, 2)

   1st step is Global Execition and golbal values are places in `this` context

   phase 2  memeory creation phase / Memory phase / creation phase
   Creatation of variables
   val1 -> `undefined`
   val2 -> `undefined`
   addNum -> definition
   reault1 -> `undefined`
   reault2 -> `undefined`

   Phase 3 Execution phase

   Val1 <- 10
   Val2 <- 5

   addNum ---------> New excution context New thread
                         new Variable environment
                         new execution thread
                         |
                         |
          ___________________________
          |                             ↓
          ->Memory Phase           Execution context
          Val1 -> `undefined`        num -> 10
          val2 -> `undefined`        num -> 5
          total ->`undefined`        Total -> 15
     In global execution context result1 - > 15
     Total -> 15 will be returned to global Execution as the function has total in return statement
     Once the add num has been executed and the Total has been returned 
     
     This execution context is destroyed ( Always)

     now in next line there is another call for addNum a new execution Context is created for that
      addNum ---------> New excution context New thread
                         new Variable environment
                         new execution thread
                         |
                         |
          ___________________________
          |                             ↓
          ->Memory Phase           Execution context
          Val1 -> `undefined`        num -> 10
          val2 -> `undefined`        num -> 12
          total ->`undefined`        Total -> 12
     In global execution context result2 - > 12


Call Stack --> funcation called goes into st
   


