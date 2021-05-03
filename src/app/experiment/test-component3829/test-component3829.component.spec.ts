import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3829Component } from './test-component3829.component';

describe('TestComponent3829Component', () => {
  let component: TestComponent3829Component;
  let fixture: ComponentFixture<TestComponent3829Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3829Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3829Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
