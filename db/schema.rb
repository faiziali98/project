# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160326014334) do

  create_table "appointments", force: true do |t|
    t.string   "day"
    t.string   "time"
    t.integer  "doctor_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "patient_id"
    t.date     "appdate"
    t.time     "apptime"
  end

  create_table "d_certs", force: true do |t|
    t.string   "name"
    t.string   "cert1"
    t.string   "cert2"
    t.string   "cert3"
    t.string   "cert4"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "dappointments", force: true do |t|
    t.string   "name"
    t.string   "pat1"
    t.string   "pat2"
    t.string   "pat3"
    t.string   "pat4"
    t.string   "pat5"
    t.string   "pat6"
    t.string   "pat7"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "dbasics", force: true do |t|
    t.string   "name"
    t.string   "address"
    t.integer  "age"
    t.string   "degree1"
    t.string   "uni1"
    t.string   "degree2"
    t.string   "uni2"
    t.string   "uni3"
    t.string   "degree3"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "degrees", force: true do |t|
    t.string   "uniName"
    t.string   "degreeName"
    t.integer  "doctor_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "doctors", force: true do |t|
    t.string   "name"
    t.string   "sex"
    t.string   "email"
    t.string   "password"
    t.integer  "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
  end

  create_table "dprofessions", force: true do |t|
    t.string   "name"
    t.string   "address"
    t.string   "startoff"
    t.string   "endoff"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "educations", force: true do |t|
    t.string   "deg1"
    t.string   "deg2"
    t.string   "deg3"
    t.string   "uni1"
    t.string   "uni2"
    t.string   "uni3"
    t.integer  "doctor_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pappointments", force: true do |t|
    t.string   "name"
    t.string   "doc1"
    t.string   "doc2"
    t.string   "doc3"
    t.string   "doc4"
    t.string   "doc5"
    t.string   "doc6"
    t.string   "doc7"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "patients", force: true do |t|
    t.string   "name"
    t.integer  "phone"
    t.string   "email"
    t.string   "sex"
    t.string   "password"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
  end

  create_table "professions", force: true do |t|
    t.string   "spec"
    t.string   "fee"
    t.string   "offstart"
    t.string   "offend"
    t.integer  "doctor_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "address"
  end

  create_table "reviews", force: true do |t|
    t.integer  "waitTime"
    t.integer  "besideManner"
    t.integer  "overallRating"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "searches", force: true do |t|
    t.string   "name"
    t.string   "area"
    t.string   "gender"
    t.string   "speciality"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "patient_id"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password"
    t.string   "cpassword"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "password_digest"
  end

end
