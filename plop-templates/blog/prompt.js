"use strict";
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

module.exports = {
    description: "generate a blog",
    prompts: [
        {
            type: "input",
            name: "dirName",
            message: "blog name please",
            validate: (v) => {
                return !v || v.trim() === "" ? `${name} is required` : true;
            },
        },
        {
            type: "input",
            name: "title",
            message: "blog title please",
            validate: (v) => {
                return !v || v.trim() === "" ? `${name} is required` : true;
            },
        },
        {
            type: "input",
            name: "categories",
            message: "blog categories please",
            validate: (v) => {
                return !v || v.trim() === "" ? `${name} is required` : true;
            },
        },
        {
            type: "input",
            name: "tags",
            message: "blog tags please",
            validate: (v) => {
                return !v || v.trim() === "" ? `${name} is required` : true;
            },
        }
    ],
    actions: ({ title, dirName, categories, tags }) => {
        const actions = [
            {
                type: "add",
                path: `blogs/${dirName}/README.md`,
                templateFile: "plop-templates/blog/index.hbs",
                data: {
                    title,
                    categories,
                    tags,
                    date: moment().format("YYYY-MM-DD HH:mm")
                },
            },
        ];
        return actions;
    },
};