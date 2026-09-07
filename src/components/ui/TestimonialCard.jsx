import { motion } from "framer-motion";
import { Card, CardContent } from "./card";

/**
 * TestimonialCard — shadcn/ui-style card with floating effect
 */
export default function TestimonialCard({ id, name, area, rating, text, avatar }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          {/* Stars */}
          <div className="flex items-center gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? "text-amber" : "text-navy/10"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-body text-sm leading-relaxed mb-5">
            &ldquo;{text}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-3 pt-4 border-t border-navy/5">
            <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
              {avatar}
            </div>
            <div>
              <p className="text-sm font-medium text-heading">{name}</p>
              <p className="text-xs text-muted">{area}, Kathmandu</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
