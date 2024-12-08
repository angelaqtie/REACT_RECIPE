-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 09, 2024 at 12:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

CREATE TABLE `recipe` (
  `recipe_aid` int(11) NOT NULL,
  `recipe_title` varchar(50) NOT NULL,
  `recipe_category` varchar(20) NOT NULL,
  `recipe_level` varchar(10) NOT NULL,
  `recipe_serving` int(10) NOT NULL,
  `recipe_prep_time` varchar(20) NOT NULL,
  `recipe_image` varchar(20) NOT NULL,
  `recipe_ingredients` text NOT NULL,
  `recipe_description` text NOT NULL,
  `recipe_instruction` text NOT NULL,
  `recipe_is_active` tinyint(1) NOT NULL,
  `recipe_datetime` varchar(20) NOT NULL,
  `recipe_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`recipe_aid`, `recipe_title`, `recipe_category`, `recipe_level`, `recipe_serving`, `recipe_prep_time`, `recipe_image`, `recipe_ingredients`, `recipe_description`, `recipe_instruction`, `recipe_is_active`, `recipe_datetime`, `recipe_created`) VALUES
(6, 'Adobo', 'Chicken', 'easy', 6, '15 mins', 'slider2.jpg', '[{\"ingredients\":\"vegetable oil\",\"amount\":\"2\",\"unit\":\"tbsp\"},{\"ingredients\":\"chicken\",\"amount\":\"1\",\"unit\":\"kl\"},{\"ingredients\":\" large onion\",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\"minced garlic\",\"amount\":\"2\",\"unit\":\"tbsp\"},{\"ingredients\":\"soy sauce\",\"amount\":\"2\\/3\",\"unit\":\"cup\"},{\"ingredients\":\"black pepper\",\"amount\":\"2\",\"unit\":\"tsp\"}]', 'This chicken adobo recipe is simple to make and loved by all who try it! It has been modified to be a bit saucier than traditional adobo and is delicious served over rice.', '##### Step 1\nHeat vegetable oil in a large skillet over medium-high heat. Cook chicken pieces until golden brown, 2 to 3 minutes per side. Transfer chicken to a plate and set aside.\n\n##### Step 2\nAdd onion and garlic to the skillet; cook until softened and brown, about 3 to 5 minutes.\n\n##### Step 3\nPour in soy sauce and vinegar and season with garlic powder, black pepper, and bay le\n\n##### Step 4\nReturn chicken to pan, increase heat to high, and bring to a boil. Reduce heat to medium-low, cover, and simmer until chicken is tender and cooked through, 35 to 40 minutes.', 1, '2024-12-04 15:04:05', '2024-12-01 12:58:54'),
(7, 'Ginisang Monggo Recipe', 'Vegetable', 'easy', 4, '30 mins', 'mongo.jpg', '[{\"ingredients\":\" whole monggo beans\",\"amount\":\"1\",\"unit\":\"cup\"},{\"ingredients\":\"water\",\"amount\":\"4\",\"unit\":\"cups\"},{\"ingredients\":\"vegetable cooking oil\",\"amount\":\"2\",\"unit\":\"tbsp\"},{\"ingredients\":\"cloves garlic\",\"amount\":\"5\",\"unit\":\"pc\"},{\"ingredients\":\"red tomatoes\",\"amount\":\"3\",\"unit\":\"pcs\"}]', 'reate our delicious and easy to follow recipe for Ginisang Monggo made extra special with Knorr Pork Cubes. Enjoy it with your family!', '##### Step 1\nCooking is all about love and patience. There are certain dishes that need more attention than others, no matter how simple they are. But in the end, you can be sure that the reward is worth it. Monggo is one of those dishes that needs certain preparation before it is fully enjoyed by the family.\n\n##### Step 2\nSince monggo is a seed, you need to wash the seeds first in water to get rid of the unwanted dirt they might have collected. And since monggo is a kind of dried bean, you need to soak monggo in water to soften them because seeds absorb water. You can soak monggo for a minimum of 1 hour but the longer you soak them, the less time you need to cook them. Make sure to remove the floating particles on top. You don’t want any dirt on your dish.\n\nOnce your beans are soft enough you can start sautéing the garlic, onions and tomatoes in a saucepan for about 2 minutes or more. Here’s a technique that most people do not know. Since your “aromatics” which are also known as your sautéing vegetables contain sugar, the longer you cook them, the more you develop flavour from caramelization.\n\n##### Step 3\nThe next step is the easiest because you just need to throw in the pork strips and saute until nicely browned. Drain the beans from the soaking water the add into your pot. Pour in 4 cups water, and the Knorr Pork Cube. Let this simmer until the beans can easily be mashed. Just a tip, if you want a thinner soup consistency, you may add more water. On the other hand, if you want a thicker soup consistency, simply lessen the amount of water or you may continue cooking until the sauce thickens.\n\n##### Step 4\nWe’re almost there! You just need to add in the ampalaya and cook this for 2 minutes more before adding in the malunggay.\n\n##### Step 5\nWhat a reward this dish brings to the table for Ginisang Monggo is a healthy and delicious meal waiting to be enjoyed by the whole family. TIP: Monggo is best topped with chicharon and paired with any fried dish like fish or liempo. Tip: If you\\\\\\\\\\\\\\\'re not a fan of ampalaya, use ampalaya leaves instead or just add more malunggay leaves.', 1, '2024-12-09 07:34:49', '2024-12-04 13:35:26'),
(9, 'Tinola', 'Chicken', 'easy', 4, '20 mins', 'slider1.jpg', '[{\"ingredients\":\" cooking oil\",\"amount\":\"1\",\"unit\":\"tbsp\"},{\"ingredients\":\"onion\",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\"cloves garlic\",\"amount\":\"2\",\"unit\":\"pc\"},{\"ingredients\":\"ginger\",\"amount\":\"1\",\"unit\":\"pc\"},{\"ingredients\":\"water\",\"amount\":\"4\",\"unit\":\"cups\"}]', 'This chicken tinola recipe highlights the rich flavors of Knorr Chicken Cubes and the distinct aroma of ginger. Make this version to soothe your soul.', '##### Step 1\nGet a pot and bring it up to medium heat before pouring in the oil. Drop in the onions, garlic and ginger and sauté slowly for about 2 minutes or until you can smell the lovely aroma.\n\n##### Step 2\nIt’s time to drop in the chicken pieces and stir until it turns white or light brown in color.\n\n##### Step 3\nPour in the water and add your Knorr Chicken Broth cubes. Bring this to a simmer until chicken is tender and cooked through.\n\n##### Step 4\nYou can now add your sayote or green papaya and cook until tender.\n\n##### Step 5\nDahon ng sili is added at the last stage to ensure leaves (and nutrients) don’t dry up. Give this a minute then it is done. Malunggay is also another healthy alternative because it is packed with vitamins and minerals which are good for nursing moms and kids as well.\n\n##### Step 6\nEnjoy this with patis and calamansi on the side. See the faces of your whole family light up as you bring this to the table.', 1, '2024-12-09 07:36:16', '2024-12-04 14:16:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipe`
--
ALTER TABLE `recipe`
  ADD PRIMARY KEY (`recipe_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipe`
--
ALTER TABLE `recipe`
  MODIFY `recipe_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
