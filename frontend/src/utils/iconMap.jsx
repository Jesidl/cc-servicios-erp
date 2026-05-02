import {
  BookOpen, Scale, Users, TrendingUp, Target, Cpu,
  BarChart2, LineChart, PieChart, FileText, ShieldCheck,
  Award, Lightbulb, Eye, Zap, Handshake, MapPin, Phone,
  Mail, Clock, Star, Heart, Wrench, DollarSign, CheckCircle,
  Trophy, Rocket, Settings, Search, Lock, Briefcase,
  UserCheck, ClipboardList, Calculator
} from 'lucide-react';

const iconMap = {
  BookOpen, Scale, Users, TrendingUp, Target, Cpu,
  BarChart2, LineChart, PieChart, FileText, ShieldCheck,
  Award, Lightbulb, Eye, Zap, Handshake, MapPin, Phone,
  Mail, Clock, Star, Heart, Wrench, DollarSign, CheckCircle,
  Trophy, Rocket, Settings, Search, Lock, Briefcase,
  UserCheck, ClipboardList, Calculator,
};

export default function Icon({ name, size = 24, strokeWidth = 1.75, className = '' }) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} strokeWidth={strokeWidth} className={className} />;
}