import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1725Component } from './test-component1725.component';

describe('TestComponent1725Component', () => {
  let component: TestComponent1725Component;
  let fixture: ComponentFixture<TestComponent1725Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1725Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
