
 ## /json/animation.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ip": {
      "title": "In Point",
      "description": "In Point of the Time Ruler. Sets the initial Frame of the animation.",
      "type": "number"
    },
    "op": {
      "title": "Out Point",
      "description": "Out Point of the Time Ruler. Sets the final Frame of the animation",
      "type": "number"
    },
    "fr": {
      "title": "Frame Rate",
      "description": "Frame Rate",
      "type": "number"
    },
    "w": {
      "title": "Width",
      "description": "Composition Width",
      "type": "number"
    },
    "ddd": {
      "title": "3-D",
      "description": "Composition has 3-D layers",
      "enum": [0, 1],
      "type": "number"
    },
    "h": {
      "title": "Height",
      "description": "Composition Height",
      "type": "number"
    },
    "v": {
      "title": "Version",
      "description": "Bodymovin Version",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "Composition name",
      "type": "string"
    },
    "layers": {
      "title": "Layers",
      "description": "List of Composition Layers",
      "items": {
        "oneOf": [
          {
            "$ref": "#/layers/shape"
          },
          {
            "$ref": "#/layers/solid"
          },
          {
            "$ref": "#/layers/comp"
          },
          {
            "$ref": "#/layers/image"
          },
          {
            "$ref": "#/layers/null"
          },
          {
            "$ref": "#/layers/text"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "assets": {
      "title": "Assets",
      "description": "source items that can be used in multiple places. Comps and Images for now.",
      "items": {
        "oneOf": [
          {
            "$ref": "#/sources/image"
          },
          {
            "$ref": "#/sources/precomp"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "chars": {
      "title": "Chars",
      "description": "source chars for text layers",
      "items": {
        "oneOf": [
          {
            "$ref": "#/sources/chars"
          }
        ],
        "type": "object"
      },
      "type": "array"
    }
  }
}


 ## /json/effects/angle.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 1
    },
    "v": {
      "title": "Value",
      "description": "Effect value.",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/effects/checkBox.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 7
    },
    "v": {
      "title": "Value",
      "description": "Effect value.",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/effects/color.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 2
    },
    "v": {
      "title": "Value",
      "description": "Effect value.",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/effects/customValue.json 
{
	"$schema": "http://json-schema.org/draft-04/schema#",
	"type": "object"
}


 ## /json/effects/dropDown.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 7
    },
    "v": {
      "title": "Value",
      "description": "Effect value.",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/effects/fill.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 21
    },
    "ef": {
      "title": "Effects",
      "description": "Effect List of properties.",
      "items": [
        {
          "$ref": "#/effects/point"
        },
        {
          "$ref": "#/effects/dropDown"
        },
        {
          "$ref": "#/effects/color"
        },
        {
          "$ref": "#/effects/dropDown"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        }
      ],
      "type": "array"
    }
  }
}


 ## /json/effects/group.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 5
    },
    "ef": {
      "title": "Effects",
      "description": "Effect List of properties.",
      "items": {
        "oneOf": [
          {
            "$ref": "#/effects/index"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "en": {
      "description": "Enabled AE property value",
      "extended_name": "Enabled",
      "type": "number"
    }
  }
}


 ## /json/effects/index.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "oneOf": [
    {
      "$ref": "#/effects/slider"
    },
    {
      "$ref": "#/effects/angle"
    },
    {
      "$ref": "#/effects/color"
    },
    {
      "$ref": "#/effects/point"
    },
    {
      "$ref": "#/effects/checkbox"
    },
    {
      "$ref": "#/effects/group"
    },
    {
      "$ref": "#/effects/noValue"
    },
    {
      "$ref": "#/effects/dropDown"
    },
    {
      "$ref": "#/effects/customValue"
    },
    {
      "$ref": "#/effects/layerIndex"
    },
    {
      "$ref": "#/effects/tint"
    },
    {
      "$ref": "#/effects/fill"
    },
    {
      "$ref": "#/effects/stroke"
    },
    {
      "$ref": "#/effects/tritone"
    },
    {
      "$ref": "#/effects/proLevels"
    }
  ]
}


 ## /json/effects/layer.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions. NOT USED. EQUALS SLIDER.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 0
    },
    "v": {
      "title": "Value",
      "description": "Effect value.",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/effects/noValue.json 
{}


 ## /json/effects/point.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 2
    },
    "v": {
      "title": "Value",
      "description": "Effect value.",
      "type": "object",
      "items": {
        "oneOf": [
          {
            "$ref": "#/properties/multiDimensional"
          },
          {
            "$ref": "#/properties/multiDimensionalKeyframed"
          }
        ],
        "type": "object"
      }
    }
  }
}


 ## /json/effects/proLevels.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 23
    },
    "ef": {
      "title": "Effects",
      "description": "Effect List of properties.",
      "type": "array",
      "items": [
        {
          "$ref": "#/effects/dropDown"
        },
        {
          "$ref": "#/effects/noValue"
        },
        {
          "$ref": "#/effects/noValue"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/noValue"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/noValue"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/noValue"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/noValue"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        }
      ]
    }
  }
}


 ## /json/effects/slider.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 0
    },
    "v": {
      "title": "Value",
      "description": "Effect value.",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/effects/stroke.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 22
    },
    "ef": {
      "title": "Effects",
      "description": "Effect List of properties.",
      "type": "array",
      "items": [
        {
          "$ref": "#/effects/color"
        },
        {
          "$ref": "#/effects/checkbox"
        },
        {
          "$ref": "#/effects/checkbox"
        },
        {
          "$ref": "#/effects/color"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/slider"
        },
        {
          "$ref": "#/effects/dropDown"
        },
        {
          "$ref": "#/effects/dropDown"
        }
      ]
    }
  }
}


 ## /json/effects/tint.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 20
    },
    "ef": {
      "title": "Effects",
      "description": "Effect List of properties.",
      "type": "array",
      "items": [
        {
          "$ref": "#/effects/color"
        },
        {
          "$ref": "#/effects/color"
        },
        {
          "$ref": "#/effects/slider"
        }
      ]
    }
  }
}


 ## /json/effects/tritone.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ix": {
      "title": "Effect Index",
      "description": "Effect Index. Used for expressions.",
      "type": "number"
    },
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Effect type.",
      "type": "number",
      "const": 23
    },
    "ef": {
      "title": "Effects",
      "description": "Effect List of properties.",
      "type": "array",
      "items": [
        {
          "$ref": "#/effects/color"
        },
        {
          "$ref": "#/effects/color"
        },
        {
          "$ref": "#/effects/color"
        },
        {
          "$ref": "#/effects/slider"
        }
      ]
    }
  }
}


 ## /json/helpers/blendMode.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "number",
  "oneOf": [
    {
      "standsFor": "normal",
      "const": 0
    },
    {
      "standsFor": "multiply",
      "const": 1
    },
    {
      "standsFor": "screen",
      "const": 2
    },
    {
      "standsFor": "overlay",
      "const": 3
    },
    {
      "standsFor": "darken",
      "const": 4
    },
    {
      "standsFor": "lighten",
      "const": 5
    },
    {
      "standsFor": "colorDodge",
      "const": 6
    },
    {
      "standsFor": "colorBurn",
      "const": 7
    },
    {
      "standsFor": "hardLight",
      "const": 8
    },
    {
      "standsFor": "softLight",
      "const": 9
    },
    {
      "standsFor": "difference",
      "const": 10
    },
    {
      "standsFor": "exclusion",
      "const": 11
    },
    {
      "standsFor": "hue",
      "const": 12
    },
    {
      "standsFor": "saturation",
      "const": 13
    },
    {
      "standsFor": "color",
      "const": 14
    },
    {
      "standsFor": "luminosity",
      "const": 15
    }
  ],
  "default": 0
}


 ## /json/helpers/boolean.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "number",
  "oneOf": [
    {
      "standsFor": false,
      "const": 0
    },
    {
      "standsFor": true,
      "const": 1
    }
  ]
}


 ## /json/helpers/composite.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "number",
  "oneOf": [
    {
      "standsFor": "Above",
      "const": 1
    },
    {
      "standsFor": "Below",
      "const": 2
    }
  ],
  "default": 1
}


 ## /json/helpers/lineCap.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "number",
  "oneOf": [
    {
      "standsFor": "butt",
      "const": 1
    },
    {
      "standsFor": "round",
      "const": 2
    },
    {
      "standsFor": "square",
      "const": 3
    }
  ],
  "default": 2
}


 ## /json/helpers/lineJoin.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "number",
  "oneOf": [
    {
      "standsFor": "miter",
      "const": 1
    },
    {
      "standsFor": "round",
      "const": 2
    },
    {
      "standsFor": "bevel",
      "const": 3
    }
  ],
  "default": 2
}


 ## /json/helpers/mask.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "inv": {
      "title": "Inverted",
      "description": "Inverted Mask flag",
      "type": "boolean",
      "default": false
    },
    "nm": {
      "title": "Name",
      "description": "Mask name. Used for expressions and effects.",
      "type": "string"
    },
    "pt": {
      "title": "Points",
      "description": "Mask vertices",
      "oneOf": [
        {
          "$ref": "#/properties/shape"
        },
        {
          "$ref": "#/properties/shapeKeyframed"
        }
      ],
      "type": "object"
    },
    "o": {
      "title": "Opacity",
      "description": "Mask opacity.",
      "type": "object",
      "oneOf": [
        {
          "$ref": "#/properties/const"
        },
        {
          "$ref": "#/properties/constKeyframed"
        }
      ],
      "default": {"a":0, "k":100}
    },
    "mode": {
      "title": "Mode",
      "description": "Mask mode. Not all mask types are supported.",
      "type": "string",
      "oneOf": [
        {
          "standsFor": "None",
          "const": "n"
        },
        {
          "standsFor": "Additive",
          "const": "a"
        },
        {
          "standsFor": "Subtract",
          "const": "s"
        },
        {
          "standsFor": "Intersect",
          "const": "i"
        },
        {
          "standsFor": "Lighten",
          "const": "l"
        },
        {
          "standsFor": "Darken",
          "const": "d"
        },
        {
          "standsFor": "Difference",
          "const": "f"
        }
      ],
      "default": "a",
    }
  }
}


 ## /json/helpers/testBased.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "number",
  "oneOf": [
    {
      "standsFor": "Characters",
      "const": 1
    },
    {
      "standsFor": "Character Excluding Spaces",
      "const": 2
    },
    {
      "standsFor": "Words",
      "const": 3
    },
    {
      "standsFor": "Lines",
      "const": 4
    }
  ],
  "default": 1
}


 ## /json/helpers/textGrouping.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "number",
  "oneOf": [
    {
      "standsFor": "Characters",
      "const": 1
    },
    {
      "standsFor": "Word",
      "const": 2
    },
    {
      "standsFor": "Line",
      "const": 3
    },
    {
      "standsFor": "All",
      "const": 4
    }
  ],
  "default": 1
}


 ## /json/helpers/textShape.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "number",
  "oneOf": [
    {
      "standsFor": "Square",
      "const": 1
    },
    {
      "standsFor": "Ramp Up",
      "const": 2
    },
    {
      "standsFor": "Ramp Down",
      "const": 3
    },
    {
      "standsFor": "Triangle",
      "const": 4
    },
    {
      "standsFor": "Round",
      "const": 5
    },
    {
      "standsFor": "Smooth",
      "const": 6
    }
  ],
  "default": 1
}


 ## /json/helpers/transform.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "a": {
      "title": "Anchor Point",
      "description": "Transform Anchor Point",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        },
      ],
      "default": {"a":0, "k":[0, 0, 0]},
      "type": "object"
    },
    "p": {
      "title": "Position",
      "description": "Transform Position",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "default": {"a":0, "k":[0, 0, 0]},
      "type": "object"
    },
    "s": {
      "title": "Scale",
      "description": "Transform Scale",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "default": {"a":0, "k":[100, 100, 100]},
      "type": "object"
    },
    "r": {
      "title": "Rotation",
      "description": "Transform Rotation",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "default": {"a":0, "k":0},
      "type": "object"
    },
    "o": {
      "title": "Opacity",
      "description": "Transform Opacity",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "default": {"a":0, "k":100},
      "type": "object"
    },
    "px": {
      "title": "Position X",
      "description": "Transform Position X",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "default": {"a":0, "k":0},
      "type": "object"
    },
    "py": {
      "title": "Position Y",
      "description": "Transform Position Y",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "default": {"a":0, "k":0},
      "type": "object"
    },
    "pz": {
      "title": "Position Z",
      "description": "Transform Position Z",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "default": {"a":0, "k":0},
      "type": "object"
    },
    "sk": {
      "title": "Skew",
      "description": "Transform Skew",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "default": {"a":0, "k":0},
      "type": "object"
    },
    "sa": {
      "title": "Skew Axis",
      "description": "Transform Skew Axis",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "default": {"a":0, "k":0},
      "type": "object"
    }
  }
}


 ## /json/layers/image.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ty": {
      "title": "Type",
      "description": "Type of layer: Image.",
      "type": "number",
      "const": 2
    },
    "ks": {
      "title": "Transform",
      "description": "Transform properties",
      "oneOf": [
        {
          "$ref": "#/helpers/transform"
        }
      ],
      "type": "object"
    },
    "ao": {
      "title": "Auto-Orient",
      "description": "Auto-Orient along path AE property.",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "default": 0
    },
    "bm": {
      "title": "Blend Mode",
      "description": "Blend Mode",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/blendMode"
        }
      ],
      "default": 0
    },
    "ddd": {
      "title": "3d Layer",
      "description": "3d layer flag",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "default": 0
    },
    "ind": {
      "title": "Index",
      "description": "Layer index in AE. Used for parenting and expressions.",
      "type": "number"
    },
    "cl": {
      "title": "Class",
      "description": "Parsed layer name used as html class on SVG/HTML renderer",
      "type": "string"
    },
    "ln": {
      "title": "layer HTML ID",
      "description": "Parsed layer name used as html id on SVG/HTML renderer",
      "type": "string"
    },
    "ip": {
      "title": "In Point",
      "description": "In Point of layer. Sets the initial frame of the layer.",
      "type": "number"
    },
    "op": {
      "title": "Out Point",
      "description": "Out Point of layer. Sets the final frame of the layer.",
      "type": "number"
    },
    "st": {
      "title": "Start Time",
      "description": "Start Time of layer. Sets the start time of the layer.",
      "type": "number"
    },
    "nm": {
      "title": "Name",
      "description": "After Effects Layer Name. Used for expressions.",
      "type": "number"
    },
    "hasMask": {
      "title": "Has Masks",
      "description": "Boolean when layer has a mask. Will be deprecated in favor of checking masksProperties.",
      "type": "number"
    },
    "masksProperties": {
      "title": "Masks Properties",
      "description": "List of Masks",
      "items": {
        "oneOf": [
          {
            "$ref": "#/helpers/mask"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "ef": {
      "title": "Effects",
      "description": "List of Effects",
      "items": {
        "oneOf": [
          {
            "$ref": "#/effects/index"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "sr": {
      "title": "Stretch",
      "description": "Layer Time Stretching",
      "type": "number",
      "default": 1
    },
    "parent": {
      "title": "Parent",
      "description": "Layer Parent. Uses ind of parent.",
      "type": "number"
    },
    "refId": {
      "title": "Reference ID",
      "description": "id pointing to the source image defined on 'assets' object",
      "type": "string"
    }
  }
}


 ## /json/layers/null.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ty": {
      "title": "Type",
      "description": "Type of layer: Null.",
      "type": "number",
      "const": 3
    },
    "ks": {
      "title": "Transform",
      "description": "Transform properties",
      "oneOf": [
        {
          "$ref": "#/helpers/transform"
        }
      ],
      "type": "object"
    },
    "ao": {
      "title": "Auto-Orient",
      "description": "Auto-Orient along path AE property.",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "default": 0
    },
    "ddd": {
      "title": "3d Layer",
      "description": "3d layer flag",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "default": 0
    },
    "ind": {
      "title": "Index",
      "description": "Layer index in AE. Used for parenting and expressions.",
      "type": "number"
    },
    "cl": {
      "title": "Class",
      "description": "Parsed layer name used as html class on SVG/HTML renderer",
      "type": "string"
    },
    "ln": {
      "title": "layer HTML ID",
      "description": "Parsed layer name used as html id on SVG/HTML renderer",
      "type": "string"
    },
    "ip": {
      "title": "In Point",
      "description": "In Point of layer. Sets the initial frame of the layer.",
      "type": "number"
    },
    "op": {
      "title": "Out Point",
      "description": "Out Point of layer. Sets the final frame of the layer.",
      "type": "number"
    },
    "st": {
      "title": "Start Time",
      "description": "Start Time of layer. Sets the start time of the layer.",
      "type": "number"
    },
    "nm": {
      "title": "Name",
      "description": "After Effects Layer Name. Used for expressions.",
      "type": "number"
    },
    "ef": {
      "title": "Effects",
      "description": "List of Effects",
      "items": {
        "oneOf": [
          {
            "$ref": "#/effects/index"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "sr": {
      "title": "Stretch",
      "description": "Layer Time Stretching",
      "type": "number",
      "default": 1
    },
    "parent": {
      "title": "Parent",
      "description": "Layer Parent. Uses ind of parent.",
      "type": "number"
    }
  }
}


 ## /json/layers/preComp.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ty": {
      "title": "Type",
      "description": "Type of layer: Precomp.",
      "type": "number",
      "const": 0
    },
    "ks": {
      "title": "Transform",
      "description": "Transform properties",
      "oneOf": [
        {
          "$ref": "#/helpers/transform"
        }
      ],
      "type": "object"
    },
    "ao": {
      "title": "Auto-Orient",
      "description": "Auto-Orient along path AE property.",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ]
    },
    "bm": {
      "title": "Blend Mode",
      "description": "Blend Mode",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/blendMode"
        }
      ],
      "default": 0
    },
    "ddd": {
      "title": "3d Layer",
      "description": "3d layer flag",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "default": 0
    },
    "ind": {
      "title": "Index",
      "description": "Layer index in AE. Used for parenting and expressions.",
      "type": "number"
    },
    "cl": {
      "title": "Class",
      "description": "Parsed layer name used as html class on SVG/HTML renderer",
      "type": "string"
    },
    "ln": {
      "title": "layer HTML ID",
      "description": "Parsed layer name used as html id on SVG/HTML renderer",
      "type": "string"
    },
    "ip": {
      "title": "In Point",
      "description": "In Point of layer. Sets the initial frame of the layer.",
      "type": "number"
    },
    "op": {
      "title": "Out Point",
      "description": "Out Point of layer. Sets the final frame of the layer.",
      "type": "number"
    },
    "st": {
      "title": "Start Time",
      "description": "Start Time of layer. Sets the start time of the layer.",
      "type": "number"
    },
    "nm": {
      "title": "Name",
      "description": "After Effects Layer Name. Used for expressions.",
      "type": "number"
    },
    "hasMask": {
      "title": "Has Masks",
      "description": "Boolean when layer has a mask. Will be deprecated in favor of checking masksProperties.",
      "type": "number"
    },
    "masksProperties": {
      "title": "Masks Properties",
      "description": "List of Masks",
      "items": {
        "oneOf": [
          {
            "$ref": "#/helpers/mask"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "ef": {
      "title": "Effects",
      "description": "List of Effects",
      "items": {
        "oneOf": [
          {
            "$ref": "#/effects/index"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "sr": {
      "title": "Stretch",
      "description": "Layer Time Stretching",
      "type": "number",
      "default": 1
    },
    "parent": {
      "title": "Parent",
      "description": "Layer Parent. Uses ind of parent.",
      "type": "number"
    },
    "refId": {
      "title": "Reference ID",
      "description": "id pointing to the source composition defined on 'assets' object",
      "type": "string"
    },
    "tm": {
      "title": "Time Remapping",
      "description": "Comp's Time remapping",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ]
    }
  }
}


 ## /json/layers/shape.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ty": {
      "title": "Type",
      "description": "Type of layer: Shape.",
      "type": "number",
      "const": 4
    },
    "ks": {
      "title": "Transform",
      "description": "Transform properties",
      "oneOf": [
        {
          "$ref": "#/helpers/transform"
        }
      ],
      "type": "object"
    },
    "ao": {
      "title": "Auto-Orient",
      "description": "Auto-Orient along path AE property.",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "type": "number",
      "default": 0
    },
    "bm": {
      "title": "Blend Mode",
      "description": "Blend Mode",
      "oneOf": [
        {
          "$ref": "#/helpers/blendMode"
        }
      ],
      "type": "number",
      "default": 0
    },
    "ddd": {
      "title": "3d Layer",
      "description": "3d layer flag",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "type": "number",
      "default": 0
    },
    "ind": {
      "title": "Index",
      "description": "Layer index in AE. Used for parenting and expressions.",
      "type": "number"
    },
    "cl": {
      "title": "Class",
      "description": "Parsed layer name used as html class on SVG/HTML renderer",
      "type": "string"
    },
    "ln": {
      "title": "layer HTML ID",
      "description": "Parsed layer name used as html id on SVG/HTML renderer",
      "type": "string"
    },
    "ip": {
      "title": "In Point",
      "description": "In Point of layer. Sets the initial frame of the layer.",
      "type": "number"
    },
    "op": {
      "title": "Out Point",
      "description": "Out Point of layer. Sets the final frame of the layer.",
      "type": "number"
    },
    "st": {
      "title": "Start Time",
      "description": "Start Time of layer. Sets the start time of the layer.",
      "type": "number"
    },
    "nm": {
      "title": "Name",
      "description": "After Effects Layer Name. Used for expressions.",
      "type": "number"
    },
    "hasMask": {
      "title": "Has Masks",
      "description": "Boolean when layer has a mask. Will be deprecated in favor of checking masksProperties.",
      "type": "number"
    },
    "masksProperties": {
      "title": "Masks Properties",
      "description": "List of Masks",
      "items": {
        "oneOf": [
          {
            "$ref": "#/helpers/mask"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "ef": {
      "title": "Effects",
      "description": "List of Effects",
      "items": {
        "oneOf": [
          {
            "$ref": "#/effects/index"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "sr": {
      "title": "Stretch",
      "description": "Layer Time Stretching",
      "type": "number",
      "default": 1
    },
    "parent": {
      "title": "Parent",
      "description": "Layer Parent. Uses ind of parent.",
      "type": "number"
    },
    "it": {
      "title": "Items",
      "description": "Shape list of items",
      "items": {
        "oneOf": [
          {
            "$ref": "#/shapes/shape"
          },
          {
            "$ref": "#/shapes/rect"
          },
          {
            "$ref": "#/shapes/ellipse"
          },
          {
            "$ref": "#/shapes/star"
          },
          {
            "$ref": "#/shapes/fill"
          },
          {
            "$ref": "#/shapes/gFill"
          },
          {
            "$ref": "#/shapes/gStroke"
          },
          {
            "$ref": "#/shapes/stroke"
          },
          {
            "$ref": "#/shapes/merge"
          },
          {
            "$ref": "#/shapes/trim"
          },
          {
            "$ref": "#/shapes/group"
          },
          {
            "$ref": "#/shapes/roundedCorners"
          },
          {
            "$ref": "#/shapes/repeater"
          }
        ],
        "type": "object"
      },
      "type": "array"
    }
  }
}


 ## /json/layers/solid.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ty": {
      "title": "Type",
      "description": "Type of layer: Solid.",
      "type": "number",
      "value": 1
    },
    "ks": {
      "title": "Transform",
      "description": "Transform properties",
      "oneOf": [
        {
          "$ref": "#/helpers/transform"
        }
      ],
      "type": "object"
    },
    "ao": {
      "title": "Auto-Orient",
      "description": "Auto-Orient along path AE property.",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "default": 0
    },
    "bm": {
      "title": "Blend Mode",
      "description": "Blend Mode",
      "oneOf": [
        {
          "$ref": "#/helpers/blendMode"
        }
      ],
      "type": "number",
      "default": 0
    },
    "ddd": {
      "title": "3d Layer",
      "description": "3d layer flag",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "default": 0
    },
    "ind": {
      "title": "Index",
      "description": "Layer index in AE. Used for parenting and expressions.",
      "type": "number"
    },
    "cl": {
      "title": "Class",
      "description": "Parsed layer name used as html class on SVG/HTML renderer",
      "type": "string"
    },
    "ln": {
      "title": "layer HTML ID",
      "description": "Parsed layer name used as html id on SVG/HTML renderer",
      "type": "string"
    },
    "ip": {
      "title": "In Point",
      "description": "In Point of layer. Sets the initial frame of the layer.",
      "type": "number"
    },
    "op": {
      "title": "Out Point",
      "description": "Out Point of layer. Sets the final frame of the layer.",
      "type": "number"
    },
    "st": {
      "title": "Start Time",
      "description": "Start Time of layer. Sets the start time of the layer.",
      "type": "number"
    },
    "nm": {
      "title": "Name",
      "description": "After Effects Layer Name. Used for expressions.",
      "type": "number"
    },
    "hasMask": {
      "title": "Has Masks",
      "description": "Boolean when layer has a mask. Will be deprecated in favor of checking masksProperties.",
      "type": "number"
    },
    "masksProperties": {
      "title": "Masks Properties",
      "description": "List of Masks",
      "items": {
        "oneOf": [
          {
            "$ref": "#/helpers/mask"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "ef": {
      "title": "Effects",
      "description": "Auto-Orient along path AE property.",
      "type": "number",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ]
    },
    "sr": {
      "title": "Stretch",
      "description": "Layer Time Stretching",
      "type": "number",
      "default": 1
    },
    "parent": {
      "title": "Parent",
      "description": "Layer Parent. Uses ind of parent.",
      "type": "number"
    },
    "sc": {
      "title": "Solid Color",
      "description": "Color of the solid in hex",
      "type": "string"
    },
    "sh": {
      "title": "Solid Height",
      "description": "Height of the solid.",
      "type": "number"
    },
    "sw": {
      "title": "Solid Width",
      "description": "Width of the solid.",
      "type": "number"
    }
  }
}


 ## /json/layers/text.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ty": {
      "title": "Type",
      "description": "Type of layer: Text.",
      "type": "number",
      "value": 5
    },
    "ks": {
      "title": "Transform",
      "description": "Transform properties",
      "oneOf": [
        {
          "$ref": "#/helpers/transform"
        }
      ],
      "type": "object"
    },
    "ao": {
      "title": "Auto-Orient",
      "description": "Auto-Orient along path AE property.",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "type": "number",
      "default": 0
    },
    "bm": {
      "title": "Blend Mode",
      "description": "Blend Mode",
      "oneOf": [
        {
          "$ref": "#/helpers/blendMode"
        }
      ],
      "type": "number",
      "default": 0
    },
    "ddd": {
      "title": "3d Layer",
      "description": "3d layer flag",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "type": "number",
      "default": 0
    },
    "ind": {
      "title": "Index",
      "description": "Layer index in AE. Used for parenting and expressions.",
      "type": "number"
    },
    "cl": {
      "title": "Class",
      "description": "Parsed layer name used as html class on SVG/HTML renderer",
      "type": "string"
    },
    "ln": {
      "title": "layer HTML ID",
      "description": "Parsed layer name used as html id on SVG/HTML renderer",
      "type": "string"
    },
    "ip": {
      "title": "In Point",
      "description": "In Point of layer. Sets the initial frame of the layer.",
      "type": "number"
    },
    "op": {
      "title": "Out Point",
      "description": "Out Point of layer. Sets the final frame of the layer.",
      "type": "number"
    },
    "st": {
      "title": "Start Time",
      "description": "Start Time of layer. Sets the start time of the layer.",
      "type": "number"
    },
    "nm": {
      "title": "Name",
      "description": "After Effects Layer Name. Used for expressions.",
      "type": "number"
    },
    "hasMask": {
      "title": "Has Masks",
      "description": "Boolean when layer has a mask. Will be deprecated in favor of checking masksProperties.",
      "type": "number"
    },
    "masksProperties": {
      "title": "Masks Properties",
      "description": "List of Masks",
      "items": {
        "oneOf": [
          {
            "$ref": "#/helpers/mask"
          }
        ],
        "type": "object"
      },
      "type": "array"
    },
    "ef": {
      "title": "Effects",
      "description": "Auto-Orient along path AE property.",
      "oneOf": [
        {
          "$ref": "#/helpers/boolean"
        }
      ],
      "type": "number"
    },
    "sr": {
      "title": "Stretch",
      "description": "Layer Time Stretching",
      "type": "number",
      "default": 1
    },
    "parent": {
      "title": "Parent",
      "description": "Layer Parent. Uses ind of parent.",
      "type": "number"
    },
    "t": {
      "title": "Text Data",
      "description": "Text Data",
      "properties": [
        {
          "title": "Animators",
          "description": "Text animators",
          "items": {
            "properties": [
              {
                "title": "Animated Properties",
                "description": "Text animator animated properties",
                "properties": [
                  {
                    "title": "Position",
                    "description": "Text animator Position",
                    "oneOf": [
                      {
                        "$ref": "#/properties/multiDimensional"
                      },
                      {
                        "$ref": "#/properties/multiDimensionalKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Anchor Point",
                    "description": "Text animator Anchor Point",
                    "oneOf": [
                      {
                        "$ref": "#/properties/multiDimensional"
                      },
                      {
                        "$ref": "#/properties/multiDimensionalKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Scale",
                    "description": "Text animator Scale",
                    "oneOf": [
                      {
                        "$ref": "#/properties/multiDimensional"
                      },
                      {
                        "$ref": "#/properties/multiDimensionalKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Skew",
                    "description": "Text animator Skew",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Skew Axis",
                    "description": "Text animator Skew Axis",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Rotation",
                    "description": "Text animator Rotation",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Opacity",
                    "description": "Text animator Opacity",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Stroke Width",
                    "description": "Text animator Stroke Width",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Stroke Color",
                    "description": "Text animator Stroke Color",
                    "oneOf": [
                      {
                        "$ref": "#/properties/multiDimensional"
                      },
                      {
                        "$ref": "#/properties/multiDimensionalKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Fill Color",
                    "description": "Text animator Fill Color",
                    "oneOf": [
                      {
                        "$ref": "#/properties/multiDimensional"
                      },
                      {
                        "$ref": "#/properties/multiDimensionalKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Fill Hue",
                    "description": "Text animator Fill Hue",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Fill Saturation",
                    "description": "Text animator Fill Saturation",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Fill Brightness",
                    "description": "Text animator Fill Brightness",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "object"
                  },
                  {
                    "title": "Tracking",
                    "description": "Text animator Tracking",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "object"
                  }
                ],
                "type": "object"
              },
              {
                "title": "Range Selecton",
                "description": "Animators Range Selecton",
                "properties": [
                  {
                    "title": "Type",
                    "description": "Selector Type. Expressible, or Normal.",
                    "type": "number"
                  },
                  {
                    "title": "Max Amount",
                    "description": "Selector Max Amount",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "number"
                  },
                  {
                    "title": "Min Ease",
                    "description": "Levels Min Ease",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "number"
                  },
                  {
                    "title": "Max Ease",
                    "description": "Levels Max Ease",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "number"
                  },
                  {
                    "title": "Randomize",
                    "description": "Selector Randomize Order",
                    "oneOf": [
                      {
                        "$ref": "#/helpers/boolean"
                      }
                    ],
                    "type": "number"
                  },
                  {
                    "title": "Shape",
                    "description": "Selector Shape",
                    "oneOf": [
                      {
                        "$ref": "#/helpers/textShape"
                      }
                    ],
                    "type": "number"
                  },
                  {
                    "title": "Based On",
                    "description": "Selector Based On",
                    "oneOf": [
                      {
                        "$ref": "#/helpers/textBased"
                      }
                    ],
                    "type": "number"
                  },
                  {
                    "title": "Range Units",
                    "description": "Selector Range Units. Percentage or Index.",
                    "type": "number"
                  },
                  {
                    "title": "Start",
                    "description": "Selector Start",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "number"
                  },
                  {
                    "title": "End",
                    "description": "Selector End",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "number"
                  },
                  {
                    "title": "Offset",
                    "description": "Selector Offset",
                    "oneOf": [
                      {
                        "$ref": "#/properties/value"
                      },
                      {
                        "$ref": "#/properties/valueKeyframed"
                      }
                    ],
                    "type": "number"
                  }
                ],
                "type": "object"
              }
            ],
            "type": "object"
          },
          "type": "array"
        },
        {
          "title": "More Options",
          "description": "Text More Options",
          "properties": [
            {
              "title": "Anchor Point Grouping",
              "description": "Text Anchor Point Grouping",
              "oneOf": [
                {
                  "$ref": "#/helpers/textGrouping"
                }
              ],
              "type": "number"
            },
            {
              "title": "Grouping Alignment",
              "description": "Text Grouping Alignment",
              "oneOf": [
                {
                  "$ref": "#/properties/multiDimensional"
                },
                {
                  "$ref": "#/properties/multiDimensionalKeyframed"
                }
              ],
              "type": "number"
            }
          ],
          "type": "object"
        },
        {
          "title": "Text Path",
          "description": "Text Path",
          "type": "number"
        },
        {
          "title": "Document",
          "description": "Text Document Data",
          "properties": [
            {
              "title": "Keyframes",
              "description": "Text Document Data Keyframes",
              "items": {
                "oneOf": [
                  {
                    "properties": [
                      {
                        "title": "Time",
                        "description": "Keyframe Time",
                        "type": "number"
                      },
                      {
                        "title": "Text Properties",
                        "description": "Text Properties",
                        "type": "object",
                        "properties": [
                          {
                            "title": "Font",
                            "description": "Text Font",
                            "type": "string"
                          },
                          {
                            "title": "Font Color",
                            "description": "Text Font Color",
                            "type": "array"
                          },
                          {
                            "title": "Justificaiton",
                            "description": "Text Justification",
                            "type": "string"
                          },
                          {
                            "title": "Line Height",
                            "description": "Text Line Height",
                            "type": "number"
                          },
                          {
                            "title": "Size",
                            "description": "Text Font Size",
                            "type": "number"
                          },
                          {
                            "title": "Text",
                            "description": "Text String Value",
                            "type": "string"
                          },
                          {
                            "title": "Tracking",
                            "description": "Text Tracking",
                            "type": "number"
                          }
                        ]
                      }
                    ]
                  }
                ],
                "type": "object"
              },
              "type": "array"
            }
          ],
          "type": "object"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/properties/doubleKeyframe.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "s": {
      "description": "Start value of keyframe segment.",
      "extended_name": "Start",
      "type": "number"
    },
    "t": {
      "description": "Start time of keyframe segment.",
      "extended_name": "Time",
      "type": "number"
    },
    "i": {
      "description": "Bezier curve interpolation in value.",
      "extended_name": "In Value",
      "properties": {
        "x": {
          "description": "bezier x axis. Array of numbers.",
          "extended_name": "X axis",
          "type": "array"
        },
        "y": {
          "description": "bezier y axis. Array of numbers.",
          "extended_name": "Y axis",
          "type": "array"
        }
      },
      "type": "object"
    },
    "o": {
      "description": "Bezier curve interpolation out value.",
      "extended_name": "Out Value",
      "properties": {
        "x": {
          "description": "bezier x axis. Array of numbers.",
          "extended_name": "X axis",
          "type": "array"
        },
        "y": {
          "description": "bezier y axis. Array of numbers.",
          "extended_name": "Y axis",
          "type": "array"
        }
      },
      "type": "object"
    }
  }
}

 ## /json/properties/multiDimensional.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "k": {
      "description": "Property Value",
      "extended_name": "Value",
      "type": "array"
    },
    "x": {
      "description": "Property Expression. An AE expression that modifies the value.",
      "extended_name": "Expression",
      "type": "string"
    },
    "ix": {
      "description": "Property Index. Used for expressions.",
      "extended_name": "Property Index",
      "type": "string"
    }
  }
}


 ## /json/properties/multiDimensionalKeyframed.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "k": {
      "description": "Property Value keyframes",
      "extended_name": "Keyframes",
      "type": "array",
      "items": {
        "type": "object",
        "$ref": "#/properties/offsetKeyframe"
      }
    },
    "x": {
      "description": "Property Expression. An AE expression that modifies the value.",
      "extended_name": "Expression",
      "type": "string"
    },
    "ix": {
      "description": "Property Index. Used for expressions.",
      "extended_name": "Property Index",
      "type": "string"
    },
    "ti": {
      "description": "In Spatial Tangent. Only for spatial properties. Array of numbers.",
      "extended_name": "In Tangent",
      "type": "array"
    },
    "to": {
      "description": "Out Spatial Tangent. Only for spatial properties. Array of numbers.",
      "extended_name": "Out Tangent",
      "type": "array"
    }
  }
}


 ## /json/properties/offsetKeyframe.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "s": {
      "description": "Start value of keyframe segment.",
      "extended_name": "Start",
      "items": {
        "type": "number"
      },
      "type": "array"
    },
    "t": {
      "description": "Start time of keyframe segment.",
      "extended_name": "Time",
      "type": "number"
    },
    "i": {
      "description": "Bezier curve interpolation in value.",
      "extended_name": "In Value",
      "properties": {
        "x": {
          "description": "bezier x axis. Array of numbers.",
          "extended_name": "X axis",
          "type": "array"
        },
        "y": {
          "description": "bezier y axis. Array of numbers.",
          "extended_name": "Y axis",
          "type": "array"
        }
      },
      "type": "object"
    },
    "o": {
      "description": "Bezier curve interpolation out value.",
      "extended_name": "Out Value",
      "properties": {
        "x": {
          "description": "bezier x axis. Array of numbers.",
          "extended_name": "X axis",
          "type": "array"
        },
        "y": {
          "description": "bezier y axis. Array of numbers.",
          "extended_name": "Y axis",
          "type": "array"
        }
      },
      "type": "object"
    }
  }
}

 ## /json/properties/shape.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "k": {
      "description": "Property Value",
      "extended_name": "Value",
      "type": "object",
      "$ref": "#/properties/shapeProp"
    },
    "x": {
      "description": "Property Expression. An AE expression that modifies the value.",
      "extended_name": "Expression",
      "type": "string"
    },
    "ix": {
      "description": "Property Index. Used for expressions.",
      "extended_name": "Property Index",
      "type": "string"
    },
    "a": {
      "description": "Defines if property is animated",
      "extended_name": "Animated",
      "type": "number"
    }
  }
}


 ## /json/properties/shapeKeyframed.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "k": {
      "description": "Property Value keyframes",
      "extended_name": "Keyframes",
      "items": {
        "type": "object",
        "$ref": "#/properties/shapePropKeyframe"
      },
      "type": "array"
    },
    "x": {
      "description": "Property Expression. An AE expression that modifies the value.",
      "extended_name": "Expression",
      "type": "string"
    },
    "ix": {
      "description": "Property Index. Used for expressions.",
      "extended_name": "Property Index",
      "type": "string"
    },
    "ti": {
      "description": "In Spatial Tangent. Only for spatial properties. Array of numbers.",
      "extended_name": "In Tangent",
      "type": "array"
    },
    "to": {
      "description": "Out Spatial Tangent. Only for spatial properties. Array of numbers.",
      "extended_name": "Out Tangent",
      "type": "array"
    }
  }
}


 ## /json/properties/shapeProp.json 
{
  "$schema": "http://json-schema.org/draft-04/schema",
  "type": "object",
  "properties": {
    "c": {
      "description": "Closed property of shape",
      "extended_name": "Closed",
      "type": "boolean"
    },
    "i": {
      "description": "Bezier curve In points. Array of 2 dimensional arrays.",
      "extended_name": "In Point",
      "type": "array",
      "items": {
        "type": "array",
        "minItems": 2,
        "maxItems": 2,
        "items": {
          "type": "number"
        }
      }
    },
    "o": {
      "description": "Bezier curve Out points. Array of 2 dimensional arrays.",
      "extended_name": "Out Point",
      "type": "array",
      "items": {
        "type": "array",
        "minItems": 2,
        "maxItems": 2,
        "items": {
          "type": "number"
        }
      }
    },
    "v": {
      "description": "Bezier curve Vertices. Array of 2 dimensional arrays.",
      "extended_name": "Vertices",
      "type": "array",
      "items": {
        "type": "array",
        "minItems": 2,
        "maxItems": 2,
        "items": {
          "type": "number"
        }
      }
    }
  }
}

 ## /json/properties/shapePropKeyframe.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "s": {
      "description": "Start value of keyframe segment.",
      "extended_name": "Start",
      "items": {
        "type": "object",
        "$ref": "#/properties/shapeProp"
      },
      "type": "array"
    },
    "t": {
      "description": "Start time of keyframe segment.",
      "extended_name": "Time",
      "type": "number"
    },
    "i": {
      "description": "Bezier curve interpolation in value.",
      "extended_name": "In Value",
      "properties": {
        "x": {
          "description": "bezier x axis. Array of numbers.",
          "extended_name": "X axis",
          "type": "array"
        },
        "y": {
          "description": "bezier y axis. Array of numbers.",
          "extended_name": "Y axis",
          "type": "array"
        }
      },
      "type": "object"
    },
    "o": {
      "description": "Bezier curve interpolation out value.",
      "extended_name": "Out Value",
      "properties": {
        "x": {
          "description": "bezier x axis. Array of numbers.",
          "extended_name": "X axis",
          "type": "array"
        },
        "y": {
          "description": "bezier y axis. Array of numbers.",
          "extended_name": "Y axis",
          "type": "array"
        }
      },
      "type": "object"
    }
  }
}

 ## /json/properties/value.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "k": {
      "description": "Property Value",
      "extended_name": "Value",
      "type": "number"
    },
    "x": {
      "description": "Property Expression. An AE expression that modifies the value.",
      "extended_name": "Expression",
      "type": "string"
    },
    "ix": {
      "description": "Property Index. Used for expressions.",
      "extended_name": "Property Index",
      "type": "string"
    }
  }
}


 ## /json/properties/valueKeyframe.json 
{
  "$schema": "http://json-schema.org/draft-04/schema",
  "type": "object",
  "properties": {
    "s": {
      "description": "Start value of keyframe segment.",
      "extended_name": "Start",
      "type": "number"
    },
    "t": {
      "description": "Start time of keyframe segment.",
      "extended_name": "Time",
      "type": "number"
    },
    "i": {
      "description": "Bezier curve interpolation in value.",
      "extended_name": "In Value",
      "type": "object",
      "properties": {
        "x": {
          "description": "bezier x axis",
          "extended_name": "X axis",
          "type": "number"
        },
        "y": {
          "description": "bezier y axis",
          "extended_name": "Y axis",
          "type": "number"
        }
      }
    }
  }
}

 ## /json/properties/valueKeyframed.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "k": {
      "description": "Property Value keyframes",
      "extended_name": "Keyframes",
      "type": "array",
      "items": {
        "type": "object",
        "$ref": "#/properties/valueKeyframe"
      }
    },
    "x": {
      "description": "Property Expression. An AE expression that modifies the value.",
      "extended_name": "Expression",
      "type": "string"
    },
    "ix": {
      "description": "Property Index. Used for expressions.",
      "extended_name": "Property Index",
      "type": "string"
    }
  }
}


 ## /json/shapes/ellipse.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "d": {
      "title": "Direction",
      "description": "After Effect's Direction. Direction how the shape is drawn. Used for trim path for example.",
      "type": "number",
      "default": 1
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "el"
    },
    "p": {
      "title": "Position",
      "description": "Ellipse's position",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "s": {
      "title": "Size",
      "description": "Ellipse's size",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/shapes/fill.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "fl"
    },
    "o": {
      "title": "Opacity",
      "description": "Fill Opacity",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "c": {
      "title": "Color",
      "description": "Fill Color",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/shapes/gFill.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "gf"
    },
    "o": {
      "title": "Opacity",
      "description": "Fill Opacity",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "s": {
      "title": "Start Point",
      "description": "Gradient Start Point",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "e": {
      "title": "End Point",
      "description": "Gradient End Point",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "t": {
      "title": "Type",
      "description": "Gradient Type",
      "oneOf": [
        {
          "standsFor": "Linear",
          "value": 1
        },
        {
          "standsFor": "Radial",
          "value": 2
        }
      ],
      "type": "object"
    },
    "h": {
      "title": "Highlight Length",
      "description": "Gradient Highlight Length. Only if type is Radial",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "a": {
      "title": "Highlight Angle",
      "description": "Highlight Angle. Only if type is Radial",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "g": {
      "title": "Gradient Colors",
      "description": "Gradient Colors",
      "type": "object"
    }
  }
}


 ## /json/shapes/gStroke.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "gs"
    },
    "o": {
      "title": "Opacity",
      "description": "Stroke Opacity",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "s": {
      "title": "Start Point",
      "description": "Gradient Start Point",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "e": {
      "title": "End Point",
      "description": "Gradient End Point",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "t": {
      "title": "Type",
      "description": "Gradient Type",
      "oneOf": [
        {
          "standsFor": "Linear",
          "value": 1
        },
        {
          "standsFor": "Radial",
          "value": 2
        }
      ],
      "type": "object"
    },
    "h": {
      "title": "Highlight Length",
      "description": "Gradient Highlight Length. Only if type is Radial",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "a": {
      "title": "Highlight Angle",
      "description": "Highlight Angle. Only if type is Radial",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "g": {
      "title": "Gradient Colors",
      "description": "Gradient Colors",
      "type": "object"
    },
    "w": {
      "title": "Stroke Width",
      "description": "Gradient Stroke Width",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "lc": {
      "title": "Line Cap",
      "description": "Gradient Stroke Line Cap",
      "oneOf": [
        {
          "$ref": "#/helpers/lineCap"
        }
      ],
      "type": "number"
    },
    "lj": {
      "title": "Line Join",
      "description": "Gradient Stroke Line Join",
      "oneOf": [
        {
          "$ref": "#/helpers/lineJoin"
        }
      ],
      "type": "number"
    },
    "ml": {
      "title": "Miter Limit",
      "description": "Gradient Stroke Miter Limit. Only if Line Join is set to Miter.",
      "type": "number"
    }
  }
}


 ## /json/shapes/group.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "gr"
    },
    "np": {
      "title": "Number of Properties",
      "description": "Group number of properties. Used for expressions.",
      "type": "number"
    },
    "it": {
      "title": "Items",
      "description": "Group list of items",
      "items": {
        "oneOf": [
          {
            "$ref": "#/shapes/shape",
            "value": "sh"
          },
          {
            "$ref": "#/shapes/rect",
            "value": "rc"
          },
          {
            "$ref": "#/shapes/ellipse",
            "value": "el"
          },
          {
            "$ref": "#/shapes/star",
            "value": "sr"
          },
          {
            "$ref": "#/shapes/fill",
            "value": "fl"
          },
          {
            "$ref": "#/shapes/gFill",
            "value": "gf"
          },
          {
            "$ref": "#/shapes/gStroke",
            "value": "gs"
          },
          {
            "$ref": "#/shapes/stroke",
            "value": "st"
          },
          {
            "$ref": "#/shapes/merge",
            "value": "mm"
          },
          {
            "$ref": "#/shapes/trim",
            "value": "tm"
          },
          {
            "$ref": "#/shapes/group",
            "value": "gr"
          },
          {
            "$ref": "#/shapes/roundedCorners",
            "value": "rd"
          },
          {
            "$ref": "#/shapes/transform",
            "value": "tr"
          }
        ],
        "type": "object"
      },
      "type": "array"
    }
  }
}


 ## /json/shapes/merge.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type. THIS FEATURE IS NOT SUPPORTED. It's exported because if you export it, they will come.",
      "type": "string",
      "const": "mm"
    },
    "mm": {
      "title": "Merge Mode",
      "description": "Merge Mode",
      "type": "number"
    }
  }
}


 ## /json/shapes/rect.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "d": {
      "title": "Direction",
      "description": "After Effect's Direction. Direction how the shape is drawn. Used for trim path for example.",
      "type": "number"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "rc"
    },
    "p": {
      "title": "Position",
      "description": "Rect's position",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "s": {
      "title": "Size",
      "description": "Rect's size",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "r": {
      "title": "Rounded corners",
      "description": "Rect's rounded corners",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/shapes/repeater.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "rp"
    },
    "c": {
      "title": "Copies",
      "description": "Number of Copies",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object",
      "default": {"a": 0, "k": 1}
    },
    "o": {
      "title": "Offset",
      "description": "Offset of Copies",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object",
      "default": {"a": 0, "k": 0}
    },
    "m": {
      "title": "Composite",
      "description": "Composite of copies",
      "oneOf": [
        {
          "$ref": "#/helpers/composite"
        }
      ],
      "type": "number",
      "default": 1
    },
    "tr": {
      "title": "Transform",
      "description": "Transform values for each repeater copy",
      "oneOf": [
        {
          "$ref": "#/helpers/transform"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/shapes/round.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "rd"
    },
    "r": {
      "title": "Radius",
      "description": "Rounded Corner Radius",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/shapes/shape.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "d": {
      "title": "Direction",
      "description": "After Effect's Direction. Direction how the shape is drawn. Used for trim path for example.",
      "type": "number"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "sh"
    },
    "ks": {
      "title": "Vertices",
      "description": "Shape's vertices",
      "oneOf": [
        {
          "$ref": "#/properties/shape"
        },
        {
          "$ref": "#/properties/shapeKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/shapes/star.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "d": {
      "title": "Direction",
      "description": "After Effect's Direction. Direction how the shape is drawn. Used for trim path for example.",
      "type": "number"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "sr"
    },
    "p": {
      "title": "Position",
      "description": "Star's position",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "ir": {
      "title": "Inner Radius",
      "description": "Star's inner radius. (Star only)",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "is": {
      "title": "Inner Roundness",
      "description": "Star's inner roundness. (Star only)",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "or": {
      "title": "Outer Radius",
      "description": "Star's outer radius.",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "os": {
      "title": "Outer Roundness",
      "description": "Star's outer roundness.",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "r": {
      "title": "Rotation",
      "description": "Star's rotation.",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "pt": {
      "title": "Points",
      "description": "Star's number of points.",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "sy": {
      "title": "Star Type",
      "description": "Star's type. Polygon or Star.",
      "type": "object",
      "oneOf": [
        {
          "standsFor": "Star",
          "value": 1
        },
        {
          "standsFor": "Polygon",
          "value": 2
        }
      ]
    }
  }
}


 ## /json/shapes/stroke.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "st"
    },
    "lc": {
      "title": "Line Cap",
      "description": "Stroke Line Cap",
      "oneOf": [
        {
          "$ref": "#/helpers/lineCap"
        }
      ],
      "type": "number"
    },
    "lj": {
      "title": "Line Join",
      "description": "Stroke Line Join",
      "oneOf": [
        {
          "$ref": "#/helpers/lineJoin"
        }
      ],
      "type": "number"
    },
    "ml": {
      "title": "Miter Limit",
      "description": "Stroke Miter Limit. Only if Line Join is set to Miter.",
      "type": "number"
    },
    "o": {
      "title": "Opacity",
      "description": "Stroke Opacity",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "w": {
      "title": "Width",
      "description": "Stroke Width",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "c": {
      "title": "Color",
      "description": "Stroke Color",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/shapes/transform.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "a": {
      "title": "Anchor Point",
      "description": "Shape Transform Anchor Point",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "p": {
      "title": "Position",
      "description": "Shape Transform Position",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "s": {
      "title": "Scale",
      "description": "Shape Transform Scale",
      "oneOf": [
        {
          "$ref": "#/properties/multiDimensional"
        },
        {
          "$ref": "#/properties/multiDimensionalKeyframed"
        }
      ],
      "type": "object"
    },
    "r": {
      "title": "Rotation",
      "description": "Shape Transform Rotation",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "o": {
      "title": "Opacity",
      "description": "Shape Transform Opacity",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "sk": {
      "title": "Skew",
      "description": "Shape Transform Skew",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "sa": {
      "title": "Skew Axis",
      "description": "Shape Transform Skew Axis",
      "oneOf": [
        {
          "$ref": "#/properties/value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/shapes/trim.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "mn": {
      "title": "Match Name",
      "description": "After Effect's Match Name. Used for expressions.",
      "type": "string"
    },
    "nm": {
      "title": "Name",
      "description": "After Effect's Name. Used for expressions.",
      "type": "string"
    },
    "ty": {
      "title": "Type",
      "description": "Shape content type.",
      "type": "string",
      "const": "tm"
    },
    "s": {
      "title": "Start",
      "description": "Trim Start.",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "e": {
      "title": "End",
      "description": "Trim End.",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    },
    "o": {
      "title": "Offset",
      "description": "Trim Offset.",
      "oneOf": [
        {
          "$ref": "#/properties/Value"
        },
        {
          "$ref": "#/properties/valueKeyframed"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/sources/chars.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "ch": {
      "title": "Character",
      "description": "Character Value",
      "type": "string"
    },
    "fFamily": {
      "title": "Font Family",
      "description": "Character Font Family",
      "type": "string"
    },
    "size": {
      "title": "Font Size",
      "description": "Character Font Size",
      "type": "string"
    },
    "style": {
      "title": "Font Style",
      "description": "Character Font Style",
      "type": "string"
    },
    "w": {
      "title": "Width",
      "description": "Character Width",
      "type": "number"
    },
    "data": {
      "title": "Character Data",
      "description": "Character Data",
      "properties": [
        {
          "title": "Character Shapes",
          "description": "Character Composing Shapes",
          "items": {
            "properties": [
              {
                "title": "Items",
                "description": "Character Items",
                "properties": [
                  {
                    "title": "keys",
                    "description": "Character Items Keys",
                    "oneOf": [
                      {
                        "$ref": "#/properties/shape"
                      }
                    ],
                    "type": "object"
                  }
                ],
                "type": "object"
              }
            ],
            "type": "object"
          },
          "type": "array"
        }
      ],
      "type": "object"
    }
  }
}


 ## /json/sources/image.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "h": {
      "title": "Height",
      "description": "Image Height",
      "type": "number"
    },
    "w": {
      "title": "Width",
      "description": "Image Width",
      "type": "number"
    },
    "id": {
      "title": "ID",
      "description": "Image ID",
      "type": "string"
    },
    "p": {
      "title": "Image name",
      "description": "Image name",
      "type": "string"
    },
    "u": {
      "title": "Image path",
      "description": "Image path",
      "type": "string"
    }
  }
}


 ## /json/sources/precomp.json 
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "id": {
      "title": "ID",
      "description": "Precomp ID",
      "type": "string"
    },
    "layers": {
      "title": "Layers",
      "description": "List of Precomp Layers",
      "items": {
        "oneOf": [
          {
            "$ref": "#/layers/shape"
          },
          {
            "$ref": "#/layers/solid"
          },
          {
            "$ref": "#/layers/comp"
          },
          {
            "$ref": "#/layers/image"
          },
          {
            "$ref": "#/layers/null"
          },
          {
            "$ref": "#/layers/text"
          }
        ],
        "type": "object"
      },
      "type": "array"
    }
  }
}

