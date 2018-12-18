
# Project's name

## Description 


This game is about a DINO that has to avoid obtacles.

If DINO touches an obstacle it looses a life, the purpouse is to keep DINO alive.


## MVP (DOM - CANVAS)


### Game

DINO is a scuare object

DINO jumps when the key <UP> is pressed

The map is a line with squares as obstacles that moves forward.

DINO has lifes, when there is a colision with an obsticle, it looses one.

When DINO has 0 lifes left, the game ends and game over window is shown.



## Backlog


### MORE MOVEMENT
DINO can move forward and backwards

### DINO BODY

DINO has a dinosaur shape
DINO moves when runs
DINO turns back when moves backwards

### VOID
There is a VOID element behind DINO that moves forward

If the VOID reaches DINO, DINO dies

### EVIL BIRD
There is a BIRD object that takes a life when it touches DINO

### ADVANCED MAP
The map is not a line, there are hills and falls to the emptiness.


## Data structure

### Classes and methods

-class game(){
    this.dino
    this.ground
    this.obstacles
    this.lifes
    this.ctx:

    start()
    pause()
    end()

    update(){}
    colisionDino()
    mapMovement(){} 
}

-class ground(){
    this.src
	this.posy
	this.posx
    this.velocity

    createGround()
    paintGround()
}

-class dino(){
    this.body
    this.lifes:[]
}

-class obstacle (){
    this.obstacles
    this.src
	this.posy
	this.posx

    createObstacle()
    mapObstacle()
    paintObstacle()
}



## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
    - Title
    - Play button
- gameScreen
    - Canvas
- gameoverScreen
    - Game over message
    - Restart


## Task
Task definition in order of priority

- Create the file structure
- Create the constructors of the Classes
- Create a square
- Draw a square on the srceen
- Create the ground
- Draw the ground on the screen
- Place correctly the elements
- Make the square jump
- Create an obstacle
- Draw the obstacle correctly
- Make the ground + the obstacle move at the same time
- Create a collision
- Take off a life if there is a collision
- Restart the map if there is a collision
- Kill DINO if it has 0 lifes left 
- Make a life counter
- Create start page
- Create Game ver page



## Links


### Trello
[Link url](https://trello.com/b/zWTo1mma)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/monicalopezgris/dino-clone)
<!---[Link Deploy](http://github.com)--->


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1JDRqRsvdSR03eA8z_SP6uwnXWxRFYOnq3Xb64Yc9TtY/edit?usp=sharing)