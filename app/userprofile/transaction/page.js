"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/app/utils/api";
import styles from "@/app/styles/usertransaction.module.css";
const getTransactions = async () => {
  return await apiFetch("/user/transactions");
};

export default function UserTransaction() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  console.log("transaction", data);

  if (isLoading) {
    return <p>در حال دریافت...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>تاریخ و ساعت</th>
          <th>مبلغ</th>
          <th>نوع تراکنش</th>
          <th>شماره سفارش</th>
        </tr>
      </thead>

      <tbody>
        {data.map((transaction) => (
          <tr key={transaction.id}>
            <td>
              {new Date(transaction.createdAt).toLocaleString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </td>

            <td>{transaction.amount.toLocaleString()} تومان</td>

            <td>
              {transaction.type === "Purchase" ? "خرید تور" : transaction.type}
            </td>

            <td>{transaction.id.slice(0, 8)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
