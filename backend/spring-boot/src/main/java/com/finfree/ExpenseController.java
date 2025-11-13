package com.finfree;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/expenses")
public class ExpenseController {

    @GetMapping
    public List<Expense> getExpenses() {
        return List.of(
            new Expense(
                "11-11-2025",
                20.50,
                "Food",
                "Chipotle"
            ),
            new Expense(
                "11-12-2025",
                3.30,
                "Transportation",
                "TTC"
            )
        );
    }

    @PostMapping
    public Expense addExpense(
            @RequestParam String date,
            @RequestParam Double amount,
            @RequestParam String category,
            @RequestParam String description) {
        return new Expense(date, amount, category, description);
    }
}
