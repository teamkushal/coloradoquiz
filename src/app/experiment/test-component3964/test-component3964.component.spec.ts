import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3964Component } from './test-component3964.component';

describe('TestComponent3964Component', () => {
  let component: TestComponent3964Component;
  let fixture: ComponentFixture<TestComponent3964Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3964Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3964Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
