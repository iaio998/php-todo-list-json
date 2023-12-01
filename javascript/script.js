const { createApp } = Vue;

const miaApp = createApp({
  data() {
    return {
      apiUrl: "server.php",
      todoList: [],
      todoText: "",
      filteredValue: "",
    };
  },
  mounted() {
    this.readList();
  },
  methods: {
    readList() {
      axios
        .get(this.apiUrl)
        .then((res) => {
          this.todoList = res.data;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally((error) => {
          console.log(error);
        });
    },
    addTask() {
      console.log(this.todoText);
      // const data = {
      //   task: this.newTask,
      // };
      const data = new FormData();
      data.append("addTask", this.todoText);
      axios.post(this.apiUrl, data).then((resp) => {
        console.log(resp.data);
        this.todoText = resp.data;
      });
    },
    deleteTask(index) {
      const data = new FormData();
      data.append("deleteTask", index);
      axios.post(this.apiUrl, data).then((resp) => {
        console.log(resp.data);
        this.todoList = resp.data;
      });
    },
    // getIndex(id, array) {
    //   return array.findIndex((el) => el.id === id);
    // },
    // removeTask(i) {
    //   this.tasks.splice(i, 1);
    // },
    // addTask() {
    //   this.lastId++;
    //   const newTask = {
    //     id: this.lastId,
    //     text: this.todoText,
    //     status: false,
    //   };
    //   if (this.todoText === "") {
    //     alert("Nessun carattere inserito");
    //   } else {
    //     this.tasks.unshift(newTask);
    //   }
    //   this.todoText = "";
    // },
    // markAsDone(id) {
    //   const index = this.getIndex(id, this.tasks);
    //   this.tasks[index].done = !this.tasks[index].done;
    // },
    // markAsDone(index) {
    //   this.tasks[index].done = !this.tasks[index].done;
    // },
    // filteredTasks() {
    //   return this.tasks.filter((task) => {
    //     if (this.filteredValue === "0" && !task.done) {
    //       return true;
    //     } else if (this.filteredValue === "1" && task.done) {
    //       return true;
    //     } else if (this.filteredValue === "") {
    //       return true;
    //     }
    //   });
    // },
  },
});

miaApp.mount("#app");
