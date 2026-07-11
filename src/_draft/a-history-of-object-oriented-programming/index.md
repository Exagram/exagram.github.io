---
title: A History of Object-Oriented Programming
draft: true
description: ""
pubDate: 2026-03-28
preview: ""
tags:
  - "oop"
  - "programming"
categories:
  - "programming"
---

What is Object-oriented programming? Most developers point to Inheritance, Polymorphism, and Abstraction.

However Alan Kay states something different:

> I made up the term "Object-oriented", and I can tell you I didn't have C++ in mind.
> -Alan Kay, OOPSLA 1997
>

*Note*: Although Alan Kay has claimed to invent Object-Oriented Programming, he based Smalltalk off of Simula which was created by Dahl/Nygaard.

## Classes and Objects in Simula (1960s)

Simula was created by Dalh/Nygaard and introduced the following OOP features that we are now familiar with:

- Classes and objects
- Inheritance and subclasses
- Virtual functions
- Coroutines

The Simula language coupled both data and behavior into classes.

Example:

```simula
Class Animal;
  Text name;
  Procedure Walk;
    OutText("walk");
  End;
End;
Ref(Animal) animal :- New Animal();
animal.Wak;
```

## Encapsulation in Smalltalk (1970s)

This is the language created by Alan Kay which was inspured by Simula.

The Smalltalk language gave us encapsulation where internal state and behavior is hidden and only a contract is curated and exposed to the public.

```smalltalk
Object subClass: #Animal
  instanceVariableNames:'name'
```