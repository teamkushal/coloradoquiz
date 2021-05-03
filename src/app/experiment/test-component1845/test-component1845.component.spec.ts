import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1845Component } from './test-component1845.component';

describe('TestComponent1845Component', () => {
  let component: TestComponent1845Component;
  let fixture: ComponentFixture<TestComponent1845Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1845Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1845Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
