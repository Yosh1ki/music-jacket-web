import type { PublicProfile } from "@/lib/profiles";

const sizeClasses = {
  md: "h-12 w-12 text-base",
  lg: "h-[5.5rem] w-[5.5rem] text-3xl sm:h-24 sm:w-24",
} as const;

type ProfileAvatarProps = {
  profile: PublicProfile;
  size?: keyof typeof sizeClasses;
};

export function ProfileAvatar({
  profile,
  size = "md",
}: ProfileAvatarProps) {
  return (
    <div
      aria-label={`${profile.displayName} avatar`}
      className={`flex items-center justify-center rounded-full text-white shadow-[0_18px_50px_rgba(15,23,42,0.16)] ${sizeClasses[size]}`}
      role="img"
      style={{
        backgroundImage: `linear-gradient(135deg, ${profile.avatar.from}, ${profile.avatar.to})`,
      }}
    >
      <span className="font-semibold tracking-[-0.04em]">
        {profile.avatar.initials}
      </span>
    </div>
  );
}
