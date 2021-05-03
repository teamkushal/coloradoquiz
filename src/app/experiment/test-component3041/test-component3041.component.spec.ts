import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3041Component } from './test-component3041.component';

describe('TestComponent3041Component', () => {
  let component: TestComponent3041Component;
  let fixture: ComponentFixture<TestComponent3041Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3041Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
