import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TravelDiaryPage } from './travel-diary.page';

describe('TravelDiaryPage', () => {
  let component: TravelDiaryPage;
  let fixture: ComponentFixture<TravelDiaryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TravelDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
