const data = {
    "brief" : "Tarang is our third Autonomous Underwater Vehicle. Tarang has a robust, leak-proof and lightweight central hull made from carbon fiber. It has sensors like IMU, DVL and cameras on-board and can efficiently perform tasks like torpedo shooting, localization in an unknown underwater environment and complex space-constrained manoeuvres. In addition, it has improved battery and additional safety mechanisms installed to prevent damage.Tarang will participate in RoboSub-2021 held online due to the ongoing pandemic.",

    "intro": {
        "mechanical": [
            "Although the design of our previous AUV, Anahita, was acknowledged worldwide, it still had a few flaws. The design involved multiple hulls, leading to high susceptibility to leakages, often damaging the electronic components during pool testing. In addition, multiple hulls and casings limited the accessibility of the internal components, and the positioning of hulls produced relatively high hydrodynamic drag during motion. Finally, the heat dissipation was poor as acrylic is an inferior conductor of heat, resulting in performance degradation and often rendering electronic components inoperable. We tried improving these aspects while designing our new bot."
        ],
        "electrical": [
            "Tarang's electrical system includes power sources, sensors, actuators and all the computational resources required for autonomous underwater tasks. We have designed our own PCBs for multiple purposes. This year, we have designed a dedicated **power board** for power monitoring and distribution to all components. The power system includes a **custom buck and boost converter** designed to our specifications and requirements with the flexibility of placement and connections. We have also built a **custom microcontroller board** for Tarang instead of using Arduino boards with shields, saving a lot of PCB space and cost. The previous microcontroller board (a shield to Arduino Mega) was huge due to unnecessary GPIO pins unused by the Arduino. We use two ESC boards with four ESCs on each board, of which one ESC on each board is a backup in case of failure. There are two layers of stacks inside the hull, which are used for mounting different electronic devices."
        ],
        "software": [
            "We have improved the software architecture to make the code modular, making it easier to test, debug and integrate. In addition, we have made significant advancements in our Simultaneous Localization and Mapping (SLAM) strategy, tuning of the controller and vision algorithms. The software stack uses the Robot Operating System (ROS Noetic) framework by Willow Garage, which works on Ubuntu 20.04 and acts as the communication middleware between all the processes running on the robot. We have migrated our code from Python 2 (which has been deprecated) to Python 3, and updated the code for our previous vehicles to use the latest versions of third-party libraries like OpenCV, YOLO and other ROS packages."
        ]
    },

    "specsTable" : [
        {
            "name": "Weight (in air)",
            "spec": "22 kgs"
        },
        {
            "name": "Propulsions",
            "spec": "T200 thrusters (from Blue Robotics)"
        },
        {
            "name": "Power",
            "spec": "14.8 V 18Ah batteries from Blue Robotics"
        },
        {
            "name": "Camera",
            "spec": "2 IDS UI-5269SE Rev. 4 Cameras"
        },
        {
            "name": "Main Computer",
            "spec": "Intel i7 NUC"
        },
        {
            "name": "Software Stack",
            "spec": " ROS Noetic-Ubuntu 20.04-Gazebo 11"
        },
        {
            "name": "Degrees of Freedom",
            "spec": "6"
        },
        {
            "name": "Operation Time",
            "spec": "4 hours"
        }
    ],
    "mechanical": [
        {
            "id": 1,
            "title": "Main Hull",
            "content": "A major improvement over our previous AUV's is the design of a single main hull. The vehicle hull is made of carbon fibre, making it easier to mold into the desired shape and reducing weight. The weight reduction is advantageous as it significantly minimizes the thrust to move or stop the bot. In addition, a single hull allows us to increase the simplicity of design to a large extent, reducing the need for penetrators in and out of individual hulls and improving accessibility. The penetrators were often the primary cause for most of the leakages in our previous bot, and it was challenging for us to find and fix leaks. A single hull allows us to check for leakages using a single test without being in the pool. We have installed a pressure sensor in the main hull, which assists in leak detection. We lower the pressure inside the hull slightly once all the components are fitted in it. If the pressure sensor reading increases with time, i.e. air can enter due to some leaks in the hull, we will know about the leakages even before putting the vehicle in water.",
            "img": "hull_final.png",
            "imgDesc": "A view of Tarang's hull design."
        },
        {
            "id": 2,
            "title": "Propulsion System",
            "content": "We are using 6 T200 Thrusters from Blue Robotics in our vehicle. A reduction in weight and thrust requirements due to a light carbon fiber hull has enabled us to reduce the number of thrusters from 8 to 6. It reduced the cost and maintenance required for the propellers. We performed vehicle motion simulations in a simulation environment in gazebo and ensured no excess load (RPM) is put on thrusters due to their lower number, even at comparable speeds as the last vehicle. We also verified that all 6 degrees of freedom are achievable by clever use of thrusters. The reduction in the number of thrusters simplified the vehicle dynamics and made thruster allocation simpler.",
            "img": "thruster placement2.JPG",
            "imgDesc": "Thruster Placement in Tarang"
        },
        {
            "id":3,
            "title": "Heat Dissipation Mechanism",
            "content": "The base of the main hull is made using aluminium directly in contact with water when the bot is operating. The water acts as a natural coolant and helps in the dissipation of heat. Aluminium, being a good conductor of heat, aids in effectively transferring the heat generated by the electronic components to the surroundings and prevents damage due to overheating.",
            "img": "",
            "imgDesc": ""
        },
        {
            "id":4,
            "title": "Marker Dropper",
            "imgSize": "sm",
            "content": "We have changed the design of the marker dropper from our previous vehicles. The previous design had several disadvantages like high precision requirement during manufacturing and tricky reloading procedure. It was also difficult to mount on the vehicle. The new design is much simpler, more accurate and more reliable. It will have two markers(golf balls) hydrodynamically designed to fall straight down once they are released. The marker dropper is located near the camera to minimize the errors due to frame transformations. It consists of a star shaped obstructor preventing the marker (golf balls from falling). Once a trigger signal is received, the servo actuated star-shaped obstructor rotates and allows the markers to fall.",
            "img": "md working2.PNG",
            "imgDesc": "Marker Dropper Mechanism"
        },
        {
            "id":5,
            "title": "Grabber",
            "content": "We have designed a singly actuated grabber actuated using a servo motor. The grabber has a relatively simple design, and its manufacturing can be perfected easily. The grabber has four claws which are capable of picking objects with high efficiency.",
            "img": "grabber_combined.png",
            "imgDesc": "Working of grabber"
        },
        {
            "id":6,
            "title": "Pneumatic System",
            "content": "The pneumatic system used in Tarang is a self-designed component capable of shooting torpedoes with accuracy. The assembly uses two IP 68 rated solenoid valves (one for each torpedo). Because the solenoid valve is waterproof, we can install the whole torpedo assembly as a single unit outside the vehicle and mount it at the base, thus removing the need for unnecessary air tubing and increasing space inside the hull for other components.",
            "img": "torpedo compartments.PNG",
            "imgDesc": "The Torpedo Compartments"
        },
        {
            "id":7,
            "title": "Simulation and Testing",
            "content": "The vehicle was tested using various simulation software to get flow visualization and stress analysis. The simulations very performed in ANSYS to find the stress and pressure profile of the vehicle. Topological optimization was used by removing non-essential weight (area containing less stress) for DVL mount. The marker dropper, torpedo and grabber were simulated in Solidworks’ motion study.",
             "img": "cfd.jpg",
            "imgDesc": "Simulation in ANSYS"    
        }

    ],
    "electrical": [
        {
                "id": 42,
                "title": "Power Distribution",
                "blocks": [
                        {
                                "type": "p",
                                "text": "We use two 14.8V 18Ah batteries to power the complete system. One battery is wholly dedicated to the thrusters, which have high power consumption, and cameras with low power consumption, ensuring the supply voltage remains within the battery voltage range. The other battery powers all the remaining electronics by generating 12V and 19V using high-efficiency buck and boost converters, respectively. The microcontroller on the power board features a display and multiple LED indicators for battery monitoring and threat alarming."
                        },
                        {
                                "type": "h",
                                "text": "Custom made Boost Converter"
                        },
                        {
                                "type": "p",
                                "text": "The custom boost converter powers the onboard computer, which operates at 19V. As the power rating for the computer is high (54W), the boost converter had to be very efficient, as the computer remains powered on for the entire duration of the mission."
                        },
                        {
                                "type": "img",
                                "src": "boost_render.png",
                                "caption": "Boost Converter",
                                "size": "sm"
                        },
                        {
                                "type": "h",
                                "text": "Custom made Buck Converter"
                        },
                        {
                                "type": "p",
                                "text": "Most of the low-power electronics are powered through the custom-designed buck converter, which outputs 12V. We ensured high efficiency in the buck to minimize power losses. The power is controlled through the buck converter using microcontroller GPIO, enabling us to completely turn it off and save power."
                        },
                        {
                                "type": "img",
                                "src": "buck_render.png",
                                "caption": "Buck Converter",
                                "size": "sm"
                        },
                        {
                                "type": "h",
                                "text": "5V power supply for servo"
                        },
                        {
                                "type": "p",
                                "text": "The 5V power supply required for driving the servos is created through a regulator using the 12V input from the buck. The power losses of the regulator are insignificant, as it is turned on only for the duration of servo usage. This saves a lot of space and cost that would be spent on making or using another buck converter. We used the RP2040 microcontroller module on the power board to build a robust and compact solution while getting sufficient GPIOs for sensors and other peripherals."
                        },
                        {
                                "type": "img",
                                "src": "electrical_architecture.jpg",
                                "caption": "Tarang's Electrical Architecture",
                                "size": "lg"
                        }
                ]
        },
        {
            "id":1,
            "title": "Kill Switch and Safety Mechanisms",
            "content": "The power management board in the vehicle takes care of the undervoltage and overcurrent faults. We have used a hall effect current sensor(ACS-712) to measure the current flowing through each battery and a simple resistive voltage divider for battery voltage measurement. The Kill Switch mechanism has also been upgraded using a PMOS while toggling the gate voltage through the reed switch. It also provides a penetrator/connector free interface for the Kill switch, ensuring better waterproofing.The internal pressure sensor(BMP388) in the vehicle is used to test for leakage before the vehicle is deployed underwater by measuring whether the hull sustains the applied relative drop in pressure. In addition, temperature reading (provided by the same BMP388) can be used for safely shutting down the ICs if they don't have default thermal shutdown.",
            "img": "",
            "imgDesc": ""
        },
        {
            "id":2,
            "title": "Sensor Integration",
            "content": "Integration of industrial sensors and interfacing directly with onboard computers enables robust and real-time state estimation. This year, we have upgraded to the iDS ueye industrial cameras for better colour quality and enhanced focus. Through the help of a newly introduced network switch, the camera feed can now directly be transferred to GPU for object detection and recognition. The external LAN now and the onboard computer also have direct control over cameras and GPU. The new microcontroller board is designed to significantly reduce its size (using only necessary GPIO pins) and organizes connectors for the actuator and manipulator and several other peripherals.",
            "img": "esc_render.png",
            "imgDesc": "ESC Board"
        },
        {
            "id":3,
            "title": "Onboard Computer",
            "content": "The onboard computer is powered by an Intel Core i7 processor and is powerful enough for real-time image processing, object detection and all other computing. It acts as the primary interface between all the sensors and actuators directly or via some other micro-controller. The new camera is now interfaced via Ethernet, which earlier was done using USB.",
            "img": "",
            "imgDesc": ""
        },
        {   "id":4,
            "title": "Actuators and Manipulators",
            "content": "The servo-actuated marker dropper and the solenoid valve-controlled torpedoes are all driven through the main micro-controller connected to the CPU via USB. The new ESC breakout board is built out on 2 layer PCB with traces exposed to air allowing more current tolerance. The signal to ESCs for driving thrusters is also provided by the main micro-controller.",
            "img": "",
            "imgDesc": ""
        },
        {   "id":5,
            "title": "Connectors",
            "content": "The new Molex micro-fit connectors series with 3 configurations (board-board, wire-wire, wire-board) are used on all the new boards for more placement flexibility, making the boards modular.",
            "img": "molex-micro-fit-connector.jpg",
            "imgDesc": "Molex micro-fit connectors"
        }
    ],
    "software": [
        {
                "id": 42,
                "title": "Software Architecture",
                "blocks": [
                        {
                                "type": "p",
                                "text": "The software stack of Tarang consists of dedicated layers for hardware integration, controls, navigation, motion planning and acoustic localization. The software stack consists of the following layers:"
                        },
                        {
                                "type": "ol",
                                "items": [
                                        "**Master Layer:** It controls and coordinates the actions of all other layers to perform the tasks autonomously. All the decision making and strategy gets coded in the master layer, which commands the nodes in the other layers to perform different functions. The master layer contains the task-specific code. The signals and instructions for completing all the tasks originate from the master layer.",
                                        "**Control Layer:** It contains the implementation of the cascaded PID controller the bot uses. The control layer calculates the thrust for each of the thrusters to manoeuvre the bot as desired. It also generates the trajectory and waypoints to perform the wanted task.",
                                        "**Navigation Layer:** It contains the code for the Simultaneous Localization and Mapping (SLAM) algorithm. It performs sensor fusion, estimates the bot's current position in the world, and generates the world's map based upon the filtered sensor information.",
                                        "**Vision Layer:** It contains the code for all the image processing and vision-related tasks. The vision layer receives the feed directly from the cameras, performs computation on the received data for preprocessing, object detection or visual odometry and sends the processed output to other nodes which require it.",
                                        "**Hardware Layer:** It is responsible for integrating sensors with the software stack. It collects the sensors-specific plugins and utilities to receive information from the sensors and publishes it on topics for the other nodes to use."
                                ]
                        },
                        {
                                "type": "p",
                                "text": "Advantages of such a software architecture are:"
                        },
                        {
                                "type": "ol",
                                "items": [
                                        "It makes the development easier as different layers can be developed independently and tested asynchronously.",
                                        "It enables easy debugging and troubleshooting.",
                                        "It ensures that the code is scalable and maintainable and provides a straightforward way to integrate external libraries and expand the codebase."
                                ]
                        },
                        {
                                "type": "img",
                                "src": "Software_Architecture.png",
                                "caption": "Tarang's Software Architecture",
                                "size": "lg"
                        }
                ]
        },
        {
                "id": 43,
                "title": "Image Pre-processing",
                "blocks": [
                        {
                                "type": "h",
                                "text": "Undistortion"
                        },
                        {
                                "type": "p",
                                "text": "We preprocess the video feed by applying multiple filters before extracting any information from it. Since the images are used to estimate the location of various objects and the vehicle itself, the lengths represented in the images must be true. The camera distorts the features in the image changing their shape and length, so images are undistorted in the preprocessing pipeline. To undistort images, we need to have distortion coefficients of the camera. To obtain these, we need to calibrate the camera using images of known size and shape. In our case, a checkerboard pattern with distortion known beforehand was used to calculate these coefficients."
                        },
                        {
                                "type": "h",
                                "text": "Relative Global Histogram Stretching"
                        },
                        {
                                "type": "p",
                                "text": "The Relative Global Histogram Stretching method aims to improve image quality by applying contrast correction and colour correction to the camera output."
                        },
                        {
                                "type": "h",
                                "text": "Contrast Correction"
                        },
                        {
                                "type": "p",
                                "text": "The contrast correction pipeline applies colour equalization on the image's green-blue (G-B) channels, followed by relative global histogram stretching."
                        },
                        {
                                "type": "h",
                                "text": "Bilateral Filter"
                        },
                        {
                                "type": "p",
                                "text": "A bilateral filter reduces the noise by using a non-linear smoothing filter on the image. The contrast-corrected image is then passed to the colour correction phase, which converts the image to CIE-Lab colour space and stretches the L, a and b components, followed by CIE-Lab to RGB conversion."
                        },
                        {
                                "type": "img",
                                "src": "processing_combined.png",
                                "caption": "Image before preprocessing vs. image after preprocessing",
                                "size": "md"
                        }
                ]
        },
        {
            "id":1,
            "title": "Control System",
            "content": "We have improved the control system in our new vehicle by performing fine thruster calibrations and using a cascaded PID controller for precise movements. Tarang is fully actuated with six thrusters providing six degrees of freedom to the vehicle. Each thruster is calibrated to map the thrust vs PWM input pulse, and these mappings are used to generate a thruster allocation matrix to distribute the thrusts generated by the PID controller to the thrusters. Since each thruster provides thrust only in a particular degree of freedom, it gives a highly decoupled system that allows the vehicle to perform aggressive manoeuvres. Furthermore, decoupled thrusters with the independent position and velocity controller provide a way to tune the position and orientation controller independently. Hence we can tune the PID systems easily.We have implemented a cascaded PID controller for better motion tracking, which considers the error in velocity as well as the error in position to calculate thrusts. It allows a faster compensation with the velocity controller providing a mechanism to prevent overshoot. Since the vehicle's weight is less, it can provide faster response, but it is also prone to large overshoots and oscillations, so parameters are tuned to provide damping and slow down the response. As a result, the motion tracking of Tarang is better than our last vehicle Anahita in terms of lower settling time, almost zero overshoot and ability to perform aggressive manoeuvres.",
            "img": "Control Layer.png",
            "imgDesc": "Tarang's Control Layer"
        },
        {   "id":2,
            "title": "Navigation",
            "content": "We have set a sensor fusion pipeline to combine the readings from different sensors and better assess the measurement using the Kalman Filtering algorithm. The usage of sensor fusion enabled us to compensate for the errors in IMU reading due to magnetic interference and position offset. This year we have added an implementation of the SLAM algorithm known as FastSLAM for navigation. Fast SLAM provides a factored and more efficient way to solve the SLAM problem and provides a way to solve it with a complexity that scales logarithmically with the number of landmarks observed. The navigation layer publishes a world map estimate using a 2.5-dimensional occupancy grid. The occupancy grid stores the estimates of the current state of the robot, global locations of the landmarks and previously traversed locations on the map. The global map helps us in planning and changing our strategy dynamically.",
            "img": "Navigation Layer (4).png",
            "imgDesc": "Tarang's Navigation Layer"
        },
        {   "id":3,
            "title": "YoloV3",
            "content": "For detecting various objects like buoys, gates during the tasks, we are using the YOLOv3 object detection algorithm in contrast to classical computer vision algorithms used in our last vehicle Anahita. YOLOv3 provides better results than classical algorithms as it generates the bounding box in a single pass of the input image as compared to multiple passes in classical methods. To train the YOLOv3 network, we generated rosbags of camera feed by running the vehicle in simulator and recording the camera output and then augmented (rotation, scaling, color variation, occlusion) the frames obtained from these rosbags to generate an extensive dataset.",
            "img": "F_YOLO.png",
            "imgDesc": "YoloV3 in action"
        },
        {   "id":4,
            "title": "Mission Planner",
            "content": "The mission planner contains the strategy to perform all the other tasks. The master layer has the mission planner node, which gives all the different lower layers instructions to accomplish the tasks as per the defined strategy using service-client calls. The mission planner switches on the vision layer to detect the target and switches on the desired task node to execute a task. The task node can also perform the motions such as surge, sway, heave or yaw independently, enabling the vehicle to go from one location to another. A combination of these movements, which can be set in the master layer by the user, achieves the desired motion. The master layer also contains the switches for all the basic motions, the competition's main tasks, and the vision layer. Such a switch system gives easy control over vehicles motion and enables making changes in mission planner effortlessly.",
            "img": "",
            "imgDesc": ""
        },
        {   "id":5,
            "title": "Gazebo Simulation",
            "content": "Extensive testing was performed in the gazebo using the simulated robot model of our vehicle. The open-source simulation tool UUV-simulator was used to simulate an underwater environment. We tested the ability of the vehicle to perform tasks. A simulated gazebo world was made using exact models of the props used in competitions, and the tasks were performed autonomously in that simulation. We used the plugins from the UUV-simulator library to simulate the physics of the world. The vehicle performed the gate task, path follower task, buoy task, marker dropper task, and octagon task successfully. The controller was tested in the simulation and fine-tuned the parameters. As a result, the maximum overshoot was limited to less than 5 percent and achieved a settling time of 10 seconds and negligible steady-state error for a unit step signal.",
            "img": "Gazebo Simulation.png",
            "imgDesc": "Simulation in Gazebo"
        }
    ]
}
export default data;
