import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3644Component } from './test-component3644.component';

describe('TestComponent3644Component', () => {
  let component: TestComponent3644Component;
  let fixture: ComponentFixture<TestComponent3644Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3644Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
