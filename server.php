<?php
// Leggo il file e lo inserisco in una variabile 
$filecontent = file_get_contents("data.json");

// var_dump($filecontent);

// Decodifico la stringa in un array php
$list = json_decode($filecontent, true);
if (isset($_POST['addTask'])) {
    $newTask = [
        "text" => $_POST['addTask'],
        "done" => false
    ];
    array_push($list, $newTask);
    file_put_contents('data.json', json_encode($list));
}
;
if (isset($_POST['deleteTask'])) {
    $index = $_POST['deleteTask'];
    array_splice($list, $index, 1);
    file_put_contents('data.json', json_encode($list));
}
;
// if (isset($_POST['markAsDone'])) {
//     $done = $_POST['markAsDone'];
//     $list[$done]['done'] = !$list[$done]['done'];
//     file_put_contents('data.json', json_encode($list));
// }
// ;

header('Content-Type: application/json');

echo json_encode($list);
?>