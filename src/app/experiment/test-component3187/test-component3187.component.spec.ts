import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3187Component } from './test-component3187.component';

describe('TestComponent3187Component', () => {
  let component: TestComponent3187Component;
  let fixture: ComponentFixture<TestComponent3187Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3187Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
