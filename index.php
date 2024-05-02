<?php

function flattenObject($obj, $parentKey = '') {
    $string = '';
    foreach($obj as $key => $value) {
        $propName = $parentKey ? $parentKey . '.' . $key : $key;
        if (is_object($obj->$key)) {
            $string .= flattenObject($obj->$key, $propName) . ', ';
        } else {
            $string .= $propName . ': ' . $obj->$key . ', ';
        }
    }
    return $string;
}

$object = (object)[
    "a" => 1,
    "b" => (object)[
        "c" => 1,
        "d" => 1,
    ],
    "e" => 1,
    "f" => 1,
];

var_dump(flattenObject($object));