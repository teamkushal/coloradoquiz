import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3844Component } from './test-component3844.component';

describe('TestComponent3844Component', () => {
  let component: TestComponent3844Component;
  let fixture: ComponentFixture<TestComponent3844Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3844Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3844Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
