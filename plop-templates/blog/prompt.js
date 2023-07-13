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
        }
    ],
    actions: ({ title }) => {
        const actions = [
            {
                type: "add",
                path: `blogs/${moment().year()}/${uuidv4()}.md`,
                templateFile: "plop-templates/blog/index.hbs",
                data: {
                    title,
                    date: moment().format("YYYY-MM-DD HH:mm")
                },
            },
        ];
        return actions;
    },
};