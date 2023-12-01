<!DOCTYPE html>
<html lang="en">

<head>
    <!-- meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!-- Axios -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!-- font-awesome CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer">
    <!-- link to Font-Family and CSS Files -->
    <link rel="stylesheet" href="css/style.css" />
    <!-- Document Title -->
    <title>Halloween to do list</title>
</head>

<body>

    <div id="wrapper" class="container">
        <div id="app">

            <header class="text-center my-4">
                <img src="img/logo.png" alt="Logo" class="align-middle">
                <h1 class="d-inline px-3 align-middle">TO DO LIST <i class="fa-solid fa-ghost"></i></h1>
                <div class="my-4">
                    <input type="text" class="form-control" v-model="todoText" @keyup.enter="addTask">
                    <button class=" btn btn-primary mx-2" @click="addTask"><i class="fa-solid fa-wand-sparkles"></i>
                        Add task </button>
                </div>
                <select class="form-select" aria-label="Default select example" v-model="filteredValue">
                    <option value="">Tutte le task</option>
                    <option value="1">Task fatte</option>
                    <option value="0">Task da fare</option>

                </select>
            </header>

            <main>
                <ul class="list-group" v-if="todoList.length > 0">
                    <li class="list-group-item d-flex align-items-center align-middle justify-content-between m-0"
                        v-for="(task, index) in todoList" @click="markAsDone(index)">
                        <p class="m-0" :class="{'done': task.done}">{{task.text}}</p>
                        <div>
                            <span class="fa-solid fa-check px-2"></span>
                            <span class=" fa-solid fa-trash px-2" @click.stop="deleteTask(index)"></span>
                        </div>
                    </li>
                </ul>
                <ul class="list-group" v-else>
                    <li class="list-group-item d-flex align-items-center align-middle justify-content-between m-0">
                        <p class="m-0">La tua lista e' vuota</p>
                    </li>
                </ul>

            </main>

        </div>
    </div>


    <!-- My JS -->
    <script src=" https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="javascript/script.js"></script>
</body>

</html>