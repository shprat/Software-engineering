class Bug extends Sprite {

  //constructor
    constructor(id, color, state, resting, direction, x,y, imageSrc, animations, cells=[]) {

      
      super(imageSrc, animations);
      this.id = id;
      this.color = color;
      this.state = state;
      this.resting = resting;
      this.direction = direction;
      this.has_food = false;
      this.markers = Array(6).fill(false); // markers are initially unset
      this.position = {x: x, y: y};    
      
      this.cells = cells;
      
      
     
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
      
      
      if(this.position.x>=60 && this.position.x<=(canvas.width-this.width-60) && this.position.y>=60 && this.position.y<=(canvas.height-this.height-60))
      {

         
          

          if(this.direction===0)
          {
            this.switchSprite("dir0");
            
          this.position.x = this.position.x+1;

          if(!this.canMove())
          {
            this.direction = (this.direction+3)%6;
          }
        }

          else if(this.direction===1)
          {
            this.switchSprite("dir1");

            
          this.position.x = this.position.x+(this.position.y%2);
          this.position.y = this.position.y+1;
          if(!this.canMove())
          {
            this.direction = (this.direction+3)%6;
          }

          }

          else if(this.direction===2)
          {
            this.switchSprite("dir2");

            


          this.position.x = this.position.x-((this.position.y+1)%2);
          this.position.y = this.position.y+1;

          if(!this.canMove())
          {
            this.direction = (this.direction+3)%6;
          }
          }

          else if (this.direction===3)
          {
            this.switchSprite("dir3");
           

              this.position.x = this.position.x-1;

              if(!this.canMove())
          {
            this.direction = (this.direction+3)%6;
          }
          }

          else if (this.direction===4)
          {
            this.switchSprite("dir4");
            


              this.position.x = this.position.x-((this.position.y+1)%2);
              this.position.y = this.position.y-1;

              if(!this.canMove())
          {
            this.direction = (this.direction+3)%6;
          }
          }

          else if (this.direction === 5)
          {
            this.switchSprite("dir5");

            


              this.position.x = this.position.x+(this.position.y%2);
              this.position.y = this.position.y-1;

              if(!this.canMove())
          {
            this.direction = (this.direction+3)%6;
          }
            

          }

          if(!this.canMove())
          {
            this.direction = (this.direction+3)%6;
          }

      }

      else
      {
        if(this.position.x<60)
        this.position.x=62;

        if(this.position.x>=canvas.width-this.width-60)
        this.position.x=canvas.width-this.width-62;

        if(this.position.y<60)
        this.position.y=62;

        if(this.position.y>=canvas.height-this.height-60)
        this.position.y=canvas.height-this.height-62;

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
  
  }
  