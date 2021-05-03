import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3160Component } from './test-component3160.component';

describe('TestComponent3160Component', () => {
  let component: TestComponent3160Component;
  let fixture: ComponentFixture<TestComponent3160Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3160Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
