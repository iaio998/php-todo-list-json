const { createApp } = Vue;

const miaApp = createApp({
  data() {
    return {
      tasks: [
        {
          id: 1,
          text: "Procacciare cervelli",
          done: false,
        },
        {
          id: 2,
          text: "Intagliare le zucche",
          done: false,
        },
        {
          id: 3,
          text: "Affilare i denti",
          done: true,
        },
      ],
      lastId: 3,
      todoText: "",
      filteredValue: "",
    };
  },
  methods: {
    // getIndex(id, array) {
    //   return array.findIndex((el) => el.id === id);
    // },
    removeTask(i) {
      this.tasks.splice(i, 1);
    },
    addTask() {
      this.lastId++;
      const newTask = {
        id: this.lastId,
        text: this.todoText,
        status: false,
      };
      if (this.todoText === "") {
        alert("Nessun carattere inserito");
      } else {
        this.tasks.unshift(newTask);
      }
      this.todoText = "";
    },
    // markAsDone(id) {
    //   const index = this.getIndex(id, this.tasks);
    //   this.tasks[index].done = !this.tasks[index].done;
    // },
    markAsDone(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
    filteredTasks() {
      return this.tasks.filter((task) => {
        if (this.filteredValue === "0" && !task.done) {
          return true;
        } else if (this.filteredValue === "1" && task.done) {
          return true;
        } else if (this.filteredValue === "") {
          return true;
        }
      });
    },
  },
});

miaApp.mount("#app");
