import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3892Component } from './test-component3892.component';

describe('TestComponent3892Component', () => {
  let component: TestComponent3892Component;
  let fixture: ComponentFixture<TestComponent3892Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3892Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
