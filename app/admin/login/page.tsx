"use client";

import { useActionState } from "react";
import { login } from "../actions";

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, null);
  return (
    <form action={formAction} className="adm-login">
      <h1>Administration</h1>
      <div className="adm-field">
        <label htmlFor="password">Mot de passe</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required autoFocus />
      </div>
      <div className="adm-actions">
        <button className="adm-btn" type="submit" disabled={pending}>
          {pending ? "Connexion…" : "Entrer"}
        </button>
      </div>
      {state && !state.ok && <p className="adm-err" style={{ marginTop: 14 }}>{state.message}</p>}
    </form>
  );
}
