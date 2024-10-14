CREATE DATABASE IF NOT EXISTS job_portal;

USE job_portal;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS jobs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample data for jobs
INSERT INTO jobs (title, company, location, description) VALUES
('Software Engineer', 'TechCorp', 'Belgrade, Serbia', 'We are looking for a talented software engineer to join our team...'),
('Marketing Specialist', 'AdAgency', 'Novi Sad, Serbia', 'Seeking a creative marketing specialist to develop and implement marketing strategies...'),
('Data Analyst', 'DataInsights', 'Nis, Serbia', 'Join our data team to analyze complex datasets and provide valuable insights...');