// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 223.13,
          "height": 43.93,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Please click\nto enter the fullscreen mode",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "18",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 250,
          "angle": 0,
          "width": 36.93,
          "height": 13.56,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "V.1.0.0",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "12",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        }
      ],
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.options.events['click'] = function() {
  // Launch fullscreen mode
  lab.util.fullscreen.launch(document.body)
    // ... if successful, move to next screen
    .then(() => this.end('Fullscreen mode enabled'))
    // ... otherwise, alert the user (this could
    // be changed to continue the study, as above)
    .catch(() => alert('Fullscreen mode not available'))
}

// Please note that that fullscreen mode (at present,
// this will change) needs one more line of code in
// the study style sheet to keep a consistent background
// color. Please find that setting in the study options
// (rightmost toolbar icon), in the CSS tab
}
      },
      "viewport": [
        800,
        600
      ],
      "title": "Start fullscreen"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cmain\u003E\n\n\u003Cp\u003EThis experiment should be performed on a fullscreen mode. Once the experiment is finished, the display will exit the fullscreen automatically. Do not exit in the middle of the experiment. If you exit for any reason, press 'F11' which may allow you to go back to the fullscreen again.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf the fullscreen mode is not available, please maximise this window. Make sure not to change the window size in the middle of the experiment for the best results.\u003C\u002Fp\u003E\n\n\u003Ccenter\u003E\n\u003Cbutton type=\"Submit\"\u003ENext\u003C\u002Fbutton\u003E\n\u003C\u002Fcenter\u003E\n\n\u003C\u002Fmain\u003E\n",
          "title": "\u003Ccenter\u003EWelcome to the experiment! \u003C\u002Fcenter\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
//window.moveTo(0, 0);
//window.resizeTo(screen.availWidth, screen.availHeight);

}
      },
      "title": "Welcome"
    },
    {
      "type": "lab.html.Form",
      "responses": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {

this.options.events['input input'] = function() {
  const scale = document.getElementById('scale').value
  document.getElementById('credit_card')
    .setAttribute(
      'transform',
      `scale(${ scale / 100 })`
    )
}
},
        "end": function anonymous(
) {
// Get the image width and height in browser pixels
const { width, height } = document.querySelector('svg #credit_card rect.card')
  .getBoundingClientRect()

// Compute dpi and dpcm based on this information
this.data.dpi = width / 3.375
this.data.dpcm = width / 8.573
this.data.viewScale=this.data.dpi/100
}
      },
      "title": "ScalingScreen",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv\u003E\n    \u003Cstyle type=\"text\u002Fcss\"\u003E\n      #credit_card line {\n        stroke: var(--color-border);\n        stroke-dasharray: 4;\n        vector-effect: non-scaling-stroke;\n      }\n      #credit_card rect {\n        fill: var(--color-gray-background);\n        stroke: var(--color-border);\n        stroke-width: 2;\n        stroke-linecap: butt;\n        stroke-linejoin: round;\n        vector-effect: non-scaling-stroke;\n      }\n      #credit_card rect.background {\n        fill: white;\n        stroke: white;\n        stroke-width: 10;\n      }\n    \u003C\u002Fstyle\u003E\n    \u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" version=\"1.1\"\n      viewBox=\"-400 -250 800 500\"\n      style=\"width: 800px; height: 500px\"\u003E\n      \u003Cg\n        id=\"credit_card\"\n        transform=\"scale(1)\"\n      \u003E\n        \u003Cline x1=\"-168.75\" y1=\"-2000\" x2=\"-168.75\" y2=\"2000\" \u002F\u003E\n        \u003Cline x1=\"168.75\" y1=\"-2000\" x2=\"168.75\" y2=\"2000\" \u002F\u003E\n        \u003Cline x1=\"-2000\" y1=\"-106.25\" x2=\"2000\" y2=\"-106.25\" \u002F\u003E\n        \u003Cline x1=\"-2000\" y1=\"106.25\" x2=\"2000\" y2=\"106.25\" \u002F\u003E\n        \u003Crect\n          class=\"background\"\n          x=\"-168.75\" y=\"-106.25\"\n          width=\"337.5\" height=\"212.5\"\n          rx=\"12.5\"\n        \u002F\u003E\n        \u003Crect\n          class=\"card\"\n          x=\"-168.75\" y=\"-106.25\"\n          width=\"337.5\" height=\"212.5\"\n          rx=\"12.5\"\n        \u002F\u003E\n      \u003C\u002Fg\u003E\n    \u003C\u002Fsvg\u003E\n    \u003Cdiv class=\"m-l\" \u003E\n      \u003Cp class=\"font-weight-bold content-horizontal-center\"\u003E\n        Please use the slide bar below to adjust the size of the rectangle to match the size of your University ID card or credit card (you can also use most membership cards that have the same size as a credit card). Click the 'submit' button if you are happy with the size of the rectangle.\n      \u003C\u002Fp\u003E\n      \u003Cform id=\"pumps-form\"\u003E\n        \u003Cinput \n          type=\"range\" \n          name=\"scale\" id=\"scale\"\n          class=\"w-l\"\n          min=\"20\" max=\"200\" value = \"100\"\n        \u003E\n        \u003Cbutton type=\"submit\"\u003ESumit\u003C\u002Fbutton\u003E\n      \u003C\u002Fform\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n",
      "parameters": {},
      "files": {}
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Prac_letter",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "\u003Cp\u003EIn this experiment you will try to memorise letters you see on the screen while you also solve simple math problems. \u003C\u002Fp\u003E\n\n\u003Cp\u003EIn the next few minutes, you will have some practice to get you familiar with how the experiment works.\u003C\u002Fp\u003E\n\n\u003Cp\u003EWe will begin by practicing the letter part of the experiment.\u003C\u002Fp\u003E\n\n\u003Cbr\u003E\n\u003Cp\u003EClick a mouse button to begin\u003C\u002Fp\u003E",
              "title": "Welcome to the experiment!"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "click": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "InstPrac1"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cp\u003EFor this practice set, letters will appear on the screen one at a time. Try to remember each letter in the order presented.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAfter 2-3 letters have been shown, you will see a screen listing 12 possible letters. Your job is to select each letter in the order presented. To do this, click the letters you want to select. The letters you select will appear at the upper portion of the screen.\u003C\u002Fp\u003E\n\n\u003Cbr\u003E\n\u003Cp\u003EClick a mouse button to begin\u003C\u002Fp\u003E",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "click": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instPrac2"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cp\u003EWhen you have selected all the letters, and they are in the correct order, hit NEXT button.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf you make a mistake, hit UNDO button to delete the last letter.\u003C\u002Fp\u003E\n\n\u003Cp\u003EIf you forget one of the letters, click SPACE to insert a blank space and continue entering the subsequent letters. If you do not insert a blank for a forgotten letter, all subsequent letters will be marked as incorrect (as their positions in the sequence will be wrong). Remember, it is very important to get the letters in the same order as you see them. If you forget one, use SPACE to mark the position.\u003C\u002Fp\u003E\n\u003Cbr\u003E\n\u003Cp\u003EClick a mouse button to try some practice trials.\u003C\u002Fp\u003E",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "click": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instPrac3"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "test": "0",
              "trial": "",
              "setSize": "2",
              "test_string": "",
              "input_string": "",
              "letACC": "",
              "letFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "setSize": "2",
              "test_string": "",
              "input_string": "",
              "letACC": "",
              "letFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "setSize": "3",
              "test_string": "",
              "input_string": "",
              "letACC": "",
              "letFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "setSize": "3",
              "test_string": "",
              "input_string": "",
              "letACC": "",
              "letFB": ""
            }
          ],
          "sample": {
            "mode": "sequential",
            "n": ""
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
nCorrLetter=0;
nLetter=0;
ospan=0;
nCorrTrial=0;
nTotalTrial=0;
absScore=0;
}
          },
          "title": "PracLetter_Loop",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "PracLetter_Trial",
            "tardy": true,
            "content": [
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "stimulus": "F"
                  },
                  {
                    "stimulus": "P"
                  },
                  {
                    "stimulus": "Q"
                  },
                  {
                    "stimulus": "J"
                  },
                  {
                    "stimulus": "H"
                  },
                  {
                    "stimulus": "K"
                  },
                  {
                    "stimulus": "T"
                  },
                  {
                    "stimulus": "S"
                  },
                  {
                    "stimulus": "N"
                  },
                  {
                    "stimulus": "R"
                  },
                  {
                    "stimulus": "Y"
                  },
                  {
                    "stimulus": "L"
                  }
                ],
                "sample": {
                  "mode": "sequential"
                },
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
// Subsample the loop parameters by drawing randomly
// from the loop contents
this.options.templateParameters = this.random.sample(
  this.options.templateParameters,
  this.parameters.setSize
)
console.log(this.options.templateParameters)


// Extract the presented stimuli and store them seperately,
// as a feature of the overall trial sequence.
  this.parent.options.parameters.test_string = 
  this.options.templateParameters.map(
    function(repetition) { return repetition.stimulus }
  )


}
                },
                "title": "letterString_loop",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "i-text",
                      "left": 0,
                      "top": 0,
                      "angle": 0,
                      "width": 327.27,
                      "height": 36.16,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "${parameters.stimulus}",
                      "fontStyle": "normal",
                      "fontWeight": "normal",
                      "fontSize": 32,
                      "fontFamily": "sans-serif",
                      "lineHeight": 1.16,
                      "textAlign": "center"
                    }
                  ],
                  "viewport": [
                    800,
                    600
                  ],
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
// We don't need screen-by-screen data
this.options.datacommit = false

/*
console.log(testString)
testString=testString + this.parameters.stimulus
console.log(testString)
*/
}
                  },
                  "title": "letter_presentation",
                  "timeout": "1000",
                  "tardy": true
                }
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -125,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": -50,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": 175,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": 25,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -125,
                    "top": 25,
                    "angle": 0,
                    "width": 23.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "H",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 100,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -50,
                    "top": 25,
                    "angle": 0,
                    "width": 16,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "J",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": -200,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": -200,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": 25,
                    "top": 25,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "K",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 100,
                    "top": 25,
                    "angle": 0,
                    "width": 17.8,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "L",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": -125,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": -50,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": 175,
                    "top": 25,
                    "angle": 0,
                    "width": 23.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "N",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -200,
                    "top": 100,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "P",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -125,
                    "top": 100,
                    "angle": 0,
                    "width": 24.89,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Q",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 25,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -50,
                    "top": 100,
                    "angle": 0,
                    "width": 23.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "R",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 175,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -200,
                    "top": 25,
                    "angle": 0,
                    "width": 19.55,
                    "height": 36.16,
                    "stroke": "",
                    "strokeWidth": 1,
                    "fill": "#000000",
                    "text": "F",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 300,
                    "top": 50,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": "#d6341a",
                    "strokeWidth": 1,
                    "fill": "#d6341a"
                  },
                  {
                    "type": "rect",
                    "left": 100,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": 300,
                    "top": 175,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": "#a8ca09",
                    "strokeWidth": 1,
                    "fill": "#a8ca09"
                  },
                  {
                    "type": "i-text",
                    "left": 25,
                    "top": 100,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "S",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 100,
                    "top": 100,
                    "angle": 0,
                    "width": 19.55,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "T",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 175,
                    "top": 100,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Y",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 300,
                    "top": 50,
                    "angle": 0,
                    "width": 94.22,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "UNDO",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 300,
                    "top": 175,
                    "angle": 0,
                    "width": 85.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "NEXT",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 175,
                    "angle": 0,
                    "width": 350,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 175,
                    "angle": 0,
                    "width": 106.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "SPACE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "aoi",
                    "left": -125,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "H"
                  },
                  {
                    "type": "aoi",
                    "left": -50,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "J"
                  },
                  {
                    "type": "aoi",
                    "left": 25,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "K"
                  },
                  {
                    "type": "aoi",
                    "left": 100,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "L"
                  },
                  {
                    "type": "aoi",
                    "left": 175,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "N"
                  },
                  {
                    "type": "aoi",
                    "left": -200,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "P"
                  },
                  {
                    "type": "aoi",
                    "left": -125,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Q"
                  },
                  {
                    "type": "aoi",
                    "left": -50,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "R"
                  },
                  {
                    "type": "aoi",
                    "left": 25,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "S"
                  },
                  {
                    "type": "aoi",
                    "left": 100,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "T"
                  },
                  {
                    "type": "aoi",
                    "left": 175,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Y"
                  },
                  {
                    "type": "aoi",
                    "left": 0,
                    "top": 175,
                    "angle": 0,
                    "width": 350,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "BLANK"
                  },
                  {
                    "type": "aoi",
                    "left": 300,
                    "top": 50,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "UNDO"
                  },
                  {
                    "type": "aoi",
                    "left": 300,
                    "top": 175,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "NEXT"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -236,
                    "angle": 0,
                    "width": 683.84,
                    "height": 58.58,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Select the letters in the order presented and click NEXT.\nPress SPACE to fill in forgotten items or UNDO to delete a letter.",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "24",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "aoi",
                    "left": -200,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "F"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
var respString = [];

// Render the base canvas
const baseRenderFunction = lab.util.canvas.makeRenderFunction(
  this.options.content.filter(c => c.type !== 'aoi'),
  this.internals.controller.cache
)

// Display typed letters.
this.options.renderFunction = function(ts, canvas, ctx, obj) {
  // Render the base layer
  baseRenderFunction(ts, canvas, ctx, obj)

  ctx.font = '36px Helvetica,Arial,sans-serif';
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  ctx.fillText(
    respString, // Text to be shown
    0, // x coordinate
    -120 // y coordinate
  )
}

// Do if a button is clicked.
const clickhandler = (target) =>{
  if(target==='UNDO'){
    respString.pop();

  }else if(target==='BLANK'){
    respString.push('_');

  }else{
    respString.push(target);
  }

  this.run();
}

this.options.events['click @NEXT']=function(event){
  this.parameters.input_string=respString;
  //this.state.input_string=respString;
  this.respond(respString);
}

this.options.events['click @UNDO']=function(event){
  // Remove last response
  clickhandler('UNDO');
}

this.options.events['click @BLANK']=function(event){
  clickhandler('BLANK');
}

this.options.events['click @F']=function(event){
  clickhandler('F');
}

this.options.events['click @H']=function(event){
  clickhandler('H');
}

this.options.events['click @J']=function(event){
  clickhandler('J');
}

this.options.events['click @K']=function(event){
  clickhandler('K');
}

this.options.events['click @L']=function(event){
  clickhandler('L');
}

this.options.events['click @N']=function(event){
  clickhandler('N');
}

this.options.events['click @P']=function(event){
  clickhandler('P');
}

this.options.events['click @Q']=function(event){
  clickhandler('Q');
}

this.options.events['click @R']=function(event){
  clickhandler('R');
}

this.options.events['click @S']=function(event){
  clickhandler('S');
}

this.options.events['click @T']=function(event){
  clickhandler('T');
}

this.options.events['click @Y']=function(event){
  clickhandler('Y');
}


},
                  "after:end": function anonymous(
) {
const tString=this.parameters.test_string;
const iString=this.parameters.input_string;

for (let i=0; i<tString.length; i++) {
  nLetter+=1;
  if(tString[i]===iString[i]){
    nCorrLetter+=1;
  }
}
this.parameters.ospan=nCorrLetter;
this.parameters.totalLetter=nLetter;

nTotalTrial+=1;
if(tString===iString){
  nCorrTrial+=1;
}
this.parameters.absScore=nCorrTrial;
this.parameters.totalTrial=nTotalTrial;


}
                },
                "title": "letter_input",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 343.28,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${this.parameters.letFB}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout') {
  this.parameters.letFB = 'Too slow!';
  this.parameters.letACC = 2;
} else {
  if (this.state.response.join()===this.state.test_string.join()){
    this.parameters.letFB = 'Correct!';
    this.parameters.letACC = 1;
  }else{
    this.parameters.letFB = 'Error!';
    this.parameters.letACC = 0;
  }
}
}
                },
                "title": "letter_feedback",
                "timeout": "500",
                "tardy": true
              }
            ]
          }
        }
      ]
    },
    {
      "title": "Prac_math",
      "type": "lab.flow.Sequence",
      "parameters": {},
      "plugins": [],
      "metadata": {
        "title": "",
        "description": "",
        "repository": "",
        "contributors": ""
      },
      "files": {},
      "responses": {},
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cp\u003ENow you will practice doing the math part of the experiment. A math problem will appear on the screen, like this:\u003C\u002Fp\u003E\n\u003Cbr\u003E\n\u003Cp\u003E(2 * 1) + 1 = ?\u003C\u002Fp\u003E\n\u003Cbr\u003E\n\u003Cp\u003EAs soon as you see the math problem, you should compute the correct answer. In the above problem, the answer 3 is correct.\u003C\u002Fp\u003E\n\n\u003Cbr\u003E\n\u003Cp\u003EClick a mouse button\u003C\u002Fp\u003E",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "click": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instPrac4"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cp\u003EYou will see a number displayed on the next screen, along with the words \"TRUE\" and \"FALSE.\" If the number on the screen is the correct answer to the math problem, click TRUE with the mouse. If the number is not the correct answer, click FALSE. For example, if you see the problem\u003C\u002Fp\u003E\n\u003Cbr\u003E\n\u003Cp\u003E(2 * 2) + 1 = ?\u003C\u002Fp\u003E\n\u003Cbr\u003E\n\u003Cp\u003Eand the number on the following screen is 5, click TRUE because the answer is correct. \u003C\u002Fp\u003E\n\n\u003Cbr\u003E\n\u003Cp\u003EClick a mouse button\u003C\u002Fp\u003E",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "click": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instPrac5"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cp\u003EIf you see the problem\u003C\u002Fp\u003E\n\u003Cbr\u003E\n\u003Cp\u003E(2 * 2) + 1 =  ?\u003C\u002Fp\u003E\n\u003Cbr\u003E\n\u003Cp\u003Eand the number on the next screen is 6, click FALSE because the correct answer is 5, not 6. After you give your response, the computer will tell you if you made the right choice. \u003C\u002Fp\u003E\n\n\u003Cp\u003EIt is VERY important that you get the math problems correct. It is also important that you try and solve the problem as quickly as you can.\u003C\u002Fp\u003E\n\n\u003Cbr\u003E\n\u003Cp\u003EClick a mouse button to try practice trials.\u003C\u002Fp\u003E",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "click": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instPrac6"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "mathFB": ""
            }
          ],
          "sample": {
            "mode": "sequential",
            "n": ""
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
nTrial=0
nCorrTrial=0;
nMiss=0;
}
          },
          "title": "PracMath_Loop",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "before:prepare": function anonymous(
) {
var mProb
var mAns
var mTest
var cResp

//set trial variables
this.state.trial+=1;
this.parameters.trial=this.state.trial;

const mathP1 = [
	"(2 / 1)", "(3 / 1)", "(4 / 1)", "(4 / 2)", "(5 / 1)", "(6 / 1)", 
  "(6 / 2)", "(6 / 3)", "(7 / 1)", "(8 / 1)", "(8 / 2)", "(8 / 4)", 
  "(9 / 1)", "(9 / 3)", "(1 * 2)", "(1 * 3)", "(2 * 2)", "(1 * 4)", 
  "(1 * 5)", "(3 * 2)", "(2 * 3)", "(1 * 6)", "(1 * 7)", "(4 * 2)", 
  "(2 * 4)", "(1 * 8)", "(3 * 3)", "(1 * 9)", "(5 * 2)", "(2 * 5)", 
  "(6 * 2)", "(4 * 3)", "(3 * 4)", "(2 * 6)", "(7 * 2)", "(2 * 7)", 
  "(5 * 3)", "(3 * 5)", "(8 * 2)"];

const mathQ1 = [	
	2, 3, 4, 2, 5, 6, 
  3, 2, 7, 8, 4, 2, 
  9, 3, 2, 3, 4, 4, 
  5, 6, 6, 6, 7, 8, 
  8, 8, 9, 9, 10, 10, 
  12, 12, 12, 12, 14, 14, 
  15, 15, 16];

var mathP2 = [1,2,3,4,5,6,7,8,9];

//select index for mathP1
ind1=Math.floor(Math.random()*38);

//select an operator
if(Math.round(Math.random())<1){

  //plus
  ind2=Math.floor(Math.random()*8);
  mProb=mathP1[ind1] + " \+ " + mathP2[ind2] + " = ?";
  mAns=mathQ1[ind1]+mathP2[ind2];

}else{

  //minus
  if(mathQ1[ind1]<10){
	  ind2=Math.floor(Math.random()*(mathQ1[ind1]-1));
  }else{
    ind2=Math.floor(Math.random()*8);
  }
  mProb=mathP1[ind1] + " \- " + mathP2[ind2] + " = ?";
  mAns=mathQ1[ind1]-mathP2[ind2];
}

if(Math.round(Math.random())<1){
  cResp="TRUE";
  mTest=mAns;

}else{
  cResp="FALSE";
  const appd1=2*Math.round(Math.random())-1;
  const appd2=Math.round(Math.random()*3+1);
  
  if(appd1>0){
    mTest=mAns+appd2*appd1;
  }else{
    if(mAns>1){
      mTest=mAns+Math.min(mAns-1,appd2)*appd1;
    }else{
      mTest=mAns+appd2;
    }
  }
}

this.parameters.mathProblem=mProb;
this.parameters.mathAnswer=mAns;
this.parameters.mathTest=mTest;
this.parameters.corrResp=cResp;





}
            },
            "title": "PracMath_Trial",
            "content": [
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 50,
                    "angle": 0,
                    "width": 458.89,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${this.parameters.mathProblem}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -200,
                    "angle": 0,
                    "width": 442.91,
                    "height": 58.58,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "When you have solved the math problem,\nclick the left mouse button to continue.",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "24",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "click(0)": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "math_study"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -100,
                    "angle": 0,
                    "width": 398.42,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${this.parameters.mathTest}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -200,
                    "top": 110,
                    "angle": 0,
                    "width": 87.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "TRUE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 200,
                    "top": 110,
                    "angle": 0,
                    "width": 99.61,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "FALSE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "aoi",
                    "left": -201.75,
                    "top": 108.25,
                    "angle": 0,
                    "width": 95.59,
                    "height": 38.73,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "true"
                  },
                  {
                    "type": "aoi",
                    "left": 196.25,
                    "top": 107.55,
                    "angle": 0,
                    "width": 111.27,
                    "height": 38.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "false"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {
                  "click(0) @true": "TRUE",
                  "click(0) @false": "FALSE"
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "math_test",
                "timeout": "5000",
                "correctResponse": "${parameters.corrResp}",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 380.63,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${this.parameters.mathFB}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {

if (this.state.ended_on === 'timeout') {
  this.parameters.mathFB = 'Too slow!';
  this.parameters.mathACC = 2;
  nMiss+=1;
} else {
  if (this.state.correct){
    this.parameters.mathFB = 'Correct!';
    this.parameters.mathACC = 1;
    nCorrTrial+=1;
  }else{
    this.parameters.mathFB = 'Error!';
    this.parameters.mathACC = 0;
    nTrial+=1;
  }
}

}
                },
                "title": "math_feedback",
                "timeout": "500",
                "tardy": true,
                "correctResponse": "${parameters.corrResp}"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "prac_both",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cp\u003ENow you will practice doing both parts of the experiment at the same time. In the next practice set, you will be given one of the math problems. Once you make your decision about the math problem, a letter will appear on the screen. Try and remember the letter. After the letter goes away, another math problem will appear, and then another letter.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAt the end of each set of letters and math problems, a recall screen will appear. Use the mouse to select the letters you just saw. Try your best to get the letters in the correct order. \u003C\u002Fp\u003E\n\n\u003Cbr\u003E\n\u003Cp\u003EClick a mouse button.\u003C\u002Fp\u003E",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "click": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instPrac7"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cp\u003EIt is important to work QUICKLY and ACCURATELY on the math. Make sure you know the answer to the math problem before clicking to the next screen. You will not be told if your answer to the math problem is correct, but it is still important to keep your accuracy above 85%.\u003C\u002Fp\u003E\n\n\u003Cbr\u003E\n\u003Cp\u003EClick a mouse button to try some practice problems.\u003C\u002Fp\u003E",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "click": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instPrac8"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "test": "0",
              "trial": "",
              "setSize": "2",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "methFB": "",
              "letACC": "",
              "letFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "setSize": "2",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "methFB": "",
              "letACC": "",
              "letFB": ""
            },
            {
              "test": "0",
              "trial": "",
              "setSize": "2",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "mathACC": "",
              "methFB": "",
              "letACC": "",
              "letFB": ""
            }
          ],
          "sample": {
            "mode": "sequential",
            "n": ""
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {

//for letter trial
nCorrLetter=0;
nLetter=0;
ospan=0;
nCorrTrial=0;
nTotalTrial=0;
absScore=0;

//for math trial
nTrial=0
nCorrTrial=0;
nMiss=0;
}
          },
          "title": "PracBoth_Loop",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "PracLetter_Trial",
            "tardy": true,
            "content": [
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "stimulus": "F"
                  },
                  {
                    "stimulus": "P"
                  },
                  {
                    "stimulus": "Q"
                  },
                  {
                    "stimulus": "J"
                  },
                  {
                    "stimulus": "H"
                  },
                  {
                    "stimulus": "K"
                  },
                  {
                    "stimulus": "T"
                  },
                  {
                    "stimulus": "S"
                  },
                  {
                    "stimulus": "N"
                  },
                  {
                    "stimulus": "R"
                  },
                  {
                    "stimulus": "Y"
                  },
                  {
                    "stimulus": "L"
                  }
                ],
                "sample": {
                  "mode": "sequential"
                },
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
// Subsample the loop parameters by drawing randomly
// from the loop contents
this.options.templateParameters = this.random.sample(
  this.options.templateParameters,
  this.parameters.setSize
)
console.log(this.options.templateParameters)


// Extract the presented stimuli and store them seperately,
// as a feature of the overall trial sequence.
  this.parent.options.parameters.test_string = 
  this.options.templateParameters.map(
    function(repetition) { return repetition.stimulus }
  )


}
                },
                "title": "letterString_loop",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
var mProb
var mAns
var mTest
var cResp

//set trial variables
this.state.trial+=1;
this.parameters.trial=this.state.trial;

const mathP1 = [
	"(2 / 1)", "(3 / 1)", "(4 / 1)", "(4 / 2)", "(5 / 1)", "(6 / 1)", 
  "(6 / 2)", "(6 / 3)", "(7 / 1)", "(8 / 1)", "(8 / 2)", "(8 / 4)", 
  "(9 / 1)", "(9 / 3)", "(1 * 2)", "(1 * 3)", "(2 * 2)", "(1 * 4)", 
  "(1 * 5)", "(3 * 2)", "(2 * 3)", "(1 * 6)", "(1 * 7)", "(4 * 2)", 
  "(2 * 4)", "(1 * 8)", "(3 * 3)", "(1 * 9)", "(5 * 2)", "(2 * 5)", 
  "(6 * 2)", "(4 * 3)", "(3 * 4)", "(2 * 6)", "(7 * 2)", "(2 * 7)", 
  "(5 * 3)", "(3 * 5)", "(8 * 2)"];

const mathQ1 = [	
	2, 3, 4, 2, 5, 6, 
  3, 2, 7, 8, 4, 2, 
  9, 3, 2, 3, 4, 4, 
  5, 6, 6, 6, 7, 8, 
  8, 8, 9, 9, 10, 10, 
  12, 12, 12, 12, 14, 14, 
  15, 15, 16];

var mathP2 = [1,2,3,4,5,6,7,8,9];

//select index for mathP1
ind1=Math.floor(Math.random()*38);

//select an operator
if(Math.round(Math.random())<1){

  //plus
  ind2=Math.floor(Math.random()*8);
  mProb=mathP1[ind1] + " \+ " + mathP2[ind2] + " = ?";
  mAns=mathQ1[ind1]+mathP2[ind2];

}else{

  //minus
  if(mathQ1[ind1]<10){
	  ind2=Math.floor(Math.random()*(mathQ1[ind1]-1));
  }else{
    ind2=Math.floor(Math.random()*8);
  }
  mProb=mathP1[ind1] + " \- " + mathP2[ind2] + " = ?";
  mAns=mathQ1[ind1]-mathP2[ind2];
}

if(Math.round(Math.random())<1){
  cResp="TRUE";
  mTest=mAns;

}else{
  cResp="FALSE";
  const appd1=2*Math.round(Math.random())-1;
  const appd2=Math.round(Math.random()*3+1);
  
  if(appd1>0){
    mTest=mAns+appd2*appd1;
  }else{
    if(mAns>1){
      mTest=mAns+Math.min(mAns-1,appd2)*appd1;
    }else{
      mTest=mAns+appd2;
    }
  }
}

this.parameters.mathProblem=mProb;
this.parameters.mathAnswer=mAns;
this.parameters.mathTest=mTest;
this.parameters.corrResp=cResp;





}
                  },
                  "title": "PracMath_Trial",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 50,
                          "angle": 0,
                          "width": 458.89,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${this.parameters.mathProblem}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": -200,
                          "angle": 0,
                          "width": 442.91,
                          "height": 58.58,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "When you have solved the math problem,\nclick the left mouse button to continue.",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "24",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "click(0)": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "math_study"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": -100,
                          "angle": 0,
                          "width": 398.42,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${this.parameters.mathTest}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": -200,
                          "top": 110,
                          "angle": 0,
                          "width": 87.11,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "TRUE",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": 200,
                          "top": 110,
                          "angle": 0,
                          "width": 99.61,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "FALSE",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "aoi",
                          "left": -201.75,
                          "top": 108.25,
                          "angle": 0,
                          "width": 95.59,
                          "height": 38.73,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "rgba(0, 0, 0, 0.2)",
                          "label": "true"
                        },
                        {
                          "type": "aoi",
                          "left": 196.25,
                          "top": 107.55,
                          "angle": 0,
                          "width": 111.27,
                          "height": 38.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "rgba(0, 0, 0, 0.2)",
                          "label": "false"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "click(0) @true": "TRUE",
                        "click(0) @false": "FALSE"
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "math_test",
                      "timeout": "5000",
                      "correctResponse": "${parameters.corrResp}",
                      "tardy": true
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 380.63,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${this.parameters.mathFB}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {

if (this.state.ended_on === 'timeout') {
  this.parameters.mathFB = 'Too slow!';
  this.parameters.mathACC = 2;
  nMiss+=1;
} else {
  if (this.state.correct){
    this.parameters.mathFB = 'Correct!';
    this.parameters.mathACC = 1;
    nCorrTrial+=1;
  }else{
    this.parameters.mathFB = 'Error!';
    this.parameters.mathACC = 0;
    nTrial+=1;
  }
}

}
                      },
                      "title": "math_feedback",
                      "timeout": "0",
                      "tardy": true,
                      "correctResponse": "${parameters.corrResp}",
                      "skip": true
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 327.27,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${parameters.stimulus}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
// We don't need screen-by-screen data
//this.options.datacommit = false

/*
console.log(testString)
testString=testString + this.parameters.stimulus
console.log(testString)
*/
}
                      },
                      "title": "letter_presentation",
                      "timeout": "1000",
                      "tardy": true
                    }
                  ]
                }
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -125,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": -50,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": 175,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": 25,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -125,
                    "top": 25,
                    "angle": 0,
                    "width": 23.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "H",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 100,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -50,
                    "top": 25,
                    "angle": 0,
                    "width": 16,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "J",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": -200,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": -200,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": 25,
                    "top": 25,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "K",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 100,
                    "top": 25,
                    "angle": 0,
                    "width": 17.8,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "L",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": -125,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": -50,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": 175,
                    "top": 25,
                    "angle": 0,
                    "width": 23.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "N",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -200,
                    "top": 100,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "P",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -125,
                    "top": 100,
                    "angle": 0,
                    "width": 24.89,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Q",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 25,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -50,
                    "top": 100,
                    "angle": 0,
                    "width": 23.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "R",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 175,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -200,
                    "top": 25,
                    "angle": 0,
                    "width": 19.55,
                    "height": 36.16,
                    "stroke": "",
                    "strokeWidth": 1,
                    "fill": "#000000",
                    "text": "F",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 300,
                    "top": 50,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": "#d6341a",
                    "strokeWidth": 1,
                    "fill": "#d6341a"
                  },
                  {
                    "type": "rect",
                    "left": 100,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": 300,
                    "top": 175,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": "#a8ca09",
                    "strokeWidth": 1,
                    "fill": "#a8ca09"
                  },
                  {
                    "type": "i-text",
                    "left": 25,
                    "top": 100,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "S",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 100,
                    "top": 100,
                    "angle": 0,
                    "width": 19.55,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "T",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 175,
                    "top": 100,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Y",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 300,
                    "top": 50,
                    "angle": 0,
                    "width": 94.22,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "UNDO",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 300,
                    "top": 175,
                    "angle": 0,
                    "width": 85.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "NEXT",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 175,
                    "angle": 0,
                    "width": 350,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 175,
                    "angle": 0,
                    "width": 106.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "SPACE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "aoi",
                    "left": -125,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "H"
                  },
                  {
                    "type": "aoi",
                    "left": -50,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "J"
                  },
                  {
                    "type": "aoi",
                    "left": 25,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "K"
                  },
                  {
                    "type": "aoi",
                    "left": 100,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "L"
                  },
                  {
                    "type": "aoi",
                    "left": 175,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "N"
                  },
                  {
                    "type": "aoi",
                    "left": -200,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "P"
                  },
                  {
                    "type": "aoi",
                    "left": -125,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Q"
                  },
                  {
                    "type": "aoi",
                    "left": -50,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "R"
                  },
                  {
                    "type": "aoi",
                    "left": 25,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "S"
                  },
                  {
                    "type": "aoi",
                    "left": 100,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "T"
                  },
                  {
                    "type": "aoi",
                    "left": 175,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Y"
                  },
                  {
                    "type": "aoi",
                    "left": 0,
                    "top": 175,
                    "angle": 0,
                    "width": 350,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "BLANK"
                  },
                  {
                    "type": "aoi",
                    "left": 300,
                    "top": 50,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "UNDO"
                  },
                  {
                    "type": "aoi",
                    "left": 300,
                    "top": 175,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "NEXT"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -236,
                    "angle": 0,
                    "width": 683.84,
                    "height": 58.58,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Select the letters in the order presented and click NEXT.\nPress SPACE to fill in forgotten items or UNDO to delete a letter.",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "24",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "aoi",
                    "left": -200,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "F"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
var respString = [];

// Render the base canvas
const baseRenderFunction = lab.util.canvas.makeRenderFunction(
  this.options.content.filter(c => c.type !== 'aoi'),
  this.internals.controller.cache
)

// Display typed letters.
this.options.renderFunction = function(ts, canvas, ctx, obj) {
  // Render the base layer
  baseRenderFunction(ts, canvas, ctx, obj)

  ctx.font = '36px Helvetica,Arial,sans-serif';
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  ctx.fillText(
    respString, // Text to be shown
    0, // x coordinate
    -120 // y coordinate
  )
}

// Do if a button is clicked.
const clickhandler = (target) =>{
  if(target==='UNDO'){
    respString.pop();

  }else if(target==='BLANK'){
    respString.push('_');

  }else{
    respString.push(target);
  }

  this.run();
}

this.options.events['click @NEXT']=function(event){
  this.parameters.input_string=respString;
  //this.state.input_string=respString;
  this.respond(respString);
}

this.options.events['click @UNDO']=function(event){
  // Remove last response
  clickhandler('UNDO');
}

this.options.events['click @BLANK']=function(event){
  clickhandler('BLANK');
}

this.options.events['click @F']=function(event){
  clickhandler('F');
}

this.options.events['click @H']=function(event){
  clickhandler('H');
}

this.options.events['click @J']=function(event){
  clickhandler('J');
}

this.options.events['click @K']=function(event){
  clickhandler('K');
}

this.options.events['click @L']=function(event){
  clickhandler('L');
}

this.options.events['click @N']=function(event){
  clickhandler('N');
}

this.options.events['click @P']=function(event){
  clickhandler('P');
}

this.options.events['click @Q']=function(event){
  clickhandler('Q');
}

this.options.events['click @R']=function(event){
  clickhandler('R');
}

this.options.events['click @S']=function(event){
  clickhandler('S');
}

this.options.events['click @T']=function(event){
  clickhandler('T');
}

this.options.events['click @Y']=function(event){
  clickhandler('Y');
}


},
                  "after:end": function anonymous(
) {
const tString=this.parameters.test_string;
const iString=this.parameters.input_string;

for (let i=0; i<tString.length; i++) {
  nLetter+=1;
  if(tString[i]===iString[i]){
    nCorrLetter+=1;
  }
}
this.parameters.ospan=nCorrLetter;
this.parameters.totalLetter=nLetter;

nTotalTrial+=1;
if(tString===iString){
  nCorrTrial+=1;
}
this.parameters.absScore=nCorrTrial;
this.parameters.totalTrial=nTotalTrial;


}
                },
                "title": "letter_input",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 343.28,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${this.parameters.letFB}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout') {
  this.parameters.letFB = 'Too slow!';
  this.parameters.letACC = 2;
} else {
  if (this.state.response.join()===this.state.test_string.join()){
    this.parameters.letFB = 'Correct!';
    this.parameters.letACC = 1;
  }else{
    this.parameters.letFB = 'Error!';
    this.parameters.letACC = 0;
  }
}
}
                },
                "title": "letter_feedback",
                "timeout": "500",
                "tardy": true,
                "skip": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "blank",
                "timeout": "500"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Test_both",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cp\u003E\u003Cstrong\u003EThat is the end of the practice. \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003EThe real trials will look like the practice trials you just completed. First, you will get a math problem to solve, then a letter to remember. When you see the recall screen, select the letters in the order presented. If you forget a letter, click SPACE to mark where it should go. Some of the sets will have more math problems and letters than others.\u003C\u002Fp\u003E\n\n\u003Cp\u003EClick a mouse button to begin the experiment.\u003C\u002Fp\u003E",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "click": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instTest1"
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "required": true,
              "type": "text",
              "content": "\u003Cp\u003EIt is important that you do your best on both the math problems and the letter recall parts of this experiment. Remember on the math you must work as QUICKLY and ACCURATELY as possible. Also, remember to keep your math accuracy at 85% or above.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EClick a mouse button to begin the experiment.\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E",
              "title": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "click": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "instTest2"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "test": "1",
              "trial": "",
              "setSize": "3",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "3",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "3",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "4",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "4",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "4",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "5",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "5",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "5",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "6",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "6",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "6",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "7",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "7",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            },
            {
              "test": "1",
              "trial": "",
              "setSize": "7",
              "test_string": "",
              "input_string": "",
              "ACC": "",
              "mathProb": "",
              "mathAnswer": "",
              "mathTest": "",
              "corrResp": "",
              "feedback": ""
            }
          ],
          "sample": {
            "mode": "sequential",
            "n": ""
          },
          "files": {},
          "responses": {},
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
//for letter trial
nCorrLetter=0;
nLetter=0;
ospan=0;
nCorrTrial=0;
nTotalTrial=0;
absScore=0;

//for math trial
nTrial=0
nCorrTrial=0;
nMiss=0;
}
          },
          "title": "TestBoth_Loop",
          "tardy": true,
          "shuffleGroups": [],
          "template": {
            "type": "lab.flow.Sequence",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "TestLetter_Trial",
            "tardy": true,
            "content": [
              {
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "stimulus": "F"
                  },
                  {
                    "stimulus": "P"
                  },
                  {
                    "stimulus": "Q"
                  },
                  {
                    "stimulus": "J"
                  },
                  {
                    "stimulus": "H"
                  },
                  {
                    "stimulus": "K"
                  },
                  {
                    "stimulus": "T"
                  },
                  {
                    "stimulus": "S"
                  },
                  {
                    "stimulus": "N"
                  },
                  {
                    "stimulus": "R"
                  },
                  {
                    "stimulus": "Y"
                  },
                  {
                    "stimulus": "L"
                  }
                ],
                "sample": {
                  "mode": "sequential"
                },
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
// Subsample the loop parameters by drawing randomly
// from the loop contents
this.options.templateParameters = this.random.sample(
  this.options.templateParameters,
  this.parameters.setSize
)
console.log(this.options.templateParameters)


// Extract the presented stimuli and store them seperately,
// as a feature of the overall trial sequence.
  this.parent.options.parameters.test_string = 
  this.options.templateParameters.map(
    function(repetition) { return repetition.stimulus }
  )


}
                },
                "title": "letterString_loop",
                "tardy": true,
                "shuffleGroups": [],
                "template": {
                  "type": "lab.flow.Sequence",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
var mProb
var mAns
var mTest
var cResp

//set trial variables
this.state.trial+=1;
this.parameters.trial=this.state.trial;

const mathP1 = [
	"(2 / 1)", "(3 / 1)", "(4 / 1)", "(4 / 2)", "(5 / 1)", "(6 / 1)", 
  "(6 / 2)", "(6 / 3)", "(7 / 1)", "(8 / 1)", "(8 / 2)", "(8 / 4)", 
  "(9 / 1)", "(9 / 3)", "(1 * 2)", "(1 * 3)", "(2 * 2)", "(1 * 4)", 
  "(1 * 5)", "(3 * 2)", "(2 * 3)", "(1 * 6)", "(1 * 7)", "(4 * 2)", 
  "(2 * 4)", "(1 * 8)", "(3 * 3)", "(1 * 9)", "(5 * 2)", "(2 * 5)", 
  "(6 * 2)", "(4 * 3)", "(3 * 4)", "(2 * 6)", "(7 * 2)", "(2 * 7)", 
  "(5 * 3)", "(3 * 5)", "(8 * 2)"];

const mathQ1 = [	
	2, 3, 4, 2, 5, 6, 
  3, 2, 7, 8, 4, 2, 
  9, 3, 2, 3, 4, 4, 
  5, 6, 6, 6, 7, 8, 
  8, 8, 9, 9, 10, 10, 
  12, 12, 12, 12, 14, 14, 
  15, 15, 16];

var mathP2 = [1,2,3,4,5,6,7,8,9];

//select index for mathP1
ind1=Math.floor(Math.random()*38);

//select an operator
if(Math.round(Math.random())<1){

  //plus
  ind2=Math.floor(Math.random()*8);
  mProb=mathP1[ind1] + " \+ " + mathP2[ind2] + " = ?";
  mAns=mathQ1[ind1]+mathP2[ind2];

}else{

  //minus
  if(mathQ1[ind1]<10){
	  ind2=Math.floor(Math.random()*(mathQ1[ind1]-1));
  }else{
    ind2=Math.floor(Math.random()*8);
  }
  mProb=mathP1[ind1] + " \- " + mathP2[ind2] + " = ?";
  mAns=mathQ1[ind1]-mathP2[ind2];
}

if(Math.round(Math.random())<1){
  cResp="TRUE";
  mTest=mAns;

}else{
  cResp="FALSE";
  const appd1=2*Math.round(Math.random())-1;
  const appd2=Math.round(Math.random()*3+1);
  
  if(appd1>0){
    mTest=mAns+appd2*appd1;
  }else{
    if(mAns>1){
      mTest=mAns+Math.min(mAns-1,appd2)*appd1;
    }else{
      mTest=mAns+appd2;
    }
  }
}

this.parameters.mathProblem=mProb;
this.parameters.mathAnswer=mAns;
this.parameters.mathTest=mTest;
this.parameters.corrResp=cResp;





}
                  },
                  "title": "TestMath_Trial",
                  "content": [
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 50,
                          "angle": 0,
                          "width": 458.89,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${this.parameters.mathProblem}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": -200,
                          "angle": 0,
                          "width": 442.91,
                          "height": 58.58,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "When you have solved the math problem,\nclick the left mouse button to continue.",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": "24",
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "click(0)": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "math_study"
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": -100,
                          "angle": 0,
                          "width": 398.42,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${this.parameters.mathTest}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": -200,
                          "top": 110,
                          "angle": 0,
                          "width": 87.11,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "TRUE",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "i-text",
                          "left": 200,
                          "top": 110,
                          "angle": 0,
                          "width": 99.61,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "FALSE",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        },
                        {
                          "type": "aoi",
                          "left": -201.75,
                          "top": 108.25,
                          "angle": 0,
                          "width": 95.59,
                          "height": 38.73,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "rgba(0, 0, 0, 0.2)",
                          "label": "true"
                        },
                        {
                          "type": "aoi",
                          "left": 196.25,
                          "top": 107.55,
                          "angle": 0,
                          "width": 111.27,
                          "height": 38.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "rgba(0, 0, 0, 0.2)",
                          "label": "false"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {
                        "click(0) @true": "TRUE",
                        "click(0) @false": "FALSE"
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "math_test",
                      "timeout": "5000",
                      "correctResponse": "${parameters.corrResp}",
                      "tardy": true
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 380.63,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${this.parameters.mathFB}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {

if (this.state.ended_on === 'timeout') {
  this.parameters.mathFB = 'Too slow!';
  this.parameters.mathACC = 2;
  nMiss+=1;
} else {
  if (this.state.correct){
    this.parameters.mathFB = 'Correct!';
    this.parameters.mathACC = 1;
    nCorrTrial+=1;
  }else{
    this.parameters.mathFB = 'Error!';
    this.parameters.mathACC = 0;
    nTrial+=1;
  }
}

}
                      },
                      "title": "math_feedback",
                      "timeout": "0",
                      "tardy": true,
                      "correctResponse": "${parameters.corrResp}",
                      "skip": true
                    },
                    {
                      "type": "lab.canvas.Screen",
                      "content": [
                        {
                          "type": "i-text",
                          "left": 0,
                          "top": 0,
                          "angle": 0,
                          "width": 327.27,
                          "height": 36.16,
                          "stroke": null,
                          "strokeWidth": 1,
                          "fill": "black",
                          "text": "${parameters.stimulus}",
                          "fontStyle": "normal",
                          "fontWeight": "normal",
                          "fontSize": 32,
                          "fontFamily": "sans-serif",
                          "lineHeight": 1.16,
                          "textAlign": "center"
                        }
                      ],
                      "viewport": [
                        800,
                        600
                      ],
                      "files": {},
                      "responses": {},
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
// We don't need screen-by-screen data
//this.options.datacommit = false

/*
console.log(testString)
testString=testString + this.parameters.stimulus
console.log(testString)
*/
}
                      },
                      "title": "letter_presentation",
                      "timeout": "1000",
                      "tardy": true
                    }
                  ]
                }
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "rect",
                    "left": -125,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": -50,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": 175,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": 25,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -125,
                    "top": 25,
                    "angle": 0,
                    "width": 23.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "H",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 100,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -50,
                    "top": 25,
                    "angle": 0,
                    "width": 16,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "J",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": -200,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": -200,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": 25,
                    "top": 25,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "K",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 100,
                    "top": 25,
                    "angle": 0,
                    "width": 17.8,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "L",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": -125,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": -50,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": 175,
                    "top": 25,
                    "angle": 0,
                    "width": 23.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "N",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -200,
                    "top": 100,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "P",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": -125,
                    "top": 100,
                    "angle": 0,
                    "width": 24.89,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Q",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 25,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -50,
                    "top": 100,
                    "angle": 0,
                    "width": 23.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "R",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 175,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": -200,
                    "top": 25,
                    "angle": 0,
                    "width": 19.55,
                    "height": 36.16,
                    "stroke": "",
                    "strokeWidth": 1,
                    "fill": "#000000",
                    "text": "F",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 300,
                    "top": 50,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": "#d6341a",
                    "strokeWidth": 1,
                    "fill": "#d6341a"
                  },
                  {
                    "type": "rect",
                    "left": 100,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "rect",
                    "left": 300,
                    "top": 175,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": "#a8ca09",
                    "strokeWidth": 1,
                    "fill": "#a8ca09"
                  },
                  {
                    "type": "i-text",
                    "left": 25,
                    "top": 100,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "S",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 100,
                    "top": 100,
                    "angle": 0,
                    "width": 19.55,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "T",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 175,
                    "top": 100,
                    "angle": 0,
                    "width": 21.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Y",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 300,
                    "top": 50,
                    "angle": 0,
                    "width": 94.22,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "UNDO",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "i-text",
                    "left": 300,
                    "top": 175,
                    "angle": 0,
                    "width": 85.34,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "NEXT",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "rect",
                    "left": 0,
                    "top": 175,
                    "angle": 0,
                    "width": 350,
                    "height": 50,
                    "stroke": "#fcbb0a",
                    "strokeWidth": 1,
                    "fill": "#fcbb0a"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 175,
                    "angle": 0,
                    "width": 106.11,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "SPACE",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "aoi",
                    "left": -125,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "H"
                  },
                  {
                    "type": "aoi",
                    "left": -50,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "J"
                  },
                  {
                    "type": "aoi",
                    "left": 25,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "K"
                  },
                  {
                    "type": "aoi",
                    "left": 100,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "L"
                  },
                  {
                    "type": "aoi",
                    "left": 175,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "N"
                  },
                  {
                    "type": "aoi",
                    "left": -200,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "P"
                  },
                  {
                    "type": "aoi",
                    "left": -125,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Q"
                  },
                  {
                    "type": "aoi",
                    "left": -50,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "R"
                  },
                  {
                    "type": "aoi",
                    "left": 25,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "S"
                  },
                  {
                    "type": "aoi",
                    "left": 100,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "T"
                  },
                  {
                    "type": "aoi",
                    "left": 175,
                    "top": 100,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "Y"
                  },
                  {
                    "type": "aoi",
                    "left": 0,
                    "top": 175,
                    "angle": 0,
                    "width": 350,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "BLANK"
                  },
                  {
                    "type": "aoi",
                    "left": 300,
                    "top": 50,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "UNDO"
                  },
                  {
                    "type": "aoi",
                    "left": 300,
                    "top": 175,
                    "angle": 0,
                    "width": 120,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "NEXT"
                  },
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": -236,
                    "angle": 0,
                    "width": 683.84,
                    "height": 58.58,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "Select the letters in the order presented and click NEXT.\nPress SPACE to fill in forgotten items or UNDO to delete a letter.",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "24",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  },
                  {
                    "type": "aoi",
                    "left": -200,
                    "top": 25,
                    "angle": 0,
                    "width": 50,
                    "height": 50,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "rgba(0, 0, 0, 0.2)",
                    "label": "F"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
var respString = [];

// Render the base canvas
const baseRenderFunction = lab.util.canvas.makeRenderFunction(
  this.options.content.filter(c => c.type !== 'aoi'),
  this.internals.controller.cache
)

// Display typed letters.
this.options.renderFunction = function(ts, canvas, ctx, obj) {
  // Render the base layer
  baseRenderFunction(ts, canvas, ctx, obj)

  ctx.font = '36px Helvetica,Arial,sans-serif';
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  
  ctx.fillText(
    respString, // Text to be shown
    0, // x coordinate
    -120 // y coordinate
  )
}

// Do if a button is clicked.
const clickhandler = (target) =>{
  if(target==='UNDO'){
    respString.pop();

  }else if(target==='BLANK'){
    respString.push('_');

  }else{
    respString.push(target);
  }

  this.run();
}

this.options.events['click @NEXT']=function(event){
  this.parameters.input_string=respString;
  //this.state.input_string=respString;
  this.respond(respString);
}

this.options.events['click @UNDO']=function(event){
  // Remove last response
  clickhandler('UNDO');
}

this.options.events['click @BLANK']=function(event){
  clickhandler('BLANK');
}

this.options.events['click @F']=function(event){
  clickhandler('F');
}

this.options.events['click @H']=function(event){
  clickhandler('H');
}

this.options.events['click @J']=function(event){
  clickhandler('J');
}

this.options.events['click @K']=function(event){
  clickhandler('K');
}

this.options.events['click @L']=function(event){
  clickhandler('L');
}

this.options.events['click @N']=function(event){
  clickhandler('N');
}

this.options.events['click @P']=function(event){
  clickhandler('P');
}

this.options.events['click @Q']=function(event){
  clickhandler('Q');
}

this.options.events['click @R']=function(event){
  clickhandler('R');
}

this.options.events['click @S']=function(event){
  clickhandler('S');
}

this.options.events['click @T']=function(event){
  clickhandler('T');
}

this.options.events['click @Y']=function(event){
  clickhandler('Y');
}


},
                  "after:end": function anonymous(
) {
const tString=this.parameters.test_string;
const iString=this.parameters.input_string;

for (let i=0; i<tString.length; i++) {
  nLetter+=1;
  if(tString[i]===iString[i]){
    nCorrLetter+=1;
  }
}
this.parameters.ospan=nCorrLetter;
this.parameters.totalLetter=nLetter;

nTotalTrial+=1;
if(tString===iString){
  nCorrTrial+=1;
}
this.parameters.absScore=nCorrTrial;
this.parameters.totalTrial=nTotalTrial;


}
                },
                "title": "letter_input",
                "tardy": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 343.28,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "${this.parameters.letFB}",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": 32,
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
                  }
                ],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout') {
  this.parameters.letFB = 'Too slow!';
  this.parameters.letACC = 2;
} else {
  if (this.state.response.join()===this.state.test_string.join()){
    this.parameters.letFB = 'Correct!';
    this.parameters.letACC = 1;
  }else{
    this.parameters.letFB = 'Error!';
    this.parameters.letACC = 0;
  }
}
}
                },
                "title": "letter_feedback",
                "timeout": "500",
                "tardy": true,
                "skip": true
              },
              {
                "type": "lab.canvas.Screen",
                "content": [],
                "viewport": [
                  800,
                  600
                ],
                "files": {},
                "responses": {},
                "parameters": {},
                "messageHandlers": {},
                "title": "blank",
                "timeout": "500"
              }
            ]
          }
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "You have completed all trials!",
          "title": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Bye",
      "timeout": "1000"
    }
  ]
})

// Let's go!
study.run()