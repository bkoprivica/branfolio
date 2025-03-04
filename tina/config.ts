import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: null,
  branch: null,
  token: null,
  build: {
    outputFolder: 'admin',
    publicFolder: '.',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: '.',
    },
  },
  schema: {
    collections: [
      {
        name: 'home',
        label: 'Home Page',
        path: '/',
        match: {
          include: 'index.htm',
        },
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'content',
            label: 'Content',
            ui: {
              component: 'html',
            },
          },
        ],
      },
      {
        name: 'resume',
        label: 'Resume Page',
        path: '/resume',
        match: {
          include: 'index.htm',
        },
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'content',
            label: 'Content',
            ui: {
              component: 'html',
            },
          },
        ],
      },
      {
        name: 'words',
        label: 'Words Page',
        path: '/words',
        match: {
          include: 'index.htm',
        },
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'content',
            label: 'Content',
            ui: {
              component: 'html',
            },
          },
        ],
      },
      {
        name: 'contact',
        label: 'Contact Page',
        path: '/contact',
        match: {
          include: 'index.htm',
        },
        format: 'md',
        fields: [
          {
            type: 'string',
            name: 'content',
            label: 'Content',
            ui: {
              component: 'html',
            },
          },
        ],
      },
    ],
  },
});

