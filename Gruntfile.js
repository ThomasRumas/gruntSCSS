module.exports = function(grunt) {
  // Import du package
  grunt.loadNpmTasks('grunt-contrib-sass') 
  grunt.loadNpmTasks('grunt-contrib-watch')

  grunt.initConfig({
    sass: {                              // Nom de la tâche
      dist: {                            // Nom de la sous-tâche
        options: {                       // Options
          style: 'compressed'
        },
        files: {                         // Liste des fichiers
          'newSite.css': 'newSite.scss'       // 'destination': 'source'
        }
      }
    },
    watch: {
      styles: {
        files: ['../*.scss', '../_*.scss'], // tous les fichiers Sass 
        tasks: ['sass:dist']
      } 
    }
  })

  // Redéfinition de la tâche `default` qui est la tâche lancée dès que vous lancez Grunt sans rien spécifier.
  // Note : ici, nous définissons sass comme une tâche à lancer si on lance la tâche `default`.
  grunt.registerTask('default', ['sass:dist', 'watch:styles'])
}
