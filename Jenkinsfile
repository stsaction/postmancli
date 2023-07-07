pipeline {
  agent any

  stages {
    stage('Trigger GitHub Action') {
      steps {
        script {
          def githubApiUrl = 'https://github.com'
          def repository = 'stsaction/postmancli'
          def workflow = '.github/workflows/workflow.yml'
          def token = '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'

          def apiUrl = "${githubApiUrl}/repos/${repository}/actions/workflows/${workflow}/dispatches"
          def headers = [
            'Accept': 'application/vnd.github.v3+json',
            'Authorization': "Bearer ${token}"
          ]
          def data = [
            ref: env.BRANCH_NAME
          ]

          httpRequest url: apiUrl, httpMode: 'POST', headers: headers, body: data
        }
      }
    }
  }
}
