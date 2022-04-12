pipeline{
    agent any
    options{
        skipDefaultCheckout()
        buildDiscarder(logRotator(numToKeepStr: '2', artifactNumToKeepStr: '2',daysToKeepStr: '1'))
    }
    parameters{
        string(defaultValue: 'qa', description: 'Provide the tag relase type', name: 'TYPE', trim: true)
    }
    stages{
        stage('checkout'){
            steps{
                cleanWs()
                git branch: "master", credentialsId: 'gitlab_user',
                url: 'http://10.10.10.2/IoTMonitoringSolution/CloudATFWeb.git'   
            }

        }
        
        stage('update version and commit'){
            steps{
                    script{
                        env.number=sh(returnStdout: true, script:"""grep build ./src/Resource/Version.js | cut -d ":" -f 2 | head -n1 | cut -d "'" -f 2 | head -n1 """).trim()
                        env.updated_build=env.number.toInteger()+'1'.toInteger()
                        echo "${updated_build}"
                    }
                    //sh 'echo ${env.build_number}'
                    //sh "sed 's/build="[^"]*/updated_build/'"
                    withCredentials([usernamePassword(credentialsId:'gitlab_user',usernameVariable:'user',passwordVariable:'password')]){
                        sh """sed -i "s/build: '${env.number}'/build: '${env.updated_build}'/g" ./src/Resource/Version.js"""
                        sh 'git add ./src/Resource/Version.js'
                        sh 'git commit -m "Jenkins auto-commit"'
                        sh "git push http://${user}:${password}@10.10.10.2/IoTMonitoringSolution/CloudATFWeb.git --all"
                    }
            
            }
        
        }

        stage('compile & build'){
            steps{
                sh 'npm install'
                sh 'npm run build'
            }

        }

        stage('create key.json'){
          steps{
            withCredentials([file(credentialsId: 'catf-project', variable: 'key')]) {
                sh "sudo cp \$key ${WORKSPACE}/key.json"
            }
            sh 'sudo chmod 777 ${WORKSPACE}/key.json'
          }
        }

        stage('build docker Image for Catf_Web qa'){
            when {
                expression { params.TYPE == 'qa' }
            }
            steps{
                // sh "sed -i 's/example.com/catf.alethea.in/g' default"
                // sh "sed -i 's/example.com/catf.alethea.in/g' start.sh"
                sh "sed -i 's/example.com/catf.disangtech.com/g' default"
                sh "sed -i 's/example.com/catf.disangtech.com/g' start.sh"
                script{
                      app = docker.build("explore-catf/catf_web")
                      docker.withRegistry('https://gcr.io', 'gcr:explore-catf') {
                            app.push("${env.BUILD_NUMBER}")
                            app.push("latest")
                       }
                }
                
  
             }
                
        }
        
        stage('build docker Image for Catf_Web release'){
            when {
                expression { params.TYPE == 'release' }
            }
            steps{
                sh "sed -i 's/example.com/catf.aletheatech.com/g' default"
                sh "sed -i 's/example.com/catf.aletheatech.com/g' start.sh"
                script{
                      app = docker.build("explore-catf/catf_web")
                      docker.withRegistry('https://gcr.io', 'gcr:explore-catf') {
                            app.push("${env.BUILD_NUMBER}")
                            app.push("latest")
                       }
                }
                
  
             }
                
        }

        stage("Deploy to docker catf-qa") {
            when {
                expression { params.TYPE == 'qa' }
            }
            steps {
              script {
                  withCredentials([sshUserPrivateKey(
                  credentialsId: "catf-qa", 
                  keyFileVariable: 'sshKey',
                  usernameVariable: 'sshUser'
                  )]) {
                      def remote = [:];
                      remote.name = 'catf-qa';
                      remote.host = '34.132.254.67';
                      remote.user = sshUser; 
                      remote.identityFile = sshKey;
                      remote.allowAnyHosts = true;
                      sshPut remote:remote, from: 'key.json', into:'.'
                      sshCommand remote: remote, command: "cat /home/alethea/key.json | sudo docker login -u _json_key --password-stdin https://gcr.io"
                      sshCommand remote: remote, command: "docker rm -f catf_web",sudo: true
                      sshCommand remote: remote, command: "sudo docker run --name catf_web --network host -v cert:/etc/letsencrypt -d gcr.io/explore-catf/catf_web:${env.BUILD_NUMBER}", sudo: true
                  } 
              }
          }
      }

      stage("Deploy to docker catf-release") {
            when {
                expression { params.TYPE == 'release' }
            }
            steps {
              script {
                  withCredentials([sshUserPrivateKey(
                  credentialsId: "catf_release", 
                  keyFileVariable: 'sshKey',
                  usernameVariable: 'sshUser'
                  )]) {
                      def remote = [:];
                      remote.name = 'catf-release';
                      remote.host = '34.122.21.63';
                      remote.user = sshUser; 
                      remote.identityFile = sshKey;
                      remote.allowAnyHosts = true;
                      sshPut remote:remote, from: 'key.json', into:'.'
                      sshCommand remote: remote, command: "cat /home/alethea/key.json | sudo docker login -u _json_key --password-stdin https://gcr.io"
                      sshCommand remote: remote, command: "docker rm -f catf_web",sudo: true
                      sshCommand remote: remote, command: "sudo docker run --name catf_web --network host -v cert:/etc/letsencrypt -d gcr.io/explore-catf/catf_web:${env.BUILD_NUMBER}", sudo: true
                  } 
              }
          }
      }
    
    }

}
