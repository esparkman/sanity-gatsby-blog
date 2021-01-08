export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff7b840af8f10619491881c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-o4dm9rbo',
                  apiId: 'a5c13546-ac85-4493-8d32-e025310153c2'
                },
                {
                  buildHookId: '5ff7b840e9c8c35fbcd56d71',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rz82oy62',
                  apiId: '30d95c27-ad62-416c-855c-fdbd886ece05'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/esparkman/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rz82oy62.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
