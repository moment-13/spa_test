import React from "react";
import { Button } from "@mui/material";
import { Link } from '@inertiajs/react';
import { CategoryForm } from "./Compornents/CategoryForm";
import { InertiaForm } from "./Compornents/InertiaForm";
import { MuiField } from "./Compornents/MuiField";
import { TodoList } from "./Compornents/TodoList";

const Test = () => {
    return (
      <>
        <Link href="/header" as="button" type="button">Header</Link>
        <Button>text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <CategoryForm />
        <InertiaForm />
        <MuiField />
        <TodoList />
      </>
    );
  };

export default Test;