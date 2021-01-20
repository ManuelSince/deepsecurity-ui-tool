//import shop from '../../store'
//import Tools from '../../common/Tools'

// initial state
const state = () => ({
  tags: [
    {
      "name": "Administrators",
      "description": "<fjpqdjpojdpjdpojdposdpk,pck,pqpijdpiqjzpifdqjzpodjkpodjzqoidjjdqpijdpiqndpijzqpoidjqpzoijd",
      "isVisible": false,
      "path": {
        "GET": {
          "findOne": "/administrators/{administratorID}",
          "findAll": "/administrators"
        },
        "POST": "",
        "UPDATE": "",
        "CREATE": "",
        "DELETE": ""
      }
    },
    {
      "name": "Administrator Roles",
      "isVisible": false
    },
    {
      "name": "Agent Deployment Scripts",
      "isVisible": false
    },
    {
      "name": "Agent Version Controls",
      "isVisible": false
    },
    {
      "name": "Agent Version Control Profiles",
      "isVisible": false
    },
    {
      "name": "Anti-Malware Configurations",
      "isVisible": false
    },
    {
      "name": "API Keys",
      "isVisible": false
    },
    {
      "name": "API Usage",
      "isVisible": false
    },
    {
      "name": "Global Rules",
      "isVisible": false
    },
    {
      "name": "Application Types",
      "isVisible": false
    },
    {
      "name": "AWS Connectors",
      "isVisible": false
    },
    {
      "name": "AWS Connector Settings",
      "isVisible": false
    },
    {
      "name": "Certificates",
      "isVisible": false
    },
    {
      "name": "Computers",
      "isVisible": false
    },
    {
      "name": "Computer Firewall Rule Assignments",
      "isVisible": false
    },
    {
      "name": "Computer Firewall Rule Details",
      "isVisible": false
    },
    {
      "name": "Computer Groups",
      "isVisible": false
    },
    {
      "name": "Computer Integrity Monitoring Rule Assignments & Recommendations",
      "isVisible": false
    },
    {
      "name": "Computer Integrity Monitoring Rule Details",
      "isVisible": false
    },
    {
      "name": "Computer Intrusion Prevention Rule Assignments & Recommendations",
      "isVisible": false
    },
    {
      "name": "Computer Intrusion Prevention Application Type Details",
      "isVisible": false
    },
    {
      "name": "Computer Intrusion Prevention Rule Details",
      "isVisible": false
    },
    {
      "name": "Computer Log Inspection Rule Assignments & Recommendations",
      "isVisible": false
    },
    {
      "name": "Computer Log Inspection Rule Details",
      "isVisible": false
    },
    {
      "name": "Contacts",
      "isVisible": false
    },
    {
      "name": "Directory Lists",
      "isVisible": false
    },
    {
      "name": "Event Based Tasks",
      "isVisible": false
    },
    {
      "name": "File Extension Lists",
      "isVisible": false
    },
    {
      "name": "File Lists",
      "isVisible": false
    },
    {
      "name": "Firewall Rules",
      "isVisible": false
    },
    {
      "name": "GCP Connector Actions",
      "isVisible": false
    },
    {
      "name": "GCP Connectors",
      "isVisible": false
    },
    {
      "name": "Integrity Monitoring Rules",
      "isVisible": false
    },
    {
      "name": "Interface Types",
      "isVisible": false
    },
    {
      "name": "Intrusion Prevention Rules",
      "isVisible": false
    },
    {
      "name": "IP Lists",
      "isVisible": false
    },
    {
      "name": "Log Inspection Rules"
    },
    {
      "name": "MAC Lists"
    },
    {
      "name": "Policies"
    },
    {
      "name": "Policy Firewall Rule Assignments"
    },
    {
      "name": "Policy Firewall Rule Details"
    },
    {
      "name": "Policy Integrity Monitoring Rule Assignments & Recommendations"
    },
    {
      "name": "Policy Integrity Monitoring Rule Details"
    },
    {
      "name": "Policy Intrusion Prevention Rule Assignments & Recommendations"
    },
    {
      "name": "Policy Intrusion Prevention Application Type Details"
    },
    {
      "name": "Policy Intrusion Prevention Rule Details"
    },
    {
      "name": "Policy Log Inspection Rule Assignments & Recommendations"
    },
    {
      "name": "Policy Log Inspection Rule Details"
    },
    {
      "name": "Port Lists"
    },
    {
      "name": "Report Templates"
    },
    {
      "name": "Contexts"
    },
    {
      "name": "Rulesets"
    },
    {
      "name": "Schedules"
    },
    {
      "name": "Scheduled Tasks"
    },
    {
      "name": "Scripts"
    },
    {
      "name": "System Settings"
    },
    {
      "name": "Software Changes"
    },
    {
      "name": "Software Inventories"
    },
    {
      "name": "Stateful Configurations"
    },
    {
      "name": "Tenants"
    }
  ],
})

// getters
const getters = {
  tags: (state) => state.tags,
}

// mutations
const mutations = {
  setLoading (state, isLoading) {
    state.loading = isLoading
  }
}

// actions
const actions = {
  setLoading ({ commit }, payload) {
    commit('setLoading', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}