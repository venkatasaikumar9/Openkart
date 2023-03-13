#!groovy

pipeline{
    
    agent any

    stages{
            stage('CheckOutGit'){
                steps{
                    echo "Cloning the openkart project from github to container"
                    checkout scm
                    echo "successfully cloned the openkart project"
                    sh "ls -lrth"
                }
            
            }

            stage('DockerSetup'){
                steps{
                    script{
                        def dockerHome = tool 'myDocker'
                        echo ">>>>>>>>>${dockerHome}"
                        env.PATH = "${dockerHome}/bin:${env.PATH}"
                    }
                }
            }

            stage('Docker Check'){
                steps{
                    script{
                        echo "checking docker ............."
                        sh "docker --version"
                        sh "whoami"
                        docker.image('venkatasaikumar9/openkart:1.0')
                        echo "Image.run(['venkatasaikumar9/openkart:1.0', '-p 4200:4200'])"
                    }
                }
            }

            stage('Docker Deploy'){
                steps{
                    script{
                        sh "docker run -p 4200:4200 venkatasaikumar9/openkart:1.0"
                    }
                }
            }
           
                                           




    }
}
