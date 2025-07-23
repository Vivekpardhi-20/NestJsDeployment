import {AfterInsert, AfterUpdate, AfterRemove,Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

    @Column()
    @Exclude()
    password:string

    @AfterInsert()
    logInsert(){
        console.log('Inserted User this id',this.id);   
    }

     @AfterUpdate()
    logUpdate(){
        console.log('Update User this id',this.id);   
    }

     @AfterRemove()
    logRemove(){
        console.log('Remove User this id',this.id);   
    }

}