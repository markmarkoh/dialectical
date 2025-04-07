// For loop with range
fn count_up(n: i32) {
   for i in 1..=n {
       println!("{}", i);
   }
}

// While loop
fn count_down(from: i32) {
   let mut current = from;
   while current > 0 {
       println!("{}", current);
       current -= 1;
   }
}

// Loop (infinite) with break
fn find_first_even(numbers: &[i32]) -> Option<i32> {
   let mut index = 0;
   loop {
       if index >= numbers.len() {
           break None;
       }
       
       if numbers[index] % 2 == 0 {
           break Some(numbers[index]);
       }
       
       index += 1;
   }
}

// For loop with iterator
fn sum_array(numbers: &[i32]) -> i32 {
   let mut sum = 0;
   for num in numbers {
       sum += num;
   }
   sum
}

// For loop with enumerate
fn print_indexed(items: &[String]) {
   for (index, item) in items.iter().enumerate() {
       println!("{}: {}", index, item);
   }
}

// Break and continue
fn sum_until_negative(numbers: &[i32]) -> i32 {
   let mut sum = 0;
   for &num in numbers {
       if num < 0 {
           break;
       }
       if num == 0 {
           continue;
       }
       sum += num;
   }
   sum
}

// Labeled breaks
fn find_in_matrix(matrix: &[&[i32]], target: i32) -> Option<(usize, usize)> {
   'outer: for (i, row) in matrix.iter().enumerate() {
       for (j, &value) in row.iter().enumerate() {
           if value == target {
               return Some((i, j));
           }
       }
   }
   None
}

// While let loop (pattern matching)
fn process_queue(mut queue: Vec<i32>) {
   while let Some(value) = queue.pop() {
       println!("Processing: {}", value);
   }
}

// Functional approaches
fn double_all(numbers: &[i32]) -> Vec<i32> {
   numbers.iter().map(|&x| x * 2).collect()
}

fn only_positive(numbers: &[i32]) -> Vec<i32> {
   numbers.iter().filter(|&&x| x > 0).copied().collect()
}

