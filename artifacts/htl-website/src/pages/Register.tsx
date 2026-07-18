import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff, GraduationCap, Loader2, CheckCircle2 } from "lucide-react";

export default function Register() {
  const { register } = useAuth();
  const [, navigate] = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const passwordStrength = (() => {
    if (password.length === 0) return 0;
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  })();

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][passwordStrength];
  const strengthColor = ["", "bg-red-400", "bg-yellow-400", "bg-blue-400", "bg-green-500"][passwordStrength];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }
    setLoading(true);
    try {
      await register(name, email, password);
      navigate("/elearning");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2D7A] via-[#0A3FAF] to-[#1a5ccc] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A2D7A] to-[#0A3FAF] px-8 py-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-9 h-9 text-white" />
            </div>
            <h1 className="text-2xl font-heading font-black text-white">Create Your Account</h1>
            <p className="text-blue-200 mt-1 text-sm">Join 500+ digital health learners</p>
          </div>

          {/* Benefits */}
          <div className="bg-blue-50 px-8 py-4 flex flex-wrap gap-x-6 gap-y-2">
            {["Access 20 free courses", "Earn certificates", "Track your progress"].map((b) => (
              <span key={b} className="flex items-center gap-1.5 text-xs font-semibold text-[#0A3FAF]">
                <CheckCircle2 className="w-3.5 h-3.5" /> {b}
              </span>
            ))}
          </div>

          {/* Form */}
          <div className="px-8 py-8">
            {error && (
              <div className="mb-5 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A3FAF]/30 focus:border-[#0A3FAF] text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A3FAF]/30 focus:border-[#0A3FAF] text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="At least 8 characters"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A3FAF]/30 focus:border-[#0A3FAF] text-sm transition-all pr-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {password.length > 0 && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${strengthColor}`}
                        style={{ width: `${(passwordStrength / 4) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-500">{strengthLabel}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Confirm Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  required
                  placeholder="Re-enter password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A3FAF]/30 focus:border-[#0A3FAF] text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#0A3FAF] hover:bg-[#0A2D7A] text-white font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Creating account…
                  </>
                ) : (
                  "Create Free Account"
                )}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-[#0A3FAF] font-semibold hover:underline">
                Sign in
              </Link>
            </p>

            <p className="text-center text-xs text-gray-400 mt-4">
              By registering you agree to our{" "}
              <Link href="/terms" className="hover:underline">Terms</Link> and{" "}
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>.
            </p>
          </div>
        </div>

        <p className="text-center text-blue-200/70 text-xs mt-6">
          © {new Date().getFullYear()} Health Tech Liberia
        </p>
      </div>
    </div>
  );
}
