import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1985Component } from './test-component1985.component';

describe('TestComponent1985Component', () => {
  let component: TestComponent1985Component;
  let fixture: ComponentFixture<TestComponent1985Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1985Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
