[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/ZUtYscbQ)

| Name                      | NRP        |
| --------------------------|------------|
| Muhammad Abdurrahman Faiz | 5025221058 |
| Putri Meyliya Rachmawati  | 5025221062 |
| Haikal Athallarik         | 5025221232 |
| Revy Pramana              | 5025221252 |
| Allen Keyo Handika        | 5025221298 |

# Komeng run
## Overview
Komeng Run is an endless runner game that invites players to run endlessly through various obstacles and collect as many points as possible. In this game, the player controls the main character named Komeng, an agile runner who must avoid various obstacles that pass along the way.
## Shaders
- **Vertex shaders**<br>
Vertex shaders are used to modify the properties of each vertex in an object, such as position, color, and texture. In Komeng Run, vertex shaders can be used for:
  - **Character animation**<br>
    Change the position or shape of Komeng's character when he runs, jumps, or dodges.
  - **Deformation of the environment**<br>
    Create effects such as curved roads or dynamically moving surfaces as the character keeps running without stopping.
- **Fragment shaders**<br>
Fragment shaders determine the color and shade of each pixel on the visible object. This usage is very important for creating realistic or artistic visual effects. In Komeng Run, fragment shaders can be used for:
  - **Material effects**<br>
    Adjusts the texture of roads, objects, or obstacles to make them appear more realistic.
 
## Geometry
- **Character and Object Modeling**<br>
  Vertex shaders are used to modify the properties of each vertex in an object, such as position, color, and texture. In Komeng Run, vertex shaders can be used for:
    - **Vertices**<br>
      Each 3D model in Komeng Run consists of a set of points that define a position in three-dimensional space. Komeng's characters, obstacles such as rocks or vehicles, are all built from a collection of vertices.
    - **Edges**<br>
      Lines are the connection between two points, forming the basic framework of the object. In Komeng's character model, these lines connect vertices to form body structures, such as hands, feet, and head.
    - **Polygons**<br>
      Polygons, especially triangles, are formed from three connected vertices and are the basic elements of any 3D model. In Komeng Run, every object, including characters and environments, is rendered using a collection of polygons.

- **Collision Detection**<br>
  Geometry is essential to detect interactions between the Komeng character and surrounding objects, such as obstacles. This game uses simple geometry representations such as bounding boxes or bounding spheres to detect whether Komeng has hit an obstacle.

## Animation
The animation that is going to be implemented in our final project are not too complicated. the animations are:
- **Move left/right**: Translate the player object along the x-axis
- **Running**: Use frame-based animations or keyframe animation for running.
- **Jump**: Animate vertical motion using a physics-based approach (e.g., simulating gravity and a parabola motion).
- **Sliding**: Animate by lowering the model’s height and translating it forward.

## Lighting
We are planning to use lighting models like Phong or Blinn-Phong for basic effects.
- Use Directional Light (mimics sunlight), Point Light (localized light), or Spotlight (focused beam).
- Ambient lighting gives overall soft lighting, and specular lighting provides shiny reflections.

## User Interface
Link to the Prototype -> [Figma](https://www.figma.com/proto/Zh8XjA1QAa0WQR1F2RQJCX/TUGAS-KULIAH?page-id=0%3A1&node-id=2330-14&node-type=frame&viewport=238%2C-757%2C0.36&t=oB9UqU9uYcFyLHFC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2330%3A14)
## Link to the slides
Link to the Presentation -> [Powerpoint](https://www.canva.com/design/DAGTbyoR8Ao/iD_t-yf8BvWk2orBtgYlJw/edit?utm_content=DAGTbyoR8Ao&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
