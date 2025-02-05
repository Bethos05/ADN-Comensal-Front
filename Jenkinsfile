pipeline {
  //Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  //Opciones específicas de Pipeline dentro del Pipeline
  options {
    buildDiscarder(logRotator(numToKeepStr: '3'))
 	disableConcurrentBuilds()
  }

  //Una sección que define las herramientas “preinstaladas” en Jenkins
  tools {
    jdk 'JDK11_Centos' //Verisión preinstalada en la Configuración del Master
  }
  //Aquí comienzan los “items” del Pipeline
  stages{
    stage('Checkout') {
      steps{
        echo "------------>Checkout<------------"
        checkout([
          $class: 'GitSCM',
          branches: [[name: '*/main']],
          doGenerateSubmoduleConfigurations: false,
          extensions: [],
          gitTool: 'Default',
          submoduleCfg: [],
          userRemoteConfigs: [[
          credentialsId: 'Github_Bethos05',
          url:'https://github.com/Bethos05/ADN-Comensal-Front'
          ]]
        ])

      }
    }

    stage('NPM Install') {
      steps {
        withEnv(['NPM_CONFIG_LOGLEVEL=warn']) {
          sh 'npm install'
        }
      }
    }

    stage('Build') {
      steps {
        sh 'ng build --configuration production --progress=false'
      }
    }

    // stage('test') {
    //   steps {
    //     sh 'ng test'
    //   }
    // }

    stage('Static Code Analysis') {
      steps{
          echo '------------>Análisis de código estático<------------'
          withSonarQubeEnv('Sonar') {
            sh "${tool name: 'SonarScanner', type:'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
          }
      }
    }
  }



  post {
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'
      mail (to: 'alberto.alvarez@ceiba.com.co',subject: "Success Pipeline:${currentBuild.fullDisplayName}",body: "Success build ${env.BUILD_URL}")
      //junit './microservicio/build/test-results/test/*.xml' //RUTA DE TUS ARCHIVOS .XML
    }
    failure {
      echo 'This will run only if failed'
      mail (to: 'alberto.alvarez@ceiba.com.co',subject: "Failed Pipeline:${currentBuild.fullDisplayName}",body: "Something is wrong with ${env.BUILD_URL}")
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}

