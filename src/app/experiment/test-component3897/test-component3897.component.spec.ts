import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3897Component } from './test-component3897.component';

describe('TestComponent3897Component', () => {
  let component: TestComponent3897Component;
  let fixture: ComponentFixture<TestComponent3897Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3897Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3897Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
