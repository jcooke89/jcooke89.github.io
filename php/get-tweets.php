<?php
require_once("twitteroauth/twitteroauth.php");
 
$twitteruser = "";
$counttweets = 5;
$consumerkey = "";
$consumersecret = "";
$accesstoken = "";
$accesstokensecret = "";
 
function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
  return $connection;
}
$connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
$tweets = $connection->get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$counttweets);
 
echo json_encode($tweets);
?>