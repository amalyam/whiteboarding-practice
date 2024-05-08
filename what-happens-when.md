I. What happens when you type google.com into your browser's address box and press enter?
From computer startup:

1. Powering on the computer: When you press the power button on your computer, it sends an electrical signal to the hardware components, instructing them to start up. The Central Processing Unit (CPU) initializes first, followed by other components such as the motherboard, RAM, and storage devices.

2. Boot-up sequence: The Basic Input/Output System (BIOS) or Unified Extensible Firmware Interface (UEFI) loads. These are low-level software that manages the hardware initialization process. They check for hardware components, ensure they're functioning correctly, and then locate the boot loader.

3. Loading the operating system: The boot loader, which could be GRUB for Linux systems or the Windows Boot Manager for Windows systems, loads the operating system (OS) kernel into memory. The OS kernel initializes various system processes and drivers needed for the OS to function.

4. User login: Once the operating system is loaded, you may need to log in with a username and password, depending on your system's security settings.

From browser launch: 5. Launching the browser: After logging in, you may choose to open a web browser. When you click on the browser icon, the operating system loads the browser's executable file into memory and starts executing its code.

6. Browser initialization: Upon launching, the browser performs various initialization tasks, such as loading default settings, extensions, and plugins.

7. Establishing an internet connection: If your computer is not already connected to the internet, the browser or the operating system may establish a connection using a wired or wireless network adapter.

8. Typing a search into Google: Once the browser is open and an internet connection is established, you can type your search query into the address bar or the search bar of the browser's interface. When you hit Enter or click on the search button, the browser sends an HTTP request to Google's servers.
   a. an electrical circuit specific to the enter key is closed (either directly or capacitively). This allows a small amount of current to flow into the logic circuitry of the keyboard, which scans the state of each key switch, debounces the electrical noise of the rapid intermittent closure of the switch, and converts it to a keycode integer. The keyboard controller then encodes the keycode for transport to the computer.

9. DNS resolution: Before the request is sent, the browser checks the Domain Name System (DNS) to resolve the domain name "google.com" to an IP address. If the IP address is not cached locally, the browser sends a DNS query to your configured DNS server, which resolves the domain name to an IP address.

10. HTTP request: With the IP address of Google's servers obtained, the browser sends an HTTP request to the server, specifying the search query as part of the request parameters.
    a. The HTTPD (HTTP Daemon) server is the one handling the requests/responses on the server-side.
    b. The server breaks down the request to the following parameters: HTTP Request Method (either GET, HEAD, POST, PUT, PATCH, DELETE, CONNECT, OPTIONS, or TRACE). In the case of a URL entered directly into the address bar, this will be GET. Domain, in this case - google.com. Requested path/page, in this case - / (as no specific path/page was requested, / is the default path).
    c. The server verifies that google.com can accept GET requests.
    d. The server verifies that the client is allowed to use this method (by IP, authentication, etc.).
    e. The server goes to pull the content that corresponds with the request, in our case it will fall back to the index file, as "/" is the main file (some cases can override this, but this is the most common method).
    f. The server parses the file according to the handler. If Google is running on PHP, the server uses PHP to interpret the index file, and streams the output to the client.

11. Server processing: Google's servers receive the HTTP request and process it. They may use complex algorithms to interpret the search query, retrieve relevant search results from their index, and generate a response.

12. HTTP response: Google's servers send back an HTTP response containing the search results to your browser.

13. Rendering search results: Upon receiving the response, the browser renders the search results in a user-friendly format, typically as a list of links along with snippets of text from each page.
    a. Once the server supplies the resources (HTML, CSS, JS, images, etc.) to the browser it undergoes the below process:
    b. Parsing - HTML, CSS, JS
    c. Rendering - Construct DOM Tree → Render Tree → Layout of Render Tree → Painting the render tree

    a. Receiving the HTTP response: When Google's servers receive your HTTP request containing the search query, they process it and generate an HTTP response. This response typically includes HTML (Hypertext Markup Language) along with other resources such as CSS (Cascading Style Sheets), JavaScript files, images, etc.

    b. Parsing the HTML: Once the HTTP response containing the HTML document reaches your browser, the browser's rendering engine begins to parse the HTML. Parsing involves breaking down the HTML code into a structured format that the browser can understand.

    c. Constructing the DOM tree: As the browser parses the HTML, it constructs the Document Object Model (DOM) tree. The DOM represents the hierarchical structure of the HTML document, with each HTML element represented as a node in the tree. Attributes, text nodes, and other content within the HTML are also represented as nodes in the DOM tree.

    d. Rendering the content: As the DOM tree is constructed, the browser's rendering engine starts rendering the content onto the browser window. Rendering involves interpreting the HTML and applying styles defined in CSS to determine how each element should be displayed on the screen. The rendering engine calculates the layout of the elements and determines their position, size, color, font, etc.

    e. Fetching external resources: While parsing the HTML, the browser may encounter external resources such as CSS files, JavaScript files, and images referenced within the HTML document. The browser initiates additional HTTP requests to fetch these resources from the server.

    f. Processing CSS and JavaScript: Once the browser receives CSS and JavaScript files, it processes them accordingly. CSS styles are applied to the corresponding HTML elements to style the content, while JavaScript code is executed to add interactivity and dynamic behavior to the page.

    g. Rendering the final layout: After processing CSS, JavaScript, and other resources, the browser completes rendering the final layout of the web page. This layout includes all the content, styles, and interactive elements defined in the HTML, CSS, and JavaScript.

    h. Displaying the web page: Finally, the fully rendered web page is displayed in the browser window, and you can interact with it by clicking on links, submitting forms, or performing other actions.

    i. Throughout this process, the browser's rendering engine plays a crucial role in parsing and interpreting the HTML, constructing the DOM tree, applying styles, and rendering the final layout of the web page for you to view and interact with.

14. Displaying the search results: Finally, you see the search results displayed in your browser window, and you can click on any of the links to visit the respective web pages.

HTML parsing

The rendering engine starts getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.

The primary job of the HTML parser is to parse the HTML markup into a parse tree.

The output tree (the "parse tree") is a tree of DOM element and attribute nodes. DOM is short for Document Object Model. It is the object presentation of the HTML document and the interface of HTML elements to the outside world like JavaScript. The root of the tree is the "Document" object. Prior to any manipulation via scripting, the DOM has an almost one-to-one relation to the markup.

The parsing algorithm

HTML cannot be parsed using the regular top-down or bottom-up parsers.

The reasons are:

    The forgiving nature of the language.
    The fact that browsers have traditional error tolerance to support well known cases of invalid HTML.
    The parsing process is reentrant. For other languages, the source doesn't change during parsing, but in HTML, dynamic code (such as script elements containing document.write() calls) can add extra tokens, so the parsing process actually modifies the input.

Unable to use the regular parsing techniques, the browser utilizes a custom parser for parsing HTML. The parsing algorithm is described in detail by the HTML5 specification.

The algorithm consists of two stages: tokenization and tree construction.

Actions when the parsing is finished

The browser begins fetching external resources linked to the page (CSS, images, JavaScript files, etc.).

At this stage the browser marks the document as interactive and starts parsing scripts that are in "deferred" mode: those that should be executed after the document is parsed. The document state is set to "complete" and a "load" event is fired.

Note there is never an "Invalid Syntax" error on an HTML page. Browsers fix any invalid content and go on.
CSS interpretation

    Parse CSS files, <style> tag contents, and style attribute values using "CSS lexical and syntax grammar"
    Each CSS file is parsed into a StyleSheet object, where each object contains CSS rules with selectors and objects corresponding CSS grammar.
    A CSS parser can be top-down or bottom-up when a specific parser generator is used.

Page Rendering

    Create a 'Frame Tree' or 'Render Tree' by traversing the DOM nodes, and calculating the CSS style values for each node.
    Calculate the preferred width of each node in the 'Frame Tree' bottom-up by summing the preferred width of the child nodes and the node's horizontal margins, borders, and padding.
    Calculate the actual width of each node top-down by allocating each node's available width to its children.
    Calculate the height of each node bottom-up by applying text wrapping and summing the child node heights and the node's margins, borders, and padding.
    Calculate the coordinates of each node using the information calculated above.
    More complicated steps are taken when elements are floated, positioned absolutely or relatively, or other complex features are used. See http://dev.w3.org/csswg/css2/ and http://www.w3.org/Style/CSS/current-work for more details.
    Create layers to describe which parts of the page can be animated as a group without being re-rasterized. Each frame/render object is assigned to a layer.
    Textures are allocated for each layer of the page.
    The frame/render objects for each layer are traversed and drawing commands are executed for their respective layer. This may be rasterized by the CPU or drawn on the GPU directly using D2D/SkiaGL.
    All of the above steps may reuse calculated values from the last time the webpage was rendered, so that incremental changes require less work.
    The page layers are sent to the compositing process where they are combined with layers for other visible content like the browser chrome, iframes and addon panels.
    Final layer positions are computed and the composite commands are issued via Direct3D/OpenGL. The GPU command buffer(s) are flushed to the GPU for asynchronous rendering and the frame is sent to the window server.

GPU Rendering

    During the rendering process the graphical computing layers can use general purpose CPU or the graphical processor GPU as well.
    When using GPU for graphical rendering computations the graphical software layers split the task into multiple pieces, so it can take advantage of GPU massive parallelism for float point calculations required for the rendering process.

II. The BOM:
The Browser Object Model (BOM) is a set of objects provided by web browsers to interact with the browser window. While the BOM is separate from the DOM (Document Object Model), they both play crucial roles in web development and browser behavior. Here's how the BOM fits into the process:

    Accessing browser functionality:
    The BOM provides objects and methods to interact with various aspects of the browser window and environment. This includes objects like window, document, navigator, history, and location. Developers can use these objects to manipulate the browser window, control navigation, handle events, and perform other tasks.

    Manipulating the document:
    Although the BOM and DOM are distinct, they are closely related. The window object is the global object in client-side JavaScript, and it serves as the entry point to both the BOM and the DOM. Through the window object, developers can access the document object, which represents the HTML document loaded in the browser. With access to the document object, developers can manipulate the DOM by adding, removing, or modifying elements and their attributes.

    Event handling:
    The BOM provides mechanisms for handling user interactions and browser events. Developers can attach event listeners to DOM elements or to the window object itself to respond to events such as mouse clicks, keyboard inputs, form submissions, and page loading. Event handling in the BOM allows developers to create interactive and dynamic web applications.

    Browser-specific functionality:
    In addition to standardizing core web APIs, the BOM may also expose browser-specific functionality and features. This includes methods for controlling browser behavior (e.g., opening new windows or tabs, resizing windows), accessing client-side storage (e.g., cookies, Web Storage, IndexedDB), and interacting with browser plugins or extensions.

    Extension points for browser features:
    Browser vendors may extend the BOM to support new features and capabilities. For example, modern browsers provide APIs for accessing device hardware (e.g., geolocation, camera, microphone) through the BOM, enabling web applications to offer enhanced functionality and user experiences.

In summary, while the DOM represents the structured hierarchy of HTML elements within a web page, the BOM provides an interface for interacting with the browser window and environment, including document manipulation, event handling, and access to browser-specific functionality. Together, the DOM and BOM form the foundation for building interactive and dynamic web applications.
