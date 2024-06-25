import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MybuildsPage } from './mybuilds.page';

describe('MybuildsPage', () => {
  let component: MybuildsPage;
  let fixture: ComponentFixture<MybuildsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MybuildsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
