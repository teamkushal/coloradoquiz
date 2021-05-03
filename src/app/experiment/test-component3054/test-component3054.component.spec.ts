import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3054Component } from './test-component3054.component';

describe('TestComponent3054Component', () => {
  let component: TestComponent3054Component;
  let fixture: ComponentFixture<TestComponent3054Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3054Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
