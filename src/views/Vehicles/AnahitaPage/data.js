const data = {
    "brief" : "Anahita is an improvement over AUV-IITK’s previous vehicle Varun in terms of its modularity, robustness, ease of manufacturing and assembly. The vehicle is designed to perform complex spaceconstrained tasks and at the same time, not compromising on the maneuverability. Anahita participated in RoboSub-2019, San Diego and was the first runner up at NIOT-SAVe, 2019.",

    "intro": {
        "mechanical": [
            "The mechanical subsystem is responsible for the design and manufacture of the vehicle. Anahita's mechanical system consists of the vehicle's frame, grabber, marker dropper, torpedo, connectors and penetrators. The mechanical design of Anahita is more modular, easier to assemble and more robust than its predecessor Varun. Furthermore, the addition of interchangeable components and task-specific parts increases the vehicle's modularity significantly."
        ],
        "electrical": [
            "The electrical system in Anahita acts as an interface between the mechanical structure and the software logic. It is designed to provide power, drive actuators and interface with the various sensors installed in the robot. Major improvements over Varun's electrical system are the custom-made PCBs designed to suit the specific needs of Anahita."
        ],
        "software": [
            "The software stack of Anahita consists of dedicated layers for hardware integration, controls and navigation, motion planning, perception and acoustic localization. It is built over the Robot Operating System (ROS) framework by Willow Garage, which acts as a communication middleware between all processes running on the robot."
        ]
    },

    "specsTable" : [
        {
            "name": "Weight (in air)",
            "spec": "32 kgs"
        },
        {
            "name": "Propulsions",
            "spec": " T200 thrusters (from Blue Robotics)"
        },
        {
            "name": "Power",
            "spec": "25V Lipo Blue Robotics batteries"
        },
        {
            "name": "Camera",
            "spec": "Logitech C930E cameras"
        },
        {
            "name": "Navigation Sensors",
            "spec": " DVL, Hydrophones, Camera"
        },
        {
            "name": "Main Computer",
            "spec": "Intel i7 NUC"
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
            "title": "Frame",
            "content": "The frame is completely redesigned to provide solid structural support and hold all the components together. One of the main challenges in the frame design was to reduce the mass without compromising the structural rigidity. Unlike our previous vehicle, VARUN, the frame is wired with truss structures to provide structural support without reducing the mass. After completing the initial design, ANSYS Topology optimization was used to reduce the mass. A total reduction of 80% in mass was achieved using this method. The frame is manufactured using Abrasive Water-jet Machining using 6061-T6 Alloy. Aluminium sheets of two different thickness: 5mm thick sheets for side plates and 4mm thick sheets for the rest of the frame are used for the frame design. The significant advantage of such a frame design is that all the components are attached directly to the frame, eliminating the need for separate mounts for individual parts. In addition, the design reduces weight, complexity and allows for efficient use of space. All components are placed such that the centre of mass is at the relative centre, ensuring directional stability and ease of control.",
            "imgDesc": "Anahita's Frame",
            "img": "frame.png"
        },
        {
            "id": 2,
            "title": "Watertight Enclosures",
            "content": "A critical hurdle in the underwater vehicle development is to ensure leak proof enclosures for electrical circuitry, actuators, batteries, and sensors. Nitrile O-rings are used for sealing. All the grooves for the O-rings are made using the MACRO Rubber and Plastic Guide. The main objective for our current vehicle was to make a modular design, keeping in mind the ease of mounting mechanism for the enclosures.",
            "imgDesc": "",
            "img": ""
        },
        {
            "id": 3,
            "title": "Camera Casing",
            "content": "The Camera casings provide waterproof protection for the two cameras employed for the front view and the bottom view individually. The cameras have a 90◦ field of view. Hence the design ensures that the camera's view is not obstructed. The entire casing is manufactured using Aluminium 6061-T6 Alloy by Computer Numeric Control (CNC). The O-ring is pressed by a 5mm thick Aluminium plate, fastened with Stainless Steel Allen bolts to provide adequate force for sealing. Acrylic plates support the camera maintaining its orientation, and Fischer connector provides a waterproof interface for signal wires.",
            "imgDesc": "The Camera casings",
            "img": "camera.png"
        },
        {
            "id": 4,
            "title": "Hulls",
            "content": "The main hull houses all the electronics of the vehicle and is the primary source of buoyancy. The hull consists of three parts- Acrylic tube, Flange and Cap. The Acrylic tube acts as a transparent interface to monitor all the electronic displays and the LED indicators. Two static radial O-rings prevent water leakage. The SOV casing design is similar to the hull but a little smaller in size. It houses an air cylinder, pressure regulator, two 3/2 valves and two 5/2 valves for the pneumatic actuators present in the Grabber and the Torpedo. The air connections between the casing and the actuators are completely modular due to bulkhead Air Connectors' use.",
            "imgDesc": "Main hull",
            "img": "hull.png"
        },
        {
            "id": 5,
            "title": "Battery Pod",
            "content": "Anahita is equipped with an external battery pod system with two battery pods, each containing one battery. The batteries are hence easy to replace and charge. It also frees up valuable space in the main hull. The battery pod consist of two parts- the outer body and the pod internals. The outer body of the battery pod consists of an acrylic tube closed at one end. The battery pod is 20 cm long, with an OD of 130mm and ID of 114mm and thickness of 8mm, sufficiently robust and large enough to hold the batteries. Each battery pod features an external KIll switch and one 2-pin Fischer connector for the power supply. Each battery pod houses a 22.2V 10000mAh Tattu battery. The internals consists of a battery holder consisting of three nylon plates mounted inside the slits of three nylon circular disc that fits precisely inside the circular hull. 2mm gaskets are used for watertight sealing of the battery pods. The new battery pods are hot-swappable, i.e. we can swap individual battery pods without affecting the system's operation. The whole body of Battery pods is made of Acrylic (PMMA), a transparent light-weighted thermoplastic with high tensile strength, flexural strength, transparency, chemical resistance, and heat resistance.",
            "imgDesc": "The battery pod system",
            "img": "battery.png"
        },
        {
            "id": 6,
            "title": "IMU Casing",
            "content": "The Inertial Measurement Unit takes in the earth's magnetic field as a reference to measure the changes in the angular position during a vehicle's motion. Hence, any magnetic disturbances make the readings of the IMU susceptible to errors. In order to counter this, the IMU is given a separate watertight casing to prevent magnetic interference due to distribution boards and solenoid valves. The casing is milled entirely out of a single acrylic block. The casing houses the IMU sensor at a certain height to prevent any damage from accidental water leakage. Separate mounting points for both the developer board and the IMU enable easy assembly and disassembly.",
            "imgDesc": "IMU Casing",
            "img": "imu.png"
        },
        {
            "id": 7,
            "title": "Grabber",
            "content": "A scissor mechanism that can provide a total maximum elongation of 300mm performs the lifting mechanism. The grabbing mechanism employs a four-finger mechanism, which is actuated pneumatically by two pistons. The scissors mechanism is highly proficient as it provides an extension of 300mm from just a linear actuation of 50mm and the grabber achieves a maximum diagonal extension of 120mm with a 10mm actuation.",
            "imgDesc": "Grabber in action",
            "img": "gabber.png"
        },
        {
            "id": 8,
            "title": "Marker Dropper",
            "content": "The dropper prototype can hold two markers (golf balls of diameter 45mm) and drop them independently. A waterproof servo actuates the dropper. The prototype mainly consists of two parts: the outer cylinder clamped onto the frame and the inner cylinder containing the two balls. The design exploits the non-concentric nature of the cylindrical hole made into the two components, which helps drop the balls at the desired locations. Being actuated using a servo instead of pneumatics, the mechanism is more precise and accurate since the servo can rotate it by any angle precisely. The dropper has been manufactured by Rapid prototyping, using PLA as the additive material. ",
            "imgDesc": "Marker Dropper",
            "img": "markerdropper.png"
        },
        {
            "id": 9,
            "title": "Torpedo",
            "content": "The torpedo is 3D printed using PLA. Its average density is slightly less than that of water. Being positively buoyant, it can be recovered easily even after it has been fired underwater. Its streamlined design reduces drag. The centre of gravity and centre of buoyancy does not create torques as they coincide with the torpedo centre, resulting in a highly stable design. The tail fins reduce tilting and change of torpedo direction, forcing it to move linearly until it stops. When the torpedo starts going off its straight trajectory, i.e. it tilts, the fins tilt and make an angle with the flow. This flow generates torque restoring the torpedo to its initial position.",
            "imgDesc": "Complete view of the Torpedo",
            "img": "torpedo.png"
        },
        {
            "id": 10,
            "title": "Pneumatic System",
            "content": "The pneumatic air cylinder contains air at 50 bar. It is brought down to desired pressure using a pressure regulator, which is taken to the SOV. The NUC signals energize the SOV and allow air to pass through it, propelling the torpedo forward.",
            "imgDesc": "Pneumatic System",
            "img": "pneumatic.png"
        },
    ],
    "electrical": [
        {
            "id":1,
            "title": "Power Management",
            "content": "Anahita consists of a separate Power Distribution System and a Monitoring System. Two 22.2V 10000mAh Lithium Polymer batteries power the vehicle. Li-Po batteries are chosen not only for their high energy density but also an outstanding balance between other features such as high discharge rate, low self-discharge rate, and good cycle life. In addition, various components in the vehicle require input power at different voltages for their functioning. The 22.2V supply is distributed into 5V, 12V and 19V regulated rails using buck converters (LM25085 from Texas Instruments). An unregulated rail created from the batteries powers the thrusters. The current and voltage across each rail of the Power Distribution System are monitored. The current is monitored by Hall effect current sensors (ACS725 from Allegro Microsystems). Voltage is monitored by first using a voltage divider to convert the rail voltage into a value in the 0-5V range and then reading the value using the built-in ADC in the Arduino. Arduino Mega is used for controlling the actuation and reading data from various sensors, which in turn is controlled by an Intel NUC. The vehicle has two kill switches to terminate the mission in need of faults or to use it as a switch. One switch is the Hard Kill switch which completely shuts down the vehicle. The other soft kill switch stops the power to all the processes except the power to the Onboard computer.",
            "imgDesc": "Depiction of Power Management in Anahita",
            "img": "powermgmt.png"
        },
        {
            "id":2,
            "title": "Actuation",
            "content": "The vehicle's motion is achieved using  T200 thrusters (from Blue Robotics). The T200 have a brushless 3 phase AC motor, which is controlled using Blue Robotics Basic ESC. A Solenoid Actuation board actuates the solenoid  valves used in the vehicle using DRV102 IC (Texas Instruments). The DRV102 helps to save energy and supplies full output for a short interval when triggered. The valves control the servo motors of the marker dropper.",
            "imgDesc": "",
            "img": ""
        },
        {
            "id":3,
            "title": "Hydrophones",
            "content": "Anahita is equipped with a set of 4 Aquarian Audio AS-1 hydrophones for acoustic pinger signals processing. Each signal received by the hydrophones is initially put through an amplifier and an analog filter. The amplifier adds a gain of fifty and sends it to the analog filter, which is a 6th order low-pass filter with a cutoff frequency of 37.5 kHz. The output from the low-pass filter is re-amplified in order to map the output of the filter into the input range of ADC for maximum efficiency. The signal is then converted into the differential form in order to send it to the ADC (LTC2383). The signal from the ADC is sent to an all programmable SoC development board from MicroZed, which converts it into a single-ended signal and then transfers it into the processor's memory. At this point, the data has been successfully transferred into the NUC and then a software level cross-correlation algorithm is applied on the processed data to find the heading of the pinger.",
            "imgDesc": "Hydrophones",
            "img": "hydrophones.jfif"
        },
        {
            "id":4,
            "title": "Sensors",
            "content": "The vehicle uses a 30 bar pressure sensor(from Blue Robotics) which measures the depth with a resolution of 2mm and communicates via I2C protocol with the microcontroller. Vehicle needs a visual sensor which can detect and recognize object around its surroundings and take appropriate actions. ANAHITA uses two Logitech C930E cameras. These cameras come with 90◦ field of view, support and 4x zoom in 1080p with autofocus feature and capable of working in low light conditions too.ANAHITA uses the AHRS-8 from Sparton as its primary Inertial Measurement Unit. It is fully temperature compensated over the operating range of -40◦ C to 70◦ C. It has a low power consumption Moreover, power management (Sleep Mode) supports multiple communication protocols and has centripetal acceleration correction.",
            "imgDesc": "IMU, Camera and Pressure Sensor",
            "img": "sensors.png"
        },
        {
            "id":5,
            "title": "Connectors and Penetrators",
            "content": "The electrical connections going in and out of all the watertight enclosures are made using Fischer connectors and Blue Robotics Penetrators. Connectors are mainly used for delivering power across the enclosures. Using a connector for the signal wires carrying the data from sensors may result in data loss. In order to prevent this, penetrators are used to directly carry the signal wire from the sensors to the main hull, leaving no room for errors. Both the connectors and penetrators are sealed using RS 851-044 epoxy, which is best suited for the purpose.",
            "imgDesc": "Connectors and Penetrators",
            "img": "conandpen.png"
        }
    ],
    "software": [
        {
                "id": 100,
                "title": "Architecture",
                "blocks": [
                        {
                                "type": "p",
                                "text": "In order to make the code modular, it is divided into five layers:"
                        },
                        {
                                "type": "ol",
                                "items": [
                                        "**Master Layer:** The master layer is responsible for initiating each process. It instructs the task handler layer to execute the node sequence in which the task has to be performed.",
                                        "**Task Handler Layer:** This layer has task-specific code written for each task and uses a motion library to achieve the target.",
                                        "**Motion Library:** This layer assists the task handler layer to achieve a goal. It consists of six PID control loops for six degrees of freedom.",
                                        "**Vision Layer:** The vision layer is responsible for providing information about the mission elements present in the arena. It detects the targets from the raw camera image and provides the coordinates of the vehicle to the task handler layer.",
                                        "**Hardware Layer:** This layer is responsible for integrating sensors with the software stack. It collects all the information from the sensors and advertises it over topics from where any node that needs it can take it. The design is independent and extendable, so the software can scale with the tasks or missions to accomplish."
                                ]
                        },
                        {
                                "type": "img",
                                "src": "AnahitaSoft.jpg",
                                "caption": "Software data & control flow",
                                "size": "lg"
                        }
                ]
        },
        {
            "id":1,
            "title": "Controls",
            "content": "Anahita has eight propulsion-based thrusters, enabling it to perform motion in all six degrees of freedom (surge, heave, sway, roll, pitch and yaw). There is an implementation of an independent PID controller in our motion library for each of these degrees. Due to various non-idealities present between the thrusters, thruster calibration is needed to get the thrust generated by the thruster as a function of the PWM or the voltage signal given to the thruster. However, we circumvented this task by relying on the PID gains only instead of using a separate function to give voltage signals.",
            "imgDesc": "",
            "img": ""
        },
        {   "id":2,
            "title": "Navigation",
            "content": "Performing localization underwater is a tedious task due to the attenuation of GPS signals. In Anahita, Doppler Velocity Log (DVL), Teledyne Pathfinder, and the inertial measurement unit (IMU), Sparton AHRS-8, is used to achieve the localization of the vehicle. During tasks, the setpoints for the vehicle's trajectory are retrieved from the vehicle's vision and acoustic systems. Once the target is acquired, the vehicle coordinates with respect to the target are received, and the system tries to achieve goals in that target frame. The task handler layer launches a specific task after the signal from the master layer. It receives roll, pitch, and yaw values from IMU and heaves, sway and surge coordinates from hydrophones/vision layer. As all the six PID loops run simultaneously, the vehicle follows the shortest path towards its goal.",
            "imgDesc": "",
            "img": ""
        },
        {   "id":3,
            "title": "Mission Planner",
            "content": "The master layer is the topmost layer of Anahita's software stack. It contains a user-fed plan to execute the required tasks by controlling lower layers through service-client calls. For executing a task, it will switch on the vision layer to detect the target and if the target is found it will switch on that task in the task handler layer. The tasks layer also consists of tasks separately having surge, sway, heave or yaw motions. In between any two tasks, combinations of these motions take the vehicle from the location of the task it has just ended to a location where it can find the next task. The combination also is set in the master layer by the user. There are switches for all these motions, the competition's main tasks, and the vision layer in the master. The switch system makes it very easy to control and make changes in the mission planner.",
            "imgDesc": "",
            "img": ""
        },
        {   "id":4,
            "title": "Computer Vision",
            "content": "There is poor visibility in underwater vision because of the propagated light's attenuation. The attenuation of light increases exponentially with increasing distance and increasing depth, mainly due to absorption and scattering effects. Due to absorption, a raw underwater image appears hazy, and the contrast is affected due to scattering. Due to this phenomena, distant objects almost disappear or are difficult to discern in an underwater image. Therefore, the following filters are applied linearly: Contrast Limited Adaptive Histogram Equalizationm, Bilateral Filter, White Balancing, Bilateral Filter and Fast Non-Local Means denoising.",
            "imgDesc": "Preprocessing",
            "img": "cv.png"
        },
        {
            "id": 5,
            "title": "Contrast-Limited Adaptive Histogram Equalization",
            "content": "Histogram equalization is a process that equalizes the tonal distribution of the photograph. Adaptive histogram equalization, which works on patches of the image, improves local contrast rather than global histogram equalization because it heavily changes the brightness of the object of interest. The subsequent problem of over-amplification of noise is resolved by contrast-limiting, i.e. if any histogram bin is above the specified contrast limit, those pixels are clipped and distributed uniformly to other bins before applying histogram equalization.",
            "imgDesc": "",
            "img": ""
        },
        {
            "id": 6,
            "title": "White Balance",
            "content": "This operation discards pixel colours at both ends of the histograms generated by the Red, Green and Blue channels of the image to ensure they do not affect the maximal stretching. Which colours are being discarded is decided by the discard ratio, which is the ratio of the number of pixels showing that colour to the total number of pixels. At the end of this process, the histogram of each of the three channels cover its entire domain, which tends to reduce the cast the image may earlier have.",
            "imgDesc": "",
            "img": ""
        },
        {
             "id": 7,
            "title": "Object Detection",
            "content": "For most tasks, the raw image is first preprocessed ('blue filtered'). After this, the main object of interest is identified using techniques like thresholding followed by morphological operations. The edge of this blob is identified either by using the Canny Edge detection algorithm followed by Probabilistic Hough Line Transform or contouring. The blob centre is calculated using a bounding rectangle, bounding ellipse or assigning weights to the contours. The distance of the object from the vehicle is calculated with respect to the camera, and this is done by an exponential mapping of a particular dimension of the blob with its actual distance from the vehicle.",
            "imgDesc": "Object Detection",
            "img": "objdetection.png"
        }
    ]
}
export default data;
