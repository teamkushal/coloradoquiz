import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1910Component } from './test-component1910.component';

describe('TestComponent1910Component', () => {
  let component: TestComponent1910Component;
  let fixture: ComponentFixture<TestComponent1910Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1910Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
