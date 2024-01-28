class World {
    constructor(cells, scalingFactor) {

        

        this.cells = cells;
        this.scalingFactor = scalingFactor;
        this.bugs = [];
        this.totalFoodOverall = 0;

        this.redBugsKilled = 0;
        this.blackBugsKilled = 0;

        this.redHomeFood = 0;
        this.blackHomeFood = 0;

      
      
    }

    canMove(x,y)
    {
        for(let i=0; i<this.cells.length; i++)
        {
            if(this.cells[i].obstructed )
            {
                if(this.cells[i].x <= x && x<=this.cells[i].x+this.scalingFactor   && this.cells[i].y <= y && y<=this.cells[i].y+this.scalingFactor)
                {
                    return false;
                }
            }
        }
        return true;
    }


    checkCondition(condition, x, y, color)
    {
        if(condition.toLowerCase() === "friend")
        {
            for(let i=0; i<this.bugs.length; i++)
        {
            if(this.bugs[i].color === color)
            {
            
                if(this.bugs[i].position.x-this.bugs[i].width <= x && x<=this.bugs[i].position.x+this.bugs[i].width   && this.bugs[i].position.y-this.bugs[i].height <= y && y<=this.bugs[i].position.y+this.bugs[i].height)
                {
                    return true;
                }
                
            }

            
            
        }
        
        return false;
        }

        else if(condition.toLowerCase() === "foe")
        {
            let targetColor = 1;
            if(color ===1)
            targetColor = 2;

        
            
            for(let i=0; i<this.bugs.length; i++)
            {
                if(this.bugs[i].color === targetColor)
                {
                
                    if(this.bugs[i].position.x-this.bugs[i].width <= x && x<=this.bugs[i].position.x+this.bugs[i].width   && this.bugs[i].position.y-this.bugs[i].height <= y && y<=this.bugs[i].position.y+this.bugs[i].height)
                    {
                        return true;
                    }
                    
                }
    
                
                
            }
            
            return false;
        }

        else if(condition.toLowerCase() === "friendwithfood")
        {
            for(let i=0; i<this.bugs.length; i++)
        {
            if(this.bugs[i].color === color)
            {
            
                if(this.bugs[i].position.x-this.bugs[i].width <= x && x<=this.bugs[i].position.x+this.bugs[i].width   && this.bugs[i].position.y-this.bugs[i].height <= y && y<=this.bugs[i].position.y+this.bugs[i].height)
                {
                    if(this.bugs[i].totalFood>0)
                    return true;

                    else
                    return false;
                }
                
            }

            
            
        }
        
        return false;

        }




        else if(condition.toLowerCase() === "foewithfood")
        {
            let targetColor = 1;
            if(color ===1)
            targetColor = 2;

        
            
            for(let i=0; i<this.bugs.length; i++)
            {
                if(this.bugs[i].color === targetColor)
                {
                
                    if(this.bugs[i].position.x-this.bugs[i].width <= x && x<=this.bugs[i].position.x+this.bugs[i].width   && this.bugs[i].position.y-this.bugs[i].height <= y && y<=this.bugs[i].position.y+this.bugs[i].height)
                    {
                        if(this.bugs[i].totalFood>0)
                    return true;

                    else
                    return false;
                    }
                    
                }
    
                
                
            }
            
            return false;
        }






        else if(condition.toLowerCase() === "food")
        {
            for(let i=0; i<this.cells.length; i++)
        {
            if(this.cells[i].food>0 )
            {
                if(this.cells[i].x <= x && x<=this.cells[i].x+this.scalingFactor   && this.cells[i].y <= y && y<=this.cells[i].y+this.scalingFactor)
                {
                    return true;
                }
            }
        }
        return false;

        }


        else if(condition.toLowerCase() === "rock")
        {

            for(let i=0; i<this.cells.length; i++)
        {
            if(this.cells[i].rock)
            {
                if(this.cells[i].x <= x && x<=this.cells[i].x+this.scalingFactor   && this.cells[i].y <= y && y<=this.cells[i].y+this.scalingFactor)
                {
                    return true;
                }
            }
        }
        return false;

        }


        else if(condition.toLowerCase() === "foemarker")
        {
            let targetColor = 1;
            if(color ===1)
            targetColor = 2;

            for(let i=0; i<this.cells.length; i++)
        {
            if(this.cells[i].markers.length>0)
            {
                if(this.cells[i].x <= x && x<=this.cells[i].x+this.scalingFactor   && this.cells[i].y <= y && y<=this.cells[i].y+this.scalingFactor)
                {
                    for(let j=0; j<this.cells[i].markers.length; j++)
                    {
                        if(this.cells[i].markers[j].color === targetColor)
                        {
                            return true;
                        }
                    }
                    return false;
                }
            }
        }
        return false;

        }


        else if(condition.toLowerCase() === "home")
        {

            for(let i=0; i<this.cells.length; i++)
        {
            if(this.cells[i].home!=null && this.cells[i].home.color === color) 
            {
                if(this.cells[i].x <= x && x<=this.cells[i].x+this.scalingFactor   && this.cells[i].y <= y && y<=this.cells[i].y+this.scalingFactor)
                {
                    return true;
                }
            }
        }
        return false;

        }


        else if(condition.toLowerCase() === "foehome")
        {
            let targetColor = 1;
            if(color ===1)
            targetColor = 2;

            for(let i=0; i<this.cells.length; i++)
        {
            if(this.cells[i].home!=null && this.cells[i].home.color === targetColor) 
            {
                if(this.cells[i].x <= x && x<=this.cells[i].x+this.scalingFactor   && this.cells[i].y <= y && y<=this.cells[i].y+this.scalingFactor)
                {
                    return true;
                }
            }
        }
        return false;

        }











    }


    place_marker(markerInt, color, x, y)
    {
        for(let i=0; i<this.cells.length; i++)
        {
            
                if(this.cells[i].x <= x && x<=this.cells[i].x+this.scalingFactor   && this.cells[i].y <= y && y<=this.cells[i].y+this.scalingFactor)
                {
                    let marker = new Marker(markerInt, color, i);
                    if(this.cells[i].markers===null)
                    {
                        this.cells[i].markers=[marker];
                    }
                    else
                    this.cells[i].markers.push(marker);

                    return marker;
                }
            
        }
        

    }

    delete_marker(markerInt, color, marker)
    {
        if(marker===null)
        return null;

        else
        {
        let cell = this.cells[marker.cellno];
        if(cell.markers===null)
        {
            return null;
        }
        for(let i=0; i<cell.markers.length; i++)
        {
            if(cell.markers[i].markerInt===markerInt)
            {
                cell.markers.splice(i,1);
                return null;
            }
        }
        return null;
        }
        

    }


    pickup_food(x,y)
    {
        for(let i=0; i<this.cells.length; i++)
        {
            if(this.cells[i].food>0 )
            {
                if(this.cells[i].x <= x && x<=this.cells[i].x+this.scalingFactor   && this.cells[i].y <= y && y<=this.cells[i].y+this.scalingFactor)
                {
                    let picked_food = this.cells[i].food;
                    this.totalFoodOverall-=picked_food;
                    this.cells[i].food = 0;

                    return picked_food;
                    
                }
            }
        }
        return 0;

    }


    check_food(x,y)
    {
        for(let i=0; i<this.cells.length; i++)
        {
            if(this.cells[i].food>0 )
            {
                if(this.cells[i].x <= x && x<=this.cells[i].x+this.scalingFactor   && this.cells[i].y <= y && y<=this.cells[i].y+this.scalingFactor)
                {
                    let picked_food = this.cells[i].food;
                    

                    return picked_food;
                    
                }
            }
        }
        return 0;

    }

    drop_food(x,y, food, color)
    {
        for(let i=0; i<this.cells.length; i++)
        {
            
            
                if(this.cells[i].x <= x && x<=this.cells[i].x+this.scalingFactor   && this.cells[i].y <= y && y<=this.cells[i].y+this.scalingFactor)
                {
                    this.cells[i].food += food;

                    if(this.cells[i].home!=null)
                    {
                        if(this.cells[i].home.color===color)
                        {
                            if(color===1)
                            this.redHomeFood += food;

                            else
                            this.blackHomeFood += food;
                        }

                        
                    }

                    
                    this.totalFoodOverall+=food;




                    return 0;
                    
                }
            
        }
        

    }
  
      }
  