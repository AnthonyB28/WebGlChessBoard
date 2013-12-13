WebGlChessBoard
===============
Bunduru Chess Board - By Anthony Barranco & Phil Picinic

Fully featured WebGL chess visualizer

Animated chess pieces with high and low polygon models

Multiple texture themes

Multiple skybox environments

Interactive and situational/reactive GUI

3D camera control with mouse, GUI, or automatic animation

Real time lighting, shadows, and particle effects

Two server connection methods

Manual move entry

Chess play speed options

Frames-Per-Second(FPS) counter

Loading screen transitions

Game Over animation

Audio

How To Play
===========
To begin using the Bunduru Chess Board, first specify in the GUI (top left hand corner) which server connection method is prefered. The GameID method connects to Professor Johnsons game server. Simply tick the UseGameID to input the ID by itself.

Examples:
Server Url Method: http://bencarle.com/chess/cg/340
GameID Method: 340

Press Connect to begin the game.
Note: Once you press Connect, no further changes to the connection settings may be made unless you press the Reset button to reset the game to the start.

Camera
======
You can click anywhere on the game screen, hold, and draw to move the camera around. Using the mouse scroll wheel, you can zoom in and out of the game as it is being played.

Or alternatively, you can open the Camera folder and manual fine tune the camera manually. Note that there are presets available. Click the preset button to instantly move the camera to hotspots in the game.

Enabling Sweep Camera will remove the manual camera options and disable click/drag camera control. The camera will automatically animate after each move is made in the game.
You can open the Speed folder to adjust the sweeping speed of the camera.

Movement Speed
=============
You can increase the speed of the chess piece movement animation by opening the Speed folder and decreasing the Chess Speed number. Decreasing this number with make the pieces move slower.

Themes
======
You can open the Themes folder and adjust many graphical settings of the game.
We have provided high and low quality models as well as multiple piece and skybox themes.

Simply select from the drop downs the settings you want and when finished, press the Update button and allow the game to load. The game will go to a loading screen and update based on the settings

Note that High polygon models are resource intensive. They will take a little while to load and can impact FPS performance greatly.

Audio
=====
To enable audio, simply just click on Enable Audio
Note that audio automatically plays when you switch to the stormynight skybox

Manual Moves (Advanced)
======================
The game can be played with manual moves. Open Manual Moves and input the move that you would like to make followed by pressing the Move button.
Example:
Pe2e7

Note that it is not recommended to use manual moves to play a game as it is not designed to be played based on these moves.

Reset
=====
The Reset button will reset the game the game back to its original state, including all theme and camera settings. Press this button if you wish to exit the current game that is being played.


Resources Used:
Three.js http://threejs.org/
Dat-Gui https://code.google.com/p/dat-gui/
Particle Engine http://stemkoski.github.io/Three.js/index.html
Stats http://github.com/mrdoob/stats.js
EasingFunctions http://gimza.com/easing
HTTPObject http://eloquentjavascript.net/
