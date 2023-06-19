import PRAssign from "./msg/pr-assign.js";

async function init() {
  const msg = await PRAssign.getMessage();
  console.log(msg);
}

init();
