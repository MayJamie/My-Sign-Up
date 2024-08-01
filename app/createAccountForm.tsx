'use client';
import { createAccount } from "./actions/formActions";
import Link from 'next/link'

const CreateAccountForm = ({ formTitle }: { formTitle: string }) => {
  return (
    <div className="max-w-md mx-auto mt-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">{formTitle}</h1>
      <form onSubmit={createAccount}>
        <div className="mb-4">
          <label className="block text-gray-700">First Name<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="firstName" type="text" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="lastName" type="text" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email / Username<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="email" type="email" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Country<span className="text-red-500">*</span></label>
          <select className="w-full px-4 py-2 border rounded" name="country" required>
            <option value="">Select</option>
            <option value="TT">Trinidad and Tobago</option>
            <option value="JA">Jamaica</option>
            <option value="BD">Barbados</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="password" type="password" required />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Confirm Password<span className="text-red-500">*</span></label>
          <input className="w-full px-4 py-2 border rounded" name="passwordConfirmation" type="password" required />
        </div>
        <Link href="/role">
          <button className="w-full bg-purple-500 text-white px-4 py-2 rounded" type="submit">Create Account</button>
        </Link>
      </form>
      <p className="text-center pt-2">
        Already have an account? <a href="/login" className="text-purple-500">Login</a>
      </p>
    </div>
  );
}

export default CreateAccountForm;