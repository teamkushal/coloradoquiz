import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1884Component } from './test-component1884.component';

describe('TestComponent1884Component', () => {
  let component: TestComponent1884Component;
  let fixture: ComponentFixture<TestComponent1884Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1884Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1884Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
