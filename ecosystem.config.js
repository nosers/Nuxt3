module.exports = {
  apps : [
    {
      name: 'nuxt3',
      exec_mode: 'cluster',
      instance: 'max',
      script: './.output/server/index.mjs',
      watch: '.'
    }
  ]
//
//  deploy : {
//    production : {
//      user : 'SSH_USERNAME',
//      host : 'SSH_HOSTMACHINE',
//      ref  : 'origin/master',
//      repo : 'GIT_REPOSITORY',
//      path : 'DESTINATION_PATH',
//      'pre-deploy-local': '',
//      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
//      'pre-setup': ''
//    }
//  }
};
