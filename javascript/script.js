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
        this.todoList = resp.data;
        this.todoText = "";
      });
    },
    deleteTask(index) {
      const data = new FormData();
      data.append("deleteTask", index);
      axios.post(this.apiUrl, data).then((resp) => {
        // console.log(resp.data);
        this.todoList = resp.data;
      });
    },
    // markAsDone(index) {
    //   const data = new FormData();
    //   data.append("markAsDone", index);
    //   axios.post(this.apiUrl, data).then((resp) => {
    //     // console.log(resp.data);
    //     this.todoList = resp.data;
    //   });
    // },
  },
});

miaApp.mount("#app");
