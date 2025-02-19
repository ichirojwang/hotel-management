import supabase, { supabaseUrl } from "./supabase.js";

export async function signup({ fullName, email, password }) {
  const { data: currentSession } = await supabase.auth.getSession();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (currentSession) {
    await supabase.auth.setSession(currentSession.session);
  }

  if (error) {
    throw new Error(error.message);
  }

  return { data };
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { data };
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { data, error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  const fileName = `avatar=${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage.from("avatars").upload(fileName, avatar);
  if (storageError) throw new Error(storageError.message);

  const { data: updatedUser, error: updatedError } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });
  if (updatedError) throw new Error(updatedError.message);

  return updatedUser;
}
