// Basic import
use std::collections::HashMap;

// Import multiple items
use std::io::{self, Read, Write};

// Import with alias
use std::collections::HashMap as Map;

// Nested paths
use std::{thread, time::Duration};

// Glob import (use with caution)
use std::collections::*;

// Re-exporting
pub use std::io::Result;

// Using imports
fn example() {
   let mut map = HashMap::new();
   map.insert("key", "value");
   
   let ten_millis = Duration::from_millis(10);
   thread::sleep(ten_millis);
}

