﻿// <auto-generated />
using System;
using MessagingServer.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace MessagingServer.Migrations
{
    [DbContext(typeof(MyDbContext))]
    partial class MyDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.26");

            modelBuilder.Entity("MessagingServer.Models.MessageInfo", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DateTime")
                        .HasColumnType("TEXT");

                    b.Property<string>("Message")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("User")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("MessageInfos");
                });
#pragma warning restore 612, 618
        }
    }
}