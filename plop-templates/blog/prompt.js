"use strict";
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

module.exports = {
    description: "generate a blog",
    prompts: [
        {
            type: "input",
            name: "title",
            message: "bolg title please",
            validate: (v) => {
                return !v || v.trim() === "" ? `${name} is required` : true;
            },
        },
        {
            type: "input",
            name: "categories",
            message: "bolg categories please",
            validate: (v) => {
                return !v || v.trim() === "" ? `${name} is required` : true;
            },
        },
        {
            type: "input",
            name: "tags",
            message: "bolg tags please",
            validate: (v) => {
                return !v || v.trim() === "" ? `${name} is required` : true;
            },
        }
    ],
    actions: ({ title, categories, tags }) => {
        const actions = [
            {
                type: "add",
                path: `blogs/${moment().year()}/${uuidv4()}.md`,
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