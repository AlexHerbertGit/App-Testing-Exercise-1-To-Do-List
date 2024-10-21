const { describe, beforeEach } = require("node:test");
const { addTask, toggleTask, deleteTask, todoList } = require("../src/app");

describe('Todo List Manager', () => {
    beforeEach(() => {
        //Clear the todoList before each test
        todoList.length = 0
    })


    test('addTask should add a task to the list', () => {
        addTask('Test Task 1');
        expect(todoList.length).toBe(1);
        expect(todoList[0].text).toBe('Test Task 1');
        expect(todoList[0].done).toBe(false);
    });

    test('toggleTask should mark a task as done', () => {
        addTask('Test Task 2');
        const taskId = todoList[0].id;
        toggleTask(taskId);
        expect(todoList[0].done).toBe(true);
    });

    test('toggleTask should mark a task as not done if called twice', () => {
        addTask('Test Task 3');
        const taskId = todoList[0].id;
        toggleTask(taskId);
        toggleTask(taskId);
        expect(todoList[0].done).toBe(false);
    });

    test('deleteTask should remove a task from the list', () => {
        addTask('Test Task 4');
        const taskId = todoList[0].id;
        deleteTask(taskId);
        expect(todoList[0].length).toBe(0);
    });
});