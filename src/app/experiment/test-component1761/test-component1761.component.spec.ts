import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1761Component } from './test-component1761.component';

describe('TestComponent1761Component', () => {
  let component: TestComponent1761Component;
  let fixture: ComponentFixture<TestComponent1761Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1761Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1761Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
