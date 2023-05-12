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
        <Link href="/test" as="button" type="button">TestPage</Link>
        <Link href="/test2" as="button" type="button">TestPage2</Link>
        <Link href="/file" as="button" type="button">FileUpload</Link>
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