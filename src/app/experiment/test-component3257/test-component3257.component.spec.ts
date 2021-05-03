import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3257Component } from './test-component3257.component';

describe('TestComponent3257Component', () => {
  let component: TestComponent3257Component;
  let fixture: ComponentFixture<TestComponent3257Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3257Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
