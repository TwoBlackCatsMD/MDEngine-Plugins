const id = "PLUGIN_CUSTOM_C_FUNCTION";
const groups = ["EVENT_GROUP_PLUGINS"];
const name = "Call myCFunction";

const fields = 
[
  {
    label: "Call myCFunction",
  }
];

const compile = (input, helpers) => 
{
  const { cmnt, al } = helpers;

  // Dumps a comment
  cmnt("// Custom Plugin Call");

  // Add a new line to the source code
  al("myCFunction();")
};
  
module.exports = 
{
  id,
  name,
  groups,
  fields,
  compile,
};
