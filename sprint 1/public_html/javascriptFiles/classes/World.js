class World {
    constructor(cells) {

        

        this.cells = cells;

      
      
    }

    canMove(x,y)
    {
        for(let i=0; i<this.cells.length; i++)
        {
            if(this.cells[i].obstructed )
            {
                if(this.cells[i].x <= x && x<=this.cells[i].x+60   && this.cells[i].y <= y && y<=this.cells[i].y+60)
                {
                    return false;
                }
            }
        }
        return true;
    }
  
      }
  