import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3507Component } from './test-component3507.component';

describe('TestComponent3507Component', () => {
  let component: TestComponent3507Component;
  let fixture: ComponentFixture<TestComponent3507Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3507Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3507Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
