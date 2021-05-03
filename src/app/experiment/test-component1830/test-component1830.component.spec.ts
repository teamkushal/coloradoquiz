import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1830Component } from './test-component1830.component';

describe('TestComponent1830Component', () => {
  let component: TestComponent1830Component;
  let fixture: ComponentFixture<TestComponent1830Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1830Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
