// Jenkins declarative pipeline for running linting, Playwright tests, and report publishing.
pipeline {
  agent any

  tools {
    nodejs 'NodeJS-20'
  }

  environment {
    BASE_URL = 'https://automationexercise.com'
    USER_EMAIL = credentials('automation-exercise-email')
    USER_PASSWORD = credentials('automation-exercise-password')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Install') {
      steps {
        bat 'npm ci'
        bat 'npx playwright install'
      }
    }

    stage('Quality') {
      steps {
        bat 'npm run lint'
      }
    }

    stage('Tests') {
      steps {
        bat 'npm test'
      }
    }
  }

  post {
    always {
      junit 'reports/junit/results.xml'
      archiveArtifacts artifacts: 'reports/**, test-results/**', allowEmptyArchive: true
      publishHTML(target: [
        reportDir: 'reports/html',
        reportFiles: 'index.html',
        reportName: 'Playwright HTML Report',
        keepAll: true,
        alwaysLinkToLastBuild: true,
        allowMissing: true
      ])
    }
  }
}
