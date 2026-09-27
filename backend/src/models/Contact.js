import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    company: {
      type: String,
      trim: true,
      maxlength: [120, 'Company name cannot exceed 120 characters'],
      default: ''
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true
    },
    service: {
      type: String,
      required: [true, 'Selected service is required'],
      trim: true
    },
    message: {
      type: String,
      required: [true, 'Project message is required'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters']
    },
    source: {
      type: String,
      default: 'website'
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'qualified', 'closed'],
      default: 'new'
    }
  },
  {
    timestamps: true
  }
);

// Fallback in-memory store if MongoDB is offline
export const inMemoryContacts = [];

export const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
