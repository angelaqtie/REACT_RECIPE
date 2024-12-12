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
  $recipe->recipe_aid = $_GET['recipeid'];
  checkId($recipe->recipe_aid);
  $query = checkReadById($recipe);
  http_response_code(200);
  getQueriedData($query);
}

if (empty($_GET)) {
  $query = checkReadAll($recipe);
  http_response_code(200);
  getQueriedData($query);
}

// return 404 error if endpoint not available
checkEndpoint();