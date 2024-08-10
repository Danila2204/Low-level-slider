English:

Slider is a class that creates a slider with a wrapping inside any block element. The following parameters are indicated in the class designer:
 
     Parent - a block element in which a wrapping will be placed with slides.

     Startposition - initial position/default slide number, an optional parameter equal to 0 default.

     Slides is an array of slides inside the wrapper.

Methods:

    Private:
        Createwrap - called in the Init method, creates a wrapping with the indicated classes or with the Slider -Track class by default. Accepts the following parameters:
        
            Classes is an optional parameter indicating the classes that need to be added to the wrap is NULL by default.
    
        CheckButtons - when calling, it turns off/turns on the buttons "Back" and "NEXT" depending on the position of the slides. 
        SetPosition - when calling, it changes the position of the slide in the slider.
    Public:
 
        Init - during a call, the slider initializes, creating a wrapping and slides inside it. Accepts the following parameters: 
            Classes is an optional parameter that creates class/classes for wrapping. If it is not specified, then the default class Slider-Track is created.
            
            Setintractive - when calling, activates the intracraft of the slider buttons.
            
            Back - when calling, it should perform the functionality that should work with the "Back" button.
            
            Front - when calling, it should perform the functionality that should work with the "Next" button.

 Fields:

    Wrap - a wiping in which all slides are stored.

     ButtonBack - HTML Element of the Back button.

     Buttonfront - HTML element of the "Front" button.
Русский:

Slider - класс, создающий слайдер с обёрткой внутри какого-либо блочного элемента. В конструктор класса указываются следующие параметры:

    parent - блочный элемент в который будет помещена обёртка вместе со слайдами.
    startPosition - начальная позиция/номер слайда по умолчанию, необязательный параметр равный 0 по умолчанию.
    slides - массив слайдов внутри обёртки.
Методы:

    Приватные:
        createWrap - вызывается в методе init, создаёт обёртку и с указанными классами, либо с классом "slider-track" по умолчанию. Принимает следующие параметры:
            classes - необязательный параметр, указывающий классы, которые нужно добавить обёртке, по умолчанию равен null.
        checkButtons - при вызове отключает/включает кнопки "back" и "next" в зависимости от позиции слайдов.
        setPosition - при вызове меняет позицию слайда в слайдере.
    Публичные:
        init - при вызове инициализирует слайдер, создавая обёртку и слайды внутри неё. Принимает следующие параметры:
            classes - необязательный параметр, создающий класс/классы для обёртки. Если он не указан, то создаётся класс по умолчанию slider-track.
        setInteractive - при вызове активирует интекрактив кнопок слайдера.
        back - при вызове должен выполнять функционал, который должен срабатывать при кнопке "back".
        front - при вызове должен выполнять функционал, который должен срабатывать при кнопке "next".
Поля:

    wrap - обёртка в которой хранятся все слайды.
    buttonBack - HTML элемент кнопки "back".
    buttonFront - HTML элемент кнопки "front".
