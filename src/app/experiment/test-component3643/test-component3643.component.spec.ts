import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3643Component } from './test-component3643.component';

describe('TestComponent3643Component', () => {
  let component: TestComponent3643Component;
  let fixture: ComponentFixture<TestComponent3643Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3643Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
