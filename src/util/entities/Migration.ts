/*
	Spacebar: A FOSS re-implementation and extension of the Discord.com backend.
	Copyright (C) 2023 Spacebar and Spacebar Contributors

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU Affero General Public License as published
	by the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU Affero General Public License for more details.

	You should have received a copy of the GNU Affero General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import {
	Column,
	Entity,
	ObjectIdColumn,
	PrimaryGeneratedColumn,
	BaseEntity,
} from "typeorm";

export const PrimaryIdAutoGenerated = process.env.DATABASE?.startsWith(
	"mongodb",
)
	? ObjectIdColumn
	: PrimaryGeneratedColumn;

@Entity({name: "migrations", engine: "InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci"})
export class Migration extends BaseEntity {
	@PrimaryIdAutoGenerated()
	id: number;

	@Column({ type: "bigint" })
	timestamp: number;

	@Column()
	name: string;
}
