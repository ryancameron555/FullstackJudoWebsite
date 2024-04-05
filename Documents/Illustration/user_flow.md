<!-- @format -->

```mermaid
graph TD;
    open_page --> home_page;
    home_page --> nav_bar_options;
    nav_bar_options -->|Login| login_page;
    nav_bar_options -->|About us| about_us_page;
    nav_bar_options -->|Exercises| exercises_page;
    home_page --> contact_form_map;
    login_page -->|Fill in login form| login_form;
    login_page -->|Select sign up button| signup_dialog;
    exercises_page --> exercise_generator_form;
    exercise_generator_form -->|Click generate exercise| display_exercise_cards;
```
