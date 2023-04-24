import React from "react";
import { Button } from "@mui/material";
import { Link } from '@inertiajs/react';
import { TestForm } from "./Compornents/TestForm";
import { InertiaForm } from "./Compornents/InertiaForm";
import { MuiField } from "./Compornents/MuiField";

const Test = () => {
    return (
      <>
        <Link href="/header" as="button" type="button">Header</Link>
        <Button>text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
        <TestForm />
        <InertiaForm />
        <MuiField />
      </>
    );
  };

export default Test;