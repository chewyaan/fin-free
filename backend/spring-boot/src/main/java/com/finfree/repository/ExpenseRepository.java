package com.finfree.repository;

import com.finfree.model.Expense;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {
    @Query("SELECT SUM(e.amount) FROM Expense e")
    Double calculateTotal();
}
