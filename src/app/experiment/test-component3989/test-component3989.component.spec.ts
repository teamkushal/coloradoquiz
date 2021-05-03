import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3989Component } from './test-component3989.component';

describe('TestComponent3989Component', () => {
  let component: TestComponent3989Component;
  let fixture: ComponentFixture<TestComponent3989Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3989Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
