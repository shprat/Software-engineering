class Bug extends Sprite {

  //constructor
  constructor(id, color, state, resting, direction, x,y,world,instructions, imageSrc, animations) {

      
    super(imageSrc, animations);
    this.id = id;
    this.color = color;
    this.state = state;
    this.resting = resting;
    this.direction = direction;
    this.has_food = false;
    this.markers = Array(6).fill(false); // markers are initially unset
    this.position = {x: x, y: y};
    this.instructions = instructions;    
    
    this.world = world;
    this.totalFood = 0;

    this.placedMarkers = Array(6).fill(null);

    this.currentInstruction = this.instructions[0];
    
    
   
  }

//function to check if the bug can move in its current direction
    canMove()
    {
      if(this.cells)
      return true;

      else
      {
        for(let i=0; i<this.cells.length; i++)
        {
            if(this.cells[i].obstructed )
            {
                if(this.cells[i].x <= this.position.x && this.position.x<=this.cells[i].x+60   && this.cells[i].y <= this.position.y && this.position.y<=this.cells[i].y+60)
                {
                    return false;
                }
            }
        }
        return true;
      }
    }
  

//function to change the bug's appearance based on its direction
    switchSprite(name)
    {
      if(this.image===this.animations[name].image)
      return;

      this.image = this.animations[name].image;

    }



    
    //function to update the bug's position on the board

    update()
    {
      
      
      if(this.position.x>=0 && this.position.x<=(canvas.width-this.width) && this.position.y>=0 && this.position.y<=(canvas.height-this.height))
      {

         
          

          if(this.direction===0)
          {
            this.switchSprite("dir0");
            
          

          if(!this.world.canMove(this.position.x+1, this.position.y))
          {
            this.direction = (this.direction+3)%6;
          }
          else
          this.position.x = this.position.x+1;
        }

          else if(this.direction===1)
          {
            this.switchSprite("dir1");

            
          
          if(!this.world.canMove(this.position.x+(this.position.y%2), this.position.y+1))
          {
            this.direction = (this.direction+3)%6;
          }
          else
          {
            this.position.x = this.position.x+(this.position.y%2);
          this.position.y = this.position.y+1;
          }

          }

          else if(this.direction===2)
          {
            this.switchSprite("dir2");

            


          

          if(!this.world.canMove(this.position.x-((this.position.y+1)%2), this.position.y+1))
          {
            this.direction = (this.direction+3)%6;
          }
          else
          {
            this.position.x = this.position.x-((this.position.y+1)%2);
          this.position.y = this.position.y+1;
          }
          }

          else if (this.direction===3)
          {
            this.switchSprite("dir3");
           

              

              if(!this.world.canMove(this.position.x-1, this.position.y))
          {
            this.direction = (this.direction+3)%6;
          }
          else
          {
            this.position.x = this.position.x-1;
          }
          }

          else if (this.direction===4)
          {
            this.switchSprite("dir4");
            


             

              if(!this.world.canMove(this.position.x-((this.position.y+1)%2), this.position.y-1))
          {
            this.direction = (this.direction+3)%6;
          }
          else
          {
            this.position.x = this.position.x-((this.position.y+1)%2);
            this.position.y = this.position.y-1;
          }
          }

          else if (this.direction === 5)
          {
            this.switchSprite("dir5");

            


              

              if(!this.world.canMove(this.position.x+(this.position.y%2), this.position.y-1))
          {
            this.direction = (this.direction+3)%6;
          }

          else
          {
            this.position.x = this.position.x+(this.position.y%2);
              this.position.y = this.position.y-1;
          }
            

          }

          

      }

      else
      {
        if(this.position.x<0)
        this.position.x=  1;

        if(this.position.x>=canvas.width-this.width)
        this.position.x=canvas.width-this.width-2;

        if(this.position.y<0)
        this.position.y=  1;

        if(this.position.y>=canvas.height-this.height)
        this.position.y=canvas.height-this.height-2;

        this.direction = (this.direction+3)%6;

        

        
        

        
      }
    }
      
    
            
    
  
    left() {
      this.direction = (this.direction + 5) % 6;
    }
  
    right() {
      this.direction = (this.direction + 1) % 6;
    }
  
    sensed_cell(p, dir) {
      // Given a position p and a direction dir, return the position of the cell in
      // that direction
      const x = p[0];
      const y = p[1];
      switch (dir) {
        case 0: return [x, y - 1];
        case 1: return [x + 1, y - 1 + (x % 2)];
        case 2: return [x + 1, y + (x % 2)];
        case 3: return [x, y + 1];
        case 4: return [x - 1, y + (x % 2)];
        case 5: return [x - 1, y - 1 + (x % 2)];
      }
    }
  
    set_marker_at(pos, i) {
      this.markers[i] = true;
    }
  
    clear_marker_at(pos, i) {
      this.markers[i] = false;
    }
  
    check_marker_at(pos, i) {
      return this.markers[i];
    }

    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }


    async run_instructions()
    {
      

        let instruction = this.currentInstruction;

        if(instruction.instruction.toLowerCase()==="sense")
        {
          let sensedir = this.stringToDirection(instruction.args[0]);

          let nextX = this.position.x;
          let nextY = this.position.y;

          if(sensedir===0)
          {
            nextX = this.position.x + this.world.scalingFactor;
            nextY = this.position.y;
          }

          else if(sensedir===1)
          {
            
            nextX = this.position.x+(this.position.y%2)*(this.world.scalingFactor);
            nextY = this.position.y + this.world.scalingFactor;
          }

          else if(sensedir===2)
          {            
            nextX = this.position.x-((this.position.y+1)%2)*(this.world.scalingFactor);
            nextY = this.position.y + this.world.scalingFactor;
          }

          else if (sensedir===3)
          {
            nextX = this.position.x - this.world.scalingFactor;
            nextY = this.position.y;
          }

          else if (sensedir===4)
          {
            
            nextX = this.position.x-((this.position.y+1)%2)*(this.world.scalingFactor);
            nextY = this.position.y-this.world.scalingFactor;
          }

          else if(sensedir===5)
          {
            nextX = this.position.x+(this.position.y%2)*(this.world.scalingFactor);
            nextY = this.position.y-this.world.scalingFactor;
          }


          let s1 = instruction.args[1];
          let s2 = instruction.args[2];
          let cond = instruction.args[3];

          let condResult = this.world.checkCondition(cond, nextX, nextY, this.color);

          if(condResult)
          instruction = this.instructions[s1];

          else
          instruction = this.instructions[s2];


        }


        else if(instruction.instruction.toLowerCase()==="mark")
        {
          let m = instruction.args[0];
          let s = instruction.args[1];

          if(!this.markers[m])
          {
            this.markers[m] = true;
            this.placedMarkers[m] = this.world.place_marker(m, this.color, this.position.x, this.position.y);
          }

          instruction = this.instructions[s];



        }

        else if(instruction.instruction.toLowerCase()==="unmark")
        {
          let m = instruction.args[0];
          let s = instruction.args[1];

          if(this.markers[m])
          {
            this.markers[m] = false;
            this.placedMarkers[m] = this.world.delete_marker(m, this.color, this.placedMarkers[m]);
          }

          instruction = this.instructions[s];

        }


        else if(instruction.instruction.toLowerCase()==="pickup")
        {
          let s1 = instruction.args[0];
          let s2 = instruction.args[1];

          let resultCond = false;

          let picked_up_food = this.world.check_food(this.position.x, this.position.y)

          if(!this.has_food && picked_up_food>0)
          {
            this.has_food = true;

            this.totalFood = this.world.pickup_food(this.position.x, this.position.y);

            resultCond = true;

          }
          if(resultCond)
          instruction = this.instructions[s1];

          else
          instruction = this.instructions[s2];


          

        }

        else if(instruction.instruction.toLowerCase()==="drop")
        {
          let s = instruction.args[0];
          

          

          

          if(!this.has_food && this.totalFood>0)
          {
            this.has_food = false;

            this.world.drop_food(this.position.x, this.position.y, this.totalFood, this.color);

            this.totalFood = 0;

            

            

          }
         
          instruction = this.instructions[s];


          

        }

        else if(instruction.instruction.toLowerCase()==="turn")
        {
          let lr = instruction.args[0];
          let s = instruction.args[1];

          if(lr==="left")
          this.direction = (this.direction+5)%6;

          else if(lr==="right")
          this.direction = (this.direction+1)%6;

          instruction = this.instructions[s];



        }


        else if(instruction.instruction.toLowerCase()==="move")
        {
          let s1 = instruction.args[0];
          let s2 = instruction.args[1];

          let resultCond = false;






          let nextX = this.position.x;
          let nextY = this.position.y;

          if(this.direction===0)
          {
            nextX = this.position.x + this.world.scalingFactor;
            nextY = this.position.y;
          }

          else if(this.direction===1)
          {
            
            nextX = this.position.x+(this.position.y%2)*(this.world.scalingFactor);
            nextY = this.position.y + this.world.scalingFactor;
          }

          else if(this.direction===2)
          {            
            nextX = this.position.x-((this.position.y+1)%2)*(this.world.scalingFactor);
            nextY = this.position.y + this.world.scalingFactor;
          }

          else if (this.direction===3)
          {
            nextX = this.position.x - this.world.scalingFactor;
            nextY = this.position.y;
          }

          else if (this.direction===4)
          {
            
            nextX = this.position.x-((this.position.y+1)%2)*(this.world.scalingFactor);
            nextY = this.position.y-this.world.scalingFactor;
          }

          else if(this.direction===5)
          {
            nextX = this.position.x+(this.position.y%2)*(this.world.scalingFactor);
            nextY = this.position.y-this.world.scalingFactor;
          }

          resultCond = this.world.canMove(nextX, nextY);

          if(resultCond)
          {
            for(let step = 0; step < this.world.scalingFactor-1; step++)
            {
                  if(this.direction===0)
                  {
                    this.switchSprite("dir0");
                    let nextXPos = this.position.x + 1 + Math.round(this.width/2);
                    let nextYPos = this.position.y;

                    if(this.world.canMove(nextXPos, nextYPos))
                    {
                      this.position.x = this.position.x + 1;

                    }

                    else
                    break;

                    
                    
                  }

                  else if(this.direction===1)
                  {
                    this.switchSprite("dir1");
                    let nextXPos = this.position.x+(this.position.y%2)*(1)+Math.round(this.width/2);
                    let nextYPos = this.position.y + 1+Math.round(this.height/2);

                    if(this.world.canMove(nextXPos, nextYPos))
                    {
                      
                                          
                    this.position.x = this.position.x+(this.position.y%2)*(1);
                    this.position.y = this.position.y + 1;
                    }
                    else
                    break;
                  }

                  else if(this.direction===2)
                  {     this.switchSprite("dir2");       
                    let nextXPos = this.position.x-((this.position.y+1)%2)*(1) - Math.round(this.width/2);
                    let nextYPos = this.position.y + 1 + Math.round(this.height/2);

                    if(this.world.canMove(nextXPos, nextYPos))
                    {


                    this.position.x = this.position.x-((this.position.y+1)%2)*(1);
                    this.position.y = this.position.y + 1;
                    }

                    else
                    break;
                  }

                  else if (this.direction===3)
                  {
                    this.switchSprite("dir3");
                    let nextXPos = this.position.x - 1 - Math.round(this.width/2);
                    let nextYPos = this.position.y;

                    if(this.world.canMove(nextXPos, nextYPos))
                    {
                      this.position.x = this.position.x - 1;
                    }

                    else
                    break;
                    
                  }

                  else if (this.direction===4)
                  {

                    this.switchSprite("dir4");

                    let nextXPos = this.position.x-((this.position.y+1)%2)*(1) - Math.round(this.width/2);
                    let nextYPos = this.position.y - 1 - Math.round(this.height/2);

                    if(this.world.canMove(nextXPos, nextYPos))
                    {
                      this.position.x = this.position.x-((this.position.y+1)%2)*(1);
                      this.position.y = this.position.y - 1;
                    }
                    
                    else
                    break;
                  }

                  else if(this.direction===5)
                  {

                    this.switchSprite("dir5");

                    let nextXPos = this.position.x+(this.position.y%2)*(1) + Math.round(this.width/2);
                    let nextYPos = this.position.y - 1 - Math.round(this.height/2);

                    if(this.world.canMove(nextXPos, nextYPos))
                    {
                      this.position.x = this.position.x+(this.position.y%2)*(1);
                      this.position.y = this.position.y - 1;
                    }
                    
                    else
                    break;
                  }

                  await this.sleep(10000);

            }

            instruction = this.instructions[s1];
          }

          else
          {
            instruction = this.instructions[s2];
          }
          



          



          
          


          

        }

        else if(instruction.instruction.toLowerCase()==="flip")
        {
          let p = instruction.args[0];
          let s1 = instruction.args[1];
          let s2 = instruction.args[2];

          let randomNumber = Math.floor(Math.random() * p);

          if(randomNumber===0)
          instruction = this.instructions[s1];

          else
          instruction = this.instructions[s2];


        }


        else if(instruction.instruction.toLowerCase()==="direction")
        {
          let d = instruction.args[0];
          let s1 = instruction.args[1];
          let s2 = instruction.args[2];

          

          if(this.direction===d)
          instruction = this.instructions[s1];

          else
          instruction = this.instructions[s2];


        }

        this.currentInstruction = instruction;

        


        //console.log(instruction.number, instruction.instruction, instruction.args, instruction.comment, instruction.label);

      

    }

    stringToDirection(dir)
    {
      dir = dir.toLowerCase();
      if(dir==="ahead")
      return this.direction;

      else if(dir==="leftahead")
      return (this.direction+5)%6;

      else if(dir==="rightahead")
      return (this.direction+1)%6;

      else if(dir==="here")
       return -1;
    }


    kill() {
      this.state = -1;
    }
  
    getPosition(){
      return this.position;
    }
  
    toString() {
      return '${this.id}';
    }


    

    
  
  }