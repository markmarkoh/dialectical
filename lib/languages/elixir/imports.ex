# Import entire module
import Math

# Import specific functions
import String, only: [upcase: 1, downcase: 1]

# Import all functions from a module
import List, except: [flatten: 1]

# Import macros
import Kernel, only: [if: 2, unless: 2]

# Alias a module
alias MyApp.UserManagement.User, as: User

# Require a module (for macros)
require Logger

# Using imports
def example do
  uppercase = String.upcase("hello")  # "HELLO"
  items = Enum.reverse([1, 2, 3])     # [3, 2, 1]
  user = User.new("alice")
  Logger.info("Created user: #{user.name}")
end

