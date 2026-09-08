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
  const { cmnt, startLine, endLine, emitStmt, stmtCall } = helpers;

  // Dumps a comment
  cmnt("Custom Plugin Call");

  // Emit a call to myCFunction()
  startLine();
  emitStmt(stmtCall("myCFunction"));
  endLine();
};
  
module.exports = 
{
  id,
  name,
  groups,
  fields,
  compile,
};
