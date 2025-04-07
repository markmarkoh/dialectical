# Regular import
import math

# Import with alias
import numpy as np

# Import specific items
from datetime import datetime, timedelta

# Import all (not recommended)
from math import *

# Relative imports (within packages)
from .utils import helper
from ..parent_module import something

# Conditional imports
try:
   import simplejson as json
except ImportError:
   import json

# Using imports
def example():
   x = math.sqrt(16)       # 4.0
   array = np.array([1, 2, 3])
   now = datetime.now()
   data = json.loads('{"key": "value"}')

