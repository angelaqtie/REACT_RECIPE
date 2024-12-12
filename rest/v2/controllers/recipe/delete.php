<?php
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$recipe = new Recipe($conn);
// get $_GET data
$error = [];
$returnData = [];
if (array_key_exists("recipeid", $_GET)) {
  // get data
  $recipe->recipe_aid = $_GET['recipeid'];
  checkId($recipe->recipe_aid);
  

  $query = checkDelete($recipe);

  returnSuccess($recipe, "recipe", $query);
}

// return 404 error if endpoint not available
checkEndpoint();