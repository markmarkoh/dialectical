// Import all comparison files
import { basicComparisons } from "./basic-comparisons"
import { variableComparisons } from "./variable-comparisons"
import { functionComparisons } from "./function-comparisons"
import { flowComparisons } from "./flow-comparisons"
import { advancedComparisons } from "./advanced-comparisons"
import { memoryManagementComparisons } from "./memory-management-comparisons"

// Merge all comparisons into a single object
export const comparisons = {
  ...basicComparisons,
  ...variableComparisons,
  ...functionComparisons,
  ...flowComparisons,
  ...advancedComparisons,
  ...memoryManagementComparisons,
}

