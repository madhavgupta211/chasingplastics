const AdminBro = require("admin-bro")
const AdminBroExpress = require("admin-bro-expressjs")
const AdminBroMongoose = require("admin-bro-mongoose")
const bcrypt = require("bcrypt")
const User = require("./models/user.model")
const Blog = require("./models/blog.model")
const Podcast = require("./models/podcast.model")

AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  rootPath: "/admin",
  resources: [
    {
      resource: User,
      options: {
        properties: {
          encryptedPassword: {
            isVisible: false,
          },
          password: {
            type: "string",
            isVisible: {
              list: false,
              edit: true,
              filter: false,
              show: false,
            },
          },
        },
        actions: {
          new: {
            before: async (request) => {
              if (request.payload.password) {
                request.payload = {
                  ...request.payload,
                  encryptedPassword: await bcrypt.hash(
                    request.payload.password,
                    10
                  ),
                  password: undefined,
                }
              }
              return request
            },
          },
        },
      },
    },
    Blog,
    Podcast,
  ],

  branding: {
    // logo: "URL_TO_YOUR_LOGO",
    companyName: "Chasing Plastic",
    softwareBrothers: true, // if Software Brothers logos should be shown in the sidebar footer
  },
})

// Build and use a router which will handle all AdminBro routes
const adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email })
    if (user) {
      const matched = await bcrypt.compare(password, user.encryptedPassword)
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: "some-secret-password-used-to-secure-cookie",
})

module.exports = adminRouter
