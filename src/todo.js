  var todoApp = {
    createTask: function(taskToBeAdded) {
      if (taskToBeAdded == "") {
        alert("Your input cannot be blank!");
      } else {
        var newTask = Object.create(todoItem);
        newTask.setTaskName(taskToBeAdded);
        this.appendTask(newTask);
      }
    },
    appendTask: function(taskToBeAppended) {
      this.ulElement().appendChild(taskToBeAppended.render());
      todoItem.completedButton();
    },
    ulElement: function() {
      return document.getElementById("todo-items");
    }
  };

  var todoItem = {
    render: function() {
      taskItem = document.createElement("li");
      taskItem.innerHTML = this.taskName;
      taskItem.appendChild(todoItem.completedButton());
      taskItem.appendChild(todoItem.deleteButton());
      return taskItem;
    },
    setTaskName: function(text) {
      this.taskName = text;
    },
    completedButton: function() {
      var button = document.createElement("button");
      button.innerHTML = "Completed";
      button.setAttribute("class", "complete");
      button.onclick = function() {
        var that = this;
        var accomplishedItem = that.parentElement;
        var completedList = document.getElementById("completed-items");
        completedList.appendChild(accomplishedItem);
        that.parentNode.removeChild(that);
      };
      return button;
    },
    deleteButton: function() {
      var button = document.createElement("button");
      button.innerHTML = "Delete";
      button.setAttribute("class", "delete");
      button.onclick = function() {
        var that = this;
        var accomplishedItem = that.parentElement;
        accomplishedItem.parentNode.removeChild(accomplishedItem);
      }
      return button;
    }
  };

  if (typeof Object.create !== 'function') {
      Object.create = function (o) {
          function F() {}
          F.prototype = o;
          return new F();
      };
  };

window.onload = function () {
  var addItemButton = document.getElementById("add-item");
  var clearAllTasksButton = document.getElementById("clear-all-tasks");

  addItemButton.onclick = function() {
    var taskToBeAdded = document.getElementById("new-task-field").value;
    todoApp.createTask(taskToBeAdded);
  };

  clearAllTasksButton.onclick = function() {
    var completedList = document.getElementById("completed-items");
    var unFinishedList = document.getElementById("todo-items");
    while (completedList.lastChild) {
    while (unFinishedList.lastChild) {
      unFinishedList.removeChild(unFinishedList.lastChild);
    };
  }
};