import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1874Component } from './test-component1874.component';

describe('TestComponent1874Component', () => {
  let component: TestComponent1874Component;
  let fixture: ComponentFixture<TestComponent1874Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1874Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1874Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
