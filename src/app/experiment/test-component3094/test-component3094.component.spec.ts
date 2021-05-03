import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3094Component } from './test-component3094.component';

describe('TestComponent3094Component', () => {
  let component: TestComponent3094Component;
  let fixture: ComponentFixture<TestComponent3094Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3094Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3094Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
